const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

const registrationDialog = document.getElementById("certificat-dialog")
const openRegistrationDialog = document.getElementById("open-certificat-dialog")
const closeRegistrationDialog = document.getElementById("close-certificat-dialog")

if (registrationDialog && openRegistrationDialog && closeRegistrationDialog) {
	openRegistrationDialog.addEventListener("click", () => registrationDialog.showModal())
	closeRegistrationDialog.addEventListener("click", () => registrationDialog.close())
}

// Stop at 5:47:00