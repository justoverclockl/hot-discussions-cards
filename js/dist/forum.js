module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/components/Link"]},function(t,e){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["tags/helpers/tagsLabel"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},,function(t,e,r){"use strict";r.r(e);var o=r(0),n=r.n(o);function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=r(2),c=r.n(s),i=r(3),u=r.n(i),l=r(4),p=r.n(l),f=r(5),d=r.n(f),v=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,a(e,r);var s=o.prototype;return s.oninit=function(e){t.prototype.oninit.call(this,e),this.discPreview=[],this.loading=!0},s.oncreate=function(e){var r=this;t.prototype.oncreate.call(this,e);n.a.store.find("discussions",{sort:"-commentCount",page:{limit:3},include:"firstPost,user,tags"}).then((function(t){r.discPreview=t,console.log(t),r.loading=!1,m.redraw()}))},s.view=function(){return m("div",{className:"cardContainer"},m("section",{className:"cards-wrapper"},this.discPreview&&this.discPreview.map((function(t){return m("div",{className:"card-grid-space"},m(u.a,{className:"card",href:n.a.route.discussion(t)},m("div",{className:"arrow-right"},m("span",null,n.a.translator.trans("justoverclock-hot-discussion-cards.forum.hot"))),m("div",{className:"avatarDisplay"},p()(t.user(),{title:t.user().displayName(),className:"lastPostedUserAvatartwo"}),m("div",{className:"postInfoCard"},t.lastPostNumber()),m("div",{className:"postInfoCard text"},n.a.translator.trans("justoverclock-hot-discussion-cards.forum.post"))),m("div",null,m("h5",{className:"discTitleCard"},t.title()),m("p",{className:"discPcard"},t.firstPost().contentHtml().replace(/<\/?[^>]+(>|$)/g,"").substr(0,110)+"..."),m("div",{className:"tagsna"},d()(t.tags(),{link:!0,className:"mytagLabel"})))))}))))},o}(c.a),y=r(6),h=r(7),b=r.n(h);n.a.initializers.add("justoverclock/hot-discussion-cards",(function(){Object(y.override)(b.a.prototype,"hero",(function(t){return m("[",null,t(),m(v,null))}))}))}]);
//# sourceMappingURL=forum.js.map