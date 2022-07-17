// creatiing responsive menu
const navbar = document.querySelector('.navbar');
const menuWrapper = document.querySelector('.menuWrapper');
const menuItems = document.querySelector('.menuItems');
const navContainer = document.querySelector('.navContainer');

menuWrapper.addEventListener('click', () => {
    menuWrapper.classList.toggle('menuBtnOpen');
    navbar.classList.toggle('navOpen');
    menuItems.classList.toggle('menuItemsOpen');
    navContainer.classList.toggle('navContainerOpen');
})

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
    renderingSlides.forEach(function(item) {
        const div = document.createElement('div');
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
        console.log('744');
        let currentIndex = 2;
        renderingSlides = [1, 2, 3];
        drawSlide(renderingSlides);

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex+1)%indexes.length;
            const after = (currentIndex+1)%indexes.length;
            let before = (after+1)%indexes.length;
            renderingSlides = [currentIndex, after, before];
            drawSlide(renderingSlides);
        })

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex-1+indexes.length)%indexes.length;
            const after = (currentIndex-1+indexes.length)%indexes.length;
            let before = (after-1+indexes.length)%indexes.length;
            renderingSlides = [currentIndex, after, before];
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


