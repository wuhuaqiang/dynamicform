(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-guanbi01" viewBox="0 0 1024 1024">'+""+'<path d="M919.132604 954.948321c-9.165754 0-18.331507-3.496637-25.325805-10.489912l-811.993468-811.993468c-13.986549-13.986549-13.986549-36.664038 0-50.650587 13.986549-13.987572 36.664038-13.987572 50.650587 0l811.993468 811.993468c13.986549 13.987572 13.986549 36.664038 0 50.65161C937.464111 951.451684 928.298358 954.948321 919.132604 954.948321z"  ></path>'+""+'<path d="M107.139136 954.948321c-9.165754 0-18.332531-3.496637-25.325805-10.489912-13.986549-13.987572-13.986549-36.664038 0-50.65161l811.993468-811.993468c13.988596-13.987572 36.663014-13.987572 50.65161 0 13.986549 13.986549 13.986549 36.664038 0 50.650587l-811.993468 811.993468C125.471666 951.451684 116.304889 954.948321 107.139136 954.948321z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)