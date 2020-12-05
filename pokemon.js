const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const a1 = () => {
    console.log('btn1');
}
const a2 = () => {
    console.log('btn2');
}
const a3 = () => {
    console.log('btn3');
}
btn1.addEventListener('click', a1)
btn2.addEventListener('click', a2)
btn3.addEventListener('click', a3)