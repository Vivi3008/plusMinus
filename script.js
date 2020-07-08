let div = document.querySelector('.cont')
let btn = document.querySelector('button')
let res = document.querySelector('div.res')
let clean =  document.getElementById('clean')
let end = document.querySelector('.result button')

let vet = []   
let positive = 0 
let negative = 0
let nulo = 0

const enter = document.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        addVet()
    }
})

btn.addEventListener('click', addVet)
clean.addEventListener('click', cleaner)
end.addEventListener('click', enden)

function addVet(){

    if(div.textContent===""){
        vet.push(0)
    } else {
        vet.push(Number(div.textContent))
    }

    div.innerHTML=""
    res.innerHTML=`Array: [${vet}]`
}

function enden(){
    if(vet.length==0){
        res.innerHTML="Array empty!"
        setTimeout(() => res.innerHTML="", 2000)
    } else {
       for (const v of vet) {
           if(v>0) positive++
           if(v<0) negative++
           if(v==0) nulo++
       }    
       const fractionPositive = (positive/vet.length)*100
       const fractionNegative = (negative/vet.length)*100
       const fractionNull = (nulo/vet.length)*100
       res.innerHTML+=`<p>Positives: ${fractionPositive.toFixed(0)}%</p>`
       res.innerHTML+=`<p>Negatives: ${fractionNegative.toFixed(0)}%</p>`
       res.innerHTML+=`<p>Zero: ${fractionNull.toFixed(0)}%</p>`
    }

} 


function cleaner(){
    vet = []
    res.innerHTML=""
}