const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

document.querySelectorAll('#site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#year').textContent = new Date().getFullYear();

// Static-friendly enquiry: set this to the clinic inbox before publishing.
const clinicEmail = 'hello@phdcareclinic.org';
const enquiryForm = document.querySelector('#enquiry-form');
const formStatus = document.querySelector('.form-status');
enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const subject = encodeURIComponent(`PhD Care Clinic enquiry — ${data.get('topic')}`);
  const body = encodeURIComponent(`Hello PhD Care Clinic,\n\nMy name: ${data.get('name')}\nMy email: ${data.get('email')}\nFocus area: ${data.get('topic')}\n\nWhat I would like support with:\n${data.get('message') || '(No additional details yet)'}\n\nThank you.`);
  formStatus.textContent = 'Opening your email app…';
  window.location.href = `mailto:${clinicEmail}?subject=${subject}&body=${body}`;
});
