import http from 'k6/http';

export default function () {
  const res1 = http.get('http://localhost:3000/products');
  console.log(`Server response time for (GET /products) was ${res1.timings.waiting + res1.timings.receiving} ms`);

  const res2 = http.get('http://localhost:3000/products/999999');
  console.log(`Server response time for (GET /products/:product_id) was ${res2.timings.waiting + res2.timings.receiving} ms`);

  const res3 = http.get('http://localhost:3000/products/435/styles');
  console.log(`Server response time for (GET /products/:product_id/styles) was ${res3.timings.waiting + res3.timings.receiving} ms`);

  const res4 = http.get('http://localhost:3000/products/999999/related');
  console.log(`Server response time for (GET /products/:product_id/related) was ${res4.timings.waiting + res4.timings.receiving} ms`);

}