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