// Создаем переменную для выбора марки авто
const markCar = document.getElementById('mark_car');
const fuelTypeCar = document.querySelector('fuel_type_car');

// Создаем переменные для марок авто
const jaguar = document.getElementById('jaguar');
const mazda = document.getElementById('mazda');
const opel = document.getElementById('opel');
const renault = document.getElementById('renault');

// Создаем переменные для элементов
const fuelType =  document.querySelector('.button');
const formCalc = document.getElementById('form_calc');

// Создаем переменные для марок авто
const carModels = '';
const jaguarModels = '';
const mazdaModels = '';
const opelModels = '';
const renaultModels = '';

// Создаем переменные о типе топлива, состоянии, оплате
const ownersNumber = document.querySelector('.owners_number');
const statusLabel = document.getElementById('used');
const

// Создаем переменную для события click
const button = document.querySelector('.button');

// Создаем функцию для вывода моделей по маркам
function chooseMarkCar () {
    if (markCar.value === jaguar.value) {
        fuelTypeCar.innerHTML = `
        <label for="mark_cars">Модели автомобилей
                <select name="mark cars" id="jaguar_models">
                    <option value="empty" hidden></option>
                    <option value="4 000 000">Jaguar I-PACE</option>
                    <option value="2 900 000">Jaguar F-PACE</option>
                    <option value="3 000 000">Jaguar E-PACE</option>
                    <option value="4 500 000">Jaguar F-TYPE</option>
                </select>
            </label>`;
        jaguarModels = document.getElementById('jaguar_models');
        carModels = jaguarModels.value;
    } else if (markCar === mazda.value) {
        carModels.innerHTML = `
        <label for="mark_cars">Модели автомобилей
                <select name="mark cars" id="mazda_models">
                    <option value="empty" hidden></option>
                    <option value="2 600 000">Mazda 3</option>
                    <option value="2 900 000">Mazda 6</option>
                    <option value="3 500 000">Mazda CX-30</option>
                    <option value="4 300 000">Mazda CX-5</option>
                </select>
            </label>`;
        mazdaModels = document.getElementById('mazda_models');
        carModels = mazdaModels.value;
    } else if (markCar === opel.value) {
        carModels.innerHTML = `
        <label for="mark_cars">Модели автомобилей
            <select name="mark cars" id="opel_models">
                <option value="empty" hidden></option>
                <option value="1 700 000">Opel Corsa</option>
                <option value="2 000 000">Opel Astra</option>
                <option value="2 300 000">Opel Crossland</option>
                <option value="2 400 000">Opel Zafira</option>
            </select>
        </label>`;
        opelModels = document.getElementById('opel_models');
        carModels = opelModels.value;
    } else if (markCar === renault.value) {
        carModels.innerHTML = `
        <label for="mark_cars">Модели автомобилей
            <select name="mark cars" id="renault_models">
                <option value="empty" hidden></option>
                <option value="2 100 000"Renault Kaptur</option>
                <option value="2 000 000">Renault Duster</option>
                <option value="2 300 000">Renault Arkana</option>
                <option value="1 500 000">Renault Sandero</option>
            </select>
        </label>`;
        renaultModels = document.getElementById('renault_models');
        carModels = renaultModels.value;
    }
}

// Создаем функцию о состоянии авто и количестве владельцев
function markStatus () {
    if (statusLabel.value === 'used') {
        ownersNumber.innerHTML = `
        <label>
            <input type="radio" name="owners" value="0.9">1-2 владельца
            <input type="radio" name="owners" value="0.8">3 и более
        </label>`
    }
}

//  
// Создаем событие для клика
// button.addEventListener('click', () => {


// });