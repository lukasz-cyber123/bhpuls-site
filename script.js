
// Mobilna nawigacja
const burger = document.querySelector('.burger');
const mobile = document.querySelector('.mobile');
if(burger){
  burger.addEventListener('click',()=>{
    mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
  });
}

// ===== Cookie consent (prosty CMP) =====
(function(){
  const KEY = 'bhpuls_cookie_consent_v1';
  const saved = localStorage.getItem(KEY);
  const banner = document.getElementById('cookie-banner');
  if(!banner) return;

  function applyConsent(val){
    localStorage.setItem(KEY, val);
    if(val === 'accepted'){
      // (opcjonalnie) Tutaj można wczytać GA po akcepcie:
      // if(!window._gaLoaded){
      //   const s = document.createElement('script');
      //   s.async = true;
      //   s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
      //   document.head.appendChild(s);
      //   window.dataLayer = window.dataLayer || [];
      //   function gtag(){dataLayer.push(arguments);} window.gtag = gtag;
      //   gtag('js', new Date()); gtag('config', 'G-XXXXXXX');
      //   window._gaLoaded = true;
      // }
    }
  }

  if(saved){ banner.style.display='none'; applyConsent(saved); }
  else{ banner.style.display='block'; }

  const acceptBtn = document.querySelector('#cookie-accept');
  const denyBtn = document.querySelector('#cookie-deny');
  if(acceptBtn) acceptBtn.addEventListener('click',()=>{ applyConsent('accepted'); banner.style.display='none';});
  if(denyBtn) denyBtn.addEventListener('click',()=>{ applyConsent('denied'); banner.style.display='none';});
})();
