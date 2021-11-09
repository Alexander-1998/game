//Элементы 

let slider     = document.querySelector('.slider__inp'),
    minus      = document.querySelector('.minus'),
    plus       = document.querySelector('.plus'),
    range__inp = document.querySelector('.range__inp');

//Счетчик
let i = 0;



///Слашутели на кнопки плюс и минус
minus.addEventListener('click', () =>{
    i--;
    if(i <= 0){
        i = 0;
    }
    slider.value = i;
    range__inp.value = i;

    
});

plus.addEventListener('click', () =>{
    i++;
    slider.value = i;
    range__inp.value = i;
});

/// Событие для слайдера

slider.oninput = () => {
    let sliderVal = slider.value;
    range__inp.value = sliderVal;
    i = sliderVal;
};

range__inp.onchange = () => {
    let ranheInpVal = range__inp.value;
    slider.value = ranheInpVal;
    i = ranheInpVal;
};