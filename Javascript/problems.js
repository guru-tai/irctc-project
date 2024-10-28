// async function fetchData(url) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         reject("url is empty");
//       }
//       const data = response.json();
//       resolve(data)
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }
// const urls = "https://jsonplaceholder.typicode.com/users";
// fetchData(urls)
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// async function fetchData(url) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(url);
//       if(!response.ok){
//         reject("while fetching problem")
//       }
//       const data = await response.json();
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// fetchData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     console.log("data fetched", data);
//     return fetchData("https://jsonplaceholder.typicode.com/users/1");
//   })
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error));

// async function fetchData(url,depth=0){
//     try{
//         const response=await fetch(url);
//         const data=await response.json();
//         console.log(data);
//         if(depth<1){

//             url=url+"/1"
//             fetchData(url,depth+1)
//         }

//     }catch(error){
//         console.log(error);

//     }
// }

// const urls="https://jsonplaceholder.typicode.com/users"
// fetchData(urls)

// function fetchData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let Url = data[0].id;
//       let newUrl = `${url}/${Url}`;
//       return fetch(newUrl)

//         .then((res) => {
//           if (!res.ok) {
//             console.log("error occured");
//           }
//           return res.json();
//         })
//         .then((newData) => {
//           console.log(newData);
//           return newData;
//         });
//     })
//     .catch((e) => console.log(e));
// }

// let url = "https://jsonplaceholder.typicode.com/users";
// fetchData(url);

// const products = [
//   { name: "Laptop", price: 1200, category: "Electronics" },
//   { name: "Shirt", price: 25, category: "Clothing" },
//   { name: "TV", price: 400, category: "Electronics" },
//   { name: "Pants", price: 40, category: "Clothing" },
//   { name: "Headphones", price: 150, category: "Electronics" }
// ];
// products.sort((a,b)=>{
//   const filters=a.category.localeCompare(b.category);
//   if(filters===0){
//     return a.price-b.price;
//   }
//   return filters;
// })
// let res=products.map((v)=>v.category+":"+v.name+"-"+"$"+v.price)
// console.log(res);

const dummyObject = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "gaming", "traveling"],
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};

// function printObjectProperties(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//         console.log(`Key: ${key}, Value:`);
//         printObjectProperties(obj[key]); 
//       } else {
//         console.log(`Key: ${key}, Value: ${obj[key]}`);
//       }
//     }
//   }
// }

function printObjectProperties(obj){
  Object.entries(obj).forEach(([key,value])=>{
    if(typeof value==='object' && !Array.isArray(value) && value!==null){
      console.log(`key:${key} value:`);
      printObjectProperties(value);
    }else{
      console.log(`key:${key} value:${value}`);
    }
})
}
printObjectProperties(dummyObject);
