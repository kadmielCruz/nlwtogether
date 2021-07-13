// abre e fecha o menu quando clicar no icone:hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//para cada elemento
for( const element of toggle){
    element.addEventListener('click',function(){
        nav.classList.toggle('show')
        //vai selecionar o elemento nav, vai olhar a lista de classes que ele possui e procurar o show se tiver ele vai tirar se não vai colocar
    })
}

//quando clicar em um item do menu,esconder o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click',function(){
        nav.classList.remove('show')
    })
}

/*mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight //deslocamento da altura
function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight){
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    }else{
        // menor que a altura do header
        header.classList.remove('scroll')
    }

}

    


//Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container',{
    slidesPerview:1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize:true //o tamanho do wrapper que encobre vai se  ajustar aonde ele envolve no caso os testemunhos
        }

    }

})

/* ScrolReveal:Mostrar elementos quando der sroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance:'30px',
    duration:600,
    reset:true

})

scrollReveal.reveal(`#home .text, #home .image, #about .image, #about .text, #services header,#services .card, #testimonials header,#testimonials .testimonials #contact .text, #contact .links, footer .brand, footer .social `,{interval: 100})

/* Botão voltar para o topo */
const backTopTopButton = document.querySelector('.back-to-top')

function backToTop(){
    if(window.scrollY >= 560){
        backTopTopButton.classList.add('show')
    }else{
        backTopTopButton.classList.remove('show')
    }

}

   

/* Menu ativo conforme a seção visivel na página  */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }

    }
}

//se quiser agrupar a função scroll que esta sendo passada em dois momentos.foi criado duas funções e colocado em um ouvidor de Evento com scroll executando as funções
/*When Scroll*/
window.addEventListener('scroll',function(){
    changeHeaderWhenScroll() //mudar o header da pagina quando der scroll
    backToTop() //Botão voltar para o topo 
    activateMenuAtCurrentSection()
})
