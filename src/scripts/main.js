var container = document.querySelector('.container'), privacy = document.querySelector('.privacy'), arrowBack = container.querySelector('.arrow-back');
privacy.addEventListener('click', function () {
    container.classList.add('active');
});
arrowBack.addEventListener('click', function () {
    container.classList.remove('active');
});
