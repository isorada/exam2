import sTime from "../other/sTime.js"
import { h1, h2, h1_1, div1, logo } from "../package/hPackage.js"

sTime()

export default function hDiv() {
    let header_div=document.createElement("div")
    header_div.id="header_div";
    {
        /*
            logo and time
        */
        div1.id="lntdiv_id"
            h1_1.id="title_id"
            h1_1.innerHTML=document.title
            logo.id="logo_id"
            h1.id="time_id"
            h2.id="time_result"
        div1.append(h1_1,h1,h2,logo)
    }
    header_div.append(div1)
document.body.append(header_div)
}

$("document").ready(function(){$("#logo_id").click(function(){document.location.href="index.html"})})


