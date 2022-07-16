const axios = require('axios');
var url = "https://api.ipify.org";

axios({
  method: 'GET',
  url: url
}).then(response => {
  let load = response.data;
  console.clear();
  console.log(`> Ip result : ${load}`);
}).catch(error => {
  console.clear();
  console.log('> Terjadi kesalahan dalam membuat request ke api url');
  setTimeout(function() {
    process.exit();
  },5000);
})
