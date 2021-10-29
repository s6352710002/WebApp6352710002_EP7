//ตัวแปร Variable
var a = 20; //var ประกาศที่ไหนใช้ได้หมด
let x = 100000; //let อยู่นอกสุดเลยใช้ได้หมด ยกเว้นอยู่ใต้สโคป
const y ="Hello";

{
    let b = 15; //let ใช้ได้แต่ในสโคป
    var c = 99; //var เนื่องจากอยู่ในสโคป c เลยเท่ากับ 99 เป็นการฟิกตัวแปลย่อยในสโคป
    const d = 88888; //const ค่าห้ามเปลี่ยน ใช้นอกสโคปไม่ได้
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x);
    console.log("-------------------")

    b = 30;
    a = 100;
    c = 555;
    //d = 11111;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("-------------------")
}

console.log(x);
console.log(a);
//console.log(b); error
console.log(c);
console.log(d);
console.log("-------------------")