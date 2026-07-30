 // Elementos
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

  const caixa = document.querySelector(".caixa-com-imagem");

caixa.onclick = function () {
  modal.style.display = "flex";
  imgExpandida.src = getComputedStyle(this).backgroundImage.slice(5, -2); // extrai a URL
};

// 1. Dicionário com todos os textos
const translations = {
  pt: {
    Title : "Bot Discord - Makal.exe",
    Subtitle : "Bot criado com Python",
    Text1 : "'Makal' é uma alcunha que tenho, e o Makal.exe é um bot com a minha personalidade.",
    Text2 : "Desenho para diversos fins, seja entretenimento ou utilidade",
    Text3 : "Diversos comandos",
    Text4 : "!hora -> Hora local atual",
    Text5 : "!ping -> Mostra latencia do bot",
    Text6 : "!meme -> Mostra um meme",
   
    
  },
  en: {
    Title : "Bot Discord - Makal.exe",
    Subtitle : "Bot made with Python",
    Text1 : "'Makal' is a nickname I have, and Makal.exe is a bot with my personality.",
    Text2 : "Designed for various purposes, whether for entertainment or practical use.",
    Text3 : "Various commands",
    Text4 : "!hora -> Current local time",
    Text5 : "!ping -> Shows bot latency",
    Text6 : "!meme -> Shows a meme",
   
    

  }
};

// 2. Função para aplicar a tradução aos elementos
function changeLanguage(lang) {
  // Atualiza os elementos HTML
  const elements = document.querySelectorAll("[data-i19n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i19n");
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