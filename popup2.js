const projectArr = [
    {
        id: 0,
        title: 'Kisumu County Government',
        details: ['vOLUNTEER ','GIS Analyst', 2019],
        image: 'img/tonic1.svg',
        desktopImage: 'img/tonic1.svg',
        description: 'As a volunteer in the GIS department, I collaborated with the county government to make a positive impact. My responsibilities included mapping petrol stations in Kisumu County, collecting data on Sondu and Katito markets for land use planning, participating in labor market planning, and evaluating the GIS draft evaluation roll. Through these activities, I contributed to the development of accurate and informative spatial information, facilitating informed decision-making for land use, economic planning, and taxation in Kisumu County.',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://pmaxy.github.io/setup-and-mobile-first/',
        source: 'https://github.com/pmaxy/setup-and-mobile-first'
    },
    {
        id: 1,
        title: 'Kisumu County Government ',
        details: ['CANOPY', 'Back End Dev', 2020],
        image: 'img/multistories1.svg',
        desktopImage: 'img/multistories1.svg',
        description: 'I assisted in analyzing climatic and weather changes in Kisumu County. I collaborated with Transparency International on spatial analysis projects, contributing to data-driven insights. Additionally, I conducted data collection and mapping of handwashing stations in informal settlements to support COVID-19 mitigation efforts. Lastly, I provided support to UN-Habitat in mapping socio-economic data related to existing facilities in Kisumu city`s informal settlements. These experiences allowed me to contribute to various projects and initiatives, addressing climate, transparency, public health, and urban development challenges in Kisumu County.',
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