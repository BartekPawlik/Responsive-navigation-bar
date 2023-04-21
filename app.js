const burger = document.querySelector('.burger')
 const linksContainer = document.querySelector('.nav-links')
 const navLinks = document.querySelectorAll('.nav-links li')
 const closeBtn = document.querySelector('.x-button')
 const burgerBtn = document.querySelector('.burger-button')


burger.addEventListener('click', () => {
    linksContainer.classList.toggle('nav-active')


    navLinks.forEach((link, index) => {
  
        if(link.style.animation) {
            link.style.animation = '';
            closeBtn.classList.add('x-button')
            burgerBtn.classList.remove('burger-btn')
            

          
            
   

        }else{
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            closeBtn.classList.remove('x-button')
            burgerBtn.classList.add('burger-btn')
         
         
           
        }
        })



})

