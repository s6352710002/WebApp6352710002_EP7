console.log('Hi js 9 ...')

function ShowName(name) {
    console.log('สวัสดี' + name);
}

ShowName('แมว') // เรียกใช้ฟังก์ชั่น
ShowName('มด')

function calSum(a,b){
    console.log('a + b ได้ค่าเป็น')
    return a + b;
}

console.log( calSum(10,20) )  //เรียกใช้ฟังก์ชั่น มีค่าส่งกลับ

//alert( calSum(100,99) )

// let test1 = function(){
//     console.log('Hello....')   
// }

let test1 = () => {  // Arrow func
    console.log('Hello....')   
}

// let test2 = function(number){
//     console.log('Hi....')   
// }

let test2 = (number) => { // Arrow func
    console.log('Hi....')   
}

test1()
test1()
test2(200)