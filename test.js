const $axios = require('axios');

const main = async () => {
  await $axios.get('http://localhost:3001').then(res => console.log(res.data));
  // console.log('main');
  await $axios.get('http://localhost:3001/test').then(res => console.log(res.data));
}
const test = async () => {
  for (let index = 0; index < 10000; index++) {
    await Promise.all([
      main(),
      main(),
      main(),
      main(),
      main(),
      main(),
      main(),
      main(),
      main(),
      main(),
      main(),
    ]) 
  }
}

test();
