export default class PopupController {
    constructor() {
        try {
            this.initialize();
        } catch (e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    findDOMElements() {
        this.$forms = [];

        document.querySelectorAll('.popup')
            .forEach(el => this.$forms.push(el));

        this.$popupButtons = [];

        document.querySelectorAll('.js--popup-button')
            .forEach(el => this.$popupButtons.push(el));

        this.$closeButtons = [];
        this.$forms.forEach(el =>
            el.querySelectorAll('.popup__body__close-button').forEach(el => this.$closeButtons.push(el))
        );
    }

    subscribe() {
        this.$popupButtons.forEach(el => {
            el.addEventListener('click', this.openHandler.bind(this));
        });

        this.$closeButtons.forEach(el => {
            el.addEventListener('click', this.closeHandler.bind(this));
        });
    }

    initialize() {
        this.findDOMElements();
        this.subscribe();

        this.$forms.forEach(el => {
            el.style.display = 'none';
        });
    }

    openHandler(e) {
        e.preventDefault();
        this.open(e.target.dataset['popup'])
    }

    open(name) {
        this.$forms.find(x => x.id === name).style.display = 'flex';
    }

    closeHandler(e) {
        if (e.target.classList.contains('popup__body__close-button')) {
            this.$forms.find(x => x.id === e.target.dataset['popup']).style.display = 'none';
        }
    }
}