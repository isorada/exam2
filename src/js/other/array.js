import { h3 } from "../package/cPackage.js"
import arr from "../../misc/data/data.json" assert { type:"json" }

export default function array() {
  let text1 = arr.shift().txt;
  let text2 = arr.shift().txt2;
  let concat =  text1.concat("<br>"+text2)
  h3.innerHTML= arr.shift().title +"<br>"+ concat

}
  