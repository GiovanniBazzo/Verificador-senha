function verificarMinimo() {
    let senha = document.getElementById("senha").value

    function caracteres() {
        if(senha.length < 8) {
            alert("Inválida, a senha precisa ter no mínimo 8 caracteres")
        }
    }
    
    function caracteresEspecias() {
        if(senha = !senha.match(/[@#$%&!^*_,]/)) {
            alert("Inválida, a senha precisa ter no mínimo 1 caractere especial")
        }
    }
    
    if(senha.length >= 8 && senha.match(/[@#$%&!^*_,]/)) {
        alert("Senha válida!")
    } else {
        caracteres() || caracteresEspecias()  
    }
}


document.getElementById("senha").focus()