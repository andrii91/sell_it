$(document).ready(function(){$(".scroll").click(function(t){event.preventDefault();var a=$(this).attr("href"),e=$(a).offset().top;$("body,html").animate({scrollTop:e-40},1500)}),$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)});var t=$(".clients-carousel");t.owlCarousel({loop:!0,nav:!0,dots:!1,navText:!1,margin:0,smartSpeed:800,responsive:{0:{items:1,margin:2},1200:{items:1}}});var a=$(".results-carousel");a.owlCarousel({loop:!0,nav:!0,dots:!0,navText:!1,margin:0,smartSpeed:800,responsive:{0:{items:1,margin:2,autoHeight:!0},1200:{items:1}}}),$(".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><g data-name="Слой 2"><path d="M.22 4.5L4.74.2a.77.77 0 0 1 1 0 .68.68 0 0 1 0 1L1.78 5l4 3.8a.68.68 0 0 1 0 1 .76.76 0 0 1-1 0L.22 5.49a.68.68 0 0 1 0-1z" data-name="Слой 1"></path></g></svg>'),$(".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><g data-name="Слой 2"><path d="M5.79 5.5L1.26 9.79a.77.77 0 0 1-1 0 .68.68 0 0 1 0-1l4-3.8-4-3.8a.68.68 0 0 1 0-1 .76.76 0 0 1 1 0L5.79 4.5a.68.68 0 0 1 0 1z" data-name="Слой 1"></path></g></svg>'),$(".programs-item:not(active)").click(function(){$(this).toggleClass("show"),$(this).find(".content").slideToggle()}),$(".results-carousel .owl-dots .owl-dot").each(function(t){$(this).find("span").text("0"+(t+1))}),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200)}),$(window).width()<1200&&($(".mob_slider").addClass("owl-carousel owl-theme"),$(".mob_slider").owlCarousel({loop:!0,nav:!0,dots:!0,navText:!1,margin:0,autoHeight:!0,responsive:{0:{items:1}}}),$(".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><g data-name="Слой 2"><path d="M.22 4.5L4.74.2a.77.77 0 0 1 1 0 .68.68 0 0 1 0 1L1.78 5l4 3.8a.68.68 0 0 1 0 1 .76.76 0 0 1-1 0L.22 5.49a.68.68 0 0 1 0-1z" data-name="Слой 1"></path></g></svg>'),$(".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><g data-name="Слой 2"><path d="M5.79 5.5L1.26 9.79a.77.77 0 0 1-1 0 .68.68 0 0 1 0-1l4-3.8-4-3.8a.68.68 0 0 1 0-1 .76.76 0 0 1 1 0L5.79 4.5a.68.68 0 0 1 0 1z" data-name="Слой 1"></path></g></svg>'))}),$(document).ready(function(){function t(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,e,i){t[e]=i});return t}function a(t){for(var a=t+"=",e=document.cookie.split(";"),i=0;i<e.length;i++){for(var n=e[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(a))return n.substring(a.length,n.length)}return null}$("input[type='tel']").mask("+38 (999) 999-9999"),$('input[name="utm_source"]').val(t().utm_source),$('input[name="utm_campaign"]').val(t().utm_campaign),$('input[name="utm_medium"]').val(t().utm_medium),$('input[name="utm_term"]').val(t().utm_term),$('input[name="utm_content"]').val(t().utm_content),$('input[name="click_id"]').val(t().aff_sub),$('input[name="affiliate_id"]').val(t().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$.get("https://ipinfo.io",function(t){$('input[name="ip_address"]').val(t.ip),$('input[name="city"]').val(t.city)},"jsonp"),setTimeout(function(){$(".gclid_field").val(a("gclid")),""==$(".gclid_field").val()&&$(".gclid_field").val(a("_gid"))},2e3);var e,i='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';$(".submit").click(function(t){t.preventDefault();var a=$(this).closest("form").find("[required]");$(a).each(function(){if(""!=$(this).val())e=0,$(this).addClass("error").parent("span").find(".allert").remove();else{$(this);if("email"==$(this).attr("type")){var t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;t.test($(this).val())||($("input[name=email]").val(""),$(this).addClass("error").parent("span").append('<div class="allert"><p>Укажите коректный e-mail</p>'+i+"</div>"),e=1,$(":input.error:first").focus())}else if("tel"==$(this).attr("type")){var a=/^()[- +()0-9]{9,18}/i;a.test($(this).val())||($("input[name=phone]").val(""),$(this).addClass("error").parent("span").append('<div class="allert"><p>Укажите номер телефона в формате +3809999999</p>'+i+"</div>"),e=1,$(":input.error:first").focus())}else $(this).addClass("error").parent("span").append('<div class="allert"><p>Заполните это поле</p>'+i+"</div>"),e=1,$(":input.error:first").focus()}}),1!==e&&$(this).unbind("submit").submit()}),$("form").on("submit",function(t){t.preventDefault(),$(".submit").addClass("inactive"),$(".submit").prop("disabled",!0);var a=$(this);a.find("input");$.ajax({type:"POST",url:"db/registration.php",dataType:"json",data:a.serialize(),success:function(t){}}),setTimeout(function(){window.location.href="success.html"},800)})});