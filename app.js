const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-links');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });


    const menuli = document.querySelectorAll('.menu-links li a');

    for(const element of menuli){
        element.addEventListener('click', function(){
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        })
    };

    


}

navSlide();


