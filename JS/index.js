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



  function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.toggle("dark-mode");

    // Guarda a preferência
    localStorage.setItem("darkMode", isDark);
  }

 window.onload = () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  const button = document.getElementById("darkModeToggle");

  if (isDark) {
    document.body.classList.add("dark-mode");
    button.innerText = "☀️";
  } else {
    button.innerText = "🌙";
  }
}


function myFunction(x) {
  toggleDarkMode();

  if (document.body.classList.contains("dark-mode")) {
    x.innerText = "☀️"; // Mostra sol quando está em modo escuro
  } else {
    x.innerText = "🌙"; // Mostra lua quando está em modo claro
  }
}



// 1. Dicionário com todos os textos
const translations = {
  pt: {
    AboutMe : "Sobre mim",
    Skills : "Habilidades",
    Projects : "Projetos",
    Contacts : "Contactos",
    headerTitle: "👋🙂 Olá. Eu sou o Miguel",
    headerSubtitle: "Licenciado em engenharia informática",
    aboutTitle: "Sobre mim",
    aboutP1: "Chamo-me Miguel Marques, licenciado em engenharia informatica, curso tirado no Politécnico de Viseu na Escola Superior de Gestão e Tecnologia de Viseu, entre 2021 até 2024.",
    aboutP2: "Tenho gosto por tecnologia, informática, programação, jogos e arte.",
    aboutP3: "Pretendo aprender mais sobre linguas de programação e criar projetos a parte para divertir-me enquanto melhoro as minhas habilidades técnicas.",
    projectsTitle: "Projetos",
    project1: "Makal.exe : Bot para Discord utilizando Python com discord.py",
    project2: "Gerador de Senhas em Python",
    contactsTitle: "Contactos",
    footer: "Criado por Miguel Marques. Publicado com GitHub.",
    skillsTitle: "Habilidades",
    skillssubtitle1: "Linguagens",
    skillssubtitle2: "Tecnologias & Ferramentas",
    projectTitle : "Projetos",
    projectsubtitle1 : "Makal.exe",
    description1 : "Um bot para a App Discord desenvolvido em Python para entretenimento.",
    projectsubtitle2 : "Gerador de senhas",
    description2 : "Uma app feita em Python para facilitar a geração de senhas",
    projectsubtitle3 : "Website Pessoal",
    description3 : "O website pessoal de Miguel Marques, no qual está a ver atualmente.",
    projectsubtitle4 : "Os rélogios (em desenvolvimento)",
    description4 : "O website que permite ver as horas de diferentes países.",
    sabermais : "Saber Mais",
    sabermaisgithub : "Saber Mais (Github)",
    
  },
  en: {
    AboutMe : "About me",
    Skills : "Skills",
    Projects : "Projects",
    Contacts : "Contacts",
    headerTitle: "👋🙂 Hi there! I'm Miguel",
    headerSubtitle: "BSc in Computer Science",
    aboutTitle: "About me",
    aboutP1: "My name is Miguel Marques, graduated in Computer Science at the Polytechnic Institute of Viseu (ESTGV) between 2021 and 2024.",
    aboutP2: "I am passionate about technology, IT, programming, gaming, and art.",
    aboutP3: "I aim to learn more programming languages and build side projects for fun while sharpening my technical skills.",
    projectsTitle: "Projects",
    project1: "Makal.exe: Discord Bot built with Python & discord.py",
    project2: "Password Generator in Python",
    contactsTitle: "Contacts",
    footer: "Created by Miguel Marques. Published with GitHub.",
    skillsTitle: "Skills",
    skillssubtitle1: "Languages",
    skillssubtitle2: "Tecnologies and tools",
    projectTitle : "Projects",
    projectsubtitle1 : "Makal.exe",
    description1 : "A Discord App bot developed in Python for entertainment.",
    projectsubtitle2 : "Password generator",
    description2 : "An app written in Python to make password generation easier.",
    projectsubtitle3 : "Personal Website",
    description3 : "The personal website of Miguel Marques, which you are currently viewing.",
    projectsubtitle4 : "The clocks (under development)",
    description4 : "The website that allows you to see the time in different countries.",
    sabermais : "Learn more",
    sabermaisgithub : "Learn More (Github)",

  }
};

// 2. Função para aplicar a tradução aos elementos
function changeLanguage(lang) {
  // Atualiza os elementos HTML
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");
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
