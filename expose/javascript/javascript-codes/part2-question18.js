function EverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
//delay of 1000 millisecond/ every second
setInterval(EverySecond, 1000);