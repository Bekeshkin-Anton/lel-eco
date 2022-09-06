
export class FirstScreenForm {
    constructor(popupController) {
        this.popupController = popupController;
        try {
            this.findDOMElements();
            this.subscribe();
        } catch(e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    findDOMElements() {
        this.$form = document.querySelector('.first-section__form');

        this.$nameInput = this.$form.querySelector('input[name="name"]');
        this.$phoneInput = this.$form.querySelector('input[name="phone"]');
        this.$emailInput = this.$form.querySelector('input[name="email"]');
    }

    async submitHandler(e) {
        e.preventDefault();

        const formData = {
            title: "Заявка с главного экрана",
            name:  this.$nameInput.value,
            phone:  this.$phoneInput.value,
            email:  this.$emailInput.value,
        };

        const response = await fetch('http://localhost:5005/api/submit-form', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            this.popupController.open('success');
        }
    }

    subscribe() {
        this.$form.addEventListener('submit', this.submitHandler.bind(this));
    }
}

export class SixthScreenForm {
    constructor(popupController) {
        this.popupController = popupController;
        try {
            this.findDOMElements();
            this.subscribe();
        } catch(e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    findDOMElements() {
        this.$form = document.querySelector('.sixth-section__form');

        this.$nameInput = this.$form.querySelector('input[name="name"]');
        this.$phoneInput = this.$form.querySelector('input[name="phone"]');
    }

    async submitHandler(e) {
        e.preventDefault();

        const formData = {
            title: 'Заявка с экрана "Закажите обратный звонок"',
            name:  this.$nameInput.value,
            phone:  this.$phoneInput.value,
            email:  'Отсутствует',
        };

        const response = await fetch('http://localhost:5005/api/submit-form', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            this.popupController.open('success');
        }
    }

    subscribe() {
        this.$form.addEventListener('submit', this.submitHandler.bind(this));
    }
}

export class EighthScreenForm {
    constructor() {
        try {
            this.findDOMElements();
            this.subscribe();
        } catch(e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    findDOMElements() {
        this.$form = document.querySelector('.eighth-section__form');

        this.$phoneInput = this.$form.querySelector('input[name="phone"]');
    }

    async submitHandler(e) {
        e.preventDefault();

        const formData = {
            title: 'Заявка с экрана "Нельзя загрязнять ОС отходами"',
            name:  'Отсутствует',
            phone:  this.$phoneInput.value,
            email:  'Отсутствует',
        };

        const response = await fetch('http://localhost:5005/api/submit-form', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json'
        }
        });

        if(response.ok) {
            alert('OK');
        }
    }

    subscribe() {
        this.$form.addEventListener('submit', this.submitHandler.bind(this));
    }
}

export class PopupForm {
    constructor(popupController) {
        this.popupController = popupController;

        try {
            this.findDOMElements();
            this.subscribe();
        } catch(e) {
            console.log(`An error occurred. Error description: ${e.message}`);
        }
    }

    findDOMElements() {
        this.$form = document.querySelector('.popup__body__form');

        this.$phoneInput = this.$form.querySelector('input[name="phone"]');
        this.$nameInput = this.$form.querySelector('input[name="name"]');
    }

    async submitHandler(e) {
        e.preventDefault();

        const formData = {
            title: 'Заявка со всплывающего окна "Обратный звонок"',
            name:  this.$nameInput.value,
            phone:  this.$phoneInput.value,
            email:  'Отсутствует',
        };

        const response = await fetch('http://localhost:5005/api/submit-form', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            this.popupController.open('success');
        }
    }

    subscribe() {
        this.$form.addEventListener('submit', this.submitHandler.bind(this));
    }
}