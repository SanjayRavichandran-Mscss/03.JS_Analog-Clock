
function runClock(){
    
    const seconds = document.querySelector('.sec');
    const minutes = document.querySelector('.min');
    const hours = document.querySelector('.hrs');

const time = new Date();
// const sec=time.getSeconds();
// const min=time.getMinutes();
// const hrs=time.getHours();


// Below is the code for get the ratio value.
const sec=time.getSeconds()/60;      //formula for get the angle to rotate the seconds needle
const min=(sec+time.getMinutes())/60;  //formula for get the angle to rotate the minutes needle
const hrs=(min+time.getHours())/12;  //formula for get the angle to rotate the hours needle

hours.style.setProperty('--rotation',hrs*360);
minutes.style.setProperty('--rotation',min*360);
seconds.style.setProperty('--rotation',sec*360);

console.log(hrs,min,sec);
}

setInterval(runClock,1000);
runClock();