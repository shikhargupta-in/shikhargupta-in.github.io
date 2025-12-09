/**
 * Typing effect animation for the homepage
 * Cycles through different professional titles
 */
const words = ["SOFTWARE ENGINEER", "BACKEND DEVELOPER", "SDE-2"];
let currentWordIndex = 0;
let timer;

/**
 * Types out the current word character by character
 */
function typingEffect() {
	const word = words[currentWordIndex].split("");
	const wordElement = document.getElementById("word");
	
	const loopTyping = () => {
		if (word.length > 0) {
			wordElement.innerHTML += word.shift();
		} else {
			deletingEffect();
			return;
		}
		
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
}

/**
 * Deletes the current word character by character
 */
function deletingEffect() {
	const word = words[currentWordIndex].split("");
	const wordElement = document.getElementById("word");
	
	const loopDeleting = () => {
		if (word.length > 0) {
			word.pop();
			wordElement.innerHTML = word.join("");
		} else {
			// Move to next word or loop back to start
			if (words.length > (currentWordIndex + 1)) {
				currentWordIndex++;
			} else {
				currentWordIndex = 0;
			}
			typingEffect();
			return;
		}
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
}

/**
 * Scroll to top button functionality
 */
function initScrollToTop() {
	const scrollButton = document.getElementById("myBtn");
	
	// Show button when user scrolls down 20px from top
	window.onscroll = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			scrollButton.style.display = "block";
		} else {
			scrollButton.style.display = "none";
		}
	};
	
	// Scroll to top when button is clicked
	scrollButton.addEventListener("click", () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	});
}

/**
 * Update copyright year dynamically
 */
function updateCopyrightYear() {
	const yearElement = document.getElementById("current-year");
	if (yearElement) {
		yearElement.textContent = new Date().getFullYear();
	}
}

/**
 * Scroll reveal animation observer
 */
function initScrollReveal() {
	const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
	
	// Immediately activate elements that are already in viewport on load
	revealElements.forEach(element => {
		const rect = element.getBoundingClientRect();
		const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
		if (isInViewport) {
			element.classList.add("active");
		}
	});
	
	// Set up observer for elements that scroll into view later
	const revealObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("active");
			}
		});
	}, {
		threshold: 0.15,
		rootMargin: "0px 0px -80px 0px"
	});
	
	revealElements.forEach(element => {
		revealObserver.observe(element);
	});
}

/**
 * Animate skill bars when they come into view
 */
function initSkillBarAnimation() {
	const skillBars = document.querySelectorAll(".skills__bar");
	
	const skillObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate");
				skillObserver.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.5
	});
	
	skillBars.forEach(bar => {
		skillObserver.observe(bar);
	});
}

/**
 * Hide page loader
 */
function hidePageLoader() {
	const loader = document.getElementById("pageLoader");
	if (loader) {
		setTimeout(() => {
			loader.classList.add("hidden");
			// Remove from DOM after transition
			setTimeout(() => {
				loader.remove();
			}, 500);
		}, 500);
	}
}

/**
 * Add smooth scroll behavior to navigation links
 */
function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener("click", function (e) {
			const href = this.getAttribute("href");
			if (href === "#") return;
			
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}
		});
	});
}

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
	// Hide page loader
	hidePageLoader();
	
	// Start typing animation
	typingEffect();
	
	// Initialize scroll to top button
	initScrollToTop();
	
	// Update copyright year
	updateCopyrightYear();
	
	// Initialize scroll reveal animations
	initScrollReveal();
	
	// Initialize skill bar animations
	initSkillBarAnimation();
	
	// Initialize smooth scrolling
	initSmoothScroll();
	
	// Initialize ScrollReveal library if available
	if (typeof ScrollReveal !== "undefined") {
		const sr = ScrollReveal({
			origin: "top",
			distance: "80px",
			duration: 2000,
			reset: false
		});
		
		// Reveal skills section elements
		sr.reveal(".skills__data", { interval: 100 });
		sr.reveal(".content", { interval: 150 });
	}
}); 
