import { InterceptorProd, TypeProd } from "../states/product";
import { interceptorProduct, adapterProduct } from "../interceptor/product.interceptor";
import { Adapter } from "../../../utils/adapter";

export const cntrlProduct = async () => {
    const {data, error} = await Adapter<InterceptorProd, TypeProd[]>({
        interceptor: interceptorProduct,
        adapter: adapterProduct
    }) 
    
    return {data, error};
}