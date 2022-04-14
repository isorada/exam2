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
    const array1 = [fname.value, age.value, email.value];
    array1.sort()
    const array2 = [fname.value, age.value, email.value];
    array2.sort(function(a,b) {return b-a})

    h1.innerHTML="OUTPUT:";
    h2.innerHTML= "Name: "+fname.value+"<br>"+"Age: "+age.value+"<br>"+"Email: "+email.value+"<br>"+array1+"<br>"+array2;
}

/*

<!Doctype html>
<title>

</title>

<head>

</head>

<body>
    <form>
        Name: <input type="text" id="name" required><br>
        Age: <input type="number" id="age" required><br>
        Email: <input type="email" id="email" required><br>
        <input type="text" name="txtval[]" value="" /><br>
        <input type="text" name="txtval[]" value="" /><br>
        <input type="text" name="txtval[]" value="" /><br>
        <button type="button" onclick="Myfunction()" value="Submit">submit</button>
    </form>

<script>

function Myfunction() {
    let at = document.getElementById("email").value.indexOf("@");
    let age = document.getElementById("age").value;
    let n = document.getElementById("name").value;
    let numb;
    const time = new Date().getHours();
    let greeting;
    submitOk="true";
if (isNaN(age)  age < 1  age > 100) {
        alert("The limit age is 1-100");
        submitOk="false";
    }

    if (age <= 18){
        numb="Young";
}

    else if (age <= 25 ){
        numb="Young Adult";
}

    else if (age <= 30){
        numb="Adult";
}

    else if (age <= 100){
        numb="Old";
}


    if (n.length > 10) {
        alert("10 letters only");
        submitOk="false";
    }

    if (at == -1) {
        alert("Not a valid email");
        submitOk="false";
    }

    if (submitOk == "false") {
        return false;
    }

    if (time <= 9){
    greeting="gising";
    }

    else if (time <= 11 ){
    greeting="saing";
    }

    else if (time <= 13){
    greeting="laro ng iba";
    }

    else if (time <= 18){
    greeting="genshin";
    }
    else {
    greeting="sleep";
    }

    var content="<b>Results :</b><br>";
    var input = document.getElementsByName('txtval[]');

            for (var x = 0; x < input.length; x++)
            {
                var a = input[x];
                content = content + a.value + "<br> ";
            }

    const word = [input];

    word.sort ();


    let h2 = document.createElement("h2");;
    at = document.getElementById("email").value;
    h2.innerHTML= n+"<br>"+at+"<br>"+age+"<br>"+numb+"<br>"+greeting+"<br>"+content+"</b>";
    document.body.append(h2);
}


</script>

</body>

</html>

*/