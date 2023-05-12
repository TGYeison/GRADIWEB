export interface Fecher<T> {
    fecher: () => Promise<T>;
}

export interface Response<T> {
    data: T | null;
    error?: string | null;
    isLoading: boolean;
}