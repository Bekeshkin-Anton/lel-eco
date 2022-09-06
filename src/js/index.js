import '../css/style.scss';

import Header from './header';
import AnimationController from "./animation";
import {FirstScreenForm, SixthScreenForm, EighthScreenForm, PopupForm} from "./forms";
import PopupController from "./popup";

document.addEventListener('DOMContentLoaded', () => {
    const header = new Header();
    const animationController = new AnimationController();
    const firstForm = new FirstScreenForm();
    const sixthForm = new SixthScreenForm();
    const eighthForm = new EighthScreenForm();
    const popupForm = new PopupForm();
    const popupController = new PopupController();
});
