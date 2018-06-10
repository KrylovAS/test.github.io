'use strict'

const authorizationForgot = document.getElementsByClassName('authorization__forgot');
const authorizationContent = document.getElementsByClassName('authorization__content')
const back = document.getElementsByClassName('back')[0];

if(window.screen.width < 480) {  

  for (let key of authorizationContent){

    key.addEventListener('click', (e) => {

      if(!e.target.classList.contains('authorization__forgot')) return;

        for(let key of authorizationContent) {
          key.classList.remove('authorization-hidden');
        };

      e.currentTarget.classList.add('authorization-hidden');
      back.classList.toggle('back'); 
         
    });
  };
}