
function abreMenu() {
    const menu = document.getElementById('fundo-menu')
    menu.classList.add('mostrada')
    
    const iconeMenu = document.querySelector('.icone-menu')
    iconeMenu.classList.add('icone-menu-oculto')

    menu.addEventListener('click', (e) => {
        if (e.target.id == 'icone-fechar-menu' || e.target.id == 'fundo-menu'){
            menu.classList.remove('mostrada')
            iconeMenu.classList.remove('icone-menu-oculto')
        }
    })
}

function fechaMenu() {
    const menu = document.getElementById('fundo-menu')
    menu.classList.remove('mostrada')

    const iconeMenu = document.querySelector('.icone-menu')
    iconeMenu.classList.remove('icone-menu-oculto')
}
    
    
    $(document).ready(function(){
        $("#testimonial-slider").owlCarousel({
            items:1,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination:true,
            navigation:false,
            navigationText:["",""],
            slideSpeed:1000,
            singleItem:true,
            autoPlay:true
        });
    });


