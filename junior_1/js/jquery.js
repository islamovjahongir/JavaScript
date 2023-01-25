// Получаем элементы по страницам

// jquery
$('div') // Получаем все селекторы по тегу
$('#block') // Получаем один селектор по ID
$('.class') // Получаем все селекторы по классу

// JavaScript
document.querySelector('div') // Получаем первый селектор по тегу
document.querySelectorAll('div') // Получаем все элементы селектора по тегу
document.querySelector('#block') // Получаем один селектор по ID
document.querySelectorAll('.class') // Получаем все селекторы по классу

// Анимировано показать блоки 
$('.star').slideDown(2000, function () {
    // Код по завершению действия
    console.log('Текст показан')
});

// Добавляем класс className для всех элементов с классом .block
$('.block').addClass('className');
// Удаляем класс className  у всех элементов с классом .block
$('.block').removeClass('className');
// Удаляем/добавляем класс className для всех элемнто с классом  .block

// JavaScript
// Добаляем класс className  для всех элементов  с классом .block
const blocks = document.querySelector('.block');
blocks.forEach(block => { block.classList.add('className'); });
// Удаляем класс className у всех элементов с классом .block
blocks.forEach(block => { block.classList.remove('className'); });
// Удаляем/добавляем  класс className для всех  элементов с классом  .block
blocks.forEach(block => { block.classList.toggle('className'); });

// События

// jQuery
// Вешаем обработчик события клик на все объекты с классом .block
$('.block').click(function (e) {
    // пишем реакцию на клик
});

// js
const blocks2 = document.querySelectorAll('block');
blocks2.forEach(block => {
    block.addEventListener("click", function (e) {
        // пишем реакцию на клик
    });
});