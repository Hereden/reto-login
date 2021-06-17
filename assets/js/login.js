function agregarStorage() {
    localStorage.setItem('email', 'cesare@hotmail.com');
    localStorage.setItem('password', '12345');
    localStorage.setItem('siniciada','FALSE');
}

agregarStorage();

function comprobar(){    
    var correo=document.getElementById("emailInput").value;
    var pass=document.getElementById("passwordInput").value;
    console.log(`Intento 1: ${correo} ${pass}`)
    if(localStorage.getItem("email")==correo && localStorage.getItem("password")==pass){
        document.getElementById("loginMenu").setAttribute("style","display:none;visibility:hidden;");
        document.getElementById("formularios").setAttribute("src","login.html");
        localStorage.setItem('siniciada','TRUE');
    }
}

function comprobar3(){    
    var correo=document.getElementById("emailInput2").value;
    var pass=document.getElementById("passwordInput2").value;
    console.log(`Intento 1: ${correo} ${pass}`)
    if(localStorage.getItem("email")==correo && localStorage.getItem("password")==pass){
        document.getElementById("loginMenu").setAttribute("style","display:none;visibility:hidden;");
        document.getElementById("formularios").setAttribute("src","login.html");
        localStorage.setItem('siniciada','TRUE');
    }
}

function comprobar2(){
    if(localStorage.getItem("siniciada")=="TRUE"){
        document.getElementById("formularios").setAttribute("src","login.html");
    }else{
        document.getElementById("formularios").setAttribute("src","principal.html");
    }
}

function salir() {
    localStorage.setItem('siniciada','FALSE');
    document.getElementById("formularios").setAttribute("src","principal.html");
}