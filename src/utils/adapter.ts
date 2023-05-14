import { Fecher, Response } from "../models/interceptor"

export const Adapter = async<T, R>({adapter, interceptor}:Fecher<T, R>): Promise<Response<R>> => {
    const responseState: Response<R> = {
        error: null,
        data: null,
    }

    try {
        const response:any = await interceptor();
        const data = adapter(response);
    
        responseState.data = data as R;
    } catch (error) {
        responseState.error = (error as Error).message;
    }

    return responseState;
}