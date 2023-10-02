const registerToggle = document.getElementById('register');
const container = document.querySelector('.container');
const loginToggle = document.getElementById('login');
const registerLink =  document.getElementById('signup-link');
const loginLink =  document.getElementById('signin-link');


registerToggle.addEventListener('click', ()=>{
  container.classList.add('active')
});

registerLink.addEventListener('click', ()=>{
  container.classList.add('active')
})
loginToggle.addEventListener('click', ()=>{
  container.classList.remove('active')
})

loginLink.addEventListener('click', ()=>{
  container.classList.remove('active')
})