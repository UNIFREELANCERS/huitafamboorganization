(function(){
  // Hamburger menu handler for .hamburger + .nav-drawer pair
  function initNav(){
    const hamburger = document.querySelector('.hamburger');
    const navDrawer = document.querySelector('.nav-drawer');
    
    if(!hamburger || !navDrawer) return; // nothing to toggle

    hamburger.setAttribute('aria-expanded','false');
    
    hamburger.addEventListener('click', (e)=>{
      e.stopPropagation();
      const isOpen = navDrawer.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      if(isOpen) {
        document.body.style.overflow='hidden';
      } else {
        document.body.style.overflow='';
      }
    });
    
    navDrawer.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click', ()=>{
        navDrawer.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded','false');
        document.body.style.overflow='';
      });
    });
    
    document.addEventListener('click', (e)=>{
      if(!navDrawer.classList.contains('active')) return;
      if(navDrawer.contains(e.target) || hamburger.contains(e.target)) return;
      navDrawer.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
    });
    
    document.addEventListener('keydown', (e)=>{
      if(e.key==='Escape' && navDrawer.classList.contains('active')){
        navDrawer.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded','false');
        document.body.style.overflow='';
      }
    });
    
    window.addEventListener('resize', ()=>{
      if(window.innerWidth>=1024){
        navDrawer.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded','false');
        document.body.style.overflow='';
      }
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initNav); else initNav();
})();
