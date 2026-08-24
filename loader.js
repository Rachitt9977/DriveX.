window.addEventListener('load',()=>{
  const l=document.getElementById('preloader');
  if(!l)return;
  setTimeout(()=>{l.classList.add('hide');setTimeout(()=>l.remove(),600);},450);
});