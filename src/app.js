const closeModalBtn = document.querySelector(".close-modal");
const closeDialogBtn = document.querySelectorAll(".close-dialog");
closeDialogBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		const dialog = btn.closest("dialog");
		dialog.close();
	});
});

closeModalBtn.addEventListener("click", () => {
	const modal = closeModalBtn.closest(".modal");
	modal.classList.remove("active");
});
function formValidation() {
	const form = document.querySelector("#form");
	const emailInput = document.querySelector("#email");
	const nameInput = document.querySelector("#name");
	const passwordInput = document.querySelector("#password");
	const ageInput = document.querySelector("#age");
	const modal = document.querySelector("#reg-confirmation");
	const dialog = document.querySelector("#confirmation-dialog");

	const showErrorMessage = (input, message) => {
		input.closest(".form-group").classList.remove("success");
		input.closest(".form-group").classList.add("error");
		input.closest(".form-group").querySelector(".error-message").textContent =
			message;
	};
	const showSuccessMessage = (input, message) => {
		input.closest(".form-group").classList.remove("error");
		input.closest(".form-group").classList.add("success");
		input.closest(".form-group").querySelector(".error-message").textContent =
			message;
	};

	const isNameValid = () => {
		const val = nameInput.value.trim();
		if (val === "") {
			showErrorMessage(nameInput, "Name is required");
			return false;
		} else if (val.length < 3) {
			showErrorMessage(nameInput, "Name is too short");
			return false;
		} else {
			showSuccessMessage(nameInput, "Name is valid");
			return true;
		}
	};
	const isEmailValid = () => {
		const val = emailInput.value.trim();
		const emailRegExp =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (val === "") {
			showErrorMessage(emailInput, "Email is required");
			return false;
		} else if (!emailRegExp.test(val)) {
			showErrorMessage(emailInput, "Email is not correct format");
			return false;
		} else if (!/@gmail\.com$/.test(val)) {
			showErrorMessage(emailInput, "Email must be gmail.com");
			return false;
		} else {
			showSuccessMessage(emailInput, "Email is valid");
			return true;
		}
	};
	const isAgeValid = () => {
		const val = ageInput.value.trim();
		// console.log(typeof val);
		// Number(val); => 5
		if (Number(val) < 0 || Number(val) > 10) {
			showErrorMessage(ageInput, "Age must be between 0 and 10");
			return false;
		} else {
			showSuccessMessage(ageInput, "Age is valid");
			return true;
		}
	};

	nameInput.addEventListener("input", isNameValid);
	emailInput.addEventListener("input", isEmailValid);
	ageInput.addEventListener("input", isAgeValid);

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const nameValid = isNameValid();
		const emailValid = isEmailValid();
		const ageValid = isAgeValid();

		if (nameValid && emailValid && ageValid) {
			console.log("Form is valid");
			//  form.submit();
			// modal.classList.add("active");
			dialog.showModal();
		}
		// form.submit()
		// form.reset()
	});
}
formValidation();