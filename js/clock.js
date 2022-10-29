let takeName = prompt()

function rightnow(){

let fullname = document.querySelector("#myName")

fullname.innerHTML = takeName

let dates = new Date()

let hours = document.querySelector("#myClock")

if(dates<10){
    dates = '0'+dates
}
let gunler = new Date().toLocaleString('tr', {weekday:'long'}) 

let timeNow = dates.toLocaleTimeString()+gunler

hours.innerHTML = timeNow
setTimeout(rightnow,1000)
}

rightnow();
