const observador = new IntersectionObserver( (entrada) =>{ 
    entrada.forEach ((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('apareceu')
        } else {
            entry.target.classList.remove('apareceu')
        }
    })
})

const elementos = document.querySelectorAll('.escondido')

elementos.forEach((element) => observador.observe(element))








const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Inicializa a primeira imagem como ativa
images[currentIndex].classList.add('active');

// Troca de imagem a cada 3 segundos
setInterval(showNextImage, 3000);




document.querySelector('.navegacao li:nth-child(4) > a').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.querySelector('.dropdown-solution');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
