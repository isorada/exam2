import { h3 } from "../package/cPackage.js"

export default function array() {
    const myRequest = new Request('../src/misc/data/data.json');
      
    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        for (const data1 of data.data) {

          h3.innerHTML= data1.output+"<br>"+data1.name2+" ";
          
        }
      }).catch(console.error);
  }
  