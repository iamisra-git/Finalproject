function form() {
	var error =document.getElementById("error");
	var msg;
	error.style.padding="10 px";

	var name=form1.name.value;
	if(name=="" || name.length<5 ){
		alert("ENTER YOUR PROPER NAME!!");
		msg="please enter valid id";
		form1.name.focus();
		error.innerHTML=text;
		return false;

	}

	var email=form1.email.value;
	if(email==""  ){
		alert("ENTER YOUR PROPER EMAIL ID!!");
		msg="please enter valid name";
		form1.name.focus();
		error.innerHTML=text;
		return false;

	}

	var message=form1.message.value;
	if(message==""  ){
		alert("ENTER TEXT!!");
		msg="please enter valid text";
		form1.message.focus();
		error.innerHTML=text;
		return false;

	}
	return true;
}