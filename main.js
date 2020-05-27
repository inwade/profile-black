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

