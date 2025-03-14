// Fundamentals of JavaScript
// arrays and objects
// functions return
// async js coding
// foreach map filter find indexof


var arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(val){
    console.log(val +" Hello");

})
// forEach is used to iterate over an array
// val is the current value of the array
// console.log(val) will print the value of the array which basically is 1,2,3,4,5,6,7,8,9,10
// console.log(val +" Hello") will print 1 Hello,2 Hello,3 Hello,4 Hello,5 Hello,6 Hello,7 Hello,8 Hello,9 Hello,10 Hello

// map

var ans=arr.map(function(val){
    return 13;
})
console.log(ans);
var ans=arr.map(function(val){
    return val*3;
})
console.log(ans);
// map is used to iterate over an array and return a new array
// map basically kya karega ki vo jo bhi array mei elements hai unko iterate karega and jo bhi function mei return kiya hoga vo ek naya array banayega

// filter

var ans=arr.filter(function(val){
    if(val>= 3) {return true;}
    else {return false;}
})
console.log(ans);

// find

var ans=arr.find(function(val){
    if(val=== 3) return val;

})
console.log(ans);

// indexof
// Go to console and type arr.indexOf(3) and it will return the index of 3 which is 2
// if the element is not present in the array it will return -1
// arr.indexOf(11) will return -1












//Objects
//Objects are key value pairs

var obj={
    name: "Vipul",
    age: 23,
    isAlive: true,
    basically_kuch_colun_mtlb_ye_dot : "ke_andr_kuch_bhi_jo_ki_quote_me_ho",
    nahi_toh : "error"
    // ab console mei jaana hai vaha type karna obj.name ya kuch bhi key name jiska value chahiye ho example obj.age obj.isAlive etc
}
Object.age=24;
// ab console mei jaana hai vaha type karna obj.age
// it will return 24
Object.freeze(obj);
// ab console mei jaana hai vaha type karna obj.age=25



//functions and return

var arr=[1,2,3,4];
//arr.length likhne se 4 return hoga kyuki arr mei 4 elements hai
function abcd(){
    //abcd.length likhne se 0 return hoga kyuki abcd mei koi argument nahi hai
     //number of parameters in fucntion is called arguments which is basically length
}


function abcd(){
    return 10;
}



var ans=abcd();
// ans mei 10 store hoga
// ab console mei jaana hai vaha type karna ans




// async js coding
//line by line code chale isey kehte hai synchronous code
//jo bhi code async nature ka ho,usey side stack main bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara sync code chal jaaye , tab check karo ki async code complete hua ya nahi and agar vo complete hua ho to usey main stack main laao and chalao

async function abcd(){
    var blob=await fetch('https://randomuser.me/api/');
    var ans=await blob.json();
    console.log(ans.results[0].name);
}
abcd();
// ab console mei jaana hai vaha type karna ans
// ans mei ek object aayega jisme name hoga
