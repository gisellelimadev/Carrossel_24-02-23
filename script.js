function posterior ()
{
    let itemAtivo = document.querySelector(".active");
    let posicaoAtiva = itemAtivo.getAttribute("posicao");
    let todosITems = document.querySelectorAll ("li");
    if (posicaoAtiva == todosITems.length){
        posicaoAtiva = 1;
    } else {
    posicaoAtiva++;
}
    for(let i = 0; i <todosITems.length; i++){
       if (todosITems[i].getAttribute("posicao")== posicaoAtiva){
        todosITems[i].classList.add("active")
    }else{
        todosITems[i].classList.remove("active")
    }
}
}