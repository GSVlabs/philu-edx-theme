(function ($) {
  var hasCookieConsent = getCookie('cookie-policy-consent'),
    settings = {
      text: edx.HtmlUtils.interpolateHtml(
        gettext('We use cookies on this site to enhance your user experience. By using this website, you accept this use. Learn more about it in {link_start}Cookie Policy{link_end}. For a complete overview of all cookies used, please see your personal settings.'),
        {
          link_start: edx.HtmlUtils.HTML('<a href="/cookies">'),
          link_end: edx.HtmlUtils.HTML('</a>'),
        }
      )
    };

  if (!hasCookieConsent) {
    createBanner(settings);
      $('.cookie-banner__close').on('click', function () {
      $('.cookie-banner').slideUp();
      setCookie('cookie-policy-consent', 1, 365);
    });
  }

  function createBanner() {
    var banner = $("<div class='cookie-banner'/>"),
      container = $("<div class='cookie-banner-container'/>"),
      message = $("<div class='cookie-banner__message'><p>" + settings.text + "</p></div>"),
      close = "<button class='cookie-banner__close' aria-label='Close the notice about use of cookies' type='button'/>";

    $('body').prepend(banner);
    banner.append(container);
    container.append(message, close);
  }

  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    name = name + "=";

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
})(jQuery);
