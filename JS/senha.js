 //Elementos
 const modal = document.getElementById("modalImagem");
  const img = document.querySelector(".foto");
  const imgExpandida = document.getElementById("imgExpandida");
  const fechar = document.querySelector(".fechar");

  // Ao clicar na imagem de perfil
  img.onclick = function () {
    modal.style.display = "flex";
    imgExpandida.src = this.src;
  }

  // Ao clicar no X
  fechar.onclick = function () {
    modal.style.display = "none";
  }

  // Ao clicar fora da imagem
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const caixa = document.querySelector(".caixa-com-imagem-2");

caixa.onclick = function () {
  modal.style.display = "flex";
  imgExpandida.src = getComputedStyle(this).backgroundImage.slice(5, -2); // extrai a URL
};

const imagensCorpo = document.querySelectorAll(".corpo img");

imagensCorpo.forEach(img => {
    img.onclick = function () {
    modal.style.display = "flex";
    imgExpandida.src = this.src;
};
});

// 1. Dicionário com todos os textos
const translations = {
  pt: {
    Title : "Gerador de Senhas para uso pessoal",
    Subtitle : "Gerador de senhas criado com Python",
    Text1 : "O gerador de senhas que facilita na criação de senhas fortes, longas e seguras.",
    Text2 : "Desenhado para a criação de senhas fortes facilmente, com medidor de força, função de copiar senha e personalizar o tipo de senha.",
    Text3 : "Visualize o projeto no GitHub",
    Text4 : "O gerador de senhas, para a criação automatica de senhas. Deixe o programa fazer o trabalho dificil por você.",
    Text5 : "Com a possibilidade de definir o tamanho e os tipos de caracteres, pode selecionar o tipo de senha que deseja.",
    Text6 : "Após selecionar as opções de caracteres e o tamanho desejado, é só clicar no botão 'Gerar Senha' e o programa cria uma senha para si.",
    Text7 : "O medidor de força mostra o qual forte é a sua palavra-passe, utilizando métodos identicos mas não 100% realistas dos medidores de força que existem no mercado.",
    Text8 : "Pelo qual, não é recomendado a utilização do programa para sistemas que exigem muita segurança, como bancos, base de dados críticas, etc.",
    caption : "Diversos niveis do medidor de força",
    
  },
  en: {
    Title : "Password generator for personal use",
    Subtitle : "Password generator created with Python",
    Text1 : "A password generator that makes it easy to create strong, long, and secure passwords.",
    Text2 : "Designed for easy password creation, with a strength meter, password copy function, and password type customization.",
    Text3 : "View the project on GitHub",
    Text4 : "Password generator for automatic password creation. Let the program do the hard work for you.",
    Text5 : "With the ability to define the size and character types, you can select the type of password you want.",
    Text6 : "After selecting the desired character options and size, just click the 'Generate Password' button and the program will create a password for you.",
    Text7 : "The strength meter shows how strong your password is, using methods identical to, but not 100% realistic, the strength meters available on the market.",
    Text8 : "Therefore, the program is not recommended for systems that require high security, such as banks, critical databases, etc.",
    caption : "Various strength meter levels",
   
    

  }
};

// 2. Função para aplicar a tradução aos elementos
function changeLanguage(lang) {
  // Atualiza os elementos HTML
  const elements = document.querySelectorAll("[data-i20n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i20n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Atualiza o atributo lang na tag <html> 
  document.documentElement.lang = lang;

  // Guarda a preferência do utilizador
  localStorage.setItem("preferredLanguage", lang);

  const select = document.getElementById("languageSelect");
  if (select) select.value = lang;
}

// 3. Carregar o idioma guardado ao abrir a página (ou usar 'pt' por padrão)
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "pt";
  changeLanguage(savedLang);
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.value = savedLang;
  }
});