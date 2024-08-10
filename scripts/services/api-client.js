// Network Call Code
import URL from '../utils/constant.js';
async function makeNetworkCall(){
    try {
        const response = await fetch(URL); // Block
        const object = await response.json(); // Block
        return object; // Wrap Promise
    }
    catch(err) {
        console.log('Some Problem in API Call ',err);
        throw err;
    }

    // const promise = fetch(URL); // Assign to Thread
    // console.log('Promise is ', promise);
    // promise.then(response=>{
    //     console.log('response is ', response);
    //     const promise2 = response.json(); // Deserialization (JSON to Object)
    //     promise2.then(data=>console.log('Data is ', data))
    //     .catch(e=>console.log('JSON parse error', e));
    // }).catch(err=>{
    //     console.log('Error ', err);
    // })


    // console.log('Promise is ', promise);
    // promise.then(function(response){
    //     console.log(response);
    // }).catch(function(err){
    //     console.log('Error ', err);
    // });
    // console.log('Good Bye');



    // var obj = {id:1001, name:'Ram'};
    // typeof obj;  //object
    // var json = JSON.stringify(obj); // converting object to json string at sender's end
    // typeof json; // string
    // obj; /// key value pair
    // obj.id; // can be accessed => 1001
    // json.id; // cannot be accessed like this => undefined
    // // json is a string so it can be easily converted to byte and travel across networks
    // var t = JSON.parse(json); // json converted back to object at other point of network
    // typeof t; // object
    // // serialization -> object to JSON (stringify)
    // // deserialization -> JSON to object (parse)
}
export default makeNetworkCall;