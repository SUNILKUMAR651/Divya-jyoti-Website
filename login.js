const slide = document.querySelector('.slider');
const account = document.querySelector('.account');
const btn = document.querySelectorAll('.btn');
const login = document.querySelector('.login-show');
const reg = document.querySelector('.reg-show');

btn.forEach(function(button) {
    button.addEventListener('click', function() {
      if (slide.style.right === '433px') {
        slide.style.right = '866px';
        login.style.display = 'none';
        reg.style.display = 'block';
      } else {
        slide.style.right = '433px';
        login.style.display = 'block';
        reg.style.display = 'none';
      }
    });
  });


const username = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', function(){
  if(username.value === 'pariharsakshi36017@gmail.com' || password.value === 'Shinchan@1'){
      location.href = 'post-login.html';
  }
});