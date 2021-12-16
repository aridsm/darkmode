const btn = document.querySelector('.btn-darkmode')
const body = document.querySelector('body')
const txtMode = document.querySelector('.txt-mode')
let mode = 0;


function darkLightMode(){
  if (!mode) {
    body.classList.replace('lightmode', 'darkmode')
    btn.setAttribute('title', 'ativar modo claro')
    txtMode.textContent = 'light'
    mode = 1
  }
  else {
      body.classList.replace('darkmode', 'lightmode')
      btn.setAttribute('title', 'ativar modo escuro')
      txtMode.textContent = 'dark'
      mode = 0
  }
}

btn.addEventListener('click', darkLightMode)