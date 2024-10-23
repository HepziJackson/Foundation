// const a=[12,34,56,76,13]

// a.map(function(data){
//     console.log(data);
    
// })

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

// const a=[12,23,34,45,56,45]

// const p=a.reduce(function(a,b){
//     console.log("a values",a);
//     console.log("b values",b);
//     return a+b
// })
//  console.log(p);

// const a=[12,45,23,24,27]
// const p=a.sort(function(a,b){
//     return a-b
    
// })
// console.log(p);

    // const a=[12,24,23,25,26,27]

    // const even=a.filter((num)=>num%2==0);
    // console.log(even);
    
// let fruit='mango'
// console.log(fruit);
//  let country="usa"
//  console.log(country);
//   let result=`success`
//   console.log(result);

// let person={firstname:"hephzibah",lastname:"jackson"};

// console.log(person.firstname+" "+person.lastname);

// var a=[12,34,11,15,23,10]
//  sum=0;
// for(i=0;i<a.length;i++){
//     sum=sum+a[i];
// }
//         console.log(sum);

// var a=100
// var b=200

// a=a+b
// b=a-b
// a=b+a

// console.log(a);

// // var arr=[12,23,34,45]
// //  for(i=0;i<arr.length;i++)
// //  {
// //     for(j=i+1;j<arr.length;j++){
// //         if(arr[i]<arr[j]){
// //             temp=arr[i];
// //             arr[i]=arr[j];
// //             arr[j]=temp;
// //         }
// //     }
// //  }
//  console.log(arr);

// function findIndex(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i+1; 
//         }
//     }
// }

// // Example usage
// const arr = [5, 10, 15, 20, 25];
// const index = findIndex(arr, 20);
// console.log(index); 

    // function hello(num1)
    // {
    //     function hai(num2){
    //         function hey(num3){
    //             console.log(num1+num2+num3);
                
    //         }
    //         return hey
    //     }
    //     return hai
    // } 
    //  hello(100)(200)(300)  


    // function hello(num1)
    // {
    //     function hai(num2){
    //         console.log("num1 value",num1);
    //         console.log("num2 value",num2);
            
    //         if(num2) return hello(num1+num2)
    //             return num1
            
            
    //     }
    //     return hai
    // }

    // var z=hello(100)(200)(300)(400)()
    // console.log(z);
    
    // class display{
    //     constructor(name,place,age){
    //         this.a=name,
    //         this.b=age,
    //         this.c=place
    //     }
    //     hey(){
    //         console.log("I am",this.a+ " from " +this.c);
            
    //     }
    //     ok(){
    //         console.log("age is",this.b);
            
    //     }
    // }
    // var a=new display("hephzibah",25,"kottayam")
    // a.hey();
    // a.ok();

    function printhello(){
    console.log("hello hepz");

    }
    function printmessage(){
        console.log("i am a programmer");
        
    }
    function helper(callback){
        callback();

    }
    helper(printhello);
    helper(printmessage);

    //example of callback

    function hello(){
        ok(10)
    }
    function hai(a)
    {
        
    }




  
 


    

