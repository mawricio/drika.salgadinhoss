const nav = document.querySelector('[data-nav]');
const menuBtn = document.querySelector('[data-menu-toggle]');
const year = document.querySelector('[data-year]');
const orderForm = document.querySelector('[data-order-form]');
const phone = '5521985761688';

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const tipo = document.querySelector('#tipoPedido')?.value || 'salgadinhos';
    const quantidade = document.querySelector('#quantidadePedido')?.value || '';
    const data = document.querySelector('#dataPedido')?.value || '';
    const observacao = document.querySelector('#observacaoPedido')?.value || '';
    const mensagem = [
      'Olá, Drika! Vim pelo site e quero fazer uma encomenda.',
      `Pedido: ${tipo}`,
      quantidade ? `Quantidade aproximada: ${quantidade}` : '',
      data ? `Data desejada: ${data}` : '',
      observacao ? `Observação: ${observacao}` : '',
      'Pode me passar disponibilidade e forma de pagamento?'
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
  });
}
