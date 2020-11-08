import { Injectable } from '@angular/core';
import { asapScheduler, GroupedObservable, Subject } from 'rxjs';
import { groupBy, map, mergeAll, mergeScan, observeOn, shareReplay } from 'rxjs/operators';
import { QueryEvent } from '../interfaces/query';

@Injectable()
export class QueryBus {
  private bus$ = new Subject<QueryEvent>();

  constructor() {
    this.initializeBus();
  }

  protected initializeBus(): void {

    this.bus$.asObservable()
      .pipe(
        groupBy((r: QueryEvent): string => r.key, (r: QueryEvent): QueryEvent => r),
        map((group: GroupedObservable<string, QueryEvent>) => {

          return group
            .pipe(
              observeOn(asapScheduler),
              mergeScan((groupedQuery, ev: QueryEvent) => {
                return ev.executor(ev.params);
              }, {})
            );
        }),
        mergeAll(),
        shareReplay({
          bufferSize: 1,
          refCount: false
        })
      );
  }
}
