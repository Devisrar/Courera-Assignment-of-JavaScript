var arrr=['12','2','34','56'];
if(arrr.includes("12")){
    console.log("yes");
}
else{
    console.log("wrong");
}


// length of the arrrays list
var l1=["israr","sarim","adeeba","tayyaba"];
console.log(l1.length);
//sorting an array
var result=l1.sort();
console.log((result));
// console.log(l1.sort());
// reverse sort
console.log((l1.reverse()));
//tostring() method odf an array
console.log(l1.toString());


const listoffruits=[1,2,3,4,5,10];
var newarr=listoffruits.flatMap(x=>x*2);
console.log(newarr);


//indexfinding
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", -2);
console.log(index);