let idTempo = null // variável que armazena a chamada da funçao timeout
function iniciaJogo(){
    let url = window.location.search
    let nivelJogo = url.replace("?","")

    var tempoSegundos = 0;

    switch (nivelJogo){
       case '1':
        tempoSegundos = 120

        break; 
        case '2':
            tempoSegundos = 60
        
        break;
        case '3':
            tempoSegundos = 30
        
        break;
        case '4':
            tempoSegundos = 15
        
        break;

        default:

        break;
        
    }
    
   document.getElementById('cronometro').innerText = tempoSegundos

   var qtdeBaloes =80
   criaBaloes(qtdeBaloes);

   document.getElementById('baloesInteiros').innerHTML = qtdeBaloes
   document.getElementById('baloesEstourados').innerHTML = 0

   contagemTempo(tempoSegundos + 1)
}
function contagemTempo(tempoSegundos){
    tempoSegundos = tempoSegundos - 1

    if( tempoSegundos == -1 ){
        clearTimeout(idTempo)
        game_over()
        return false
        
    }

    document.getElementById('cronometro').innerHTML = tempoSegundos

   idTempo = setTimeout("contagemTempo("+tempoSegundos+")",1000)
    
}
function game_over(){
    alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo !')
}

function criaBaloes(qtdeBaloes){

    for(let i = 1; i<=qtdeBaloes;i++){
        var balao = document.createElement('img')
        balao.src = 'imagens/balao_azul_pequeno.png'
        balao.onclick = function(){estourar(this);};
        balao.id = 'b'+i
        balao.style.margin = '10px'
        document.getElementById('cenario').appendChild(balao)
    }

}
function estourar(e){
    let idBalao = e.id
    document.getElementById(idBalao).setAttribute("onclick","");
    document.getElementById(idBalao).src ='imagens/balao_azul_pequeno_estourado.png'   
    pontuacao(-1) 
}

function pontuacao(acao){

  let balaoInteiro =  document.getElementById('baloesInteiros').innerHTML;
  let balaoestourado = document.getElementById('baloesEstourados').innerHTML;

  balaoInteiro = Number(balaoInteiro)
  balaoestourado = Number(balaoestourado)

  balaoInteiro = balaoInteiro + acao
  balaoestourado = balaoestourado - acao

  document.getElementById('baloesInteiros').innerHTML = balaoInteiro
  document.getElementById('baloesEstourados').innerHTML= balaoestourado

   situacaoJogo(balaoInteiro)
}
function situacaoJogo(baloesInteiros){
    if(baloesInteiros == 0){
       
        alert('Parabéns, você conseguiu estourar todos os balões a tempo !')
        pararJogo()
         
    }
  }
function pararJogo(){
    clearTimeout(idTempo)
}