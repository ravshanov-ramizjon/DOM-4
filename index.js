
//  переключения языка
const languageSelector = document.querySelector('.language-selector');
const langButton = document.getElementById('currentLang');
const langList = document.querySelectorAll('.lang-list li');

langButton.onclick = () => {
    languageSelector.classList.toggle('active');
};

langList.forEach(lang => {
    lang.onclick = function () {
        const selectedLang = this.getAttribute('data-lang');
        langButton.textContent = selectedLang + ' /';
        languageSelector.classList.remove('active');
    };
});



const colorCircles = document.querySelectorAll('.color-circle');
const mainImage = document.getElementById('main-image');
const colorName = document.getElementById('color-name');

//цикл кнопки с цветами
colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        // цвет и изображение
        const newColor = circle.getAttribute('data-color');
        const newImageSrc = circle.getAttribute('data-img');

        // меняет главное изображение
        mainImage.src = newImageSrc;

        // текст с названием цвета
        colorName.textContent = newColor;
    });
});

const memoryButtons = document.querySelectorAll('.SSD');
const selectedMemoryText = document.getElementById('selected-memory');

function resetMemoryButtons() {
    memoryButtons.forEach(button => {
        button.classList.remove('active');
    });
}

function handleMemoryButtonClick() {
    const selectedMemory = this.getAttribute('data-memory');
    selectedMemoryText.textContent = selectedMemory;
    resetMemoryButtons();
    this.classList.add('active');
}

memoryButtons.forEach(button => {
    button.onclick = handleMemoryButtonClick;
});


const simcardButtons = document.querySelectorAll('.sim');
const selectedSimcardText = document.getElementById('selected-simcard');

function resetActiveButtons() {
    simcardButtons.forEach(button => {
        button.classList.remove('active');
    });
}

function handleSimcardButtonClick() {
    const selectedSimcard = this.getAttribute('data-simcard');
    selectedSimcardText.textContent = selectedSimcard;
    resetActiveButtons();
    this.classList.add('active');
}

simcardButtons.forEach(button => {
    button.onclick = handleSimcardButtonClick;
});




const title = document.querySelector('h3');
const btnMin = document.querySelector('.minus');
const btnPlus = document.querySelector('.plus');

let counter = 1;

btnMin.onclick = () => {
    if (counter > 1) { // Минимум 1
        counter--;
        title.innerHTML = counter;
    }
};



btnPlus.onclick = () => {
    counter++;
    title.innerHTML = counter;
};
