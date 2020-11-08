import { Observable } from 'rxjs';

export type QueryConfig = {
};
export type QueryStatus = 'initial' | 'loading' | 'loaded';

export type QueryInitiator = 'subscriber';

export type QueryEvent<R = any, P = void> = {
  key: string;
  initiator: QueryInitiator;
  config: QueryConfig;
  params: any;
  executor: (params: P | void) => Observable<R>;
};

export type Query<P> = {
  status: QueryStatus;
  value: P;
  error?: any;
};


