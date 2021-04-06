let form = document.querySelector("form");

const onSubmit = () => {
	first =	checkFirstName(form["first_name"]);
	second =	checkLastName(form["last_name"]);
	third =	checkEmail(form["email"]);
	if(first || second || third){
		event.preventDefault();
	} else {
		checkWin([form["number1"],form["number2"],form["number3"]]);
	}
};

const checkFirstName = (input) => {
	if (input.value == "") {
		input.nextSibling.textContent = "Please enter a first name";
	};
	return (input.value == "")
};

const checkLastName = (input) => {
	if (input.value == "") {
		input.nextSibling.textContent = "Please enter a last name";
	};
	return (input.value == "")
};

const checkEmail = (input) => {
	if (input.value == "") {
		input.nextSibling.textContent = "Please enter an email";
		return true;
	} else if (!input.value.match(/(\w{2,20}@\w{2,15}\.\w{2,3})/gm)) {
		input.nextSibling.textContent = "Your email is not valid";
		return true;
	} else {
		return false
	};
};

const checkWin = (numbers) => {
	let random_number = Math.floor(Math.random() * (1000 - 111) + 111)
	let user_number = numbers.map(e => e.value).join("")
	if (random_number == user_number) {
		alert("Oh my god, you won 1 million $");
	} else {
		alert(`You lost, pay your debts please, number was ${random_number}`);
	}
};

form.addEventListener("submit", onSubmit);
