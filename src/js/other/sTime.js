import { h1, h2 } from "../package/hPackage.js"

export default function sTime(){
    var time = new Date(); const h=time.getHours(), m=time.getMinutes(),s=time.getSeconds();
    let ampm=document.createElement("p"); 
    
    h >= 12 ? ampm.innerHTML="pm":"am", h >= 0==24 ? ampm.innerHTML="am":"pm";
    h <= 8 ? h2.innerHTML="breakfast":"absent", h <= 18 && ampm.innerHTML=="pm" ? h2.innerHTML="dinner":"absent";
    h >= 8 || h >= 12 || h >= 18 || h == 0 > 1 ? h2.innerHTML="idling":"absent";
    
    h1.innerHTML=h+":"+m+":"+s+" "+ampm.innerHTML;
    setTimeout(sTime, 1000);
}