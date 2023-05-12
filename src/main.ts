import './style.scss';

import { Adapter } from './adaptaters/adapter';
import axios from 'axios';

const getProducts = async(): Promise<any> => {
  const url = 'https://gradiweba-test.myshopify.com/admin/api/2023-01/products.json';
  const res = await axios.get(url, { 
    headers: {
      "X-Shopify-Access-Token": "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",
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
    }
  });

  return res;
}

const { data } = Adapter({key:'/products', fecher:getProducts});

console.log("data",  data);



