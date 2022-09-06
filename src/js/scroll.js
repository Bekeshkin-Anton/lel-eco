class ScrollController {
    constructor() {
        try {
            this.subscribe();
        } catch (e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    subscribe() {
        document.querySelectorAll('.js--scroll-to').forEach(el => {
            const element = document.querySelector(el.dataset['element']);
            el.addEventListener('click', (e) => {
                e.preventDefault();

                element.scrollIntoView({
                    behavior: 'smooth',
                });
            });
        });
    }
}

export default ScrollController;