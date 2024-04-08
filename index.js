const stateInput = document.querySelector('.state');
const cepInput = document.querySelector('.cep');
const phoneInput = document.querySelector('.phone');
const cellPhoneInput = document.querySelector('.cell_phone');
const cpfInput = document.querySelector('.cpf');
const cnpjInput = document.querySelector('.cnpj');
const cpf_cnpjInput = document.querySelector('.cpf_cnpj');
const percentInput = document.querySelector('.percent');
const currencyInput = document.querySelector('.currency');
const dateInput = document.querySelector('.date');
const macAddressInput = document.querySelector('.mac-address');

cepInput.addEventListener('input', function () {
	Mask.apply(this, 'cep');
});

phoneInput.addEventListener('input', function () {
	Mask.apply(this, 'phone');
});

cellPhoneInput.addEventListener('input', function () {
	Mask.apply(this, 'cellPhone');
});

cpfInput.addEventListener('input', function () {
	Mask.apply(this, 'cpf');
});

cnpjInput.addEventListener('input', function () {
	Mask.apply(this, 'cnpj');
});

cpf_cnpjInput.addEventListener('input', function () {
	Mask.apply(this, 'cpfCnpj');
});

percentInput.addEventListener('input', function () {
	Mask.apply(this, 'percent');
});

stateInput.addEventListener('input', function () {
	Mask.apply(this, 'state');
});

currencyInput.addEventListener('input', function () {
	Mask.apply(this, 'currency');
});

dateInput.addEventListener('input', function () {
	Mask.apply(this, 'date');
});

macAddressInput.addEventListener('input', function () {
	Mask.apply(this, 'macAddress');
});
