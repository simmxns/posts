const container = <Element>document.querySelector('.container'),
	privacy = <Element>document.querySelector('.privacy'),
	arrowBack = <Element>container.querySelector('.arrow-back')

privacy.addEventListener('click', () => {
	container.classList.add('active')
})
arrowBack.addEventListener('click', () => {
	container.classList.remove('active')
})
