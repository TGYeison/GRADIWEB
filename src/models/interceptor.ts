export interface Fecher<T, R> {
    interceptor: () => Promise<T>;
    adapter: (data:any) => Promise<R[]>;
}

export interface Response<R> {
    data: R | null;
    error: string | null;
}