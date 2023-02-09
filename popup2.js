const projectArr = [
    {
        id: 0,
        title: 'Tonic',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'img/tonic1.svg',
        desktopImage: 'img/tonic1.svg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://pmaxy.github.io/setup-and-mobile-first/',
        source: 'https://github.com/pmaxy/setup-and-mobile-first'
    },
    {
        id: 1,
        title: 'Multi-Post Stories',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'img/multistories1.svg',
        desktopImage: 'img/multistories1.svg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://pmaxy.github.io/setup-and-mobile-first/',
        source: 'https://github.com/pmaxy/setup-and-mobile-first'
    },
    {
        id: 2,
        title: 'Tonic',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'img/tonic2.svg',
        desktopImage: 'img/tonic2.svg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://pmaxy.github.io/setup-and-mobile-first/',
        source: 'https://github.com/pmaxy/setup-and-mobile-first'
    },
    {
        id: 3,
        title: 'Multi-Post Stories',
        details: ['CANOPY', 'Back End Dev', 2015],
        image:'img/multistories2.svg',
        desktopImage:'img/multistories2.svg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://pmaxy.github.io/setup-and-mobile-first/',
        source: 'https://github.com/pmaxy/setup-and-mobile-first'
    }
]

const popup = document.querySelector('.popup_menu');
const worksSection = document.querySelector('.work');

let html = '';

projectArr.forEach((project) => {
    html += `
    <div>
			<div class="img"><img src="${project.image}" alt="Multistories symbol"></div>
			<div class="content_work">
				<h2>${project.title}</h2>
				<ul class="work-exp">
					<li>${project.details[0]}</li>
					<li><img src="img/circle.svg" alt="Dot symbol"></li>
					<li>${project.details[1]}</li>
					<li><img src="img/circle.svg" alt="Dot Symbol"></li>
					<li>${project.details[2]}</li>
				</ul>
				<p>${project.description}</p>
				<ul class="lang">
					<li><a href="">${project.technologies[0]}</a></li>
					<li><a href="">${project.technologies[1]}</a></li>
					<li><a href="">${project.technologies[2]}</a></li>
				</ul>

				<button type="button" data-modal="modal" class="btn project-buttons">See Project</button>
			</div>
		</div>`;
});

worksSection.innerHTML = html;

const projectButtons = document.querySelectorAll('.project-buttons');

for (let index = 0; index < projectButtons.length; index++) {
    projectButtons[index].addEventListener('click', () => {
        const title = popup.querySelector('.popup-title');
        const img = popup.querySelector('img');
        title.textContent = projectArr[index].title;

        img.src = projectArr[index].image;
        
        popup.classList.remove('d-none')
    })
    
}

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.add('d-none');
})