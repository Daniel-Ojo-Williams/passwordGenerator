const darkToggle = document.querySelector('.dark-toggle');


darkToggle.addEventListener('click', () => {
  addDark(document.body);
  const buttons = document.querySelectorAll('.hero-buttons button');
  buttons.forEach((button) => {
    addDark(button);
  } )

  const links = document.querySelectorAll('.nav-links a')
  links.forEach((link) => {
    addDark(link);
  })

  addDark(darkToggle);
  const icon = document.querySelector('.dark-toggle i');
  icon.classList.replace('fa-moon', 'fa-sun');
  const toggle = document.querySelector('.toggle-icon');
  addDark(toggle);
})

function addDark(element){
  element.classList.toggle('darkmode')
}