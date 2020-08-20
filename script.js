
/*
LANDING TEXT ANIMATION
 - library source: https://tobiasahlin.com/moving-letters/
*/

const textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

/*
CATALOG SCROLL TRANSITION EFFECT
 - tutorial: https://www.youtube.com/watch?v=huVJW23JHKQ
*/

// Intersection Observer documentation: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const appearOptions = {
	threshold: 0.5,

};

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
	(entries, appearOnScroll) => {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);
			}
		})
	}, appearOptions // don't forget second parameter 
)

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});