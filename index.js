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

const Mask = {
    apply(inputField, functionName) {
        inputField.value = Mask[functionName](inputField.value);
    },
    state(value) {
        value = value.replace(/\d/g, '');
        value = value.replace(/\W/g, '');

        if (value.length > 2)
            value = value.slice(0, -1);

        return value;
    },
    cep(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 8)
            value = value.slice(0, -1);

        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        return value;
    },
    phone(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 10)
            value = value.slice(0, -1);

        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');

        return value;
    },
    cellPhone(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 11)
            value = value.slice(0, -1);

        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        return value;
    },
    cpf(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 11)
            value = value.slice(0, -1);

        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1-$2');

        return value;
    },
    cnpj(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 14)
            value = value.slice(0, -1);

        value = value.replace(/(\d{2})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1/$2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');

        return value;
    },
    cpfCnpj(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 14)
            value = value.slice(0, -1);

        if (value.length <= 11)
            value = Mask.cpf(value);
        else
            value = Mask.cnpj(value);

        return value;
    },
    percent(value) {
        value = value.replace(/\D/g, '');

        value = new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2 }).format(value / 10000);

        return value;
    },
    currency(value) {
        value = value.replace(/\D/g, '');

        value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value / 100);
        return value;
    },
    date(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 8)
            value = value.slice(0, -1);

        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        value = value.replace(/(\d{2})(\d)/, '$1/$2');

        return value;
    }
}