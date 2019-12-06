const getUsserData = () => {
	let name = $("#usser-name").val();
	let surname = $("#usser-surname").val();
	let email = $("#usser-email").val();
    let password = $("#usser-password").val();
    let priv = checkFunct();

    let usserObject = { name, surname, email, password,priv}
	console.log(usserObject);
    //productsRef.push(ussertObject);
    return usserObject;
}




const checkFunct = () => {

    let isChecked = document.getElementById('priv_check').checked;

    if(isChecked) return 1;

    else return 0;
}

$("#add_usser").on("click",() => {

    let usserData = getUsserData();

    if(!usserData.name) {
    alert("Enter your name");
    return 0;
    }

    if(!usserData.surname) {
    alert("Enter your surname");
    return 0;
    }

    if(!usserData.email){ 
        alert("Enter your email");
        return 0;
    }

    if(!usserData.password){ 
        alert("Enter your password");
        return 0;
    }

    if(!usserData.priv) {
        alert("Check the box");
        return 0;
    }
})
