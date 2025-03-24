/* data anime */
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
})

/* Menu-moblie */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

/* Menu_button */

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});



function toggleVisibilityOnMobile() {
  // Verifica a largura da tela
  if (window.innerWidth <= 905) {
    // Seleciona os elementos e aplica display: none
    const imgValeu = document.querySelectorAll('.img_valeu');
    const mapa = document.querySelectorAll('.mapa');

    imgValeu.forEach((el) => {
      el.style.display = 'none';
    });

    mapa.forEach((el) => {
      el.style.display = 'none';
    });
  } else {
    // Reexibe os elementos se a tela for maior que 1024px
    const imgValeu = document.querySelectorAll('.img_valeu');
    const mapa = document.querySelectorAll('.mapa');

    imgValeu.forEach((el) => {
      el.style.display = '';
    });

    mapa.forEach((el) => {
      el.style.display = '';
    });
  }
}

// Executa a função quando a página é carregada
window.addEventListener('load', toggleVisibilityOnMobile);

// Executa a função toda vez que a tela for redimensionada
window.addEventListener('resize', toggleVisibilityOnMobile);


