import '../css/style.scss';

import Header from './header';
import AnimationController from "./animation";
import {FirstScreenForm, SixthScreenForm, EighthScreenForm, PopupForm} from "./forms";
import PopupController from "./popup";
import ScrollController from "./scroll";

document.addEventListener('DOMContentLoaded', () => {
    const header = new Header();
    const animationController = new AnimationController();
    const popupController = new PopupController();
    const firstForm = new FirstScreenForm(popupController);
    const sixthForm = new SixthScreenForm(popupController);
    const eighthForm = new EighthScreenForm(popupController);
    const popupForm = new PopupForm(popupController);
    const scrollController = new ScrollController();
});
