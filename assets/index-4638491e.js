(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();new Swiper(".mySwiper",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".hero-btn-slider-next",prevEl:".hero-btn-slider-prev"},pagination:{el:".hero-swiper-pagination",type:"fraction",renderFraction:function(r,t){return`0<span class="${r}"></span> &nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp; 0<span class="${t}"></span>`}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0});(()=>{const r=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),c=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),r.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(t){for(var o=this,c=(o.document||o.ownerDocument).querySelectorAll(t),e=0;c[e]&&c[e]!==o;)++e;return Boolean(c[e])}),typeof r.closest!="function"&&(r.closest=function(t){for(var o=this;o&&o.nodeType===1;){if(o.matches(t))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");r.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),a=document.querySelector('.modal[data-modal="'+n+'"]');a.classList.add("active"),t.classList.add("active")})}),o.forEach(function(c){c.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
