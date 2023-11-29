const gmailInput=document.getElementById("gmailLU");
const passwordInput = document.getElementById("PasswordLU");
function Login() {
    let gmail=gmailInput.value;
    let password = passwordInput.value;
    if(gmail==""&& password=="franz"){
        window.close()
        window.open("./login.html")
        
    }
    else{
        if(gmail=="123@gmail.com"&& password=="franz"){
            alert("accediste a tu cuenta")
        }
        else{
            alert("no se pudo acceder, intenta de nuevo o contactanos por correo electronico <EMAIL>")
        }
        
    }
  }
  