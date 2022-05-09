function togHide() {
    let prnt = this.parentNode;
    let Ps = prnt.querySelectorAll('p');
    for (let paras of Ps) {
        if (paras.style.visibility === 'hidden') {
            paras.style.visibility = 'visible';
        } else {
            paras.style.visibility = "hidden";
        }
    }
    
}

const academicExpH3 = document.querySelector('.academicExp').querySelector('h3');
const professionalExpH3 = document.querySelector('.proExp').querySelector('h3');
const technicalExpH3 = document.querySelector('.techExp').querySelector('h3');
//const academicExpP = document.querySelector('.academicExp').querySelectorAll('p');
//const professionalExpP = document.querySelector('.proExp').querySelectorAll('p');
//const technicalExpP = document.querySelector('.techExp').querySelectorAll('p');

ExpsH = [academicExpH3, professionalExpH3, technicalExpH3]
//Exps = [academicExpP, professionalExpP, technicalExpP]

for (let i = 0; i < 3; i++) {
    ExpsH[i].addEventListener('click', togHide);
}



