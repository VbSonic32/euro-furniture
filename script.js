// ── NAV SCROLL SHADOW ────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
	navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ──────────────────────────────────────
function toggleMenu() {
	navbar.classList.toggle('nav-mobile-open');
	document.body.classList.toggle('no-scroll');
}
// Close menu on link click
document.querySelectorAll('.nav-links a').forEach((a) => {
	a.addEventListener('click', () => {
		navbar.classList.remove('nav-mobile-open');
		document.body.classList.remove('no-scroll');
	});
});

// ── SCROLL REVEAL ────────────────────────────────────
const revealEls = document.querySelectorAll(
	'.reveal, .reveal-left, .reveal-right, .reveal-scale',
);
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);

revealEls.forEach((el) => observer.observe(el));

// ── CONTACT FORM ─────────────────────────────────────
function submitForm() {
	const name = document.getElementById('fName').value.trim();
	const email = document.getElementById('fEmail').value.trim();
	const message = document.getElementById('fMessage').value.trim();
	if (!name || !email || !message) {
		// Shake empty required fields
		['fName', 'fEmail', 'fMessage'].forEach((id) => {
			const el = document.getElementById(id);
			if (!el.value.trim()) {
				el.style.borderColor = '#C0392B';
				el.style.animation = 'none';
				setTimeout(() => {
					el.style.borderColor = '';
				}, 2000);
			}
		});
		return;
	}
	// Show success
	const formEl = document.getElementById('contactForm');
	const inputs = formEl.querySelectorAll('input,select,textarea,button');
	inputs.forEach((el) => {
		el.style.display = 'none';
	});
	formEl.querySelector('.form-title').style.display = 'none';
	formEl.querySelector('.form-sub').style.display = 'none';
	formEl.querySelector('.form-row').style.display = 'none';
	const success = document.getElementById('formSuccess');
	success.style.display = 'block';
}

// ── PARALLAX HERO ────────────────────────────────────
window.addEventListener('scroll', () => {
	const hero = document.getElementById('hero');
	if (hero) {
		const scrolled = window.scrollY;
		const heroRight = hero.querySelector('.hero-right');
		if (heroRight && scrolled < window.innerHeight) {
			heroRight.style.transform = `translateY(${scrolled * 0.12}px)`;
		}
	}
});
