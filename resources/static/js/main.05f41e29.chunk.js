(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{76:function(e,t){},77:function(e,t){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(26),c=n(27),r=n(28),o=n(30),i=n(31),u=n(29),s=n.n(u),l=n(2),d=n(1),p=n.n(d),m=n(5),b=n(10),h=n(14),f=n(9),j=n.n(f),g="".concat("http://172.40.0.142:1337"),w=("".concat("http://172.40.0.142:8081/api","/template/searchby/"),function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("http://172.40.0.142:8081/api","/template/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&n||console.error(t,n),a="".concat(g,"/content-manager/collection-types/api::").concat(t,".").concat(t,"/").concat(n),e.next=4,j.a.get(a,k({},"EntKcToken"));case 4:return c=e.sent,r=c.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(e){var t=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:localStorage.getItem("token");return console.log("ET-Widget",t),t?{headers:{Authorization:"".concat(e," ").concat(t)}}:"EntKcToken"===e?{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyNzg0MTQ5LCJleHAiOjE2NTUzNzYxNDl9.1wR8HywZYZg4lfdExuN8NqINoSE8bbHZBBnHLZyz6Ug")}}:{}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=y(t);return Object(h.a)(Object(h.a)({},e),n)},v=(n(78),n(3)),I=n(55),x="http://172.40.0.142:1337";var T=function(e){var t=e.name,n=(e.nameTwo,e.templateId),a=e.contentId,c=Object(l.useState)(null),r=Object(b.a)(c,2),o=(r[0],r[1]),i=Object(l.useState)(null),u=Object(b.a)(i,2),s=(u[0],u[1]),d=Object(l.useState)(null),h=Object(b.a)(d,2),f=h[0],j=h[1];return Object(l.useEffect)(Object(m.a)(p.a.mark((function e(){var c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n);case 2:return c=e.sent,e.next=5,O(t,a);case 5:r=e.sent,o(c),s(r),r&&c&&(Object.keys(r).length>0&&Object.keys(r).map((function(e,t){r[e]&&Array.isArray(r[e])?r[e]&&r[e][0]&&r[e][0].ext&&(console.log("Loop For MultiMedia",r[e]),r[e].map((function(e){return e.url=x+e.url}))):r[e]&&"object"===typeof r[e]&&r[e]&&r[e].ext&&"object"===typeof r[e]&&(r[e].url=x+r[e].url)})),i=I.render(c.contentShape,{content:r}),j(i));case 9:case"end":return e.stop()}}),e)}))),[]),Object(v.jsx)(v.Fragment,{children:f?Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:f}}):Object(v.jsx)("h1",{children:"Loading..."})})},C={name:"name",nameTwo:"nameTwo",selectedTemplateId:"selectedTemplateId",selectedContentId:"selectedContentId",selectedContentName:"selectedContentName"},N=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){if(!Object.values(C).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&n!==t&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var e=this.getAttribute(C.name),t=this.getAttribute(C.nameTwo),n=this.getAttribute(C.selectedTemplateId),a=this.getAttribute(C.selectedContentId),c=this.getAttribute(C.selectedContentName);s.a.render(Object(v.jsx)(T,{name:e,nameTwo:t,templateId:n,contentId:a,contentName:c}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(C)}}]),n}(Object(i.a)(HTMLElement));customElements.get("my-single-widget")||customElements.define("my-single-widget",N)}},[[80,1,2]]]);
//# sourceMappingURL=main.05f41e29.chunk.js.map