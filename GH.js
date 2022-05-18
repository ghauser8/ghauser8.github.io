let i;
let j;
if (document.documentURI.slice(-10) === 'about.html') {

    const academicExpH3 = document.querySelector('.academicExp').querySelector('h3');
    const professionalExpH3 = document.querySelector('.proExp').querySelector('h3');
    const technicalExpH3 = document.querySelector('.techExp').querySelector('h3');
    //const academicExpP = document.querySelector('.academicExp').querySelectorAll('p');
    //const professionalExpP = document.querySelector('.proExp').querySelectorAll('p');
    //const technicalExpP = document.querySelector('.techExp').querySelectorAll('p');

    ExpsH = [academicExpH3, professionalExpH3, technicalExpH3]
    //Exps = [academicExpP, professionalExpP, technicalExpP]


    // Gonna try adding and deleting elements via JS instead of just hiding/showing

    // find all the paragraphs the page loads with
    let AEps = academicExpH3.parentNode.querySelectorAll('p');
    let PEps = professionalExpH3.parentNode.querySelectorAll('p');
    let TEps = technicalExpH3.parentNode.querySelectorAll('p');

    // make master list and set up empty arrays to accept the text values
    let Paras = [AEps, PEps, TEps];
    let tPs = [];
    for (i=0; i < Paras.length; i++) {
        tPs.push([]);
    }
    // loop through the p elements and record their innerHTML values to appropriate list
    for (i=0; i < Paras.length; i++) {
        for (j=0; j < Paras[i].length; j++) {
            tPs[i][j] = Paras[i][j].innerHTML;
            Paras[i][j].innerHTML = '';
        }
    }

    // Need to make UpdateP a little softer; tPs[i][j] is hardcoded for i

    function UpdateP() {
        let prnt = this.parentNode;
        let Ps = prnt.querySelectorAll('p');
        for (let i = 0; i < Ps.length; i++) {
            if (Ps[i].innerHTML != '') {
                Ps[i].innerHTML = '';
            } else if (prnt.className === 'academicExp') {
                Ps[i].innerHTML = tPs[0][i];
            } else if (prnt.className === 'proExp') {
                Ps[i].innerHTML = tPs[1][i];
            } else if (prnt.className === 'techExp') {
                Ps[i].innerHTML = tPs[2][i];
            }
        }
    }

    for (i = 0; i < 3; i++) {
        ExpsH[i].addEventListener('click', UpdateP);
    }
} else if (document.documentURI.slice(-12)==='contact.html') {
    // Anti-bot click test

    let cTs = document.querySelector('.clickTest').querySelectorAll('a');
    
    //cTs[0].addEventListener('click', ()=> cTs[0].innerHTML= 'p')
    let obj;
    let ans;
    for (i = 0; i < cTAns.length; i++) {
        if (i > 0) {
            cTs[i].addEventListener('click',function () {this.innerHTML = this.className});
        } else{
            cTs[i].addEventListener('click',function () {this.innerHTML = this.className});
            cTs[i].addEventListener('click', cTestCheck);
        }
    }

    function cTestCheck() {
        let cT = document.querySelector('.clickTest');
        for (i = 1; i < cTs.length; i++) {
            if (cTs[i].innerHTML === '_') {
                let oops = document.createElement('button');
                oops.textContent = 'Oops';
                oops.addEventListener('click',()=>{
                    for (j = 0; j < cTs.length; j++) {
                        cTs[j].innerHTML = '_';
                    }
                    oops.remove();
                });
                cT.appendChild(oops);
                return;
            }
        }
        let emb = document.createElement('p');
        emb.textContent = 'g' + 'hauser' + '8' + ' at ' + 'gmail' + ' dot ' + 'com';
        let thnks = document.createElement('p');
        thnks.textContent = 'Thanks, looking forward to hearing from you!';
        cT.appendChild(emb);
        cT.appendChild(thnks);
    }
}

    





