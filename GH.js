function togHide() {
    if (this.tyle.visibility === 'hidden') {
        this.style.visibility = 'visible';
    } else {
        this.style.visibility = "hidden";
    }
}

const academicExpP = document.querySelector('.academicExp').querySelectorAll('p');
const professionalExpP = document.querySelector('.ProExp').querySelectorAll('p');
const technicalExpP = document.querySelector('.TechExp').querySelectorAll('p');

Exps = [academicExpP, professionalExpP, technicalExpP]

for (let exp of Exps) {
    exp.addEventListener('click', togHide);
}



