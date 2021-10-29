//สร้างตัวแปรเพื่ออ้างอิงไปยังตำแหน่งคอนเทนต์ในเอกสาร HTML
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

//event click
btnCal.addEventListener('click',() => {
    //alert(money.value)
    //result.innerHTML = 'Wow Wow Wow'
    if(money.value.trim().length == 0){
        alert('ป้อนเงินด้วย')
    }else if (person.value.trim().length == 0){
        alert('ป้อนคนด้วย')
    }else{
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }
})

//event ปุ่มยกเลิก
// btnCancel.addEventListener('click',() => {
//     //alert(person.value)
//     money.value = ''
//     person.value = ''
//     result.innerHTML = '0.00'
// })

btnCancel.addEventListener('click',clearScreen)

function clearScreen(){
    money.value = ''
     person.value = ''
     result.innerHTML = '0.00'
}