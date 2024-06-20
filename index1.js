document.querySelector('.group-e').addEventListener('click', function() {
    window.open('https://www.instagram.com/_w0rf1/?hl=ru', '_blank');
});


const rectangle = document.getElementById('rectangle');
const overlay = document.getElementById('overlay');
const formPopup = document.getElementById('formPopup');

rectangle.addEventListener('click', function() {
    overlay.style.display = 'block';
    formPopup.style.display = 'block';
    formPopup.style.zIndex = '13'; // Поставить форму на передний план
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    formPopup.style.display = 'none';
});


document.querySelector('.pngegg').addEventListener('click', function() {
    const numberOfTeeth = 20; // Количество зубов
    for (let i = 0; i < numberOfTeeth; i++) {
      const toothImg = document.createElement('img');
      toothImg.src = 'zub.png'; // Путь к вашему изображению зуба
      toothImg.style.position = 'absolute';
      toothImg.style.left = Math.random() * window.innerWidth + 'px';
      toothImg.style.top = Math.random() * window.innerHeight + 'px';
      
      document.body.appendChild(toothImg);
      
      // Удаление изображения зуба после некоторого времени
      setTimeout(() => {
        toothImg.remove();
      }, 3000); // Изображение будет удалено через 3 секунды
    }
  });
  