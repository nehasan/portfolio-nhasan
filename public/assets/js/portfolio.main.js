const activeBtnProfessional = () => {
    console.log('professional button clicked');

    let doms = document.getElementsByClassName('btn-nav');
    
    for (var i = 0; i < doms.length; i++) {
        doms[i].classList.remove('selected');
    }
    document.querySelector('.btn-professional').classList.add('selected');
    document.querySelector('.professional-projects').style.display = 'block';
    document.querySelector('.academic-projects').style.display = 'none';
    document.querySelector('.personal-projects').style.display = 'none';
}

const activeBtnAcademic = () => {
    let doms = document.getElementsByClassName('btn-nav');
    
    for (var i = 0; i < doms.length; i++) {
        doms[i].classList.remove('selected');
    }
    document.querySelector('.btn-academic').classList.add('selected');
    document.querySelector('.professional-projects').style.display = 'none';
    document.querySelector('.academic-projects').style.display = 'block';
    document.querySelector('.personal-projects').style.display = 'none';
}

const activeBtnPersonal = () => {
    let doms = document.getElementsByClassName('btn-nav');
    
    for (var i = 0; i < doms.length; i++) {
        doms[i].classList.remove('selected');
    }
    document.querySelector('.btn-personal').classList.add('selected');
    document.querySelector('.professional-projects').style.display = 'none';
    document.querySelector('.academic-projects').style.display = 'none';
    document.querySelector('.personal-projects').style.display = 'block';
}

function bindNavigationButtons() {
    console.log('loading javascript bind...');
    document.querySelector('.btn-professional').addEventListener('click', activeBtnProfessional);
    document.querySelector('.btn-academic').addEventListener('click', activeBtnAcademic);
    document.querySelector('.btn-personal').addEventListener('click', activeBtnPersonal);
}

window.onload = () => {
    console.log('here on load function');
    bindNavigationButtons();
}

