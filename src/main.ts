import './style.scss';

import axios from 'axios';

const getProducts = async (): Promise<any> => {
  const stateReq: {
    error: null| string;
    data: null| any;
  } =  {
      error: null,
      data: null,
  }

  try {
    const url = 'https://gradistore-spi.herokuapp.com/products/all';
    const res = await axios.get(url)
      .then((response) => response.data);

    stateReq.data = res;
  } catch (error) {
    stateReq.error = (error as Error).message;
  } finally {
    return stateReq;
  }
}


const startRequest = async () => {
  const data = await getProducts();
  console.log("data", data);
}


startRequest();





