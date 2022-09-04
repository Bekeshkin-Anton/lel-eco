
class AnimationController {
    constructor() {
        try {
            this.findDOMElements();
            this.initializeIntersectionObserver();
        } catch (e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    findDOMElements() {
        this.$animatedElements = [];
        document.querySelectorAll('[data-animated]')
            .forEach(el => this.$animatedElements.push(el));

        this.$animatedElements.forEach(el => {
            el.classList.add(`animation--${el.dataset['animation']}--before`);
        });
    }

    initializeIntersectionObserver() {
        this.observer = new IntersectionObserver(this.observeIntersection.bind(this), {
            threshold: 0.2,
        });

        this.$animatedElements.forEach(el => this.observer.observe(el));
    }

    observeIntersection(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;

                if(!el.dataset['animation']) {
                    return;
                }

                el.classList.add(`animation`);

                if(el.dataset['delay']) {
                    setTimeout(() => {
                        el.classList.add(`animation--${el.dataset['animation']}`);
                    }, Number(el.dataset['delay']));
                } else {
                    el.classList.add(`animation--${el.dataset['animation']}`);
                }
            }
        })
    }
}

export default AnimationController;