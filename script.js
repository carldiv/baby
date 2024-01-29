function validLogin() {
    var user = document.querySelector("#user").value;
    var pass = document.querySelector("#pass").value;

    if (user == 'marielle' && pass == '12345') {
        alert("Login Successfully");
        document.querySelector("#user").value = "";
        document.querySelector("#pass").value = "";
        window.location.href = "main.html"; 
    } else {
        alert("Wrong Password");
        document.querySelector("#pass").value = "";
    }
}