(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{4920:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/intro",function(){return t(5656)}])},8418:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(l){o=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(o)throw s}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var o,s=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),i=t(387),l=t(7190);var c={};function u(e,r,t,n){if(e&&a.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,o=i.useRouter(),d=s.default.useMemo((function(){var r=n(a.resolveHref(o,e.href,!0),2),t=r[0],s=r[1];return{href:t,as:e.as?a.resolveHref(o,e.as):s||t}}),[o,e.href,e.as]),f=d.href,v=d.as,h=e.children,m=e.replace,p=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var x=(r=s.default.Children.only(h))&&"object"===typeof r&&r.ref,b=n(l.useIntersection({rootMargin:"200px"}),2),j=b[0],L=b[1],_=s.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);s.default.useEffect((function(){var e=L&&t&&a.isLocalURL(f),r="undefined"!==typeof g?g:o&&o.locale,n=c[f+"%"+v+(r?"%"+r:"")];e&&!n&&u(o,f,v,{locale:r})}),[v,f,L,g,t,o]);var w={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,s,i,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](t,n,{shallow:s,locale:l,scroll:i}))}(e,o,f,v,m,p,y,g)},onMouseEnter:function(e){a.isLocalURL(f)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(o,f,v,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(v,E,o&&o.locales,o&&o.domainLocales);w.href=k||a.addBasePath(a.addLocale(v,E,o&&o.defaultLocale))}return s.default.cloneElement(r,w)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(l){o=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(o)throw s}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!a,l=o.useRef(),c=n(o.useState(!1),2),u=c[0],d=c[1],f=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,s=n.observer,a=n.elements;return a.set(e,r),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,u]);return o.useEffect((function(){if(!a&&!u){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[f,u]};var o=t(7294),s=t(9311),a="undefined"!==typeof IntersectionObserver;var i=new Map},5656:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(9008),s=t(1664),a=t(7294),i=t(113),l=t(1917);r.default=function(){return(0,a.useEffect)((function(){(0,l._h)(),document.querySelector("body").classList.add("light")}),[]),(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Resumo Intro | Personal Portfolio React NextJS Template"})}),(0,n.jsxs)("div",{className:"resumo_fn_intro",children:[(0,n.jsx)("div",{className:"divider"}),(0,n.jsxs)("div",{className:"intro_content",children:[(0,n.jsxs)("div",{className:"title_holder",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(s.default,{href:"/intro",children:"Resumo"})}),(0,n.jsx)("p",{children:"Creative personal website template"})]}),(0,n.jsxs)("div",{className:"v_list",children:[(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)(s.default,{href:"/index-light",children:(0,n.jsx)("a",{target:"_blank"})}),(0,n.jsx)("img",{src:"img/intro/light.jpg",alt:""}),(0,n.jsx)("span",{children:"Light Version"})]}),(0,n.jsxs)("div",{className:"right dark-section",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{target:"_blank"})}),(0,n.jsx)("img",{src:"img/intro/dark.jpg",alt:""}),(0,n.jsx)("span",{children:"Dark Version"})]})]})]}),(0,n.jsx)("footer",{id:"footer",children:(0,n.jsx)("div",{className:"footer_content",children:(0,n.jsxs)("p",{children:["Copyright \xa9 ",(new Date).getFullYear(),". All rights reserved."," ",(0,n.jsx)("br",{}),"Designed & Developed by"," ",(0,n.jsx)("a",{className:"fn__link",href:"https://themeforest.net/user/trendycoder",target:"_blank",rel:"noreferrer",children:"TrendyCoder"})]})})})]}),(0,n.jsx)(i.Z,{})]})}},113:function(e,r,t){"use strict";var n=t(5893),o=t(7294);r.Z=function(){return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)("div",{className:"frenify-cursor cursor-outer","data-default":"yes","data-link":"yes","data-slider":"yes",children:(0,n.jsx)("span",{className:"fn-cursor"})}),(0,n.jsx)("div",{className:"frenify-cursor cursor-inner","data-default":"yes","data-link":"yes","data-slider":"yes",children:(0,n.jsxs)("span",{className:"fn-cursor",children:[(0,n.jsx)("span",{className:"fn-left"}),(0,n.jsx)("span",{className:"fn-right"})]})})]})}},1917:function(e,r,t){"use strict";t.d(r,{jd:function(){return n},CC:function(){return o},_h:function(){return s},CA:function(){return a}});var n=function(){for(var e=document.querySelectorAll("[href='#']"),r=0;r<e.length;r++){e[r].addEventListener("click",(function(e){e.preventDefault()}))}},o=function(){for(var e=document.querySelectorAll("[data-bg-img"),r=0;r<e.length;r++){var t=e[r];t.style.backgroundImage="url(".concat(t.getAttribute("data-bg-img"),")")}},s=function(){var e=function(e){e.addEventListener("mouseenter",(function(){s.classList.add("cursor-hover"),a.classList.add("cursor-hover")})),e.addEventListener("mouseleave",(function(){s.classList.remove("cursor-hover"),a.classList.remove("cursor-hover")}))},r=document.querySelectorAll(".frenify-cursor"),t=document.querySelector(".hamburger"),n=document.querySelector(".kura_tm_topbar "),o=document.querySelector(".cursor-pointer"),s=document.querySelector(".cursor-inner"),a=document.querySelector(".cursor-outer");if(r.length&&document.body){window.onmousemove=function(e){a.style.transform="translate("+e.clientX+"px, "+e.clientY+"px)",s.style.transform="translate("+e.clientX+"px, "+e.clientY+"px)",e.clientY,e.clientX},document.body.addEventListener("mouseenter",(function(){var r=document.querySelectorAll("a"),i=document.querySelectorAll(".owl-carousel, .swiper-container, .cursor-link"),l=document.querySelectorAll(".modal_item");s.classList.add("cursor-inner"),a.classList.add("cursor-outer");for(var c=0;c<r.length;c++){var u=r[c];e(u)}for(var d=0;d<i.length;d++){var f=i[d];f.addEventListener("mouseenter",(function(){s.classList.add("cursor-slider"),a.classList.add("cursor-slider")})),f.addEventListener("mouseleave",(function(){s.classList.remove("cursor-slider"),a.classList.remove("cursor-slider")}))}for(var v=0;v<l.length;v++){var h=l[v];e(h)}t&&e(t),n&&e(n),o&&e(o)})),s.style.visibility="visible",a.style.visibility="visible"}},a=function(){var e=window.scrollY;document.querySelectorAll("body").forEach((function(r){r&&(e>100?r.classList.add("scrolled"):r.classList.remove("scrolled"))}))}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=4920,e(e.s=r);var r}));var r=e.O();_N_E=r}]);