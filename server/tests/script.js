import http from 'k6/http';
import { check, sleep } from "k6";

export const options = {
  // define thresholds
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(99)<1000'], // 99% of requests should be below 1s
  },
 // define scenarios
 scenarios: {
  // arbitrary name of scenario
  average_load: {
    executor: 'constant-vus', // use constant VUs executor
    vus: 1000, // set VUs to this number
    duration: '10s', // run for 10 seconds
  },
 },
};

export default function () {
  const random = Math.floor((Math.random() * 10) + 900000);

  // const res1 = http.get('http://localhost:3000/products');
  // http.get(res1);
  // // console.log(`Server response time for (GET /products) was ${res1.timings.waiting + res1.timings.receiving} ms`);
  // sleep(1);

  // var res2 = http.get(`http://localhost:3000/products/${random}`);
  // http.get(res2);
  // //console.log(`Server response time for (GET /products/:${random}) was ${res2.timings.waiting + res2.timings.receiving} ms`);
  // sleep(1);

  // const res3 = http.get(`http://localhost:3000/products/${random}/styles`);
  // //console.log(`Server response time for (GET /products/:product_id/styles) was ${res3.timings.waiting + res3.timings.receiving} ms`);
  // sleep(1);

  // const res4 = http.get(`http://localhost:3000/products/${random}/related`);
  // //console.log(`Server response time for (GET /products/:product_id/related) was ${res4.timings.waiting + res4.timings.receiving} ms`);
  // sleep(1);
  
}
