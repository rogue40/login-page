function registerform(){
		document.getElementByClassName("title")[0].innerHTML="Register to Cool App";
		document.getElementByClassName("btnregister")[0].innerHTML="Login";
		document.getElementByClassName("inputmail")[0].placeholder="enter your mail";
		document.getElementByClassName("inputpassword")[0].placeholder="enter your password";
		document.getElementByClassName("btnEnter")[0].innerHTML="Register";
	}
function logIn(){
		    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Welcome to the Cool App',
        showConfirmButton: false,
        timer: 1500
      })
	}