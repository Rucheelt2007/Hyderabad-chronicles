/* script.js — nav helpers, years, FAQ (Bootstrap handles accordion) */

document.addEventListener('DOMContentLoaded', () => {
  // insert years
  document.querySelectorAll('#year, #year2, #year3, #year4').forEach(el => {
    if(el) el.textContent = new Date().getFullYear();
  });

  // contact form with mailto fallback (static)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const mailtoBtn = document.getElementById('mailtoBtn');

  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nm = document.getElementById('name').value?.trim();
      const em = document.getElementById('email').value?.trim();
      const ms = document.getElementById('message').value?.trim();
      if(!nm || !em || !ms){
        if(msg) { msg.textContent = 'Please fill in all fields.'; msg.style.color = 'crimson'; }
        return;
      }
      if(msg) { msg.textContent = 'Preparing... opening your mail client'; msg.style.color = 'green'; }
      const subject = encodeURIComponent('Itinerary request from ' + nm);
      const body = encodeURIComponent(ms + '\n\nContact: ' + em);
      window.location.href = `mailto:discoverhyd.example@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  if(mailtoBtn){
    mailtoBtn.addEventListener('click', () => {
      const nm = document.getElementById('name')?.value?.trim();
      const em = document.getElementById('email')?.value?.trim();
      const ms = document.getElementById('message')?.value?.trim();
      const subject = encodeURIComponent('Itinerary request' + (nm ? ' from ' + nm : ''));
      const body = encodeURIComponent((ms ? ms + '\n\n' : '') + (em ? 'Contact: ' + em : ''));
      window.location.href = `mailto:discoverhyd.example@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
