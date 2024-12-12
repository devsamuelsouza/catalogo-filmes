let botao = document.getElementById('menu').addEventListener('click',()=>{
    if (itens.style.display.includes('none')) {
        itens.style.display = 'inline'
    } else{
        itens.style.display = 'none'
    }
})
let lista = document.getElementById('itens-selecionar')

