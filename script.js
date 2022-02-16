document.querySelector('#myForm').addEventListener('submit', function(e) {
  e.preventDefault()
  let number=this.elements.phoneNum.value;
  // console.log(number);
  // console.log(typeof(number));
  // console.log(number.length);
  if(number.length!==10){
    // alert("Enter A Valid 10 Digit Number !!");
    Swal.fire({
      title: 'Not A Valid Number',
      text: "Enter a valid 10 digit number !",
      icon: 'error',
      confirmButtonColor: '#ff0000',
      confirmButtonText: 'Check Number'
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
         return;
      }
    })
  }else{
    window.location.replace("https://wa.me/91"+number);
  }
});