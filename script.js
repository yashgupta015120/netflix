const languageSelector = document.getElementById("language-selector");
const pageTitle = {
    en: "Netflix India – Watch TV Shows Online, Watch Movies Online",
    hi: "Netflix India – ऑनलाइन टीवी शो और फ़िल्में देखें"
};

const membershipForm = document.getElementById("membership-form");
const emailInput = document.getElementById("email-address");
const formMessage = document.getElementById("form-message");

function setFormMessage(message, isError = false) {
    formMessage.textContent = message;
    formMessage.classList.toggle("is-error", isError);
}

languageSelector.addEventListener("change", () => {
    const language = languageSelector.value;

    document.documentElement.lang = language;
    document.title = pageTitle[language];

    document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
        element.textContent = element.dataset[language];
    });

    document.querySelectorAll("[data-placeholder-en][data-placeholder-hi]").forEach((element) => {
        element.placeholder = element.getAttribute(`data-placeholder-${language}`);
    });

    document.querySelectorAll("[data-aria-label-en][data-aria-label-hi]").forEach((element) => {
        element.setAttribute("aria-label", element.getAttribute(`data-aria-label-${language}`));
    });

    document.querySelectorAll("[data-alt-en][data-alt-hi]").forEach((element) => {
        element.alt = element.getAttribute(`data-alt-${language}`);
    });

    emailInput.setCustomValidity("");
    setFormMessage("");
});

emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
    setFormMessage("");
});

membershipForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const language = languageSelector.value;
    const invalidEmailMessage = language === "hi"
        ? "कृपया एक मान्य ईमेल पता दर्ज करें।"
        : "Please enter a valid email address.";

    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity(invalidEmailMessage);
        emailInput.reportValidity();
        setFormMessage(invalidEmailMessage, true);
        return;
    }

    setFormMessage(language === "hi"
        ? "यह केवल डेमो है — आपका ईमेल कहीं नहीं भेजा गया।"
        : "This is a demo — your email has not been sent anywhere.");
});

const featureSections = document.querySelectorAll(".feature-section");

if ("IntersectionObserver" in window) {
    const featureObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    featureSections.forEach((section) => {
        section.classList.add("reveal-ready");
        featureObserver.observe(section);
    });
}
