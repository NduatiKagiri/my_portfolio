const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links-list');
	const navLinks = document.querySelectorAll('.nav-links-list li');

	burger.addEventListener('click', () => {

		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		burger.classList.toggle('toggle');
	});

  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {

      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
        if (link.style.animation){
          link.style.animation = '';
        }
      });

      burger.classList.toggle('toggle');

    });
  });
}

navSlide();
