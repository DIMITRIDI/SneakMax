const cartBtn = document.querySelector('.cart__btn');
const mibiCart = document.querySelector('.mini-cart');

cartBtn.addEventListener('click', () => {
	mibiCart.classList.add('mini-cart--visible');
});

document.addEventListener('click', (e) => {
	if (!e.target.classList.contains('mini-cart') && !e.target.classList.contains('cart__btn')) {
		mibiCart.classList.remove('mini-cart--visible');
	}
});