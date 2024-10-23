// var a = {
//     name: "hephzibah",
//     age: 25,
//     address: "kottayam",
//     job: "fullstack developer"
// }
// console.log(a.name, a.address);


// var person = {
//     name: "hepz",
//     age: "25",
//     place: "kottayam"
// }
// var dummy = person
// dummy['name'] = "jack",
//     dummy.place = "tvla"

// console.log(person);

// var a = 35000
// var b = 200000
// var c = 5000000
// var d = 4000

// if (a > b && a > c && a > d) {
//     console.log("a is greater", a);

// } else if (b > a && b > c && b > d) {
//     console.log("b is grater", b);

// } else if (c > a && c > b && c > d) {
//     console.log(" c is greater", c);
// }
// else {
//     console.log("d is greater", d);

// }

// var a = 13;
// if (a % 2 == 0) {
//     console.log("this is even number");

// }
// else {
//     console.log("this is odd number");

// }
// var num = 5;
// var i;
// for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//         break;
//     }
// }
// if (i == num) {
//     console.log("this is prime");

// }
// else {
//     console.log("this is not prime");

// }


// function hello(num1, num2) {

//     let sum = num1 + num2

//     return 'helloooooooo'

// }


// console.log(hello(34,56));

// function display(ok){
//     ok("futura")
// }
// function hello(name){
//     console.log(name);
    
// }
// display(hello)

// function display(amount){
//     return new Promise((res,rej)=>{
//         if(amount<2000){
//             rej("minimum amount is 2000")
//         }
//         res("payment success")
//     })
// }
// display(250).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
    
// })
// function display(){
//     return new Promise(function(resolve,reject) {
//         resolve("success")
        
//     })
// }
// display().then(function(data) {
//     console.log(data);
    
    
// })
// console.log("first");
// console.log("second");
// function display() {
//     return new Promise(function(res,rej) {
//         setTimeout(function() {
//             res("hephzibah")
//         },2000)
            
//         })
        
// }
// async function hey() {
//     const a=await display()
//     console.log(a);
    
    
// }
// hey()
// console.log("third");
// console.log("fourth");

// function display(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("hello world")

//         },3000)
        
//     })
       
        

// }
// function display2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("hello hpj")

//         },2000)
//     })
       
    
// }
// async function hello(){
//     const a=await display()
//     const b=await display2()
//     console.log(a);
//     console.log(b);
    
    
// }
// hello()
// display().then((data)=>{
//     console.log(data);
    
// })
// display2().then((data)=>{
//     console.log(data);
    
// })
// Promise.all([display(),display2()]).then((data)=>{
//     console.log(data);
    
// })
// const a=[34,23,24,11,67,199,111,"hephzibah","feba"]
// const[n1,n2,n3,n4,n5,n6,n7,n8,n9]=a
// console.log(n8);

// const person={
//     name:"hephzibah",
//     place:"kottayam",

// }
// const {place,name}=person
// console.log(place);

// const person={
//     name:"hephz",
//     place:"tvla",
//     mob:706767565,
//     age:23,
//     password:"123"
// }
// const {place,mob,...other}=person
// console.log(other);

// 
// example of primitive datatype-number and string

// let x=25;
// const y=30;
// console.log("value of x=" +x);
// console.log("value of y="+y);

// let str="hello all";
// let str1='we3lcome';
// console.log("value of str=" +str);
// console.log("value of str1="+str1);

// //creation of object
// let obj=new Object();
// //example
// let person={
//     firstname:"hepzibah",
//     secondname:"jackson",
// }
// console.log(person.firstname+ " "+ person.secondname);

//ex of spred syntax

// function sum(x,y,z){
//     return x+y+z;
//     }
//     const numbers=[1,2,3];
//     console.log(sum(...numbers));
//     console.log(sum.apply(null,numbers));

        // ex of rest

        // function myfuntion(a,b,...moreargs){
        //     console.log("a",a);
        //     console.log("b",b);
        //     console.log("moreargs",moreargs);
              
        // }
        // myfuntion("one","two","three");

//ex of map 
// const a=[12,34,56,76,13]

// a.map(function(data){
//     console.log(data);
// })
//ex of filter
// function display(){
//     var a=100;
//     var b=200;
//     var c=a+b;
//      return a+b+c
// }
// var a=display()
// console.log(a);

// const a=[13,34,54,23,27]

// const p=a.filter(function(data){
//     return data>13
// })
// console.log(p);





     
    
    







        






    




