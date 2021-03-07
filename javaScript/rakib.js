// console.log("rakib is gona insah allah be a programer");
// // document.write("rakib is gona insah allah be a programer");

// var sure_name="rakib";
// console.log(sure_name);
// // document.write("<hr>");
// // document.write(sure_name);

// var age = 30;
// console.log("hi my name is "+sure_name+"and I am "+age+" years old!");



// var team= ["rakib", "mike","rakin","sumon"];
// console.log(team[2]);
// var fruit = ["banana","Apple","Orange","strawberry "];

// console.log(fruit.sort());

// var output="hello world rakib";

// // document.write(output.substr(4,5)); // output "o wor" only five charcter

// if (true){
//     var varVariable= "this is var";

// }

// console.log(varVariable);
// if(true){
//     let letVariable= "this is let"
// console.log(varVariable);

// }
// // console.log(letVariable);
// var age_rubi =5;
// function f(){
//     alert("Foo \n bar");
//     console.log(age_rubi);
// }
// // console.log(a);
// // f();
// const colors = ['blue', 'yellow', 'pink'];
// let age_abdulla= 54;

// // colors = [ 'green', 'purple', 'brown'];

// // const colors=['yellow', 'pink']
//  colors.push('Black');
//  console.log(colors);


// console.log(typeof(age_abdulla.toString()));

// console.log("this is my country".length);

// function student_age(age){
//     console.log("stdent_age is "+age);
// }

// student_age(32);



// let  a= "this is my village and name barishal";

// // console.log(a.indexOf('s'));

// let temp=new Array();
// temp=a.split(" ");
// // console.log(temp);

// console.log(temp[1]);

// let  x= "this is my village";
// // console.log(x.substring(2,4));
// // console.log(x.substring(3));

// // console.log(x.toUpperCase());
// // console.log(x.toLowerCase());

// let two_d_array=[["1","2","3"],
//                  ["4","5","6"],
//                  ["7","8","9","10"]];

// console.log(two_d_array[2][3]);

// console.log((two_d_array.pop()));

// two_d_array.push();
// console.log(two_d_array);


// var fruits = ["Banana", "Kiwi", "Apple", "Watermelon"];

// console.log(fruits.slice(2,3));
// var n= "4";
// console.log(n.number());


// let two_d_array=[["1","2","3"],
//                   ["4","5","6"],
//                  ["7","8","9","10"]];
// console.log(two_d_array[0][1]);
// console.log("\n");          
// console.log(two_d_array[0][2]);




// function product(name, price)
//   {
//       return  "The product: " + name + " costs €" + price;
//   }
// console.log(product("Bread", 1.99));



// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(2,45));

// function print() {
//     document.write("hello our  answer is "+sum(3,54));
// }

// print();
// function returnParam(param1, param2) {
//     let result =`this is param1 ${param1} and another is the paramiter ${param2}`;
//     console.log(result);
//  }
//     returnParam("Tesla", "Volvo");


// var area=(function(a,b){
 
//     return a*b;
// }(4,3));
// document.write("\n area is "+ area);


// var area=function(c,d){
 
//     return c*d;
// };
// document.write("\n area is "+ area(54,2));
 

// function getResult(a,b,c){
//     let sum=a+b+c;
//     let multi=a*b*c;
//     let result=[sum,multi];

//     return result;
// }
// document.write(getResult(4,6,54)[0]);
// document.write("<br>");

// document.write(getResult(4,12,64)[1]);

// document.title="my | Rakib";
// console.log(typeof(document.all));
// for(let element of document.all){
//     console.log(element);
// get element by ID 
//  let my_text=document.getElementById("my_text");
// my_text.textContent="my country is very nice as well";
// my_text.innerText="austria is very nice country as well";
// my_text.innerHTML="vienna  is very nice city as well";

// console.log(my_text.innerHTML);
// my_text.style.color="red";
// // my_text.style.marginTop="5px red"
// my_text.style.fontSize="70px";
// my_text.style.textShadow="5px 5px 1px #ff0000";


// let input_id=document.getElementById("exampleInputPassword1");
// input_id.style.backgroundColor="yellow";

// let rakib=document.getElementsByClassName("my_class");
// console.log(rakib);
// for(let i= 0;i<rakib.length;i++){
//     rakib[0].style.color="red";
//     rakib[0].style.fontSize="30px"
//     rakib[0].style.backgroundColor="#0f0f"

//     rakib[1].style.color="orange";
//     rakib[1].style.fontSize="25px"
// }

//  const parent=document.querySelector("#email");
//  const children=parent.children;

//  for(let i=0;i<children.length;i++){

//     // console.log(children[i]);
// children[2].style.color="#0f0f"
//     // eleme="red"

//  }

//  const children= document.querySelector("#emailHelp");
//  const parent=children.parentElement;
//  console.log(parent);

// const children= document.querySelector("#emailHelp");
// const grandparent =children.closest(".my_class");
// console.log(grandparent);

// const childrenOne= document.querySelector(".form-label");
// const childrenTwo=childrenOne.nextElementSibling;
// childrenTwo.style.backgroundColor="#0f0f";
// childrenTwo.style.color="#fff";
// childrenTwo.style.borderColor=" #e3e";



// const childrenTwo= document.querySelector("#exampleInputEmail1");
// const childrenOne=childrenTwo.previousElementSibling;
// childrenOne.style.backgroundColor="#0f0f";
// childrenOne.style.color="#fff";
// childrenOne.style.borderColor=" #e3e";





// const items=document.getElementsByClassName("my_class")[0];
// items.style.backgroundColor="#0f0f"
// let colors= ["green","yellow","white","red","orange"];
// colors.forEach((value)=>{
//     console.log(`the value of the element is ${value} `);
// })


var i=1;
var msg="";
while(i<10){
    msg+=(`${i} x 5 = ${i*5} <br/>`);
    i++;
    document.write(msg);
}