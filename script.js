document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
// V1.4 interactive portfolio previews: hover on pointer devices, tap on touch devices.
document.querySelectorAll('.site-preview').forEach(preview=>{
  preview.addEventListener('click',()=>{
    const live=preview.classList.toggle('is-live');
    const hint=preview.querySelector('.preview-hint');
    if(hint) hint.textContent=live?'Website in motion':'Tap to bring it to life';
  });
});
