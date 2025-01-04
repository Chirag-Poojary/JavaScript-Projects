function update(){
    const now=new Date();
    let hrs=now.getHours();
    const meridiem = hrs> 12 ? "PM" : "AM";
    hrs=hrs%12||12;
    hrs = hrs.toString().padStart(2, 0);
    const mins=now.getMinutes().toString().padStart(2, 0);
    const secs=now.getSeconds().toString().padStart(2, 0);
    const timeString=`${hrs}:${mins}:${secs} ${meridiem}`;
    document.getElementById('clock').textContent=timeString;
}
update();
setInterval(update, 1000);