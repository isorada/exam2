import { h1, h2, form1, input1 as fname, input2 as age ,input3 as email , input4 as button} from "../package/cPackage.js"

export default function form() {
    fname.type="text", age.type="number", email.type="text", button.type="button";
    fname.placeholder="Input first name", age.placeholder="Input age", email.placeholder="Input email";
    button.value="Submit";
    form1.append(fname, age, email, button)
}
button.onclick= async function(){
    let i = 1;
    fname.value.length <= 0 || fname.value.length >= 10 ? alert("10 Characters only") : i++;
    age.value <= 1 || age.value >= 100 ? alert("age 1-100") : i++; 
    email.value.indexOf("@") == -1 ? alert("Not a valid email") : i++;
    i == 4 ? output() : "";
}
async function output(){
    h1.innerHTML="OUTPUT:"
    h2.innerHTML= "Name: "+fname.value+"<br>"+"Age: "+age.value+"<br>"+"Email: "+email.value;
}