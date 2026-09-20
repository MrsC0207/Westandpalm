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

// V1.9.6 mobile navigation
const mobileMenuToggle=document.querySelector('.mobile-menu-toggle');
const mobileNavigation=document.querySelector('.mobile-navigation');
if(mobileMenuToggle&&mobileNavigation){
  const closeMobileMenu=()=>{mobileMenuToggle.setAttribute('aria-expanded','false');mobileMenuToggle.setAttribute('aria-label','Open navigation');mobileNavigation.classList.remove('is-open');document.body.classList.remove('mobile-menu-open')};
  mobileMenuToggle.addEventListener('click',()=>{const opening=mobileMenuToggle.getAttribute('aria-expanded')!=='true';mobileMenuToggle.setAttribute('aria-expanded',String(opening));mobileMenuToggle.setAttribute('aria-label',opening?'Close navigation':'Open navigation');mobileNavigation.classList.toggle('is-open',opening);document.body.classList.toggle('mobile-menu-open',opening)});
  mobileNavigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMobileMenu));
  document.addEventListener('click',e=>{if(mobileMenuToggle.getAttribute('aria-expanded')==='true'&&!mobileNavigation.contains(e.target)&&!mobileMenuToggle.contains(e.target))closeMobileMenu()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileMenu()});
  window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMobileMenu()});
}
