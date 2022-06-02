let header = document.getElementById('header');
let btn1 = document.getElementById('btn1');
let links = document.querySelectorAll('.disablers')
let link1= document.getElementById('link1')

btn1.addEventListener('click',()=>{
    header.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click',()=>{
        header.classList.remove('active')
    })
});
