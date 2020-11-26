const express = require("express")
const app = express();

Port = 4000;

app.listen(Port , () =>{
    console.log("server is created")
})

app.get("/",(req,res)=>{

var arr = [2,4,5,7,99,8,97,44,67,1]
var largest = 0
var secondlargest = 0
  

for ( i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
    else if(arr[i]>secondlargest && arr[i]!=largest)
    secondlargest = arr[i];
}


 console.log(secondlargest);
 res.json(secondlargest);

})
