import{d as C,z as Oe,e as S,o as $,c as j,f as N,r as x,a as Ee,t as te,v as b,B as $e,_ as pe,b as h,A as Ne,C as R,D as Pe,E as ze,n as me,q as Q,G as Ie,H as he,I as Y,J as se,K as Ce,L as ye,M as He,N as oe,s as U,w as F,O as Be,u as T,y as q,P as Te,T as xe,i as X,F as Re,Q as ke,S as Ae,U as Le,V as We,j as Ve}from"./index.js";const Me={class:"position"},je={class:"title"},Ke=C({__name:"HotspotItem",props:{title:{type:String,required:!0},position:{type:Number,required:!0},url:{type:String,required:!0}},setup(e){const s=e;Oe(c=>({"0cb7080b":b(l)}));function t(){$e.openUrl(s.url,{external:!0})}const o=["#ffe082ff","#c5cae9ff","#ceb1a1ff","#d2d2d2ff"],l=S(()=>s.position<4?o[s.position-1]:o[3]);return(c,n)=>($(),j("div",{class:"hotspot-item",onClick:t},[N("div",Me,[x(c.$slots,"position",{},()=>[Ee(te(e.position),1)],!0)]),N("div",je,te(e.title),1),x(c.$slots,"append",{},void 0,!0)]))}});const kt=pe(Ke,[["__scopeId","data-v-af614b41"]]);var ne;const k=typeof window<"u",De=e=>typeof e=="function",Qe=e=>typeof e=="string",Ue=()=>{};k&&((ne=window==null?void 0:window.navigator)!=null&&ne.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function G(e){return typeof e=="function"?e():b(e)}function qe(e){return e}function M(e){return Pe()?(Ie(e),!0):!1}function _e(e,s=!0){ze()?me(e):s?e():Q(e)}function At(e,s=1e3,t={}){const{immediate:o=!0,immediateCallback:l=!1}=t;let c=null;const n=h(!1);function d(){c&&(clearInterval(c),c=null)}function r(){n.value=!1,d()}function m(){const f=G(s);f<=0||(n.value=!0,l&&e(),d(),c=setInterval(e,f))}if(o&&k&&m(),Ne(s)||De(s)){const f=R(s,()=>{n.value&&k&&m()});M(f)}return M(r),{isActive:n,pause:r,resume:m}}function be(e){var s;const t=G(e);return(s=t==null?void 0:t.$el)!=null?s:t}const J=k?window:void 0;function A(...e){let s,t,o,l;if(Qe(e[0])||Array.isArray(e[0])?([t,o,l]=e,s=J):[s,t,o,l]=e,!s)return Ue;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const c=[],n=()=>{c.forEach(f=>f()),c.length=0},d=(f,i,g,w)=>(f.addEventListener(i,g,w),()=>f.removeEventListener(i,g,w)),r=R(()=>[be(s),G(l)],([f,i])=>{n(),f&&c.push(...t.flatMap(g=>o.map(w=>d(f,g,w,i))))},{immediate:!0,flush:"post"}),m=()=>{r(),n()};return M(m),m}function Xe(e,s=!1){const t=h(),o=()=>t.value=!!e();return o(),_e(o,s),t}const re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ae="__vueuse_ssr_handlers__";re[ae]=re[ae]||{};var le=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,Ge=(e,s)=>{var t={};for(var o in e)Ye.call(e,o)&&s.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&le)for(var o of le(e))s.indexOf(o)<0&&Fe.call(e,o)&&(t[o]=e[o]);return t};function Je(e,s,t={}){const o=t,{window:l=J}=o,c=Ge(o,["window"]);let n;const d=Xe(()=>l&&"ResizeObserver"in l),r=()=>{n&&(n.disconnect(),n=void 0)},m=R(()=>be(e),i=>{r(),d.value&&l&&i&&(n=new ResizeObserver(s),n.observe(i,c))},{immediate:!0,flush:"post"}),f=()=>{r(),m()};return M(f),{isSupported:d,stop:f}}var ie;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ie||(ie={}));var Ze=Object.defineProperty,ue=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,ce=(e,s,t)=>s in e?Ze(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,st=(e,s)=>{for(var t in s||(s={}))et.call(s,t)&&ce(e,t,s[t]);if(ue)for(var t of ue(s))tt.call(s,t)&&ce(e,t,s[t]);return e};const ot={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};st({linear:qe},ot);function nt(e={}){const{window:s=J,initialWidth:t=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:c=!0}=e,n=h(t),d=h(o),r=()=>{s&&(c?(n.value=s.innerWidth,d.value=s.innerHeight):(n.value=s.document.documentElement.clientWidth,d.value=s.document.documentElement.clientHeight))};return r(),_e(r),A("resize",r,{passive:!0}),l&&A("orientationchange",r,{passive:!0}),{width:n,height:d}}function rt(e){for(var s=-1,t=e==null?0:e.length,o={};++s<t;){var l=e[s];o[l[0]]=l[1]}return o}const z=e=>typeof e=="number",at=e=>he(e)?!Number.isNaN(Number(e)):!1;class lt extends Error{constructor(s){super(s),this.name="ElementPlusError"}}function it(e,s){throw new lt(`[${e}] ${s}`)}function fe(e,s="px"){if(!e)return"";if(z(e)||at(e))return`${e}${s}`;if(he(e))return e}const ge="__epPropKey",ut=e=>e,ct=e=>Y(e)&&!!e[ge],ft=(e,s)=>{if(!Y(e)||ct(e))return e;const{values:t,required:o,default:l,type:c,validator:n}=e,r={type:c,required:!!o,validator:t||n?m=>{let f=!1,i=[];if(t&&(i=Array.from(t),se(e,"default")&&i.push(l),f||(f=i.includes(m))),n&&(f||(f=n(m))),!f&&i.length>0){const g=[...new Set(i)].map(w=>JSON.stringify(w)).join(", ");Ce(`Invalid prop: validation failed${s?` for prop "${s}"`:""}. Expected one of [${g}], got value ${JSON.stringify(m)}.`)}return f}:void 0,[ge]:!0};return se(e,"default")&&(r.default=l),r},Z=e=>rt(Object.entries(e).map(([s,t])=>[s,ft(t,s)])),dt=(e,s)=>{if(e.install=t=>{for(const o of[e,...Object.values(s??{})])t.component(o.name,o)},s)for(const[t,o]of Object.entries(s))e[t]=o;return e},de="el",vt="is-",E=(e,s,t,o,l)=>{let c=`${e}-${s}`;return t&&(c+=`-${t}`),o&&(c+=`__${o}`),l&&(c+=`--${l}`),c},pt=Symbol("namespaceContextKey"),mt=e=>{const s=e||ye(pt,h(de));return S(()=>b(s)||de)},we=(e,s)=>{const t=mt(s);return{namespace:t,b:(u="")=>E(t.value,e,u,"",""),e:u=>u?E(t.value,e,"",u,""):"",m:u=>u?E(t.value,e,"","",u):"",be:(u,v)=>u&&v?E(t.value,e,u,v,""):"",em:(u,v)=>u&&v?E(t.value,e,"",u,v):"",bm:(u,v)=>u&&v?E(t.value,e,u,"",v):"",bem:(u,v,y)=>u&&v&&y?E(t.value,e,u,v,y):"",is:(u,...v)=>{const y=v.length>=1?v[0]:!0;return u&&y?`${vt}${u}`:""},cssVar:u=>{const v={};for(const y in u)u[y]&&(v[`--${t.value}-${y}`]=u[y]);return v},cssVarName:u=>`--${t.value}-${u}`,cssVarBlock:u=>{const v={};for(const y in u)u[y]&&(v[`--${t.value}-${e}-${y}`]=u[y]);return v},cssVarBlockName:u=>`--${t.value}-${e}-${u}`}};var ee=(e,s)=>{const t=e.__vccOpts||e;for(const[o,l]of s)t[o]=l;return t};const I=4,ht={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},yt=({move:e,size:s,bar:t})=>({[t.size]:s,transform:`translate${t.axis}(${e}%)`}),Se=Symbol("scrollbarContextKey"),_t=Z({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),bt="Thumb",gt=C({__name:"thumb",props:_t,setup(e){const s=e,t=ye(Se),o=we("scrollbar");t||it(bt,"can not inject scrollbar context");const l=h(),c=h(),n=h({}),d=h(!1);let r=!1,m=!1,f=k?document.onselectstart:null;const i=S(()=>ht[s.vertical?"vertical":"horizontal"]),g=S(()=>yt({size:s.size,move:s.move,bar:i.value})),w=S(()=>l.value[i.value.offset]**2/t.wrapElement[i.value.scrollSize]/s.ratio/c.value[i.value.offset]),H=p=>{var a;if(p.stopPropagation(),p.ctrlKey||[1,2].includes(p.button))return;(a=window.getSelection())==null||a.removeAllRanges(),v(p);const _=p.currentTarget;_&&(n.value[i.value.axis]=_[i.value.offset]-(p[i.value.client]-_.getBoundingClientRect()[i.value.direction]))},u=p=>{if(!c.value||!l.value||!t.wrapElement)return;const a=Math.abs(p.target.getBoundingClientRect()[i.value.direction]-p[i.value.client]),_=c.value[i.value.offset]/2,O=(a-_)*100*w.value/l.value[i.value.offset];t.wrapElement[i.value.scroll]=O*t.wrapElement[i.value.scrollSize]/100},v=p=>{p.stopImmediatePropagation(),r=!0,document.addEventListener("mousemove",y),document.addEventListener("mouseup",P),f=document.onselectstart,document.onselectstart=()=>!1},y=p=>{if(!l.value||!c.value||r===!1)return;const a=n.value[i.value.axis];if(!a)return;const _=(l.value.getBoundingClientRect()[i.value.direction]-p[i.value.client])*-1,O=c.value[i.value.offset]-a,B=(_-O)*100*w.value/l.value[i.value.offset];t.wrapElement[i.value.scroll]=B*t.wrapElement[i.value.scrollSize]/100},P=()=>{r=!1,n.value[i.value.axis]=0,document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",P),L(),m&&(d.value=!1)},K=()=>{m=!1,d.value=!!s.size},D=()=>{m=!0,d.value=r};He(()=>{L(),document.removeEventListener("mouseup",P)});const L=()=>{document.onselectstart!==f&&(document.onselectstart=f)};return A(oe(t,"scrollbarElement"),"mousemove",K),A(oe(t,"scrollbarElement"),"mouseleave",D),(p,a)=>($(),U(xe,{name:b(o).b("fade"),persisted:""},{default:F(()=>[Be(N("div",{ref_key:"instance",ref:l,class:T([b(o).e("bar"),b(o).is(b(i).key)]),onMousedown:u},[N("div",{ref_key:"thumb",ref:c,class:T(b(o).e("thumb")),style:q(b(g)),onMousedown:H},null,38)],34),[[Te,p.always||d.value]])]),_:1},8,["name"]))}});var ve=ee(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const wt=Z({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),St=C({__name:"bar",props:wt,setup(e,{expose:s}){const t=e,o=h(0),l=h(0);return s({handleScroll:n=>{if(n){const d=n.offsetHeight-I,r=n.offsetWidth-I;l.value=n.scrollTop*100/d*t.ratioY,o.value=n.scrollLeft*100/r*t.ratioX}}}),(n,d)=>($(),j(Re,null,[X(ve,{move:o.value,ratio:n.ratioX,size:n.width,always:n.always},null,8,["move","ratio","size","always"]),X(ve,{move:l.value,ratio:n.ratioY,size:n.height,vertical:"",always:n.always},null,8,["move","ratio","size","always"])],64))}});var Ot=ee(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Et=Z({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ut([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),$t={scroll:({scrollTop:e,scrollLeft:s})=>[e,s].every(z)},Nt="ElScrollbar",Pt=C({name:Nt}),zt=C({...Pt,props:Et,emits:$t,setup(e,{expose:s,emit:t}){const o=e,l=we("scrollbar");let c,n;const d=h(),r=h(),m=h(),f=h("0"),i=h("0"),g=h(),w=h(1),H=h(1),u=S(()=>{const a={};return o.height&&(a.height=fe(o.height)),o.maxHeight&&(a.maxHeight=fe(o.maxHeight)),[o.wrapStyle,a]}),v=S(()=>[o.wrapClass,l.e("wrap"),{[l.em("wrap","hidden-default")]:!o.native}]),y=S(()=>[l.e("view"),o.viewClass]),P=()=>{var a;r.value&&((a=g.value)==null||a.handleScroll(r.value),t("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function K(a,_){Y(a)?r.value.scrollTo(a):z(a)&&z(_)&&r.value.scrollTo(a,_)}const D=a=>{z(a)&&(r.value.scrollTop=a)},L=a=>{z(a)&&(r.value.scrollLeft=a)},p=()=>{if(!r.value)return;const a=r.value.offsetHeight-I,_=r.value.offsetWidth-I,O=a**2/r.value.scrollHeight,B=_**2/r.value.scrollWidth,W=Math.max(O,o.minSize),V=Math.max(B,o.minSize);w.value=O/(a-O)/(W/(a-W)),H.value=B/(_-B)/(V/(_-V)),i.value=W+I<a?`${W}px`:"",f.value=V+I<_?`${V}px`:""};return R(()=>o.noresize,a=>{a?(c==null||c(),n==null||n()):({stop:c}=Je(m,p),n=A("resize",p))},{immediate:!0}),R(()=>[o.maxHeight,o.height],()=>{o.native||Q(()=>{var a;p(),r.value&&((a=g.value)==null||a.handleScroll(r.value))})}),ke(Se,Ae({scrollbarElement:d,wrapElement:r})),me(()=>{o.native||Q(()=>{p()})}),Le(()=>p()),s({wrapRef:r,update:p,scrollTo:K,setScrollTop:D,setScrollLeft:L,handleScroll:P}),(a,_)=>($(),j("div",{ref_key:"scrollbarRef",ref:d,class:T(b(l).b())},[N("div",{ref_key:"wrapRef",ref:r,class:T(b(v)),style:q(b(u)),onScroll:P},[($(),U(We(a.tag),{ref_key:"resizeRef",ref:m,class:T(b(y)),style:q(a.viewStyle)},{default:F(()=>[x(a.$slots,"default")]),_:3},8,["class","style"]))],38),a.native?Ve("v-if",!0):($(),U(Ot,{key:0,ref_key:"barRef",ref:g,height:i.value,width:f.value,always:a.always,"ratio-x":H.value,"ratio-y":w.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var It=ee(zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Ct=dt(It),Ht={class:"hotspot-box"},Bt={class:"hotspot-header"},Tt={class:"hotspot-content"},xt=C({__name:"HotspotBox",props:{bodyColor:{type:String,default:"#fff"}},setup(e){const{height:s}=nt();return(t,o)=>($(),j("div",Ht,[N("div",Bt,[x(t.$slots,"header",{},void 0,!0)]),X(b(Ct),{height:b(s)-60-24,"wrap-style":{backgroundColor:e.bodyColor,borderRadius:"12px"}},{default:F(()=>[N("div",Tt,[x(t.$slots,"body",{},void 0,!0)])]),_:3},8,["height","wrap-style"])]))}});const Lt=pe(xt,[["__scopeId","data-v-58e0a1bc"]]);export{kt as H,Lt as a,At as u};