const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}
const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true
btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})
const secretBtn = document.getElementById('secretBtn');
const secretMessage = document.getElementById('secretMessage');

secretBtn.addEventListener('click', () => {
  secretMessage.style.opacity = 1;
  setTimeout(() => {
    secretMessage.style.opacity = 0;
  }, 4000);
});
const changeTextBtn = document.getElementById('changeTextBtn');
const mainMessage = document.getElementById('mainMessage');

const newMessage = "He disfrutado cada momento contigo al máximo. Eres super especial para mi, te amo y quiero seguir viviendo este tipo de momentos contigo💖";

changeTextBtn.addEventListener('click', () => {
  let index = 0;
  mainMessage.textContent = ''; // limpiar mensaje actual

  const interval = setInterval(() => {
    if (index < newMessage.length) {
      mainMessage.textContent += newMessage.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 50); // velocidad de escritura
});
