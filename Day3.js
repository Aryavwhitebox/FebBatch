// var a=10; //single
// console.log(a);

// var b=11, c=22;
// var d=a+b;
// console.log(d) //double
// //1 -10
// // //1 - 100

// var a=10, b=10;  //1
// // first condition or 2nd condition
// // == or !=
// if (a==b) // satisfies 
// {  //if condition doesnt satisfy it will go inside
//     //block : helps us to write piece of code inside it
// console.log("a and b are equal")
// }

// else{
//    console.log("a and b are unequal") 
// }

// //falsy  values 
// // 0 null  undefined "" NaN false

// if(0){
// console.log('true')
// }

// else{
//     console.log('falsy')
// }

// if(false){
//     console.log('true')
//     }
    
//     else{
//         console.log('falsy') 
//     }
    
    //ternary operator

// var a=20;
// //i want to check if the age is greater than 18 or not

// if(a>=18){
//     console.log("eligible for vote")
// }
// else{
//     console.log("not eligible")
// }


// //ternary operator
// var a=18;
// //(condition)?true: false;
// console.log((a>=18)?'eligible':'not eligible');


//Else if ladder

//monday day1
//tuesday day2..... sunday day 7

// var day='tuesday';
// if(day=='monday')
// {
//     console.log("day 1")
// }

// else if(day=='tuesday'){
//     console.log('day 2')
// }

// else if(day=='wednesday'){
//     console.log('day 3')
// }

// else if(day=='thursday'){
//     console.log('day 4')
// }

// else if(day=='tuesday'){
//     console.log('day 5')
// }
// else if(day=='friday '){
//     console.log('day 6')
// }

// else{
//     console.log('day 7')
// }

//switch case;

// var day=20;
// //break 
// //cases 1 2 3 4 5 6 7
// switch(day){
// case 1:console.log('monday');break;
// case 2:console.log('tue');break;
// case 3:console.log('wed');break;
// case 4:console.log('thurs');break;
// case 5:console.log('fri');break;
// case 6:console.log('sat');break;
// default: console.log('please enter a valid date');
// }

//for loop 
//while loop
//do while 
// 1 -10

//for loop
// for(var a=0;a<=10;a++){
//     console.log(a)
// }

// var a=0;  //initializing

// while (a<=10) {  // checking the condition
//     console.log(a);  //printing 
//     a++;  //incrementing
// }


//do while
//initialize
//do (incrementation)
//do printing
//while (condition check)

// var a=0;
// do{
// a++;
// console.log(a)
// }
// while(a<=10);

//while  (init, condition check , printing the block, incrementation)

//do while(initializtion, increment, print the block, checking the condition)
// function c1(){
//     var a=10;
//     var b=20;
//     console.log(a+b)
// }
// c1();


// function name(a,b) {  //input
//    return a+b  //5  //output
// }
// //declare a function
//  console.log(name(2,3));
// // console.log(name(15,20));
// // name(2,3);



function name(){

    var a=10;
    var b=20;
    console.log(a+b)
}

name();

//function expression a, b, c,d

function sum(a,b)

{

 var total=a+b;
  console.log(total)
}

var a=sum(1,2);

//anonymous
var an=function(a,b){

    return a+b;
}

var funExp=an(1,2);
console.log(funExp);
