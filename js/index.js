let user = '{"username":"kart-jim","age":20}';
// let myJson = eval('('+user+')')
let myJson = JSON.parse(user)
console.log(myJson.username)

let dog = Object();
dog.name = 'xiao-huang';
dog.age = 4.5;
const out = JSON.stringify(dog)
console.log(out);

if (typeof JSON == 'object'){
    console.log("支持JSON");
}else{
    console.log('不支持JSON');
}

let x = 'apple';
var f1 = function (){
    console.log(x);
    x = 'pear';
}
x = 'banana';
var f2 = function (){
    console.log(x);
}
f1();
f2();