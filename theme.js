(function(){
  const root=document.documentElement;
  const stored=localStorage.getItem('drivex-theme')||'dark';
  root.setAttribute('data-theme',stored);
  window.addEventListener('DOMContentLoaded',()=>{
    const toggles=document.querySelectorAll('#themeToggle, #themeToggleMobile');
    toggles.forEach(t=>{
      t.checked=stored==='light';
      t.addEventListener('change',()=>{
        const mode=t.checked?'light':'dark';
        root.setAttribute('data-theme',mode);
        localStorage.setItem('drivex-theme',mode);
        toggles.forEach(o=>o.checked=t.checked);
      });
    });
  });
})();