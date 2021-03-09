
const secondHand = document.querySelector(".sec-hand");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360);
    secondHand.style.transform=`rotate(${secondsDegree}deg)`;
    
    const minutes = now.getMinutes();
    const minDegree = ((minutes/60)*360);
    minuteHand.style.transform=`rotate(${minDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours/12)*360);
    hourHand.style.transform=`rotate(${hoursDegree}deg)`;
}

setInterval(setDate,1000);