const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

let btnDownload = document.querySelector('.footer-btn');
let img = document.querySelector('.resume');

btnDownload.addEventListener('click', () => {
    let imgPath = img.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
});

function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1)
}