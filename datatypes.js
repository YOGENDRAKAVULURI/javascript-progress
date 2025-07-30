//data types//

var a=10;
console.log(a);
console.log(typeof(a))
var b=1.23;
console.log(typeof(b))//float also takes as numbers//

var c1="yogendra";
console.log(typeof(c1))

var c=true;
console.log(c);
console.log(typeof c);

var d=null;
console.log(d);
console.log( typeof d);

var e;
console.log(e);
console.log(typeof e);


var f=123445678933526856845655n;
console.log(f);
console.log(f.toString());
console.log(typeof f);

var g=Symbol("mahatma");
console.log(g);
console.log(typeof g);
var h=Symbol("mahatma");
console.log(g==h);
//non-orimitative//
var arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[2]);

let obj={
    username:"anil",
    place:"room",
    marks:99
}
console.log(obj);
console.log(obj.marks,obj.place);

//type conversion//
let age="100";
console.log(typeof age);

var updateage=Number(age);
console.log(typeof updateage)
var updateage1=String(updateage);
console.log(typeof updateage1)
// type coeration//
console.log(10+30);
console.log(10+30+"javascript");
console.log(10+30+"javascript"-"python");
console.log(10+30+"javascript"-"python"+90);
console.log(10+30+"javascript"-"python"+"90");
console.log(true+50+false);
console.log(true-50+false);
