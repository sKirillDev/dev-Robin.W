import './style.css'

const burgerBtn = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')

burgerBtn.addEventListener('click', ()=> {
    mobileContainer.classList.toggle('hidden')
    burgerBtn.classList.toggle('after:bg-purple')
    burgerBtn.classList.toggle('before:bg-purple')
})

const installTabs =()=> {
    const tabsButtons = document.querySelectorAll('[data-tab-content]');
    const tabContent = document.querySelectorAll('.tab-content')

    const removeActiveClassForNav =()=> {
        tabsButtons.forEach(item => item.classList.remove('bg-purple'))
    }
    
    const hiddenContentTabs =()=> {
        tabContent.forEach(item => item.classList.add('hidden'))
    }

    tabsButtons.forEach((item, index, array)=>{
        const tabsButton = item.getAttribute('data-tab-content');
        
        item.addEventListener('click', ()=>{
            removeActiveClassForNav()
            item.classList.add('bg-purple')

            const showContent = document.getElementById(tabsButton);
            hiddenContentTabs()
            showContent.classList.remove('hidden')
        })
    })
}

document.querySelectorAll('.tabs').length ? installTabs() :null;