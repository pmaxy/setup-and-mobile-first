const openModalButton=document.querySelectorAll('[data-popup-target]')
const CloseModalButon=document.querySelectorAll('[data-close-button]')
const overlay=document.getElementById('overlay')

openModalButton.forEach(button =>{
    button.addEventListener('click',() =>{
        const Modal =document.querySelector(button.dataset.modalTarget)
        openModal(popup_menu)
    })
})

function openModal(popup_menu){
    if(popup_menu == null) return
    popup_menu.classlist.add('active')
    overlay.classList.add('active')
    
}

function classModal(popup_menu){
    if(popup_menu == null) return
    popup_menu.classlist.remove('active')
    overlay.classList.remove('active')
}

