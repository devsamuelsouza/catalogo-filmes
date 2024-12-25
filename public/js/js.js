let botao = document.getElementById('menu')
let lista = document.getElementById('itens-selecionar')
lista.style.display = 'none'

botao.addEventListener('click', () => {
    if (lista.style.display.includes('one')) {
        lista.style.display = 'block'
    } else {
        lista.style.display = 'none'
    }
})

lista.addEventListener('mouseleave', () => {
    lista.style.display = 'none'
})