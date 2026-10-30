/* Medicion de acciones: sin cookies, IDs, contenido ni lecturas de formularios. */
(function () {
  'use strict';
  if (window.tcBusinessTrack) return;
  const projects = { 'teddy-code.com': 'teddycode', 'playro.app': 'playro', 'stusher.app': 'stusher', 'channelberry.com': 'channelberry', 'fadechats.app': 'fadechats', 'hallazgo.app': 'hallazgo', 'qualipath.co': 'qualipath', 'quecalifico.com': 'quecalifico', 'gaborgr.github.io': 'portfolio' };
  const host = location.hostname.replace(/^www\./, '');
  const site = projects[host];
  const allowed = {"teddycode":["store_click","contact_click","studio_click","form_start","form_complete"],"playro":["store_click","studio_click","form_start","account_complete"],"stusher":["store_click","studio_click","tool_start","tool_complete"],"channelberry":["youtube_click","studio_click"],"fadechats":["invite_created","invite_redeemed","chat_connected","studio_click"],"hallazgo":["official_click","studio_click","form_start","form_complete"],"qualipath":["tool_start","tool_complete","official_click","studio_click"],"quecalifico":["tool_start","tool_complete","official_click","studio_click"],"portfolio":["contact_click","cv_download","project_click","studio_click"]};
  const events = new Set(allowed[site] || []);
  const optedOut = navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true;
  const excluded = () => /\/(dash|admin|legal|privacy|privacidad|cookies|terms|terminos)(\/|\.|$)/.test(location.pathname);
  const seen = new Set();
  let sent = 0;
  function track(event, area = 'tool') {
    if (!site || optedOut || excluded() || !events.has(event) || !['header','footer','content','tool'].includes(area) || sent >= 16) return;
    const id = `${location.pathname}:${event}:${area}`;
    if (seen.has(id)) return;
    seen.add(id); sent++;
    const language = /^\/(en|es|pt|fr|de)(?:\/|$)/.exec(location.pathname)?.[1] || (document.documentElement.lang || 'en').slice(0, 2);
    const payload = { event, area, locale: ['en','es','pt','fr','de'].includes(language) ? language : 'other', device: matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop' };
    // La accion del producto nunca espera a la medicion; sin reintentos ni preflight.
    setTimeout(() => {
      try {
        fetch('https://teddy-code.com/api/metrics', { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: JSON.stringify(payload), keepalive: true, credentials: 'omit', referrerPolicy: 'no-referrer', signal: AbortSignal.timeout(4000) }).catch(() => {});
      } catch { /* Medicion opcional: nunca rompe la accion. */ }
    }, 0);
  }
  window.tcBusinessTrack = track;
  const queue = window.tcBusinessQueue || [];
  window.tcBusinessQueue = [];
  queue.slice(0, 16).forEach((item) => track(item.event, item.area));
  document.addEventListener('click', (e) => {
    const target = e.target instanceof Element ? e.target.closest('a[href]') : null;
    if (!target || !e.isTrusted) return;
    const area = target.closest('header') ? 'header' : target.closest('footer') ? 'footer' : 'content';
    let url; try { url = new URL(target.href); } catch { return; }
    const destination = url.hostname.replace(/^www\./, '');
    if (url.protocol === 'mailto:' || url.protocol === 'tel:') track('contact_click', area);
    else if (destination === 'play.google.com' || destination === 'apps.apple.com') track('store_click', area);
    else if (projects[destination] && destination !== host) track(site === 'portfolio' && destination !== 'teddy-code.com' ? 'project_click' : 'studio_click', area);
    else if (site === 'portfolio' && /\.pdf$/i.test(url.pathname)) track('cv_download', area);
    else if (site === 'channelberry' && (destination === 'youtube.com' || destination === 'youtu.be')) track('youtube_click', area);
    else if (['qualipath','quecalifico','hallazgo'].includes(site) && /^https?:$/.test(url.protocol) && destination !== host) track('official_click', area);
  }, { capture: true, passive: true });
  document.addEventListener('focusin', (e) => {
    if (!(e.target instanceof Element) || !e.isTrusted || !e.target.closest('form') || !e.target.matches('input,textarea,select')) return;
    if (site === 'teddycode' && e.target.closest('#contact-form')) track('form_start', 'tool');
    if (site === 'hallazgo' && e.target.closest('[data-business-form]')) track('form_start', 'tool');
  }, { passive: true });
})();
