// console.log(Math.random());
// console.log(Math.round(1.45))
//console.log(Math.floor(1.9))
//console.log(Math.ceil(1.2))
//____________________________________________
function getRandom(){
    // ham random xuat ra so ngau nhien tu 0-99
    const r = Math.random()*100;
    return Math.floor(r);
}
//for(let i=0; i<100; i++);
console.log(getRandom())
//____________________________________________