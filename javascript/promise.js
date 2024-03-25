var promiseobj= new Promise(
    function(resolve,reject){

        reject(false);
        

    }

)


promiseobj.then(function (successdata){
    console.log("Success", successdata);
}).catch(function (errordata){
    console.log("Failure",errordata);
})