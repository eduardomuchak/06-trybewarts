// VARIÁVEIS GLOBAIS:
const btnEntrar = document.getElementById('botao-entrar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnSubmit = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');

// REQUISITO 3:
function login() {
  const email = inputEmail.value;
  const senha = inputSenha.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } alert('Email ou senha inválidos.');
}
btnEntrar.addEventListener('click', login);

// REQUISITO 18:
function habilitarSubmit() {
  btnSubmit.removeAttribute('disabled');
  btnSubmit.classList.remove('disabled-btn');
}
checkAgreement.addEventListener('click', habilitarSubmit);

// REQUISITO 20:
const textAreaInput = document.getElementById('textarea');
const valorContador = document.getElementById('counter');
textAreaInput.addEventListener('input', (element) => {
  valorContador.innerHTML = (500 - element.target.value.length);
});

// REQUISITO 21:
function getFullName() {
  const formName = document.getElementById('input-name');
  const formLastName = document.getElementById('input-lastname');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = `Nome: ${formName.value} ${formLastName.value}`;
  return createParagraph;
}

function getEmail() {
  const formEmail = document.getElementById('input-email');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = `Email: ${formEmail.value}`;
  return createParagraph;
}

function getHouseSelection() {
  const formHouse = document.getElementById('house');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = `Casa: ${formHouse.value}`;
  return createParagraph;
}

function getFamilySelection() {
  const formFamilies = document.querySelectorAll('input[name="family"]');
  const createParagraph = document.createElement('p');
  let familyText = '';
  formFamilies.forEach((family) => {
    if (family.checked) {
      familyText = family.parentElement.innerText;
    }
  });
  createParagraph.innerHTML = `Família: ${familyText}`;
  return createParagraph;
}

function getWishestoLearn() {
  const formTechnologies = document.querySelectorAll('input[class="subject"]');
  const createParagraph = document.createElement('p');
  const wishesChecked = [];
  for (let index = 0; index < formTechnologies.length; index += 1) {
    if (formTechnologies[index].checked) {
      wishesChecked.push(formTechnologies[index].value);
    }
  }
  createParagraph.innerText = `Matérias: ${wishesChecked.join(', ')}`;
  return createParagraph;
}

function getRate() {
  const formRates = document.querySelectorAll('input[name="rate"]');
  const createParagraph = document.createElement('p');
  let rateText = '';
  formRates.forEach((rate) => {
    if (rate.checked) {
      rateText = rate.parentElement.innerText;
    }
  });
  createParagraph.innerHTML = `Avaliação: ${rateText}`;
  return createParagraph;
}

function getComment() {
  const formTextArea = document.getElementById('textarea');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = `Observações: ${formTextArea.value}`;
  return createParagraph;
}

function returnInformations(event) {
  event.preventDefault();
  const result = document.getElementById('submitedForm');
  result.innerHTML = '';
  result.appendChild(getFullName());
  result.appendChild(getEmail());
  result.appendChild(getHouseSelection());
  result.appendChild(getFamilySelection());
  result.appendChild(getWishestoLearn());
  result.appendChild(getRate());
  result.appendChild(getComment());
}

btnSubmit.addEventListener('click', returnInformations);
