/**
* Template Name: iFormacion - v1.4.0
* Template URL: https://bootstrapmade.com/iFormacion-bootstrap-Formacion-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function (e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Habilidades section
  $('.Habilidades-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var FormacionIsotope = $('.Formacion-container').isotope({
      itemSelector: '.Formacion-item',
      layoutMode: 'fitRows'
    });

    $('#Formacion-flters li').on('click', function () {
      $("#Formacion-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function () {
    aos_init();
  });

})(jQuery);



//agregado

async function fntListarDatos() {
  const res = await fetch("site-info.json")
  const data = await res.json()
  console.log(data)
  //portada
  document.querySelector("#portada").innerHTML = `${data.portada}`,
  //presentación
    document.querySelector("#pres").innerHTML = `${data.presentacion}`,
    document.querySelector("#descr").innerHTML = `${data.habilidades.Habilidad.desc}`,
    //habilidades
    document.querySelector("#hab1").innerHTML = `${data.habilidades.Habilidad.a}`,
    document.querySelector("#hab2").innerHTML = `${data.habilidades.Habilidad.b}`,
    document.querySelector("#hab3").innerHTML = `${data.habilidades.Habilidad.c}`,
    document.querySelector("#hab4").innerHTML = `${data.habilidades.Habilidad.d}`,
    document.querySelector("#hab5").innerHTML = `${data.habilidades.Habilidad.e}`,
    document.querySelector("#hab6").innerHTML = `${data.habilidades.Habilidad.f}`,
    //formación
    document.querySelector("#instituto1").innerHTML = `${data.formacion.primaria}`,
    document.querySelector("#instituto2").innerHTML = `${data.formacion.Bachiller}`,
    document.querySelector("#instituto3").innerHTML = `${data.formacion.Pregrado}`,
    document.querySelector("#instituto4").innerHTML = `${data.formacion.Noformal}`,
    document.querySelector("#idioma1").innerHTML = `${data.Idioma1}`,
    document.querySelector("#idioma2").innerHTML = `${data.Idioma2}`,
    document.querySelector("#ubicacion").innerHTML = `${data.contacto.Ubicacion}`,
    document.querySelector("#correo").innerHTML = `${data.contacto.Correo}`,
    document.querySelector("#telefono").innerHTML = `${data.contacto.Telefono}`

}
window.onload = function () {
  fntListarDatos()
}