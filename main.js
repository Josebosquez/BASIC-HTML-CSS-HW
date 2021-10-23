const minus = document.querySelector('#minus')
minus.style.backgroundColor = 'red';
const add = document.querySelector('#add')
add.style.backgroundColor = 'green';


const counterCount = document.getElementById("counter")

counter = 0
console.log(counter)

function addOne (){
    counter = counter + 1
    console.log(counter)
    counterChange()
}
function minusOne (){
    counter = counter - 1 
    counterChange()
}

function counterChange(){
    counterCount.innerText = `Count: ${counter}`
}