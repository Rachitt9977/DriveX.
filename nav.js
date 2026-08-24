document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('hamburgerBtn');
  const nav=document.getElementById('mobileNav');
  if(!btn||!nav)return;
  function closeNav(){
    btn.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow='';
  }
  btn.addEventListener('click',()=>{
    const isOpen=nav.classList.contains('open');
    if(isOpen){closeNav();}else{
      btn.classList.add('open');
      nav.classList.add('open');
      document.body.style.overflow='hidden';
    }
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
  window.addEventListener('resize',()=>{ if(window.innerWidth>760)closeNav(); });
});