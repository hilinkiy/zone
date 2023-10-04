class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section);

        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.section)
        })
    }

    fadeRightAnim(section) {
        const fadeRight = section.querySelectorAll('.fade-right');

        fadeRight.forEach(item => {
            const speed = item.getAttribute('data-speed');
            item.style.transition = speed + 'ms';

            if (window.scrollY >= (section.offsetTop - section.offsetHeight / 3)) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    }
}

const scroll = new Scroll({
    section: '.service',
})

const instruct = new Scroll({
    section: '.instruct',
})

class Roll {
    constructor(obj) {
        this.parrent = document.querySelector(obj.parrent);

        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.parrent)
        })
    }

    fadeRightAnim(parrent) {
        const fadeRight = parrent.querySelectorAll('.fade-right');

        fadeRight.forEach(item => {
            const speed = item.getAttribute('data-speed');
            item.style.transition = speed + 'ms';

            if (window.scrollY >= (parrent.offsetTop - parrent.offsetHeight / 1.4)) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    }
}

const team = new Roll({
    parrent: '.team',
})

const email = new Roll({
    parrent: '.email',
})