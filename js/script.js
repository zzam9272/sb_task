var $ = jQuery.noConflict();

var app = app || {};
!function(){
	"use strict";

	app.form = {
		init: function() {
			var errorEmailMsg = 'Your E-Mail is not valid';
			var errorPasswordMsg =  'Your Password is not valid';

			// Validate form before submitting
			// Add the error messages if the email
			// or password is not valid
			$('form').submit(function(event) {

				// To complete
				// event.preventDefault();
				
				//Obtain the values from form elements
				var emailAddress = document.getElementById('email').value;
				var password = document.getElementById('password').value;
				
				//Obtain the error message placeholders
				var emailError = document.getElementById('emailError');
				var passwordError = document.getElementById('passwordError');

				//Define the error variables with a default value
				var emailErrorVal = true;
				var passwordErrorVal = true;
				
				//Define the function to display errors on form
				function displayError(elemId, errorMsg) {
					elemId.innerHTML = errorMsg;
					elemId.classList.add('active');
				}

				//Validate email address
                if(app.form.validateEmail(emailAddress) == false) {
					displayError(emailError, errorEmailMsg);
				} else {
					displayError(emailError, '');
					emailErrorVal = false;
				}

				//Validate password
				if(app.form.validatePassword(password) == false) {
					displayError(passwordError, errorPasswordMsg);
				} else {
					displayError(passwordError, '');
					passwordErrorVal = false;
				}

				//Prevent form submission if errors exist
				if((emailErrorVal || passwordErrorVal) == true) {
				  return false;
				} 
				
			});
		},
		/**
		 * Email Validation
		 * 
		 * @param {String} email Email value as a String
		 * 
		 * @return {Boolean} If email is valid return true otheriwse false
		 */
		validateEmail: function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		/**
		 * Password Validation
		 * 
		 * @param {String} password Password value as a String
		 * 
		 * @return {Boolean} If password is valid return true otheriwse false
		 */
		validatePassword: function(password) {
			// To complete
			//check that password contains characters other than just white space
			var re = /\S/;
			return re.test(password);
		}
	};

	$(document).ready(app.form.init);

}(jQuery);

