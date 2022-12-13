(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(30)},24:function(e,a,t){},26:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(14),c=t.n(r),o=(t(24),t(3));t(26);var s=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg))},i=t(12),m=t.n(i),d=t(8);function u(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/about"},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function b(e){var a=Object(n.useState)("Enter Text Here"),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"green":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Converted to uppercase!!","success")}},"Covert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("Converted to Lowercase!!","success")}},"Covert to Lowercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=r.split("").map(function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()}).join("");c(a),e.showAlert("All case are Inverted !!","success")}},"Invertcases"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){navigator.clipboard.writeText(r),e.showAlert("Text is copied to clipboard!!","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=r.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra spaces are removed!!","success")}},"Remove Extra Space"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-1",onClick:function(){c(""),e.showAlert("Text area clear !!","success")}},"Clear Text")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length," ","words, ",r.length," characters"),l.a.createElement("p",null,.008*r.split(/\s+/).filter(function(e){return 0!==e.length}).length," ","Minutes read"),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Nothing to preview.")))}function p(e){var a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"grey":"white"};return l.a.createElement("div",{className:"container",style:a},l.a.createElement("h1",{className:"my-3"},"About Us"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},l.a.createElement("strong",null,"Analyze Your text"))),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledBy":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},"TextUtils gives you a way to analyses your text quickly and efficiently. Be the word count, time to read the text, changing the text case i.e. uppercase or Lowercase. it also provide copy text feature and removing extra text spaces form the text."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},l.a.createElement("strong",null,"Free to use"))),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledBy":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is a free to use character counting and text manipulation application web page.This is suitable for writing text with word/ character limit."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},l.a.createElement("strong",null,"Browser Compatible"))),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledBy":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:a},"This word counter software works in any web browser. such as Chrome, Firefox, Internet Explorer, safari, opera. It suits to count character on essay, blog, book etc.")))))}u.prototypes={title:m.a.string.isRequired,aboutText:m.a.string.isRequired};var h=t(0);var g=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),i=Object(o.a)(c,2),m=i[0],g=i[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(u,{title:"TextUtils",aboutText:"About Us",mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="grey",E("Dark mode Activated","success")):(r("light"),document.body.style.backgroundColor="white",E("Light mode Activated","success"))}}),l.a.createElement(s,{alert:m}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/about",element:l.a.createElement(p,{mode:t})}),l.a.createElement(h.a,{path:"/",element:l.a.createElement(b,{showAlert:E,heading:"Enter The Text To analyze",mode:t})})))))},E=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,31)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),E()}},[[15,3,2]]]);
//# sourceMappingURL=main.d3440e66.chunk.js.map