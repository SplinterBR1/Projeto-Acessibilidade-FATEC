'use strict'

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", function (f) {
    f.preventDefault();

    let valido = true;

    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const dataNascimento = document.getElementById('data-nascimento')
    const estado = document.getElementById("estado");
    const cep = document.getElementById("cep");
    const cidade = document.getElementById("cidade");
    const bairro = document.getElementById("bairro");
    const rua = document.getElementById("rua");
    const numero = document.getElementById("numero");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const concordo = document.getElementById("concordo");

    removeErro(nome, "nome-erro");
    removeErro(cpf, "cpf-erro");
    removeErro(dataNascimento, "data-erro");
    removeErro(estado, "estado-erro");
    removeErro(cep, "cep-erro");
    removeErro(cidade, "cidade-erro");
    removeErro(bairro, "bairro-erro");
    removeErro(rua, "rua-erro");
    removeErro(numero, "numero-erro");
    removeErro(telefone, "tel-erro");
    removeErro(email, "email-erro");
    removeErro(concordo, "concordo-erro");


    // -- VALIDAÇÕES --

    // NOME
    if (!nome.value.trim()) {
      identificaErro(nome, "nome-erro", "O nome completo é obrigatório.");
      valido = false;
    } else if (nome.value.trim().length < 2) {
      identificaErro(nome, "nome-erro", "O nome deve ter no mínimo 2 caracteres.");
      valido = false;
    }

    // CPF
    if (!cpf.value.trim()) {
      identificaErro(cpf, "cpf-erro", "O cpf é obrigatório.");
      valido = false;
    } else if (cpf.value.trim().length < 9) {
      identificaErro(cpf, "cpf-erro", "O CPF ou RG deve ter ao menos 9 digitos.");
      valido = false;
    }

    // DATA DE NASCIMENTO

    if (!dataNascimento.value.trim()) {
      identificaErro(dataNascimento, "data-erro", "A data de nascimento é obrigatória.");
      valido = false;
    }


    // ESTADO
    if (!estado.value.trim()) {
      identificaErro(estado, "estado-erro", "É necessário selecionar o estado.");
      valido = false;
    }

    // CEP
    if (!cep.value.trim()) {
      identificaErro(cep, "cep-erro", "O CEP é obrigatório.");
      valido = false;
    } else if (cep.value.trim().length < 8) {
      identificaErro(cep, "cep-erro", "O CEP deve conter no mínimo 8 digitos.");
      valido = false;
    }

    // CIDADE
    if (!cidade.value.trim()) {
      identificaErro(rua, "cidade-erro", "É necessário informar a cidade.");
      valido = false;
    }

    // BAIRRO
    if (!bairro.value.trim()) {
      identificaErro(bairro, "bairro-erro", "É necessário informar o bairro.");
      valido = false;
    }

    // RUA
    if (!rua.value.trim()) {
      identificaErro(rua, "rua-erro", "É necessario informar uma rua.");
      valido = false;
    }

    // NUMERO DA RESIDENCIA
    if (!numero.value.trim()) {
      identificaErro(numero, "numero-erro", "O numero da residência é obrigatório.");
      valido = false;
    }

    // TELEFONE
    if (!telefone.value.trim()) {
      identificaErro(telefone, "tel-erro", "O telefone é obrigatório.");
      valido = false;
    } else if (telefone.value.trim().length < 9) {
      identificaErro(telefone, "tel-erro", "Digite um telefone válido.");
      valido = false;
    }

    // EMAIL
    if (!email.value.trim()) {
      identificaErro(email, "email-erro", "O e-mail é obrigatório.");
      valido = false;
    } else if (!validarEmail(email.value.trim())) {
      identificaErro(email, "email-erro", "O e-mail é inválido.");
      valido = false;
    }

    // ACEITAR TERMOS
    if (!concordo.checked) {
      identificaErro(concordo, "concordo-erro", "Você precisa concordar com o envio dos dados.");
      valido = false;
    }

    if (!valido) {
      const erroInicial = form.querySelector("[aria-invalid='true']");
      if (erroInicial) {
        erroInicial.focus();
      }
      return;
    }

    alert("Cadastro efetuado com sucesso!");
    form.reset();
    resetarErros();

  });

  // FUNÇÕES

  function identificaErro(input, tipoErro, numero) {
    input.setAttribute("aria-invalid", "true");

    const erro = document.getElementById(tipoErro);
    if (erro) {
      erro.textContent = numero;
    }
  }

  function removeErro(input, tipoErro) {
    if (input) {
      input.removeAttribute("aria-invalid");
    }

    const erro = document.getElementById(tipoErro);
    if (erro) {
      erro.textContent = "";
    }
  }

  // função utilizada com material de apoio
  function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  function resetarErros() {
    const mensagemErro = document.querySelectorAll(".erro");
    mensagemErro.forEach((erro) => {
      erro.textContent = "";
    });

    const inputsInvalidos = document.querySelectorAll("[aria-invalid='true']");
    inputsInvalidos.forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  }
});