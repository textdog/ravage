const ev                    = document.addEventListener.bind(document),
      q                     = (el, qry) => { return el.querySelector(qry); },
      CONTENT               = q(document.body, 'section.above-the-fold'),
      WEIRDSHIT             = q(document.body, 'section.below-the-fold'),
      WEIRD_NEGATIVE_MARGIN = 150;

let weirdShitOffset;

const ravage = () => {
    window.addEventListener('resize', initCoordinates);
    window.addEventListener('scroll', scrollCallback);
    initCoordinates();
    scrollCallback();
}

const initCoordinates = () => {
    weirdShitOffset =WEIRDSHIT.getBoundingClientRect().y;
}

const scrollCallback = () => {
    const scrollY = window.scrollY;

    if (window.innerHeight + scrollY > weirdShitOffset) {
        CONTENT.classList.add('fixed');
        document.body.style.paddingTop = weirdShitOffset + WEIRD_NEGATIVE_MARGIN + 'px';
        CONTENT.style.transform = 'translateX(-50%) translateY(-' + (weirdShitOffset - window.innerHeight) + 'px)';
    } else {
        CONTENT.classList.remove('fixed');
        document.body.style.paddingTop = '0px';
        CONTENT.style.transform = 'translateX(0px) translateY(0px)';
    }
}

switch(document.readyState) {
    case 'complete':
    case 'loaded':
    case 'interactive':
        ravage();
        break;
    default:
        if (typeof document.addEventListener === 'function')
            ev('DOMContentLoaded', ravage, false);
}