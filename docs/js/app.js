//Scroll Down Button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $("#myBtn").show();
  } else {
    $("#myBtn").hide();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate(
   {scrollTop:0}, "slow");
}

//Loader

//var overlay = document.getElementById('overlay');

//window.addEventListener('load', function () {
  //overlay.style.display = 'none';
//})


//Contact Forms
window.onload = function(){
        validate();
}

function validate() {
	$('#input-submit').on('click', function (ev) {
	ev.preventDefault();
	let nameReg = /^[a-zA-Z]{3,20}$/;
	let emailRgx = /^.*?@.*?\..*$/;
	let phoneRgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	
	let allFieldsValid = true;
	 
	 
	$('#input-name').val('');
	$('#input-email').val('');
	$('#input-phone').val('');
	
	if ($('#input-name').val().match(nameReg)){
        $('#input-name').css('border', '1px solid #FFF');
    }else {
            $('#input-name').css('border-color', 'red');
		allFieldsValid = false;
	}
	
	if ($('#input-email').val().match(emailRgx)){
            $('#input-email').css('border', '1px solid #FFF');
    }else {
          $('#input-email').css('border-color', 'red');
		allFieldsValid = false;
	}
	
	if ($('#input-phone').val().match(phoneRgx)){
           $('#input-phone').css('border', '1px solid #FFF');
    }else {
            $('#input-phone').css('border-color', 'red');
			allFieldsValid = false;
	}
	
	if (allFieldsValid){
       alert("Your message has send!");
    }else {
        alert("Fill in the gaps!");
    }
 })
}

