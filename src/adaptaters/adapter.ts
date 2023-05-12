import type { Fecher, Response } from '../models/interceptor';

export const Adapter = <T>({fecher}: Fecher<T>): Response<T> => {
    const stateAdapter: Response<T> = {
        isLoading: false,
        data: null,
        error: null,
    }

    try {
        const res = fecher();
        
        res.then((res) => {
            stateAdapter.data = res;
        });
    } catch (error) {
        stateAdapter.error = (error as Error).message;
    }finally {
        stateAdapter.isLoading = true;
    }

   
    return stateAdapter
}