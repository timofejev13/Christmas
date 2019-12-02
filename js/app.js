const countdown = document.querySelector('.countdown');
const launchDate=new Date('Dec 24, 2019 00:00:01').getTime();
console.log(launchDate);

const interval = setInterval(()=>{
    console.log('tick');
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const mins= Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds= Math.floor((distance%(1000*60))/1000);
    console.log(days, "days");
    console.log(hours, "hours");
    console.log(mins, "mins");
    console.log(seconds, "seconds");

    countdown.innerHTML=`
        <div><span>${days} days</span></div>
        <div><span>${hours} hours</span></div>
        <div><span>${mins} mins</span></div>
        <div><span>${seconds} seconds</span></div>
    `;

},1000);