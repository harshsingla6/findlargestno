// const express = require("express")
// const app = express();

// Port = 4000;

// app.listen(Port , () =>{
//     console.log("server is created")
// })

// app.get("/",(req,res)=>{

var arr = [2,4,6,7,99,8,98,44,100,67,1];
var largest = 0;
var justlarge = 0;
var secondlargest = 0;
  

for ( i = 0; i < arr.length; i++) {
    console.log("index",i,"value",arr[i]);
    if (largest < arr[i] ) {
        justlarge = largest;
        largest = arr[i];

        console.log(largest,"largest");
    }
    if(arr[i]>justlarge && arr[i]!=largest){
        justlarge = arr[i];
        console.log(justlarge,"second")
    }
}



 console.log(justlarge,"second large");
//  res.json(secondlargest);

// })
