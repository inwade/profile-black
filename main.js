// Making the contact icons change the color on hover
let githubIcon = document.querySelector('.github-contact')
let instagramIcon = document.querySelector('.instagram-contact')
let telegramIcon = document.querySelector('.telegram-contact')
let phoneIcon = document.querySelector('.phone-contact')
let mailIcon = document.querySelector('.mail-contact')
function mouseOver (event) {
    let img = event.target.closest('img');
if (img != null) {
    let iconName = img.classList[0].split('-')[0];
    img.src =`./svg/${iconName}-hover.svg`;
}
}
function mouseOut (event) {
    let img = event.target.closest('img')
 if (img != null) {
    let iconName = img.classList[0].split('-')[0];
    img.src = `./svg/${iconName}-main.svg`;
}
}
githubIcon.onmouseover = mouseOver;
githubIcon.onmouseout = mouseOut;
instagramIcon.onmouseover = mouseOver;
instagramIcon.onmouseout = mouseOut;
telegramIcon.onmouseover = mouseOver;
telegramIcon.onmouseout = mouseOut;
phoneIcon.onmouseover = mouseOver;
phoneIcon.onmouseout = mouseOut;
mailIcon.onmouseover = mouseOver;
mailIcon.onmouseout = mouseOut;

//add fade-up to About me block on scroll
let myInfoBlock = document.querySelector('.my-info-block')
let contactBlock = document.querySelector('.contacts-block')
let myInfoCoord = myInfoBlock.getBoundingClientRect();
let contactCoord = contactBlock.getBoundingClientRect();
let scrollAboutMeToAppear = (myInfoCoord.height + contactCoord.height) / 2;
let stoper = false
let filler = false
let aboutMeBlock = document.querySelector('.about-me-block')


// add line filings on the skills block
let aboutMeBlockCoord = aboutMeBlock.getBoundingClientRect()
let scrollForFill = (myInfoCoord.height + contactCoord.height + aboutMeBlockCoord.height) / 2;
let skillLineFill = document.querySelectorAll('.fill-skill-line')


document.onscroll = function () {
    if (stoper == false && window.pageYOffset >= scrollAboutMeToAppear) {
    stoper = true
    aboutMeBlock.setAttribute('data-aos', 'fade-up')
};
    if (filler == false && window.pageYOffset >= scrollForFill) {
        filler = true
        skillLineFill.forEach((skillLine) => {
            let newWidth = skillLine.dataset.width
            skillLine.style.width = newWidth + '%'
        })     
    }
}