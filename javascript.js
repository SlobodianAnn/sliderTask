const sliderButtons = document.querySelectorAll('.slider__btn');
const sliderItem = document.querySelectorAll('.slider-block__item');
const colorsButtons = ['#FAE5D3', '#D5F5E3', '#F2D7D5', '#D6EAF8', '#EBDEF0']


/*sliderButtons.forEach(function(button, index){
    button.addEventListener('click', function(){
        const activeButton = document.querySelector('.slider__btn_active');
        const activeSlider = document.querySelector('.slider__item_show');

        activeButton.style.backgroundColor = '#BDC3C7';
        activeButton.classList.remove("slider__btn_active");

        button.classList.add('slider__btn_active');
        button.style.backgroundColor = colorsButtons[index];
        activeSlider.classList.remove("slider__item_show");
        sliderItem[index].classList.add('slider__item_show')
    })
    
})*/

sliderButtons.forEach(function(button, index){
    setButtonColor();
    button.addEventListener('click', function(){
        const activeButton = document.querySelector('.slider__btn_active');
        const activeSlider = document.querySelector('.slider__item_show');

        activeButton.classList.remove('slider__btn_active');
        button.classList.add('slider__btn_active');
        activeSlider.classList.remove("slider__item_show");
        sliderItem[index].classList.add('slider__item_show')
        
        setButtonColor();
    })
   
})
function setButtonColor(){
    sliderButtons.forEach(function(button,index){
        if(button.classList.contains('slider__btn_active')){
            button.style.backgroundColor = button.getAttribute('data-color');
        } else{
            button.style.backgroundColor = '#BDC3C7';
        }
    })
}