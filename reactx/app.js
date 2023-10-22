
const axios = require('axios')
async function getUser(x){
    const userid = x; 
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
        console.log(response);
    }catch(err){
        console.log('hata.')
    }
}
module.exports = {
    getUser
}