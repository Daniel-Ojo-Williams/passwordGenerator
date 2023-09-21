const lengthSlider = document.querySelector('.pass-length input');
const options = document.querySelectorAll('.option input');
const copyIcon = document.querySelector('.input-box span');
const passwordInput = document.querySelector('.input-box input');
const strengthIndicator = document.querySelector('.pass-indicator');
const generateBtn = document.querySelector('.generate');

// characters to chose from
const characters = {
  lowercase: 'abcdefghijlkmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '~!@#$%^&*()_-+=|\\";:/.,[{]}`'
}

const generatePassword = () => {
  let staticPassword = '',
      randomPassword = '',
      excludeDuplicate = false,
      passLength = lengthSlider.value;

      options.forEach(option => {
        if (option.checked) {
          if (option.id !== 'exc-duplicate' && option.id !== 'spaces') {
            staticPassword += characters[option.id]
          } else if (option.id === 'spaces') {
            staticPassword = ` ${staticPassword} `;
          } else {
            excludeDuplicate = true
          }
        }
      })

      for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]
        if(excludeDuplicate){
          // checks if password includes a duplicate
          !randomPassword.includes(randomChar) || randomChar === ' ' ? randomPassword += randomChar : i--;
        } else {
          randomPassword += randomChar;
        }
      }
      passwordInput.value = randomPassword;
}

const updatePassIndicator = () => {
  // strengthindicator id based on value of lengthslider
  strengthIndicator.id = lengthSlider.value <= 8 ? 'weak' : lengthSlider.value <= 16 ? 'medium' : 'strong' 
}

const updateSlider = () => {
  document.querySelector('.pass-length span').innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();
}


const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.innerText = 'check';
  copyIcon.style.color = '#4285f4'
  setTimeout(() => {
    copyIcon.innerText = 'copy_all';
    copyIcon.style.color = '#707070'
  }, 1500)
}

copyIcon.addEventListener('click', copyPassword);
lengthSlider.addEventListener('input', updateSlider);
generateBtn.addEventListener('click', () => {
  updatePassIndicator();
  generatePassword();
});

// saved password script
const expandMore = document.querySelectorAll('.website span');
const copy = document.querySelectorAll('.password-content span');
const passwordContent = document.querySelectorAll('.password-content');
const password = document.querySelectorAll('.password-content p');

expandMore.forEach((expand) => expand.addEventListener('click', () => {
  passwordContent.forEach((pc) => pc.classList.toggle('active'))
  expand.innerText = pc.classList.contains('active') ? 'expand_less' : 'expand_more'
}));

// copy.addEventListener('click', () => {
//   navigator.clipboard.writeText(password.innerText)
//   copy.innerText = 'check';
//   copy.style.color = '#4285f4'
//   setTimeout((() => {copy.innerText = 'copy_all'; copy.style.color = '#ffe'}), 1500)
// })

const allHeader = document.querySelectorAll('h2');
const allContent = document.querySelectorAll('.content')

allHeader.forEach((header) => header.addEventListener('click', function() {
  allHeader.forEach((header) => header.classList.remove('active'))
  this.classList.add('active');

  const filterClass = this.dataset.filter;
  const filter = document.getElementsByClassName(filterClass);
  allContent.forEach(content => content.classList.remove('active'))
  filter[0].classList.add('active');
}))


const saveBox = document.querySelector('.save-box');
const boxSaveButton = document.querySelector('.save-box button')
const boxClose = document.querySelector('.box span');
boxClose.addEventListener('click', () => {
  saveBox.style.display = 'none'
});


const passwordObject = [];

boxSaveButton.addEventListener('click', function(){
  const boxInput = document.querySelector('.box input');
  
  const website = boxInput.value
  const password = passwordInput.value;
  const warning2 = document.querySelector('.box .warning2');


  if (boxInput.value.trim() === ''){
    warning2.innerText = 'Fill input';
  
  } else {
    passwordObject.unshift({
      website,
      password
    })
  
    warning2.innerText = 'Password Saved';
    setTimeout(()=> {warning2.innerText = ''; boxInput.value = ''}, 2500)
    saveBox.style.display = 'none';
    passwordInput.value = ''
  }
  console.log(passwordObject);

  passwordObject.forEach((object) => {
  const contentSaved = document.querySelector('.saved');
  contentSaved.innerHTML += `<div class="saved-password">
        <div class="website">
          <label for="">For: ${object.website}</label>
          <span class="material-symbols-rounded">expand_more</span>
        </div>
        <div class="password-content">
          <p>
            ${object.password}
          </p>
          <span class="material-symbols-rounded">copy_all</span>
        </div>
      </div>`

})
})





const saveButton = document.getElementById('save');
saveButton.addEventListener('click', ()=> {
  const warning = document.querySelector('.pass-custom .warning');
  passwordInput.value === '' ? warning.innerText='Generate Password first!!!' : saveBox.style.display = 'flex';
  setTimeout(()=> {warning.innerText = ''}, 2500)
})

