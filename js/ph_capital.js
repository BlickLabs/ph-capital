function doSomething(t){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/ph-capital/index.html"!==window.location.pathname&&"/ph-capital/"!==window.location.pathname&&"/inicio.html"!==window.location.pathname&&"/ph-capital/inicio.html"!==window.location.pathname||(t>30?siteNavbar.classList.add("navbar-scroll"):siteNavbar.classList.remove("navbar-scroll"))}function showMenu(){"85%"===document.querySelector("#menuContainer").style.width?(document.querySelector("#menuContainer").style.width="0%",window.scrollY<30&&siteNavbar.classList.remove("navbar-scroll")):(document.querySelector("#menuContainer").style.width="85%",siteNavbar.classList.add("navbar-scroll"))}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",console.log(window.scrollY)}function langChange(){function t(t){$(".lang").each(function(n,o){$(o).text(arrLang[t][$(o).attr("data-info")]),$(o).attr("src",arrLang[t][$(o).attr("data-info")])})}if("sessionStorage"in window){var n=sessionStorage.getItem("uiLang");n&&(lang=n)}t(lang),$(".translate").click(function(){var n=$(this).attr("id");if("sessionStorage"in window){sessionStorage.setItem("uiLang",n);var o=sessionStorage.getItem("uiLang")}t(o)})}$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(t){var n=$('form[name="contact-form"]').serialize();console.log(n),$.ajax({url:"http://integrations.blick.mx/",method:"POST",data:n}).done(function(t){1===parseInt(t)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="contact-form"]')[0].reset())})},invalidHandler:function(t,n){var o=n.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")}}),$(function(){var t=$(".ph-modal-trigger"),n=$(".ph-modal-close"),o=$(".ph-modal-item");t.click(function(){var t="#"+$(this).attr("data-target");console.log(t),$(t).show(),$.each($(".ph-modal-item-container"),function(t,n){$(n).hide()}),"#modal-ph-1"===t?($('div[data-content="ph-1-indiana"]').addClass("ph-modal-item-active"),$("#ph-1-indiana").show(),$("body").addClass("modal-open")):"#modal-ph-2"===t?($('div[data-content="ph-2-tlacotalpan"]').addClass("ph-modal-item-active"),$("#ph-2-tlacotalpan").show(),$("body").addClass("modal-open")):"#modal-ph-3"===t&&($('div[data-content="ph-3-concepcion"]').addClass("ph-modal-item-active"),$("#ph-3-concepcion").show(),$("body").addClass("modal-open"))}),n.click(function(){$(this).parent().parent().hide(),o.each(function(t,n){$(n).removeClass("ph-modal-item-active")}),$("body").removeClass("modal-open")}),o.click(function(){o.each(function(t,n){$(n).removeClass("ph-modal-item-active")}),$(this).addClass("ph-modal-item-active");var t="#"+$(this).attr("data-content");$(t).show()}),$.each(o,function(t,n){$(n).click(function(){var t=n.getAttribute("data-content");$.each($(".ph-modal-item-container"),function(n,o){var a=o.id,e=$(o);t===a?e.show():e.hide()})})})});var clickHandler="ontouchstart"in document.documentElement?"touchstart":"click",scrollLink=$("a.go-section");scrollLink.bind(clickHandler,function(t){var n=$(this).attr("href");console.log(n),$("html, body").animate({scrollTop:$(n).offset().top-90},800)}),$(window).scroll(function(){var t=$(this).scrollTop();scrollLink.each(function(){$(this.hash).offset().top-500<=t&&($(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"))})});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar");doSomething(),window.addEventListener("scroll",function(t){last_known_scroll_position=t.view?t.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("scroll",function(t){last_known_scroll_position=t.view?t.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(t){t.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(t){t.preventDefault(),showMenu()}),showHamburger.addEventListener("click",function(t){t.preventDefault(),showMenu()});var lang="en",arrLang=[];$(function(){function t(t){t.siblings().each(function(){$(this).removeClass("active-lang")}),t.addClass("active-lang")}if(sessionStorage){var n=sessionStorage.tab;t($(".site-button-container .site-button").eq(n))}$(".site-button-container .site-button").click(function(){sessionStorage&&(sessionStorage.tab=$(this).index()),t($(this))})}),$.ajax({url:"../json/data.json",dataType:"json",type:"get",cache:!1,success:function(t){arrLang=t,langChange()}});