import{b as h,I as we,D as H,J as _e,K as Oe,m as ce,n as j,v as _,L as Se,C as fe,M as U,N as q,O as Ee,P as ve,e as E,d as W,Q as Pe,S as J,o as C,s as K,w as de,T as Ne,f as Q,u as T,y as D,U as ze,V as $e,c as me,i as Z,F as Ie,X as Ce,Y as Te,Z as He,r as Be,E as Re,j as ke}from"./index-76f899f4.js";var ee;const B=typeof window<"u",xe=e=>typeof e=="function",Ae=e=>typeof e=="string",Le=()=>{};B&&((ee=window==null?void 0:window.navigator)!=null&&ee.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function X(e){return typeof e=="function"?e():_(e)}function We(e){return e}function L(e){return _e()?(Se(e),!0):!1}function pe(e,s=!0){Oe()?ce(e):s?e():j(e)}function Ot(e,s=1e3,t={}){const{immediate:n=!0,immediateCallback:i=!1}=t;let c=null;const a=h(!1);function v(){c&&(clearInterval(c),c=null)}function o(){a.value=!1,v()}function p(){const f=X(s);f<=0||(a.value=!0,i&&e(),v(),c=setInterval(e,f))}if(n&&B&&p(),we(s)||xe(s)){const f=H(s,()=>{a.value&&B&&p()});L(f)}return L(o),{isActive:a,pause:o,resume:p}}function he(e){var s;const t=X(e);return(s=t==null?void 0:t.$el)!=null?s:t}const Y=B?window:void 0;function R(...e){let s,t,n,i;if(Ae(e[0])||Array.isArray(e[0])?([t,n,i]=e,s=Y):[s,t,n,i]=e,!s)return Le;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const c=[],a=()=>{c.forEach(f=>f()),c.length=0},v=(f,l,g,w)=>(f.addEventListener(l,g,w),()=>f.removeEventListener(l,g,w)),o=H(()=>[he(s),X(i)],([f,l])=>{a(),f&&c.push(...t.flatMap(g=>n.map(w=>v(f,g,w,l))))},{immediate:!0,flush:"post"}),p=()=>{o(),a()};return L(p),p}function Ve(e,s=!1){const t=h(),n=()=>t.value=!!e();return n(),pe(n,s),t}const te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se="__vueuse_ssr_handlers__";te[se]=te[se]||{};var ne=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Ke=(e,s)=>{var t={};for(var n in e)Me.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&ne)for(var n of ne(e))s.indexOf(n)<0&&je.call(e,n)&&(t[n]=e[n]);return t};function Qe(e,s,t={}){const n=t,{window:i=Y}=n,c=Ke(n,["window"]);let a;const v=Ve(()=>i&&"ResizeObserver"in i),o=()=>{a&&(a.disconnect(),a=void 0)},p=H(()=>he(e),l=>{o(),v.value&&i&&l&&(a=new ResizeObserver(s),a.observe(l,c))},{immediate:!0,flush:"post"}),f=()=>{o(),p()};return L(f),{isSupported:v,stop:f}}var ae;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ae||(ae={}));var De=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,re=(e,s,t)=>s in e?De(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,Ye=(e,s)=>{for(var t in s||(s={}))Ue.call(s,t)&&re(e,t,s[t]);if(oe)for(var t of oe(s))Xe.call(s,t)&&re(e,t,s[t]);return e};const Fe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ye({linear:We},Fe);function St(e={}){const{window:s=Y,initialWidth:t=1/0,initialHeight:n=1/0,listenOrientation:i=!0,includeScrollbar:c=!0}=e,a=h(t),v=h(n),o=()=>{s&&(c?(a.value=s.innerWidth,v.value=s.innerHeight):(a.value=s.document.documentElement.clientWidth,v.value=s.document.documentElement.clientHeight))};return o(),pe(o),R("resize",o,{passive:!0}),i&&R("orientationchange",o,{passive:!0}),{width:a,height:v}}function Ge(e){for(var s=-1,t=e==null?0:e.length,n={};++s<t;){var i=e[s];n[i[0]]=i[1]}return n}const Et=e=>e===void 0,N=e=>typeof e=="number",qe=e=>fe(e)?!Number.isNaN(Number(e)):!1;class Je extends Error{constructor(s){super(s),this.name="ElementPlusError"}}function Ze(e,s){throw new Je(`[${e}] ${s}`)}function le(e,s="px"){if(!e)return"";if(N(e)||qe(e))return`${e}${s}`;if(fe(e))return e}const ye="__epPropKey",et=e=>e,tt=e=>U(e)&&!!e[ye],st=(e,s)=>{if(!U(e)||tt(e))return e;const{values:t,required:n,default:i,type:c,validator:a}=e,o={type:c,required:!!n,validator:t||a?p=>{let f=!1,l=[];if(t&&(l=Array.from(t),q(e,"default")&&l.push(i),f||(f=l.includes(p))),a&&(f||(f=a(p))),!f&&l.length>0){const g=[...new Set(l)].map(w=>JSON.stringify(w)).join(", ");Ee(`Invalid prop: validation failed${s?` for prop "${s}"`:""}. Expected one of [${g}], got value ${JSON.stringify(p)}.`)}return f}:void 0,[ye]:!0};return q(e,"default")&&(o.default=i),o},F=e=>Ge(Object.entries(e).map(([s,t])=>[s,st(t,s)])),nt=(e,s)=>{if(e.install=t=>{for(const n of[e,...Object.values(s??{})])t.component(n.name,n)},s)for(const[t,n]of Object.entries(s))e[t]=n;return e},ie="el",at="is-",S=(e,s,t,n,i)=>{let c=`${e}-${s}`;return t&&(c+=`-${t}`),n&&(c+=`__${n}`),i&&(c+=`--${i}`),c},ot=Symbol("namespaceContextKey"),rt=e=>{const s=e||ve(ot,h(ie));return E(()=>_(s)||ie)},be=(e,s)=>{const t=rt(s);return{namespace:t,b:(u="")=>S(t.value,e,u,"",""),e:u=>u?S(t.value,e,"",u,""):"",m:u=>u?S(t.value,e,"","",u):"",be:(u,d)=>u&&d?S(t.value,e,u,d,""):"",em:(u,d)=>u&&d?S(t.value,e,"",u,d):"",bm:(u,d)=>u&&d?S(t.value,e,u,"",d):"",bem:(u,d,y)=>u&&d&&y?S(t.value,e,u,d,y):"",is:(u,...d)=>{const y=d.length>=1?d[0]:!0;return u&&y?`${at}${u}`:""},cssVar:u=>{const d={};for(const y in u)u[y]&&(d[`--${t.value}-${y}`]=u[y]);return d},cssVarName:u=>`--${t.value}-${u}`,cssVarBlock:u=>{const d={};for(const y in u)u[y]&&(d[`--${t.value}-${e}-${y}`]=u[y]);return d},cssVarBlockName:u=>`--${t.value}-${e}-${u}`}};var G=(e,s)=>{const t=e.__vccOpts||e;for(const[n,i]of s)t[n]=i;return t};const z=4,lt={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},it=({move:e,size:s,bar:t})=>({[t.size]:s,transform:`translate${t.axis}(${e}%)`}),ge=Symbol("scrollbarContextKey"),ut=F({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),ct="Thumb",ft=W({__name:"thumb",props:ut,setup(e){const s=e,t=ve(ge),n=be("scrollbar");t||Ze(ct,"can not inject scrollbar context");const i=h(),c=h(),a=h({}),v=h(!1);let o=!1,p=!1,f=B?document.onselectstart:null;const l=E(()=>lt[s.vertical?"vertical":"horizontal"]),g=E(()=>it({size:s.size,move:s.move,bar:l.value})),w=E(()=>i.value[l.value.offset]**2/t.wrapElement[l.value.scrollSize]/s.ratio/c.value[l.value.offset]),$=m=>{var r;if(m.stopPropagation(),m.ctrlKey||[1,2].includes(m.button))return;(r=window.getSelection())==null||r.removeAllRanges(),d(m);const b=m.currentTarget;b&&(a.value[l.value.axis]=b[l.value.offset]-(m[l.value.client]-b.getBoundingClientRect()[l.value.direction]))},u=m=>{if(!c.value||!i.value||!t.wrapElement)return;const r=Math.abs(m.target.getBoundingClientRect()[l.value.direction]-m[l.value.client]),b=c.value[l.value.offset]/2,O=(r-b)*100*w.value/i.value[l.value.offset];t.wrapElement[l.value.scroll]=O*t.wrapElement[l.value.scrollSize]/100},d=m=>{m.stopImmediatePropagation(),o=!0,document.addEventListener("mousemove",y),document.addEventListener("mouseup",P),f=document.onselectstart,document.onselectstart=()=>!1},y=m=>{if(!i.value||!c.value||o===!1)return;const r=a.value[l.value.axis];if(!r)return;const b=(i.value.getBoundingClientRect()[l.value.direction]-m[l.value.client])*-1,O=c.value[l.value.offset]-r,I=(b-O)*100*w.value/i.value[l.value.offset];t.wrapElement[l.value.scroll]=I*t.wrapElement[l.value.scrollSize]/100},P=()=>{o=!1,a.value[l.value.axis]=0,document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",P),k(),p&&(v.value=!1)},V=()=>{p=!1,v.value=!!s.size},M=()=>{p=!0,v.value=o};Pe(()=>{k(),document.removeEventListener("mouseup",P)});const k=()=>{document.onselectstart!==f&&(document.onselectstart=f)};return R(J(t,"scrollbarElement"),"mousemove",V),R(J(t,"scrollbarElement"),"mouseleave",M),(m,r)=>(C(),K($e,{name:_(n).b("fade"),persisted:""},{default:de(()=>[Ne(Q("div",{ref_key:"instance",ref:i,class:T([_(n).e("bar"),_(n).is(_(l).key)]),onMousedown:u},[Q("div",{ref_key:"thumb",ref:c,class:T(_(n).e("thumb")),style:D(_(g)),onMousedown:$},null,38)],34),[[ze,m.always||v.value]])]),_:1},8,["name"]))}});var ue=G(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const vt=F({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),dt=W({__name:"bar",props:vt,setup(e,{expose:s}){const t=e,n=h(0),i=h(0);return s({handleScroll:a=>{if(a){const v=a.offsetHeight-z,o=a.offsetWidth-z;i.value=a.scrollTop*100/v*t.ratioY,n.value=a.scrollLeft*100/o*t.ratioX}}}),(a,v)=>(C(),me(Ie,null,[Z(ue,{move:n.value,ratio:a.ratioX,size:a.width,always:a.always},null,8,["move","ratio","size","always"]),Z(ue,{move:i.value,ratio:a.ratioY,size:a.height,vertical:"",always:a.always},null,8,["move","ratio","size","always"])],64))}});var mt=G(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const pt=F({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:et([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),ht={scroll:({scrollTop:e,scrollLeft:s})=>[e,s].every(N)},yt="ElScrollbar",bt=W({name:yt}),gt=W({...bt,props:pt,emits:ht,setup(e,{expose:s,emit:t}){const n=e,i=be("scrollbar");let c,a;const v=h(),o=h(),p=h(),f=h("0"),l=h("0"),g=h(),w=h(1),$=h(1),u=E(()=>{const r={};return n.height&&(r.height=le(n.height)),n.maxHeight&&(r.maxHeight=le(n.maxHeight)),[n.wrapStyle,r]}),d=E(()=>[n.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!n.native}]),y=E(()=>[i.e("view"),n.viewClass]),P=()=>{var r;o.value&&((r=g.value)==null||r.handleScroll(o.value),t("scroll",{scrollTop:o.value.scrollTop,scrollLeft:o.value.scrollLeft}))};function V(r,b){U(r)?o.value.scrollTo(r):N(r)&&N(b)&&o.value.scrollTo(r,b)}const M=r=>{N(r)&&(o.value.scrollTop=r)},k=r=>{N(r)&&(o.value.scrollLeft=r)},m=()=>{if(!o.value)return;const r=o.value.offsetHeight-z,b=o.value.offsetWidth-z,O=r**2/o.value.scrollHeight,I=b**2/o.value.scrollWidth,x=Math.max(O,n.minSize),A=Math.max(I,n.minSize);w.value=O/(r-O)/(x/(r-x)),$.value=I/(b-I)/(A/(b-A)),l.value=x+z<r?`${x}px`:"",f.value=A+z<b?`${A}px`:""};return H(()=>n.noresize,r=>{r?(c==null||c(),a==null||a()):({stop:c}=Qe(p,m),a=R("resize",m))},{immediate:!0}),H(()=>[n.maxHeight,n.height],()=>{n.native||j(()=>{var r;m(),o.value&&((r=g.value)==null||r.handleScroll(o.value))})}),Ce(ge,Te({scrollbarElement:v,wrapElement:o})),ce(()=>{n.native||j(()=>{m()})}),He(()=>m()),s({wrapRef:o,update:m,scrollTo:V,setScrollTop:M,setScrollLeft:k,handleScroll:P}),(r,b)=>(C(),me("div",{ref_key:"scrollbarRef",ref:v,class:T(_(i).b())},[Q("div",{ref_key:"wrapRef",ref:o,class:T(_(d)),style:D(_(u)),onScroll:P},[(C(),K(Re(r.tag),{ref_key:"resizeRef",ref:p,class:T(_(y)),style:D(r.viewStyle)},{default:de(()=>[Be(r.$slots,"default")]),_:3},8,["class","style"]))],38),r.native?ke("v-if",!0):(C(),K(mt,{key:0,ref_key:"barRef",ref:g,height:l.value,width:f.value,always:r.always,"ratio-x":$.value,"ratio-y":w.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var wt=G(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Pt=nt(wt);export{Pt as E,G as _,St as a,F as b,be as c,et as d,le as e,N as f,Et as i,Ot as u,nt as w};