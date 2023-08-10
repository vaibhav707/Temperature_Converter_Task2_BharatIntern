

let main=()=>{
    let val = document.getElementById('val').value
    let op = document.getElementById('op').value
    let result = document.getElementById('result')
    let ic = document.getElementById('ic')

    let re

    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        result.innerHTML=(`Conversion in Celsius = ${c}°c`)
    }

    let CtoF=(fhr)=>{
        let f = Math.round((fhr*9/5)+32)
        result.innerHTML=(`Conversion in Fahrenheit = ${f}°f`) 
    }

    if(op=="celsius"){
        re = FtoC(val)
        return re
    }else{
        re= CtoF(val)
        return re
    }
}