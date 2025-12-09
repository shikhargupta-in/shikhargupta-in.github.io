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
 * Initialize all functionality when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
	// Start typing animation
	typingEffect();
	
	// Initialize scroll to top button
	initScrollToTop();
	
	// Update copyright year
	updateCopyrightYear();
	
	// Initialize ScrollReveal animations
	if (typeof ScrollReveal !== "undefined") {
		const sr = ScrollReveal({
			origin: "top",
			distance: "80px",
			duration: 2000,
			reset: true
		});
		
		// Reveal skills section elements
		sr.reveal(".skills__text", {});
		sr.reveal(".skills__data", { interval: 200 });
	}
}); 
