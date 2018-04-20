// Global Variables --------------------------------------------------
let ticking = false;
let usingTouch = false;
let continuousAnimation = "";

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
const navWrapper = document.getElementById('navWrapper');
const logoContainer = document.getElementById('logoContainer');
const logoSpacingLeft = document.getElementById('logoSpacingLeft');
const logoSpacingRight = document.getElementById('logoSpacingRight');
const logo = document.getElementById('logo');
const heading = document.getElementById('heading');
const subheading = document.getElementById('subheading');


// Document Events --------------------------------------------------
{
  class Entry {
    constructor(el) {
      this.DOM = {el: el};
      this.DOM.image = this.DOM.el.querySelector('.content-container');
      this.DOM.title = {word: this.DOM.el.querySelector('.section__title')};
      if (this.DOM.title.word){
        charming(this.DOM.title.word);
        this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
        this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
        this.lettersTotal = this.DOM.title.letters.length;
      }

      sectionObserver.observe(this.DOM.el);
    }
    enter(direction = 'down') {
      this.entertime = setTimeout(()=> {
        this.DOM.title.word.style.opacity = 1;
        this.DOM.title.word.classList.add("section__title--active");
        // console.log

        anime.remove(this.DOM.title.letters);
        anime({
          targets: this.DOM.title.letters,
          duration: 400,
          delay: (target,index) => index*25,
          easing: 'easeOutSine',
          translateY: [direction === 'down' ? '1rem' : '-1rem', '0'],
          opacity: {
            value: [0,1],
            duration: 100,
            easing: 'linear'
          }
        });

        bodyEl.style.backgroundColor = this.DOM.el.dataset.bgcolor;
      }, 150);
    }
    exit(direction = 'down') {
      anime.remove(this.DOM.title.letters);
      if ( this.entertime ) {
        clearTimeout(this.entertime);
      }
      this.DOM.title.word.classList.remove("section__title--active");


      anime({
        targets: this.DOM.title.letters,
        duration: 200,
        delay: (target,index) => index*15,
        easing: 'easeOutCubic',
        translateY: ['0%',direction === 'down' ? '-1rem' : '1rem'],
        opacity: {
          value: [1,0],
          duration: 150,
          easing: 'linear'
        },
        complete: () => this.DOM.title.word.style.opacity = 0
      });
    }
  }

  let sectionObserver;
  let current = -1;
  let sectionEntries = [];

  const bodyEl = document.body;
  const sections = Array.from(document.querySelectorAll('.section'));
  const contentImages = document.querySelectorAll('.content__image');
  const container = document.getElementById('container');
  const imgLoad = imagesLoaded(container);

  for (let i = 0; i < contentImages.length; i++) {
    contentImages[i].parentNode.classList.add('is-loading');
  };

  imagesLoaded(contentImages, () => {
    if ('IntersectionObserver' in window) {
      document.body.classList.add('ioapi');

      sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          let exception = false;
          if(entry.target.id == "portfolio" && entry.intersectionRatio > 0.3)
            exception = true;

          if (entry.intersectionRatio > 0.5 || exception) {
              const newcurrent = sections.indexOf(entry.target);
              if ( newcurrent === current ) return;
              const direction = newcurrent > current;
              if (current >= 0 ) {
                  sectionEntries[current].exit(direction ? 'down' : 'up');
              }
              sectionEntries[newcurrent].enter(direction ? 'down' : 'up');
              current = newcurrent;
          }
        });
      }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] });

      sections.forEach(section => sectionEntries.push(new Entry(section)));
    }
  });

  function onProgress( imgLoad, image ) {
    if (image.isLoaded) {
      image.img.parentNode.classList.remove('is-loading');
      image.img.parentNode.classList.add('done');
    }
  }

  imgLoad.on( 'progress', onProgress );
}





{
  window.addEventListener('scroll', function(e) {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        repositionLogo();
        ticking = false;
      });

      ticking = true;
    }
  });

  window.addEventListener('touchstart', function(e) {
    if (!usingTouch) {
      usingTouch = true;
      repositionLogo();
    }
  });

  window.addEventListener('resize', function(e) {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    repositionLogo();
  });

  function repositionLogo () {
    let scrollAction = "";
    const scrollAnimStart = 50;
    const scrollAnimEnd = windowHeight*0.5;

    if (window.scrollY >= 0 && window.scrollY < scrollAnimStart) {
      scrollAction = "big";

      if (usingTouch)
        navWrapper.style.cssText = `position: sticky`;

    } else if (window.scrollY >= scrollAnimStart && window.scrollY < scrollAnimEnd) {
        if (!usingTouch) {
          scrollAction = "shrinking";
        } else {
          scrollAction = "big";
          navWrapper.style.cssText = `position: sticky`;
        }

    } else {
      scrollAction = -1;
    }

    switch(scrollAction) {
      // Deprecated, because I should show stuff on initial load
      // case "textSlide":
      //   bigView();
      //   const scrollLength = 200;
      //   heading.style.cssText = `font-size: 3rem;`;
      //   subheading.style.cssText = `font-size: 2.25rem;`;
      //   continuousAnimation = true;
      //   break;

      case "big":
        if (continuousAnimation != "big") {
          bigView();
        }

        continuousAnimation = "big";
        break;

      case "shrinking":
        if (!usingTouch)

          shrinkingAnimation(scrollAnimStart, scrollAnimEnd);

        continuousAnimation = "shrinking";
        break;

      default:
        if (continuousAnimation != "default")
          defaultView();
          navWrapper.removeAttribute("style");

        continuousAnimation = "default";
        break;
    }
  }

  function resetStyles () {
    logoSpacingLeft.removeAttribute("style");
    logoSpacingRight.removeAttribute("style");
    logoContainer.removeAttribute("style");
    logo.removeAttribute("style");
    logoContainer.classList.remove('logo-container--big');
    heading.removeAttribute("style");
    subheading.removeAttribute("style");
  }

  function bigView () {
    resetStyles();
    logoContainer.classList.add('logo-container--big');
  }

  function defaultView () {
    resetStyles();
  }

  function shrinkingAnimation(scrollStart, scrollEnd) {
    const scrollDiff = scrollEnd - scrollStart;

    let logoMinHeight = 10;
    let logoAddHeight = 10;
    let headingMinHeight = 1.75;
    let headingAddHeight = 0.75;
    let logoMaxRadius = 0.5;

    if (windowWidth >= 1400) {
      logoAddHeight = 20;
      headingAddHeight = 2.25;
      logoMaxRadius = 0.75;
    } else if (windowWidth < 1024) {
      logoAddHeight = 5;
      logoMaxRadius = 0.25;
   }

    const leftSpacing = ((scrollDiff - window.scrollY + scrollStart) / scrollDiff) * 5;
    const rightPadding = ((scrollDiff - window.scrollY + scrollStart) / scrollDiff) * 1.5 + 1.5;
    const logoBorderRadius = ((scrollDiff - window.scrollY + scrollStart) / scrollDiff) * logoMaxRadius;
    const logoMargin = ((scrollDiff - window.scrollY + scrollStart) / scrollDiff) * 13;
    const logoHeight = ((scrollDiff - window.scrollY + scrollStart) / scrollDiff) * logoAddHeight + logoMinHeight;
    const nameSize = ((scrollDiff - window.scrollY + scrollStart) / scrollDiff) * headingAddHeight + headingMinHeight;

    logoSpacingLeft.style.cssText = `flex: 0 0 ${leftSpacing}vw;`;
    logoSpacingRight.style.cssText = `padding-left: ${rightPadding}vw; background: transparent`;
    logoContainer.style.cssText = `height: ${logoHeight}vh; padding: ${logoMargin}vh 0;`;
    logoContainer.classList.add('logo-container--big');
    logo.style.cssText = `height: ${logoHeight}vh; border-radius: ${logoBorderRadius}rem`;
    heading.style.cssText = `font-size: ${nameSize}rem;`;
    subheading.style.cssText = `font-size: ${nameSize * .6667}rem;`;
  }
}

{
  function typeMe() {
    var typed = new Typed('#about-rotation', {
      strings: [
        'am a designer',
        'am an engineer',
        'am a front-end developer',
        'am an Adobe Illustrator master',
        'am an Adobe CC user',
        'am a pusher for interactive prototypes',
        'am a CSS guru',
        'am a Figma advocate',
        'am a Waterloo alumnus',
        'am a typography aficionado',
        'am Canadian 🍁!',
        'an aspiring world-traveler',
        'an experimenter',
        'am a fan of minimalism',
        'am an Apple &amp; Google (&amp; Microsoft Zune) fan',
        'am a foodie',
        'like pineapple on pizza',
        'am a whiskey drinker',
        'am a volleyball player',
        'am a rock climber',
        'type in Colemak',
        'love creating animations',
        'am a music lover',
        'built my own PC',
        'am a photographer',
        'am a gamer'],
      typeSpeed: 40,
      startDelay: 1000,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      shuffle: true
    });
  }
}

repositionLogo();
typeMe();
