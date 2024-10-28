// const products = [
//   { name: "Laptop", price: 1200, category: "Electronics" },
//   { name: "Shirt", price: 25, category: "Clothing" },
//   { name: "TV", price: 400, category: "Electronics" },
//   { name: "Pants", price: 40, category: "Clothing" },
//   { name: "Headphones", price: 150, category: "Electronics" },
// ];

// function sorting(arr){
//     arr.sort((a,b)=>{
//         if(a.category>b.category) return 1;
//         if(a.category<b.category) return -1;
//         return a.price-b.price;
//     })
//     const res=arr.map((item)=>item.name+" "+item.price+"$"+item.category);
//     return res
// }

// console.log(sorting(products));

// const dummyObject = {
//   name: "John Doe",
//   age: 30,
//   isEmployed: true,
//   hobbies: ["reading", "gaming", "traveling"],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     zipCode: "10001",
//   },
// };

// function printObject(obj){
//     Object.entries(obj).forEach(([key,value])=>{
//         if(typeof value==='object' && !Array.isArray(value) &&value!==null){
//             console.log(`key : ${key} value:`);
//             printObject(value)
//         }else{
//             console.log(`key:${key} value:${value}`);
            
//         }
//     })
// }

// printObject(dummyObject);


async function fetching(url,callback){
    try{
        const response=await fetch(url);
        const data=await response.json();
        callback(null,data);
    }catch(error){
        callback(error,null)
    }
}

function handleData(error,data){
    if(error){
        console.log(error);
    }else{
        data.data.sort((a,b)=>{
            return a.package-b.package;
        })

        const categorizedData=data.data.reduce((category,items)=>{
            const genderKey=items.genderPreference || 'unknown';
            if(!category[genderKey]){
                category[genderKey]=[]
            }
            category[genderKey].push(items);
            return category
        },{})
        console.log(categorizedData);
        

    }
}
url='https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=15&page=1';
fetching(url,handleData);