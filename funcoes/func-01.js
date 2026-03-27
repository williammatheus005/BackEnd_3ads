function dizOla(){
    console.log("Olá!")
}
function dizOlaPessoa(nome){
    if(typeof nome !== "string"){
        console.error("Por favor, digite um valor textual")
    }
    else {
    console.log(nome + ", diz olá!")
    }
}
dizOla()
dizOlaPessoa(5)
dizOlaPessoa("Pedro")
dizOlaPessoa("Maria")
dizOlaPessoa("Igor")
dizOlaPessoa("kael")
dizOlaPessoa("leonardo")