class Header {

    constructor() {
        try {
            this.findDOMElements();
            this.subscribe();
        } catch (e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }

    }

    findDOMElements() {
        this.$header = document.querySelector('.header');
        this.$expandButton = this.$header.querySelector('.header__elem--expand-button');
    }

    subscribe() {
        if(!this.$header) {
            throw new Error('The "header" element is undefined');
        }

        window.addEventListener('scroll', this.pageScrollHandler.bind(this));
        this.$expandButton.addEventListener('click', () => {
            this.$header.classList.toggle('header--collapsed');
        })
    }

    pageScrollHandler(e) {
        if(window.scrollY >= this.$header.clientHeight) {
            if(!this.$header.classList.contains('header--with-background')) {
                this.$header.classList.add('header--with-background');
            }
        } else {
            this.$header.classList.remove('header--with-background');
        }
    }
}

export default Header;