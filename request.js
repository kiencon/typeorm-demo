const $axios = require('axios');

const test = () => {
  $axios.post('http://localhost:3001', {
    name: 'name'
  }).then(res => console.log(res.data));
}

test();
