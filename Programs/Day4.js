// var a={

// name:"ambika",
// id:4,
// present:true

// }

// console.log(typeof a.id);
// console.log(a.name);
// console.log(a.present);


// // var emp={
// //     firstname:'aryav',
// //     lastname:'kv',
// //     fullname:function(){

// //         var output=this.firstname+this.lastname;
// //         console.log(output);
// //     }

// // }

// // emp.fullname();

// var d=new Date();
// var fy=d.getFullYear();
// var m=d.getMonth();
// var d1=d.getDay();
// var h=d.getHours();

// console.log(fy)
// console.log(m)
// console.log(d1)
// console.log(h)

// var a=[1,2,3,4];
// console.log(a);

// var a=['john','doe','laura'] //0 1 2
// // var b=['Ambika','Prameela','Shweta'] //0 1 2

// // console.log(a.length);
// // //non primitve are changeable
// // console.log(typeof a);
// // console.log(a[0]); 

// // a[3]='mary'; //3
// // console.log(a);

// // console.log(a.length)  //4 

// // a.push('jack')
// // console.log(a)

// // a.pop();
// // console.log(a)

// // a.unshift('aryav')
// // console.log(a)

// // a.shift();
// // console.log(a)

// // var b=a.join("*");
// // console.log(b)


var a=['john','doe','laura','jason'] //0 1 2
// // var b=['Ambika','Prameela','Shweta'] //0 1 2

// // var d=['mitali','Peetha','siva']
// // // var c=a.concat(b,d); //to append or to combine two arrays
// // // console.log(c)

// // var s1=a.slice(1,3); //it returns a part of an array or subset of an array
// // console.log(s1)


// //splice 
// a.splice(2,2,"ambika","prameela"); //start index, number of values to delete, new elements to be added to deleted part
// console.log(a)


// var a2=['a1','doabce','doeee'];

// var a3=a1.concat(a2);

// console.log(a3);
// var s=a3.slice(1)
// console.log(s)



// and for of
//values of the array


// for (var i of a1) {  
//     console.log(i);
// }

//for in

// for (var i in a1) {
//    console.log(i);
// }

// var obj={
//     name:'john',
//     name2:'doe',
//     name3:'jason'
// }




// for (var i in obj) {
//     console.log(i);
// }
var a1=[10,30,60,5];

a1.forEach(myFunction);

function myFunction(item,index,arr){ //10,30,60,5
    //0 1 2 3
arr[index]=item*10;
}

console.log(a1)
