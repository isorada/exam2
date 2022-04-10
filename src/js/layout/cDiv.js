import { div1, div2, form1, h1, h2, h3} from "../package/cPackage.js"
import array from "../other/array.js"
import form from "../other/form.js"


form()
array()

export default function cDiv() {
    let container_div=document.createElement("div")
    container_div.id="container_div.id"
    {
        /*
            form
        */
        div1.id="form_div"
            h3.id="array_id"
            div2.id="output_div"
            div2.append(h1, h2)
        div1.append(form1, div2, h3)
    }
    container_div.append(div1)
document.body.append(container_div)
}