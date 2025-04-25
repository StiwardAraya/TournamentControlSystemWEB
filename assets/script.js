document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".scroll-animado");

  const mostrarElemento = () => {
    const triggerBottom = window.innerHeight * 0.85;

    elementos.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", mostrarElemento);
  mostrarElemento();
});
