// Tambahkan kode JavaScript kalian di file ini
// javascript DOM
$(document).ready(function(){
   $("#kesatu").click(function(){
      $("#myDiv1").show();
      $("#myDiv2").hide();
      $("#myDiv3").hide();
      $("#myDiv4").hide();
      $("#myDiv5").hide();
      $("#gambar").hide();
   });
   $("#kedua").click(function(){
      $("#myDiv1").hide();
      $("#myDiv2").show();
      $("#myDiv3").hide();
      $("#myDiv4").hide();
      $("#myDiv5").hide();
      $("#gambar").hide();
   });
   $("#ketiga").click(function(){
      $("#myDiv1").hide();
      $("#myDiv2").hide();
      $("#myDiv3").show();
      $("#myDiv4").hide();
      $("#myDiv5").hide();
      $("#gambar").hide();
   });
   $("#keempat").click(function(){
      $("#myDiv1").hide();
      $("#myDiv2").hide();
      $("#myDiv3").hide();
      $("#myDiv4").show();
      $("#myDiv5").hide();
      $("#gambar").hide();
   });
   $("#kelima").click(function(){
      $("#myDiv1").hide();
      $("#myDiv2").hide();
      $("#myDiv3").hide();
      $("#myDiv4").hide();
      $("#myDiv5").show();
      $("#gambar").hide();
   });
});

// javascript form
function handleGetFormData() {
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const city = document.getElementById('city').value;
   const zipCode = document.getElementById('zip-code').value;
   const status = document.getElementById('status').checked;

   return {
       name,
       email,
       city,
       zipCode,
       status
   };
}

function isNumber(str){
   return !isNaN(str);
}

function checkboxIsChecked(){
   const isChecked = $("#status").is(":checked");
   return isChecked;
}

function validateFormData(data) {
   const warning = document.getElementById('warning');
   let isValid = true;

   if (data.name === '' || data.city === '' || data.email === '' || data.zipCode === '') {
       warning.textContent = 'Periksa form anda sekali lagi';
       isValid = false;
   } else if (!isNumber(data.zipCode)) {
       warning.textContent = 'Zip code harus angka';
       isValid = false;
   } else if (!checkboxIsChecked(data.status)) {
       warning.textContent = 'Checkbox harus diisi';
       isValid = false;
   } else {
       warning.textContent = '';
   }

   return isValid;
}

function submit() {
   console.log(handleGetFormData())
    if(validateFormData(handleGetFormData())){
        document.getElementById('warning').textContent = '';
    }else{
        document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
    }
}

document.getElementById('form').addEventListener('submit', (e) => {
   e.preventDefault();
   submit();
   });

