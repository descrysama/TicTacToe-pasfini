let cases = document.querySelectorAll('.cases');
let grid = document.querySelector('.container');
let numberOfChilds = 18;
let Switcher = false;



    for (let i = 0; i < cases.length; i++) {
        cases[i].onclick = (e) => {
            e.preventDefault();
            let clickedCase = cases[i];
            if (clickedCase.hasChildNodes()) {
                console.log("can't click more than One Time");
            } else {
                if (Switcher == false) {
                    let createimg = document.createElement('img');
                    createimg.setAttribute('class', 'selectDisable')
                    createimg.src = '/img/cross.png';
                    clickedCase.appendChild(createimg);
                    console.log('Cross has been placed');
                    Switcher = true;
                } else {
                    let createimg = document.createElement('img');
                    createimg.setAttribute('class', 'selectDisable')
                    createimg.src = '/img/circle.png';
                    clickedCase.appendChild(createimg);
                    console.log('Circle has been placed');
                    Switcher = false;
                }
            }
        }
        
    }
    
    let Array1 = [1, 2, 3]
    let Array2 = [3, 2, 1]
    Array2 = Array2.sort();
    console.log(Array2);
    console.log(Array1);

    if (JSON.stringify(Array1) == JSON.stringify(Array2)) {
        console.log('bibi est la meilleure');
    }else {
        console.log('bibi tu saoules');
    }



