// creatiing responsive menu
const navbar = document.querySelector('.navbar');
const menuWrapper = document.querySelector('.menuWrapper');
const menuItems = document.querySelector('.menuItems');
const navContainer = document.querySelector('.navContainer');

let open = true;
menuWrapper.addEventListener('click', () => {
    console.log('1'. open);
    const y = window.pageYOffset;
    navContainer.style.marginTop = y+'px';
    menuWrapper.classList.toggle('menuBtnOpen');
    navbar.classList.toggle('navOpen');
    menuItems.classList.toggle('menuItemsOpen');
    navContainer.classList.toggle('navContainerOpen');
    if (open) {
        document.body.style.overflow = 'hidden';
        open = false;
    } else {
        document.body.style.overflow = 'scroll';
        open = true;
    }

})

navContainer.addEventListener('click', () => {
    console.log('2', open);
        if (window.innerWidth<744) {
            if (open) {
                document.body.style.overflow = 'hidden';
                const y = window.pageYOffset;
                navContainer.style.marginTop = y+'px';
                open = false;
            } else {
                document.body.style.overflow = 'scroll';
                navContainer.style.marginTop = 0+'px';
                open = true;
            }
            menuWrapper.classList.toggle('menuBtnOpen');
            navbar.classList.toggle('navOpen');
            menuItems.classList.toggle('menuItemsOpen');
            navContainer.classList.toggle('navContainerOpen');
        }
})

// scroll
const about = document.querySelector('.about');

about.addEventListener('click', () => {
    const elem = document.getElementById('aboutContainer');
    window.scrollTo({
        top: window.innerWidth >=1280 ? elem.offsetTop+500 : elem.offsetTop+300,
        left: 0,
        behavior: 'smooth'
      });

});

const service = document.querySelector('.service');

service.addEventListener('click', () => {
    const elem = document.getElementById('servicesWrapper');
    window.scrollTo({
        top:  window.innerWidth >=1280 ? elem.offsetTop+500 : elem.offsetTop+300,
        left: 0,
        behavior: 'smooth'
      });

});

const project = document.querySelector('.project');

project.addEventListener('click', () => {
    const elem = document.getElementById('projectsWrapper');
    window.scrollTo({
        top:  window.innerWidth >=1280 ? elem.offsetTop+500 : elem.offsetTop+300,
        left: 0,
        behavior: 'smooth'
      });

});

const contactus = document.querySelector('.contactus');

contactus.addEventListener('click', () => {
    const elem = document.getElementById('footerContainer');
    window.scrollTo({
        top:  window.innerWidth >=1280 ? elem.offsetTop+500 : elem.offsetTop+300,
        left: 0,
        behavior: 'smooth'
      });

});

// creating slider
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let renderingSlides = [];
let windowSize = window.innerWidth;
const indexes = [0, 1, 2, 3, 4];

window.addEventListener("resize", () => {
    windowSize = window.innerWidth;
    slide();
});


slide();

function drawSlide (renderingSlides) {
    slides.innerHTML = '';
    console.log(renderingSlides);
    renderingSlides.forEach(function(item, index) {
        const div = document.createElement('div');
        if (renderingSlides.length == 3) {
            if (index==1) {
                div.style.width = '268px'
                div.style.height = '200px'
            } else {
                div.style.width = '181px'
                div.style.height = '136px'
            }
        } else if (renderingSlides.length == 5) {
            if (index==2) {
                div.style.width = '268px'
                div.style.height = '200px'
            } else {
                div.style.width = '181px'
                div.style.height = '136px'
            }
        }

        div.className = 'slide'+item;
        slides.appendChild(div);
    });
}
function slide () {
    if (windowSize<744) {
        let currentIndex = 2;
        drawSlide([currentIndex]);

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex+1)%indexes.length;
            drawSlide([currentIndex]);
        })

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex-1+indexes.length)%indexes.length;
            drawSlide([currentIndex]);
        })
    } else if (windowSize>=744 && windowSize < 1280) {
        let currentIndex = 2;
        renderingSlides = [1, 2, 3];
        drawSlide(renderingSlides);

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex-1+indexes.length)%indexes.length;
            const after = (currentIndex+1)%indexes.length;
            let before = (currentIndex-1+indexes.length)%indexes.length;
            renderingSlides = [before, currentIndex, after];
            drawSlide(renderingSlides);
        })

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex-1+indexes.length)%indexes.length;
            const after = (currentIndex-1+indexes.length)%indexes.length;
            let before = (after-1+indexes.length)%indexes.length;
            renderingSlides = [before, currentIndex, after];
            drawSlide(renderingSlides);
        })
    } else {
        let currentIndex = 2;
        renderingSlides = [0, 1, 2, 3, 4];
        drawSlide(renderingSlides);

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex+1)%indexes.length;
            renderingSlides = [currentIndex];
            let change = currentIndex;
            let i = 4;

            while(i>0) {
                change=(change+1)%indexes.length;
                renderingSlides.push(change);
                i--;
            }
            drawSlide(renderingSlides);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex-1+indexes.length)%indexes.length;
            renderingSlides = [currentIndex];
            let change = currentIndex;
            let i = 4;

            while(i>0) {
                change=(change-1+indexes.length)%indexes.length;
                renderingSlides.push(change);
                i--;
            }
            drawSlide(renderingSlides);
        })
    }
}


