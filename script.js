function getFormvalue() {
    //Write your code here
	event.preventDefault();

	let form=document.getElementById("form1");
	let name=form.fname.value;
	let lastName=form.lname.value;
	let fullName=name+" "+lastName;
	alert(fullName);

}
