webpackJsonp([1],{"5W1q":function(t,e){},NHnr:function(t,e,r){"use strict";function a(t){r("gu2T")}Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),o=r("3EgV"),i=r.n(o),l=(r("QCv7"),r("5W1q"),{data:function(){return{clipped:!0,drawer:!1,fixed:!1,items:[{icon:"fa-user-circle",title:"Story 1"},{icon:"fa-user-circle",title:"Story 2"}],miniVariant:!0,title:"World Water Atlas"}}}),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{fixed:"","mini-variant":t.miniVariant,clipped:t.clipped,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,function(e,a){return r("v-list-tile",{key:a,attrs:{value:"true"}},[r("v-list-tile-action",[r("router-link",{attrs:{to:"/story/"+a}},[r("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1)],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),r("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{column:"","align-center":""}},[r("v-icon",[t._v("fa-globe")]),t._v(" "),r("blockquote",[t._v("\n            “This is a Sphere.”\n            "),r("footer",[r("small",[r("em",[t._v("—Fedor")])])])]),t._v(" "),r("router-view")],1)],1)],1)],1),t._v(" "),r("v-footer",{attrs:{fixed:t.fixed,app:""}},[r("span",[t._v("© 2017")])])],1)},v=[],u={render:s,staticRenderFns:v},c=u,_=r("VU/8"),p=_(l,c,!1,null,null,null),d=p.exports,f=r("/ocq"),m={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0,!1,!1),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1,!1,!1)])},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],b={render:h,staticRenderFns:g},k=b,w=r("VU/8"),x=a,y=w(m,k,!1,x,"data-v-4241e014",null),j=y.exports,C={name:"VStory",data:function(){return{title:"Story"}},computed:{id:function(){return this.$route.params.id}}},E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",[r("h2",[t._v(t._s(t.title)+" "+t._s(t.id))])])],1)},T=[],V={render:E,staticRenderFns:T},W=V,S=r("VU/8"),$=S(C,W,!1,null,null,null),F=$.exports;n.a.use(f.a);var H=new f.a({routes:[{path:"/",name:"HelloWorld",component:j},{path:"/story/:id",name:"Story",component:F}]});n.a.use(i.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:H,template:"<App/>",components:{App:d}})},QCv7:function(t,e){},gu2T:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03c368f67049c8bf1610.js.map