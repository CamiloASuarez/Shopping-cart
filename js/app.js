const navMain = document.getElementById('navbar-menu')
const toggleMenu = document.getElementById('navbar-toggle')

toggleMenu.addEventListener('click', ()=>{
  navMain.classList.toggle('active')
})

