// let promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("success");
//     },1000);
// })
// promise
// .then((v)=>{console.log(v)},(e)=>{console.log(e)});

// let promise=new Promise((res,rej)=>{
//     return res(5);
// })
// promise
// .then((v)=>{return v*2})
// .then((v)=>{return v*2})
// .then((v)=>console.log(v)
// )
// let promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let success=false;
//         if(success){
//             res("operation done")
//         }else{
//             rej("operation failure")
//         }
//     },1000)
// })
// promise
// .then((v)=>console.log(v))
// .catch((r)=>console.log(r))
// .finally(()=>console.log("finally block"))

// async function fetchData(url) {
//   try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);

//   } catch (e) {
//     console.log(e);
//   }
// }

// const url = "https://jsonplaceholder.typicode.com/users";
// fetchData(url);

// function fetchData(url,callback){
//     const xhr=new XMLHttpRequest();
//     xhr.open("GET",url,trur);
//     xhr.onreadystatechange=function(){
//       if(xhr.readyState==4){
//         if(xhr.status==200){
//           const data=JSON.parse(xhr.responseText);
//           callback(null,data)
//         }else{
//           callback(new Error("error rised"),null);
//         }
//       }
//     }
// }
// function handleData(error,data){
//   if(error){
//     console.log(error);

//   }else{
//     console.log(data);

//   }

// }
// let url="https://jsonplaceholder.typicode.com/users"
// fetchData(handleData)

// function fetchData(url,callback){
//     const xhr=new XMLHttpRequest();
//     xhr.open=("GET",url,true);
//     xhr.onreadystatechange=function(){
//       if(xhr.readyState===4){
//         if(xhr.status===200){
//           const data=JSON.parse(xhr.responseText);
//           callback(null,data);
//         }
//         else{
//           callback(new Error("error raised"),null)
//         }
//       }
//     }
// }
// function handleData(error,data){
//     if(error){
//       console.log(error);
//     }else{
//       console.log(data);
//     }
// }
// const url="https://jsonplaceholder.typicode.com/users"
// fetchData(handleData)

// function fetchData(url) {
//   return fetch(url)
//   .then(response=>response.json())
//   .then(data=>data)
// }
// const url = "https://jsonplaceholder.typicode.com/users";
// fetchData(url)
// .then(v=>console.log(v))
// .catch(e=>console.log(e))

// function fetchData(url,callback){
//   const xhr=new XMLHttpRequest();
//   xhr.open("GET",url,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//       if(xhr.status===200){
//         const data=JSON.parse(xhr.responseText);
//         callback(null,data);
//       }else{
//         callback(new Error("error while fetching"),null);
//       }
//     }
//   }
//   xhr.send();
// }
// function handleData(error,data){
//   if(error){
//     console.log(error);
    
//   }else{
//     console.log(data);
    
//   }
// }
// fetchData(url,handleData);

// async function fetchData(url,callback){
//   try{
//     const response=await fetch(url);
//     const data=await response.json();
//     callback(null,data);
//   }
//   catch(error){
//     callback(error,null);
//   }
// }
// function handleData(error,data){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(data);
//   }
// }
// fetchData(url,handleData);

// function fetchingData(url){
//   const xhr=new XMLHttpRequest();
//   xhr.open("GET",url,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//       if(xhr.status===200){
//         const data=JSON.parse(xhr.responseText);
//         console.log(data);        
//       }else{
//         console.log(new Error("error raised"));        
//       }
//     }
//   }
//   xhr.send();
// }
// const url="https://jsonplaceholder.typicode.com/users"
// fetchingData(url);



// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//     if(!res.ok){
//         throw new Error("problem in fetching data")
//     }
//     return res.json();
// })
// .then((response)=>{
//     console.log(response);
    
// }).catch((error)=>{
//     console.log(error);
    
// })
