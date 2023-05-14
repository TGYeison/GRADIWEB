const uriProduct =  'https://gradistore-spi.herokuapp.com/products/all';

export const interceptorProduct = async <T>(): Promise<T> => {
    const res = await fetch(uriProduct);
    return res.json();
}

export const adapterProduct = <T>(data:any): T  =>{
    const res:any = [...data.products.nodes];
    return res;
}