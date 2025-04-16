// // console.log("---Welcome in js---");

// // const myHTML =  `<h1>Added From Js</h1>`;
// // const mHTML =  `<h2>Sonal Jain</h2>`;
// // const myyHTML =  `<h3>249222</h3>`;
// // const meHTML = myHTML+ `<h4>BCA_2nd_B</h4>`;

// // const htmlEle = document.getElementById("container");
// // const htmlElee = document.getElementsByClassName("container2")[0];

// // htmlEle.innerHTML = myHTML;
// // htmlEle.innerHTML += mHTML;
// // htmlEle.innerHTML += myyHTML;
// // htmlElee.innerHTML += meHTML;

// const container = document.getElementById("container");

// for (let i = 0; i < data.length; i++) {
//     const myObj = data[i];
//     const myHtml = `<h1>${myObj.ccn3}</h1>
//     <h3>${myObj.name.commom}</h3>`;
//     container.innerHTML += myHtml;
// }

console.log("---Functions---");

// function sum(a, b) {
//     const result = a + b;
//     return result;
// }
// const ans =sum(6, 7);
// console.log(ans);


// function sub(a, b) {
//     const result = a - b;
//     return result;
// }
// const anss =sub(6, 7);
// console.log(anss);

// //arrow functions

// const division = (a, b) => {
//     const result = a / b;
//     return result;
// };
// const div1 = division(4, 7);
// console.log(div1);

// const multiplication = (a, b) => {
//     const result = a * b;
//     return result;
// };
// const div2 = multiplication(4, 7);
// console.log(div2);

// const htmlEle = document.getElementById("display");
// function sum(a, b) {
//     const result = a + b;

// console.log("sum : ",result);
// htmlEle.innerHTML = result;
// return result;
// }

// function sub(a, b) {
//     const result = a - b;

// console.log("sub : ",result);
// htmlEle.innerHTML = result;
// return result;
// }

// function division(a, b) {
//     const result = a / b;

// console.log("division : ",result);
// htmlEle.innerHTML = result;
// return result;
// }

// function multiplication(a, b) {
//     const result = a * b;

// console.log("multiplication : ",result);
// htmlEle.innerHTML = result;
// return result;
// }

let container = document.getElementsByClassName("container")[0];

for(let i = 0; i < data.length; i++) {
    const myObj = data[i];
    const myHTML =`
    <div class="card" style="border:4px solid black">
        <img src=${myObj.flags.png} alt="">
        <h3>${myObj.name.common}</h3>
        <h3>${myObj.population}</h3>
        <h3>${myObj.region}</h3>
        <h3>${myObj.capital}</h3>
        <p></p>
        <p></p>
        <p></p>
    </div>`;

    container.innerHTML += myHTML;
    }


