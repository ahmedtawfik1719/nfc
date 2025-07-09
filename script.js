document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'en';

  const updateLangIcons = () => {
    langToggle.innerHTML = currentLang === 'en' ? '<i class="fa-solid fa-language"></i> عربي' : '<i class="fa-solid fa-language"></i> English';
  };

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });

    updateLangIcons();
  });

  updateLangIcons();
});
