function slugify(s){return s.toLowerCase().replaceAll(' ','-')}
function cardHTML(c){return `<article class="card"><div class="car-img" style="background-image:url(${c.image})"></div><div class="card-body"><small>${c.category}</small><h3>${c.name}</h3><div class="specs"><span>${c.fuel}</span><span>${c.transmission}</span><span>${c.seats}</span><span>${c.mileage}</span></div><div class="price"><div><span class="meta">Rent</span><b>${c.rent}</b></div><div><span class="meta">Buy</span><b>${c.buy}</b></div></div><a class="btn primary" href="car-details.html?car=${slugify(c.name)}">View Details →</a></div></article>`}
document.addEventListener('DOMContentLoaded',()=>{
  const cars=window.DRIVEX_CARS||[];
  const grid=document.getElementById('carGrid');
  if(grid){
    const params=new URLSearchParams(location.search);
    let active=params.get('category')||'All';
    document.querySelectorAll('[data-filter]').forEach(b=>{
      if(b.dataset.filter===active)b.classList.add('active');else b.classList.remove('active');
      b.addEventListener('click',()=>{
        active=b.dataset.filter;
        document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));
        render();
      });
    });
    const sortSel=document.getElementById('sort');
    if(sortSel)sortSel.addEventListener('change',render);
    function render(){
      let list=active==='All'?cars.slice():cars.filter(c=>c.category===active);
      if(sortSel&&sortSel.value==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
      grid.innerHTML=list.map(cardHTML).join('');
    }
    render();
  }
  const detail=document.getElementById('detail');
  if(detail){
    const key=new URLSearchParams(location.search).get('car');
    const c=cars.find(x=>slugify(x.name)===key)||cars[0];
    detail.innerHTML=`<div class="detail-grid"><div class="detail-image" style="background-image:url(${c.image})"></div><div class="panel"><small class="eyebrow">${c.category.toUpperCase()} COLLECTION</small><h1>${c.name}</h1><p class="meta">A considered blend of design, comfort and performance, selected for the Drive-X showroom.</p><div class="specs"><span>${c.fuel}</span><span>${c.transmission}</span><span>${c.seats}</span><span>${c.mileage}</span></div><h2>Rent: ${c.rent}</h2><h2 style="margin-top:4px">Buy: ${c.buy}</h2><p class="meta">Indicative pricing. Final quote confirmed at booking.</p><a class="btn primary" href="contact.html">Request a Quote →</a><a class="btn" href="cars.html">Back to Collection</a></div></div>`;
  }
});