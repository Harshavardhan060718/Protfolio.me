const navlink = document.querySelectorAll('.nav-link');

navlink.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetid = this.getAttribute('href').substring(1);
        const targetsection = document.getElementById(targetid);
        if (targetsection) {
            targetsection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// for storing contact form details

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json",
        },
    });
    if (response.ok) {
        status.innerHTML = "✅ Thanks for your message!";
        form.reset();

    } else {
        status.innerHTML = "❌ Oops! Something went wrong."
    }

});