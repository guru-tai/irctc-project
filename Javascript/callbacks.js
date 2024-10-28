// function display(res){
//     console.log("the sum is "+res);
// }
// function calculator(a,b,dis){
//     let res= a+b;
//     dis(res);
// }
// calculator(12,4,display);
// setInterval(function(){
//     let d=new Date();
//     console.log(d.getHours());
// },1000);

// let Myfunction =new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("you succed in life")
//     }else{
//         reject("you need to work hard");
//     }
// })
// Myfunction.then((val)=>{console.log(val);},((rej)=>{console.log(rej);
// })
// )

// dis();
// console.log("first");
// console.log(("second"));
// function dis(){
//     console.log("display");
// }
// setTimeout(() => {
//     console.log("settimeout");

// }, 0);

//callbacks

// function fetchData(callback) {
//   console.log("fetching data...");
//   setTimeout(() => {
//     const data = { name: "guru", age: 67 };
//     callback(data);
//   }, 2000);
// }
// function displayData(msg) {
//   console.log(msg);
// }
// fetchData(displayData);

// function first(callback) {
//   setTimeout(() => {
//     console.log("First task completed.");
//     callback();
//   }, 1000);
// }

// function second(callback) {
//   setTimeout(() => {
//     console.log("Second task completed.");
//     callback();
//   }, 1000);
// }

// function third(callback) {
//   setTimeout(() => {
//     console.log("Third task completed.");
//     callback();
//   }, 1000);
// }
// first(() => {
//   second(() => {
//     third(() => {
//       console.log("All tasks completed.");
//     });
//   });
// });

// function first() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("first task completed");
//       resolve();
//     }, 1000);
//   });
// }

// function second() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("second task completed");
//       resolve();
//     }, 1000);
//   });
// }
// function third() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("third task completed");
//       resolve();
//     }, 1000);
//   });
// }
// first()
//   .then(() => second())
//   .then(() => third())
//   .then(() => {
//     console.log("all tasks completed");
//   });

// async function runtasks(){
//     await first();
//     await second();
//     await third();
//     console.log("all tasks are completed");
    
// }
// runtasks();

// function first(callback){
//     setTimeout(() => {
//         console.log("first task completed");
//         callback();        
//     }, 1000);
// }
// function second(callback){
//     setTimeout(() => {
//         console.log("second task completed");
//         callback();        
//     }, 2000);
// }
// function third(callback){
//     setTimeout(()=>{
//         console.log("third task completed");
//         callback();        
//     },2000)
// }
// first(()=>{
//     second(()=>{
//         third(()=>{
//             console.log("all tasks are commpleted");
            
//         })
//     })
// })
// function first(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("first task completed");
//             resolve("hii");
//         },2000);
//     })
// }
// function second(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("second task completed");
//             resolve("hii");
//         },2000);
//     })
// }
// function third(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("third task completed");
//             resolve("hii");
//         },2000);
//     })
// }
// first()
// .then(()=>second())
// .then(()=>third())
// .then((data)=>{console.log("all tasks completed"+data);
// })
// async function runtasks(){
//     await first();
//     await second();
//     await third();
//     console.log("all tasks completed");
// }
// // runtasks();
// function simple(){
//     return new Promise((res,rej)=>{
//         let data=false;
//         if(data){
//             res("success")
//         }else{
//             rej("failed")
//         }
//     })
// }
// simple()
// .then((res)=>{
//     console.log(res);    
// })
// .catch((e)=>console.log(e)
// )
// .finally(()=>{
//     console.log("finally block");
//     // simple();
// })

// const fetchData=async ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const data=false;
//             if(data){
//                 resolve("data Fetched successfully")
//             }else{
//                 reject("data not fetched");
//             }
//         }, 2000);
//     })

// }
// const fetchData1=async()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             const success=true;
//             if(success){
//                 res("fetched properly");
//             }else{
//                 rej("not fetched properly");
//             }
//         }, 3000);
//     })
// }
// const fetchDataAsync=async ()=>{
//     try{
//         fetchData()
//         .then((res)=>console.log(res))
//         .catch((err)=>console.log(err)
//         )
//         const res=await fetchData1();
//         console.log(res);        
//     }catch(error){
//         console.log(error);
        
//     }
// }
// fetchDataAsync();
// console.log("started");
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fetching data from server");
//             resolve("sample data");
//         },2000)
//     })
// }
// async function processData(){
//     try{
//         const data=await fetchData();
//         console.log("processing data",data);
//     }catch(error){
//         console.log(error);        
//     }

// }
// processData();
// console.log("ended");

// function mydisplayer(value){
//     setTimeout(() => {
//         console.log(value);
        
//     }, 3000);
// }
// mydisplayer("i love india");

// let myPromise=new Promise((resolve,rej)=>{
//     setTimeout(()=>{
//         rej("hello india");
//     })
// })
// myPromise
// .then(v=>console.log(v))
// .catch(e=>console.log(e+"eeee"))

// function fun1(callback){
//     console.log("fun1");
//     callback();
// }

// function fun2(callback){
//     console.log("fun2");
//     callback();
// }

// function fun3(callback){
//     console.log("fun3");
//     callback();
// }
// fun1(()=>{
//     fun2(()=>{
//         fun3(()=>{
//             console.log("all are completed");
            
//         })
//     })
// })

async function fetchData(url){
    return new Promise(async(res,rej)=>{
        const response=await fetch(url);
        if(!response.ok){
            rej("error raised");
        }
        res(response.json());
    })
}
const url="https://jsonplaceholder.typicode.com/users";
fetchData(url).then(v=>console.log(v))
.catch(e=>console.log(e)
)