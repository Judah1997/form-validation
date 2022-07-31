const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e){

				e.preventDefault();
				validateInputs();
});
const setError = function(element, message){
				const inputControl = element.parentElement;
				const errorDisplay = inputControl.querySelector('.error');
				
				
				errorDisplay.innerText = message;
				
				inputControl.classList.add('error');
				inputControl.classList.remove('success');
}

const setSuccess = function(element){
				const inputControl = element.parentElement;
				const errorDisplay = inputControl.querySelector('.error');
				
				errorDisplay.innerText = '';
				inputControl.classList.add('success');
				inputControl.classList.remove('error');
				
};

const isValidEmail = function(email) {
	const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).tolowerCase());
}



const validateInputs = function(){
				const usernameValue = username.value.trim();
				const emailValue = email.value.trim();
				const passwordValue = password.value.trim();
				const password2Value = password2.value.trim();
				
				if (usernameValue === '') {
							setError(username, 'username is required!!')	;
				}else {
								setSuccess(username);
				}
				
				
				if (emailValue === '') {
								setError(email, 'email is required!!!');
				}else if(!isValidEmail(emailValue)){
								setError(email, 'please provide a valid email eg@email.com');
				}else {
								setSuccess(email)
				}
				
				
				
				if (passwordValue ==='') {
								setError(password, 'password is required!!');
				}else if(passwordValue.length < 8){
								setError(password, 'password must be at least 8 characters!!!');
				}else {
								setSuccess(password);
				}
				
				if(password2Value === '') {
								setError(password2, 'passwords are not a match!!');
				}else if (password2Value !== passwordValue) {
				          setError(password2, 'Passwords provided do not match!!!');
								
				}else {
								setSuccess(password2,);
				}
}
