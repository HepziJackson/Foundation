
// var a=document.getElementById('main')
// var b=document.getElementById('btn')

// b.addEventListener('click',function(){
//     var c=document.getElementById('h3')
//     c.classList.add('header')
//     c.innerText
// })
function display(){
    console.log(c.value);
    var values1=c.value
    var values2=d.value

    var g=values1/(values1*values2)
    if(g<18.5){
        e.innerText="Underweight"

    }else if(g>=18.5 && g<=24.9){
        e.innerText="Normal"
    }else if(g>=25){
        e.innerText="Overweight"
    }
    var newElement=document.createElement('h3')
    newElement.classList.add('htag')
    a.appendchild(newElement)
    var length=b.length
    newElement.innerText='hello ${length}'
}

function hello(event){
    console.log(event.target.value);
    
}