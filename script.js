// Contador simples para simular o carrinho de compras
let totalItensCarrinho = 0;

function adicionarAoCarrinho() {
    totalItensCarrinho++;
    
    // Atualiza o número exibido no ícone do carrinho
    const contador = document.querySelector('.cart-count');
    contador.innerText = totalItensCarrinho;
    
    // Feedback visual para o usuário
    alert("Produto adicionado ao carrinho com sucesso!");
}

// Melhoria opcional de Scroll: Arrastar com o mouse (Desktop)
// Permite que usuários de PC cliquem e arrastem o catálogo para o lado
const slider = document.querySelector('.scroll-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidade
    slider.scrollLeft = scrollLeft - walk;
});
