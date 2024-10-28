// function display(x){
//    return x+5;
// }
// const x=1;
// console.log(display(x));
// var data=1;
// console.log(data);
// console.log(typeof(data));
// data=12.34
// console.log(data);
// console.log(typeof(data));
// data=true;
// console.log(data);
// console.log(typeof(data));
// data="guru";
// console.log(data);
// console.log(typeof(data));
// data={fname:"guru",lname:"swami"};
// console.log(data);
// console.log(typeof(data));
// data=[1,2,3,4,5];
// console.log(data);
// console.log(typeof(data));
// data=123e-3;
// console.log(data)

// var ar=new Array(1,2,3,4,5);
// console.log(ar);
// for(let v of ar){
//     console.log(v);
// }
// for(let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }

// ar.forEach((v)=>{
//     console.log(v);
// })
// ar.map((v)=>{
//     console.log(v);
// })

// var obj = new Object({ a: 1, b: 2, c: 3, d: 4 });
// for (const key in obj) {
//   console.log(key + " - " + obj[key]);
// }

// Object.entries(obj).forEach(([k,v])=>{
//     console.log(k+"-"+v);
// })

// var ar=[1,2,3,4,5];
// // for(let i=0;i<ar.length;i++){
// //     console.log(ar[i]);
// // }
// for(let i of ar){
//     console.log(i);
// }
// console.log(Array.isArray(ar));
// console.log(ar instanceof Array);

// var array=[1,2,3,{fname:"guru"},{lname:"swami"}];
// console.log(array[4].lname);
// var object={fname:"guru",lname:"swami",cars:[1,2,3,4]};
// for(let obj in object){
//     console.log(obj+" - "+object[obj]);
// }
// for(let i of object.cars){
//     console.log(i);
// }
// for(var i of ar){
//     console.log(i);
// }
// ar.map((v)=>{
//     console.log(v);
// })

// ar.forEach(v => {
//     console.log(v)
// });

// var obj={};
// obj={fname:"guru",lname:"swami",age:23}
// for(var i in obj){
//         console.log(i+" "+obj[i]);
// }
// Object.keys(obj).forEach(k=>{
//     console.log(k);
// })
// Object.values(obj).forEach(e=>{
//     console.log(e);
// })
// Object.entries(obj).forEach(([k,e])=>{
//     console.log(k+"-"+e);
// })

// var ar=[1,2,3,4,5,6]
// console.log(ar);
// console.log(...ar)
// console.log(ar.push(0));
// console.log(ar);
// console.log(ar.pop());
// console.log(ar);
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.unshift(9));
// console.log(ar);
// console.log(typeof(ar.toString()));
// console.log(ar.reverse());
// console.log(ar.sort());
// console.log(ar.splice(2,2,"guru"));
// console.log(ar);
// console.log(ar);
// console.log(ar.slice(3,5));
// console.log(ar);
// var ar1=["guru","swami"];
// console.log(ar.concat(ar1));
// console.log(ar.slice(1,4));
// console.log(ar);
// console.log(ar.includes(3));
// var a=ar.reduce((acc,value)=>(acc+value),1)
// console.log(a);
// var data=ar.find((v)=>v>4);
// console.log(data);
// console.log(ar);
// console.log(Array.from(ar));
// var str="guru";
// console.log(Array.from(str));
// var a=Array.of("ar",'re','fd');
// console.log(a);

// for(let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }
// ar.forEach(e=>{
//     console.log(e);

// })

// ar.map(e=>{
//     console.log(e);
// })
// for(let i of ar){
//     console.log(i);

// }

// var obj={fname:"guru",lname:"swami",age:34};
// for(var i in obj){
//     console.log(i+"-"+obj[i]);
// }
// Object.keys(obj).forEach(k=>{
//     console.log(k);
// })
// Object.values(obj).forEach(v=>{
//     console.log(v);
// })
// Object.entries(obj).forEach(([k,v])=>{
//     console.log(k+" "+v);

// })
// const n=4;
// switch (n) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("mon");
//     break;
//   case 2:
//     console.log("tue");
//     break;
//   case 3:
//     console.log("wed");
//     break;
//   case 4:
//     console.log("thu");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("sunday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("some other day");
// }
// const obj={
//     fname:"guru",
//     lname:"swami",
//     age:34
// }
// const {fname,lname,age}=obj;
// console.log(fname);
// console.log(lname);
// console.log(age);
// const str="tap";
// const [a,b,c,d='e']=str;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const ar=[1,2,3,4,5,];
// const [a,...b]=ar;
// console.log(a);
// console.log(b);

// let obj={fname:"guru",lname:"swami",age:34};
// for(let i in obj){
//     console.log(i+" "+obj[i]);
// }
// Object.keys(obj).forEach(v=>{
//     console.log(v);
// })
// Object.values(obj).forEach(k=>{
//     console.log(k)
// })
// Object.entries(obj).forEach(([k,v])=>{
//     console.log(k+" "+v);
// })

// for(let i of ar){
//     console.log(i);
// }
// ar.forEach(v=>{
//     console.log(v);
// })
// ar.map(v=>{
//     console.log(v);
// })
// for(let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }

// console.log(ar);
// console.log(ar.push(34));
// console.log(ar);
// console.log(ar.pop());
// console.log(ar);
// console.log(ar.unshift(23));
// console.log(ar);
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.length);
// console.log(ar.reverse());
// console.log(ar.sort());
// console.log(ar.filter((v)=>v<4));
// console.log(ar.some((v)=>v<4));
// console.log(ar.every((v)=>v<4));
// console.log(ar.reduce((acc,ini)=>(acc+ini)));
// console.log(ar.slice(0,2));
// console.log(ar);
// const ar1=[34,56,78];
// const ar2=[54,76,34];
// console.log(ar.concat(ar1,ar2,45));
// console.log(ar.includes(34))
// console.log(ar.toString());
// console.log(ar);
// console.log(ar.join())
// console.log(Array.of(ar));
// const data="guru";
// console.log(Array.of(data));
// for (let i = 0; i < ar.length; i++) {
//   console.log(ar[i]);
// }
// for (let i of ar) {
//   console.log(i);
// }
// let i=0;
// while(i<ar.length){
//     console.log(ar[i]);
//     i++;
// }
// const ar2=[1,2,3,4,5];
// ar.forEach((e,v)=>{
//     console.log(e+"-"+v);
// })
// ar2.map((v)=>{
//     console.log(v*v);
// })
// const a=ar.filter((v)=>v%2==0)
// console.log(a);
// console.log(ar.find((v)=>v%2===0));

// const ar = [1, 4, 3, 7, 5];
// console.log(ar);
// for (let i = 0; i < ar.length; i++) {
//   console.log(ar[i]);
// }
// console.log();
// ar.forEach((v, k,ar) => {
//   console.log(v + " " + k+" "+ar);
// });
// console.log();
// let i = 0;
// while (i < ar.length) {
//   console.log(ar[i]);
//   i++;
// }
// console.log();
// for (let i of ar) {
//   console.log(i);
// }
// console.log();
// ar.map((v, i, ar) => {
//   console.log(v + " " + i + " " + ar);
// });
// console.log();
// let filter=ar.filter(v=>v%2!=0);
// console.log(filter);
// console.log(ar);
// let sum=ar.reduce((acc,val)=>acc+val,0);
// console.log(sum);
// const find=ar.find((v)=>v%2==0);
// console.log(find);
// const some=ar.every((v)=>v%2!=0);
// console.log(some);
// console.log(ar.sort((a,b)=>b-a));
// const ar1=['g','a','c','r','z']
// console.log(ar1.sort())
// console.log(ar.push(65));
// console.log(ar);
// console.log(ar.pop());
// console.log(ar);
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.unshift(67));
// console.log(ar);
// console.log(ar.toString());
// console.log(ar.join("="));
// console.log(ar.toSpliced(2,2,"guru"));
// console.log(ar);
// console.log(ar.slice(2,4,"guru"));
// console.log(ar);
//higher order functions
// function add(a, b) {
//   console.log(a + b);
// }
// function sub(a, b) {
//   console.log(a - b);
// }
// function mul(a, b) {
//   console.log(a * b);
// }
// function div(a, b) {
//   console.log(a / b);
// }
// function calculator(operation,a,b){
//     operation(a,b);
// }
// calculator(div,100,5);
// function greetings(name){
//     console.log(`${name} bye!`);
// }
// function display(greet,name){
//     greet(name);
// }
// display(greetings,"ram");

// const ar=[1,2,3];
// const array=ar.flatMap((x,i)=>[x,x*x]);
// console.log(array);
// const words=['hello','world'];
// const ar1=words.flatMap(x=>x.split(''));
// console.log(ar1);
// const data=[[1,2,3],[],[4,[6]],[5]];
// const results1=data.flatMap(x=>x);
// console.log(results1.flat());
// const data2=[[1,2],[3,[4,5,[7]]],[6]];
// console.log(data2.flat(Infinity));
// const results2=data2.flatMap(x=>x);
// console.log(results2);

// const ar=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0;i<ar.length;i++){
//     for(let j=0;j<ar[i].length;j++){
//         console.log(ar[i]);

//     }
// }
// const ar = [1, 4, 3, 5, 2];
// for(let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }
// let i=0;
// while(i<ar.length){
//     console.log(ar[i]);
//     i++;
// }
// ar.forEach(v=>{
//     console.log(v);
// })
// for(let i of ar){
//     console.log(i);
// }
// ar.map(v=>{
//     console.log(v);
// })
// console.log(ar.find(v=>v>2));
// console.log(ar.reduce((acc,val)=>acc+val,1));
// console.log(ar);
// console.log(ar.push(34));
// console.log(ar);
// console.log(ar.pop());
// console.log(ar);
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.unshift(23));
// console.log(ar);
// const ar1=[2,3,4];
// console.log(ar.push(...ar1));
// console.log(ar);
// console.log(ar.slice(3,6));
// console.log(ar);
// console.log(ar.toString());
// console.log(ar.join());
// console.log(ar.at(2));
// console.log(ar[2]);
// console.log(ar);
// console.log(ar.lastIndexOf(4));
// console.log(ar.sort((a,b)=>b-a));
// const str='hello'
// const str2=(Array.from(str));
// console.log(str2);
// console.log(str2.sort((a,b)=>b.localeCompare(a)));
// console.log(ar);
// console.log(ar.fill(99,4,6));
// console.log(ar);
// console.log(ar.copyWithin(1,3,6));
// const ar2=[1,[2,[3,[4,[5]]]]];
// console.log(ar2.flat(Infinity));
// const ar3=[1, [2, 3], [4, [5, 6,[7]]]];
// console.log(ar3);
// console.log(ar3.flat(2));
// const ar4=[1,2,3,4];
// console.log(ar4.flatMap(x=>[x,x*x]));
// const ar5=[1,[2,3],[[]],[4,[5,6]]];
// console.log(ar5.flatMap(x=>x));

// const obj = {
//   fname: "guru",
//   lname: "swami",
//   age: 34,
// };
// for (let i in obj) {
//   console.log(i);
// }
// Object.entries(obj).forEach(([k,v])=>{
//     console.log(k+" "+v);
// })
// console.log(obj);
// console.log(Object.entries(obj));

// const person1={
//     fname:"guru",
//     lname:"swami",
//     age:34
// }
// console.log(person1);
// console.log(person1.fname);
// console.log(person1.lname);
// console.log(person1.age);
// const dog={
//     bark(){
//         console.log(`${this.name} barking`);

//     }
// }
// const snoopy=Object.create(dog,{name:{value:"ram"},barn:{value:"bar"}});
// snoopy.bark();
// console.log(snoopy.barn);

// const obj1={
//     a:"guru"
// }
// const obj2={
//     b:"swami"
// }
// const merged={...obj1,...obj2};
// console.log(merged.a);

// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} barking`);
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed=breed;
//     }
//     bark(){
//         console.log(`${this.name} barking`);
//     }
// }
// const ref=new Dog("ramu","edho okati");
// ref.bark();
// ref.speak();
// const fun1={
//     eat(){
//         console.log("hii");

//     }

// }
// const fun2={
//     loud(){
//         console.log("hello");

//     }
// }
// const data3=Object.assign(fun1,fun2);
// data3.eat();
// data3.loud();
// const person = { name: 'Alice' };
// const contact = { email: 'alice@example.com' };
// const address = { city: 'Wonderland', country: 'Fantasy' };

// const profile = {person};

// console.log(profile);
// const default1={fruits:['apple','mango']};
// const additional=['grape','banana'];
// const newfruits={...default1,fruits:[...default1.fruits,...additional]}
// console.log(newfruits);

// let obj={
//     fname:"guru",
//     lname:"swami",
//     age:34
// }
// console.log(obj);
// for(let i in obj){
//     console.log(i+" "+obj[i]);
// }
// Object.values(obj).forEach((v,k)=>{
//     console.log(v);
// })
// Object.keys(obj).forEach((k,v)=>{
//     console.log(k);
// })
// Object.entries(obj).forEach((k,v)=>{
//     console.log(k);
// })
// obj.age=32;
// console.log(obj.age);
// console.log(delete obj.age);
// obj={...obj,age:54};
// console.log(obj);
// obj={
//     ...obj,
//     add(){
//         console.log("add");

//     },
//     sub(){
//         console.log("sub");

//     }
// }
// const calc=Object.create(obj,{
//     name:{
//         value:"ramu"
//     },
//     marks:{
//         value:45,
//     }
// });
// calc.add();
// calc.sub();
// console.log(calc.age);
// console.log(calc.name);
// console.log(calc.marks);

// let ar=[23,78,6,32,78,45];
// console.log(ar);
// console.log(ar.push(39));
// console.log(ar);
// console.log(ar.pop());
// console.log(ar);
// console.log(ar.unshift(0));
// console.log(ar);
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.length);
// console.log(ar.toString());
// console.log(ar.join("-"));
// console.log(ar);
// console.log(ar.lastIndexOf(78,3));
// let ar2=[10,20,30];
// console.log(ar2.concat(ar,56));
// let ar3=[1, 2, 3, null, 4, undefined, 5];
// console.log(ar3);
// console.log(ar3.flatMap(num=>(num!==null&&num!==undefined?[num]:[])));
// let ar4=[1,2,[45],4,5];
// console.log(ar4.flatMap(num=>num));
// let date='hello';
// console.log(Array.of(date));

// const ar=[4,27,7,1];
// function fun(ar){
//     return ar.slice().reverse();
// }
// console.log(fun(ar));
// console.log(ar);
// const arr=[1,2,3,4,2,3,1,6,7,4,1];
// console.log(arr);
// console.log(arr.filter((val,ind)=>arr.indexOf(val)===ind));
// console.log(arr);
// console.log(ar.map(val=>val*val));
// ar.forEach((v)=>{
//     console.log(v*v);
// })

// function maxElement(ar){
//     return ar.reduce((max,val)=>max=max>val?max:val,0);
// }
// console.log(maxElement(ar));
// const str='hello World';
// function findVowel(str){
//     const ar=Array.from(str);
//     const vowels=['a','e','i','o','u'];
//     return ar.find((val)=>vowels.includes(val.toLowerCase()));
// }
// console.log(findVowel("swami"));
// function sumOf(num){
//     return num.filter(num=>num>0).reduce((acc,val)=>acc+val,0);
// }
// console.log(sumOf([3,4,-2,6,-9]));
// let obj=[{name:"guru",age:25},{name:"venky",age:28},{name:"ram",age:20}]
// function sortByProperty(obj,prop){
//     return obj.slice().sort((a,b)=>(a[prop]>b[prop]?1:-1));
// }
// console.log(sortByProperty(obj,"age"));

// obj=[
//     { name: 'Alice', role: 'admin' },
//     { name: 'Bob', role: 'user' },
//     { name: 'Charlie', role: 'user' },
//     { name: 'Dave', role: 'admin' }
// ]
// console.log(obj);
// function grouping(obj,key){
//     return obj.filter(item=>item.role===key);
// }
// console.log(grouping(obj,'admin'));

// let ar3=[1,2,3,4,5,5,4,9];
// function removing(ar){
//     return ar3.filter((num,index)=>index%2==0);
// }
// console.log(removing(ar3));
//  ar3=['this','is','a','array'];
//  function toSentence(ar){
//     return ar.join(" ")+".";
//  }
//  console.log(toSentence(ar3));
//  const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// function average(people){
//     let avg=0;
//     avg=people.map(people=>people.age).reduce((sum,value)=>sum+value);
//     return avg/people.length;
// }
// console.log(average(people));

//  const ar=[1,2,3,4];
//  const [first,second,...third]=ar;
//  console.log(first);
//  console.log(second);
//  console.log(third);
// const obj={
//     fname:"guru",
//     lname:"swami",
//     age:45
// }
// const {fname,...lname}=obj;
// console.log(fname);
// console.log(lname);
// console.log(obj);

// const person=[
//     {id:1,name:"guru"},
//     {id:2,name:"ramu"}
// ]
// const [{id,name},{...re}]=person
// console.log(id);
// console.log(name);
// console.log(re);
// const original={
//     name:"guru",
//     address:{
//         city:"akkapalli",
//         pincode:523346
//     }
// }
// const duplicate=JSON.parse(JSON.stringify(original));
// console.log(duplicate);
// duplicate.name="swami";
// console.log(duplicate.name);
// console.log(original.name);

// let obj1 = {
//   fname: "guru",
//   lname: "swami",
// };
// let obj2 = {
//   name: "ravi",
//   last: "kumar",
// };
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// class Car {
//   constructor(name, model, year) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }
//   start() {
//     console.log(`${this.name} is ready to start`);
//   }
//   getDetails() {
//     console.log(
//       `name : ${this.name} model : ${this.model} year : ${this.year}`
//     );
//   }
// }

// class Vehicle{
//     constructor(){
//     }
//     start(){
//         console.log(` is starting`);
//     }
// }
// class Car extends Vehicle{
//     constructor(make,model,year){
//         super();
//         this.make=make;
//         this.model=model;
//         this.year=year;
//     }
//     getDetails(){
//         console.log(`${this.make} ${this.make} ${this.year}`);
//     }
// }
// const c=new Car("honda",'civic',2024);
// c.start();
// c.getDetails();

// const obj={
//     name: 'Alice',
//     hobbies: ['reading', 'cycling'],
//     address: { city: 'Springfield', zip: '12345' }
// }
// const duplicate=JSON.parse(JSON.stringify(obj));
// console.log(duplicate.hobbies.push("writing"));
// console.log(duplicate);
// console.log(obj);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const obj3 = { d: 5 };
// const obj4={obj1,obj2,obj3};
// console.log(obj4);
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// const animal = new Animal('Generic Animal');
// animal.speak(); // Output: Generic Animal makes a sound.

// const dog = new Dog('Rex');
// dog.speak(); // Output: Rex barks.

// let ar=[1,2,3,4,2,5];
// ar.map((v)=>{
//     console.log(v);
// })
// console.log(ar.filter((v)=>v%2==0));
// console.log(ar.reduce((acc,val)=>acc+val));
// console.log(ar.includes(5));
// console.log(ar.find((v)=>v===2));
// console.log(ar.indexOf(2));
// console.log(ar.lastIndexOf(2));
// console.log(ar.push(55));
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.unshift(56));
// console.log(ar);
// const ar2=["guru","swami"];
// console.log(ar.concat(ar2));
// console.log(ar.concat(ar2,54,"uoosa"));
// console.log(ar);
// console.log(ar.findLast(v=>v%2===0));
// ar=[1,2,3,[4,5]];
// console.log(ar);
// console.log(ar.flatMap((v)=>v));
// console.log(ar.flatMap((v)=>Array.isArray(v)?v:[v,v*v]));
// ar=[1,2,3];
// let ar1=[4,3,2];
// let ar3=[...ar,...ar1];
// console.log(ar3);
// let [first,second,third,...rest]=ar3;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// let ar = [5, 4, 32, 13, 43, 13];
// function maximum(ar) {
//   return ar.filter((value, index, arr) => arr.indexOf(value) === index);
// }
// console.log(maximum(ar));
// ar = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "user" },
//   { name: "Dave", role: "admin" },
// ];
// function groupBy(ar, role) {
//   return ar.filter((item) => item.role === role);
// }
// ar = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// let sum = 0;
// for (let i = 0; i < ar.length; i++) {
//     sum += ar[i][i];
// }
// console.log(sum);
// function sumRow(ar,row){
//     let sum=0;
//     for(let i=0;i<ar[row].length;i++){
//         sum+=ar[row][i]
//     }
//     console.log(sum);

// }
// function sumCol(ar,col){
//     let sum=0;
//     for(let i=0;i<ar.length;i++){
//         sum+=ar[i][col];
//     }
//     console.log(sum);

// }
// sumRow(ar,2);
// sumCol(ar,1);
// function sumOf(ar){
//     let sum=0;
//     for(let i=0;i<ar.length;i++){
//         for(let j=0;j<ar[i].length;j++){
//             sum=sum<ar[i][j]?ar[i][j]:sum;
//         }

//         console.log(sum);
//     }

// }
// sumOf(ar);

// let obj = {
//   fname: "guru",
//   lname: "swami",
//   age: 89,
// };
// console.log(obj);
// for (let i in obj) {
//   console.log(i + " " + obj[i]);
// }

// let { fname, lname, age } = obj;
// console.log(fname);
// console.log(lname);
// console.log(age);
// Object.values(obj).forEach((v) => {
//   console.log(v);
// });
// Object.keys(obj).forEach((v) => {
//   console.log(v + " " + obj[v]);
// });
// Object.entries(obj).forEach(([k, v]) => {
//   console.log(k + " " + v);
// });
// obj.address = "akkapalli";
// console.log(obj.address);

// console.log(obj);

// delete obj.address;
// console.log(obj);
// obj.age = 34;
// console.log(obj);
// let obj1 = new Object({ guru: "swami", ravi: "kumar" });
// console.log(obj1);
// let obj2 = { ...obj, ...obj1 };
// console.log(obj2);
// let obj3 = {
//   add: function () {
//     console.log("this is add method");
//   },
//   sub(){
//     console.log("this is sub function");

//   }
// };
// obj3.add();
// obj3.sub();
// console.log(obj);

// let newObj=Object.create(obj);
// console.log(newObj.fname);
// console.log(obj.fname);
// newObj.fname='ravi';
// console.log(newObj.fname);
// console.log(obj.fname);

// console.log(Array.from('hello'));

// const ar=[1,2,3,4,5,89,54,34];
// console.log(ar.slice(3,5));
// console.log(ar);

// console.log(ar.findIndex(ele=>ele%2!==0));
// const ar1=["guru","swami"];
// const ar2=[...ar,...ar1];
// console.log(ar2);
// const ar3=ar1.concat(ar,45,"ram");
// console.log(ar3);
// const [first,second,...third]=ar;
// console.log(first);
// console.log(second);
// console.log(third);
// const [thi,fourth,...fifth]=third;
// console.log(thi);
// console.log(fourth);
// console.log(fifth);

// let obj={
//     fname:"guru",
//     lname:"swami",
//     age:34,
//     start(){
//         console.log(`hello ${this.fname}`);

//     }
// }
// console.log(obj);
// let obj1=Object.create(obj);
// console.log(obj1.fname)
// obj1.start();
// console.log(obj.fname="ramu");
// console.log(delete obj.start);
// console.log(obj);
// for(let i in obj){
//     console.log(i+" "+obj[i]);

// }
// Object.values(obj).forEach(e=>{
//     console.log(e);

// })
// Object.keys(obj).forEach(e=>{
//     console.log(e+" "+obj[e]);

// })
// Object.entries(obj).forEach((k,e)=>{
//     console.log(k);

// })
// let obj4=Object.assign(obj);
// console.log(obj4);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function sumRow(ar, row) {
//   let sum = 0;
//   for (let i = 0; i < ar[row].length; i++) {
//     sum += matrix[row][i];
//   }
//   console.log(sum);
// }
// function sumCol(ar, col) {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i][col];
//   }
//   console.log(sum);
// }
// sumRow(matrix, 2);
// sumCol(matrix, 2);

// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} is speaking`);

//     }
// }
// class dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.name=name;
//         this.breed=breed;
//     }
//     play(){
//         console.log(`${this.name} is barking`);
//     }
// }
// let a=new Animal("rex");
// a.speak();

// function multiplie(num){
//     return function factor(num2){
//         return num**num2;
//     }
// }
// let mul=multiplie(2);
// console.log(mul(3));
// let ar=[1,10,3,44,85,64,73,85,44,10];
// function squared(ar){
//     console.log(ar.map((e)=>e*e));
// }
// squared(ar);
// function oddOut(ar){
//     console.log(ar.filter((e)=>e%2!=0));
// }
// oddOut(ar);

// function maximum(ar){
//     let max=ar.reduce((acc,val)=>acc=acc<val?val:acc,ar[0]);
//     console.log(max);
// }
// maximum(ar);
// function duplicates(ar){
//     let values=[...new Set(ar)]
//     console.log(values);
// }
// duplicates(ar)
// function indexOfValue(ar,num){
//     let a=ar.findIndex((v)=>v===num);
//     console.log(a);

// }
// indexOfValue(ar,85);
// let ar1=[1,2,3,4];
// let ar2=[3,4,5,6];
// function findcommon(ar1,ar2){
//     let a=ar1.filter((value)=>ar2.includes(value));
//     console.log(a);
// }
// findcommon(ar1,ar2);
// console.log(ar);

// function secondEle(ar){
//     let nums=ar.filter((v,k)=>ar.indexOf(v)===k).sort((a,b)=>b-a);
//     console.log(nums);
//     console.log(nums[1]);
// }
// secondEle(ar);
// let str=[1,2,3,4,4,2,1];
// function palindrome(ar){
//     return ar.join('')===ar.reverse().slice().join('');
// }
// console.log(palindrome(str));

// function increment(str){
//     return str.reduce((acc,ele)=>{
//         acc[ele]=(acc[ele]||0)+1;
//         return acc;
//     },{})
// }
// console.log(increment(str));
// const elements = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
// function counting(ar){
//     return ar.reduce((acc,ele)=>{
//         acc[ele]=(acc[ele]||0)+1;
//         return acc;
//     },{})
// }
// console.log(counting(elements));

// console.log(ar);
// console.log(ar1);
// let ar3=ar.concat(ar1);
// console.log(ar3);
// let [first,second,...rest]=[...ar3];
// console.log(first);
// console.log(second);
// console.log(...rest);

// let obj={
//     fname:"guru",
//     age:89,
// }
// let obj1={
//     lname:"swami",
//     area:"btm"
// }
// console.log(Object.assign(obj,obj1));
// console.log({...obj,...obj1});

// const Animal={
//     makesound:function(){
//         console.log("hello");
//     }
// }
// let a=Object.create(Animal);
// a.makesound();

// class Dog{
//     speak(){
//         console.log("hii");
//     }
// }
// class goat extends Dog{
//     speak(){
//         console.log("hiii");

//     }
// }
// let d=new Dog();
// d.speak();
// let g=new goat();
// // g.speak();
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
// function printPairs(obj) {
//   if (typeof obj === "object" && !Array.isArray(obj)) {
//     return Object.entries(obj).map((el) => {
//       const keyvalue = printPairs(el[1]);
//       return `${el[0]} - ${keyvalue}`;
//     });
//   } else if (Array.isArray(obj)) {
//     return "[ " + obj.join(" ,") + " ]";
//   }
//   return obj;
// }
// console.log(printPairs(dummyObject));

// const products = [
//   { name: "Laptop", price: 1200, category: "Electronics" },
//   { name: "Shirt", price: 25, category: "Clothing" },
//   { name: "TV", price: 400, category: "Electronics" },
//   { name: "Pants", price: 40, category: "Clothing" },
//   { name: "Headphones", price: 150, category: "Electronics" },
// ];

// function sorting(products) {
//   return products
//     .sort((a, b) => {
//       if (a.category < b.category) return -1;
//       if (a.category > b.category) return 1;
//       return a.price - b.price;
//     })
//     .map((v) => `${v.category} -${v.name} ${v.price}`);
// }
// console.log(sorting(products));

