// let i = 0;

const btn = document.querySelector('button'), // первая кнопка
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay'),
      delElement = (event) => {
            // event.target.remove();
            console.log(event.target);  
            console.log(event.type);
            // i++;
            // if ( i == 1) {
            //     btn.removeEventListener('click', delElement);
            // }
        };



// Обработчик событий addEventListener. В этом примере используется стрелочная функция...
// ...внутри которой задается условия выполнения
// btn.addEventListener('click', (event) => {
//     console.log(event.target); //способ использования ивента
//     event.target.remove(); // удаление элемента
//     alert('Click');
// });

// В этом примере используется переменная delElement со стрелочной функцией,...
// назанчаем её вторым аргементом (обработчик),мы как бы ссылаемся на эту функцию и нам не приходится её прописывать внутри самого обработчика событий
// Работает только с первой кнопкой на сайте
// btn.addEventListener('click', delElement);
// overlay.addEventListener('click', delElement);

// Назначение обработчика событий на каждый элемент псевдомассива
// Теперь нажимаю на любую из кнопок, будет работать обработчик событий
// Третий аргумет является опцией, к примеру, чтобы код выполнялся один раз
btns.forEach(btn => {
    btn.addEventListener('click', delElement, {once: true});
});


// .removeEventListener удаляет обработчик событий
// btn.removeEventListener('click', delElement);

// Изменение стандартного поведения браузера
// ЧАСТО БУДЕТ ПРИМЕНАЯТЬСЯ В WEB ПРИЛОЖЕНИЯХ
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();   // Запрещает переход по ссылке 

    console.log(event.target);
});