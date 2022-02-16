document.querySelector('#myForm').addEventListener('submit', function(e) {
  e.preventDefault()
  let number=this.elements.phoneNum.value;
  // console.log(number);
  // console.log(typeof(number));
  // console.log(number.length);
  if(number.length!==10){
    alert("Enter A Valid 10 Digit Number !!");
    location.reload();
    return;
  }
  window.location.replace("https://wa.me/91"+number);
});