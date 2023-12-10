const btnToggle = document.querySelector('.site-header-auth-btn')
const sidebar = document.querySelector('.sidebar')
const sidebarBtn = document.querySelector('.sidebar-top-btn')


btnToggle.addEventListener('click', () => {
    sidebar.classList.add('show-btn')
})

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-btn')
})