var botao = document.getElementById('buttonshadow');
function toggleSombra() {
    
    var temSombra = botao.style.boxShadow !== '';
    
    
    if (temSombra) {
      botao.style.boxShadow = '';
    } else {
      botao.style.boxShadow = 'none';
    }
  }
  botao.addEventListener('click' , toggleSombra)



let botaoDisable=document.getElementById('disableButton');

function disable(){
    let habilitado = botaoDisable.disabled;
    if(habilitado ){
        botaoDisable.disabled=false
        
    }else{
        botaoDisable.disabled=true
        botaoDisable.textContent ='disabled'
    }
} 
botaoDisable.addEventListener('click', disable) 