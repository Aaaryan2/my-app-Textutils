(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(14),a(1));a(16);var s=function(e){return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)},i=a(2),m=a.n(i);function u(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),r.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},r.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function d(e){var t=Object(n.useState)("Enter Text Here"),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h1",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=l.toUpperCase();c(t),e.showAlert("Converted to uppercase!!","success")}},"Covert to Uppercase"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=l.toLowerCase();c(t),e.showAlert("Converted to Lowercase!!","success")}},"Covert to Lowercase"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=l.split("").map(function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()}).join("");c(t),e.showAlert("All case are Inverted !!","success")}},"Invertcases"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is copied to clipboard!!","success")}},"Copy Text"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=l.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra spaces are removed!!","success")}},"Remove Extra Space"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(""),e.showAlert("Text area clear !!","success")}},"Clear Text")),r.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h2",null,"Your Text Summary"),r.a.createElement("p",null,l.split(" ").length," words, ",l.length," characters"),r.a.createElement("p",null,.008*l.split(" ").length," Minutes read"),r.a.createElement("h3",null,"Preview"),r.a.createElement("p",null,l.length>0?l:"Enter something in text box above to preview it here")))}u.prototypes={title:m.a.string.isRequired,aboutText:m.a.string.isRequired};var b=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),i=Object(o.a)(c,2),m=i[0],b=i[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(l("dark"),document.body.style.backgroundColor="grey",p("Dark mode Activated","success")):(l("light"),document.body.style.backgroundColor="white",p("Light mode Activated","success"))}}),r.a.createElement(s,{alert:m}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(d,{showAlert:p,heading:"Enter The Text To analyze",mode:a})))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null))),p()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.efe82b14.chunk.js.map