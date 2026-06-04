let e;var t,r,n,a,i,o,s,c,u,l,p,d,f,h,g,v=globalThis;function m(e){return e&&e.__esModule?e.default:e}var b={},_={},y=function(e){return e&&e.Math===Math&&e};_=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof v&&v)||y("object"==typeof _&&_)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},j={};j=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;E=j?S.bind(S):function(){return S.apply(S,arguments)};var P={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;n=$&&!P.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:P;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var O={},x={},M={},N=Function.prototype,T=N.call,I=j&&N.bind.bind(T,T),D={},R=(M=j?I:function(e){return function(){return T.apply(e,arguments)}})({}.toString),F=M("".slice);D=function(e){return F(R(e),8,-1)};var q=Object,A=M("".split);x=k(function(){return!q("z").propertyIsEnumerable(0)})?function(e){return"String"===D(e)?A(e,""):q(e)}:q;var H={},C={};C=function(e){return null==e};var U=TypeError;H=function(e){if(C(e))throw new U("Can't call method on "+e);return e},O=function(e){return x(H(e))};var B={},W={},G={},z={},K="object"==typeof document&&document.all;z=void 0===K&&void 0!==K?function(e){return"function"==typeof e||e===K}:function(e){return"function"==typeof e},G=function(e){return"object"==typeof e?null!==e:z(e)};var Q={},J={};J=function(e,t){var r;return arguments.length<2?(r=_[e],z(r)?r:void 0):_[e]&&_[e][t]};var Y={};Y=M({}.isPrototypeOf);var V={},X={},Z={},ee={},et=_.navigator,er=et&&et.userAgent;ee=er?String(er):"";var en=_.process,ea=_.Deno,ei=en&&en.versions||ea&&ea.version,eo=ei&&ei.v8;eo&&(i=(a=eo.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!i&&ee&&(!(a=ee.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ee.match(/Chrome\/(\d+)/))&&(i=+a[1]),Z=i;var es=_.String;V=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!es(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;Q=V?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return z(t)&&Y(t.prototype,ec(e))};var eu={},el={},ep={},ed=String;ep=function(e){try{return ed(e)}catch(e){return"Object"}};var ef=TypeError;el=function(e){if(z(e))return e;throw new ef(ep(e)+" is not a function")},eu=function(e,t){var r=e[t];return C(r)?void 0:el(r)};var eh={},eg=TypeError;eh=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!G(n=E(r,e))||z(r=e.valueOf)&&!G(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!G(n=E(r,e)))return n;throw new eg("Can't convert object to primitive value")};var ev={},em={},eb={};eb=!1;var e_={},ey=Object.defineProperty;e_=function(e,t){try{ey(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var ew="__core-js_shared__",ek=em=_[ew]||e_(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.49.0",mode:eb?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return em[e]||(em[e]=t||{})};var eE={},ej={},eS=Object;ej=function(e){return eS(H(e))};var eP=M({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return eP(ej(e),t)};var e$={},eL=0,eO=Math.random(),ex=M(1.1.toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eL+eO,36)};var eM=_.Symbol,eN=ev("wks"),eT=V?eM.for||eM:eM&&eM.withoutSetter||e$,eI=TypeError,eD=function(e){return eE(eN,e)||(eN[e]=X&&eE(eM,e)?eM[e]:eT("Symbol."+e)),eN[e]}("toPrimitive");W=function(e,t){if(!G(e)||Q(e))return e;var r,n=eu(e,eD);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!G(r)||Q(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},B=function(e){var t=W(e,"string");return Q(t)?t:t+""};var eR={},eF={},eq=_.document,eA=G(eq)&&G(eq.createElement);eF=function(e){return eA?eq.createElement(e):{}},eR=!w&&!k(function(){return 7!==Object.defineProperty(eF("div"),"a",{get:function(){return 7}}).a});var eH=Object.getOwnPropertyDescriptor;r=w?eH:function(e,t){if(e=O(e),t=B(t),eR)try{return eH(e,t)}catch(e){}if(eE(e,t))return L(!E(n,e,t),e[t])};var eC={},eU={};eU=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eW=String,eG=TypeError;eB=function(e){if(G(e))return e;throw new eG(eW(e)+" is not an object")};var ez=TypeError,eK=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eJ="enumerable",eY="configurable",eV="writable";o=w?eU?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=eQ(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(eB(e),t=B(t),eB(r),eR)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return o(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name"),e9=e2&&(!w||w&&e1(e0,"name").configurable),e3={},e4=M(Function.toString);z(em.inspectSource)||(em.inspectSource=function(e){return e4(e)}),e3=em.inspectSource;var e7={},e5={},e6=_.WeakMap;e5=z(e6)&&/native code/.test(String(e6));var e8={},te=ev("keys");e8=function(e){return te[e]||(te[e]=e$(e))};var tt={};tt={};var tr="Object already initialized",tn=_.TypeError,ta=_.WeakMap;if(e5||em.state){var ti=em.state||(em.state=new ta);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,s=function(e,t){if(ti.has(e))throw new tn(tr);return t.facade=e,ti.set(e,t),t},c=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e8("state");tt[to]=!0,s=function(e,t){if(eE(e,to))throw new tn(tr);return t.facade=e,eC(e,to,t),t},c=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ts=(e7={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!G(t)||(r=c(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,tc=e7.get,tu=String,tl=Object.defineProperty,tp=M("".slice),td=M("".replace),tf=M([].join),th=w&&!k(function(){return 8!==tl(function(){},"length",{value:8}).length}),tg=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tp(tu(t),0,7)&&(t="["+td(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e9&&e.name!==t)&&(w?tl(e,"name",{value:t,configurable:!0}):e.name=t),th&&r&&eE(r,"arity")&&e.length!==r.arity&&tl(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?w&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ts(e);return eE(n,"source")||(n.source=tf(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return z(this)&&tc(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var a=n.enumerable,i=void 0!==n.name?n.name:t;if(z(r)&&eZ(r,i,n),n.global)a?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tm={},tb={},t_={},ty={},tw={},tk={},tE=Math.ceil,tj=Math.floor;tk=Math.trunc||function(e){var t=+e;return(t>0?tj:tE)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tk(t)};var tS=Math.max,tP=Math.min;ty=function(e,t){var r=tw(e);return r<0?tS(r+t,0):tP(r,t)};var t$={},tL={},tO=Math.min;tL=function(e){var t=tw(e);return t>0?tO(t,0x1fffffffffffff):0},t$=function(e){return tL(e.length)};var tx=function(e){return function(t,r,n){var a,i=O(t),o=t$(i);if(0===o)return!e&&-1;var s=ty(n,o);if(e&&r!=r){for(;o>s;)if((a=i[s++])!=a)return!0}else for(;o>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tM={includes:tx(!0),indexOf:tx(!1)}.indexOf,tN=M([].push);t_=function(e,t){var r,n=O(e),a=0,i=[];for(r in n)!eE(tt,r)&&eE(n,r)&&tN(i,r);for(;t.length>a;)eE(n,r=t[a++])&&(~tM(i,r)||tN(i,r));return i};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return t_(e,tT)},p=Object.getOwnPropertySymbols;var tI=M([].concat);tb=J("Reflect","ownKeys")||function(e){var t=l(eB(e));return p?tI(t,p(e)):t},tm=function(e,t,n){for(var a=tb(t),i=0;i<a.length;i++){var s=a[i];eE(e,s)||n&&eE(n,s)||o(e,s,r(t,s))}};var tD={},tR=/#|\.prototype\./,tF=function(e,t){var r=tA[tq(e)];return r===tC||r!==tH&&(z(t)?k(t):!!t)},tq=tF.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tA=tF.data={},tH=tF.NATIVE="N",tC=tF.POLYFILL="P";tD=tF,b=function(e,t){var n,a,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?_:l?_[c]||e_(c,{}):_[c]&&_[c].prototype)for(a in t){if(o=t[a],i=e.dontCallGetSet?(s=r(n,a))&&s.value:n[a],!tD(u?a:c+(l?".":"#")+a,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;tm(o,i)}(e.sham||i&&i.sham)&&eC(o,"sham",!0),eX(n,a,o,e)}};var tU={},tB={},tW=Function.prototype,tG=tW.apply,tz=tW.call;tB="object"==typeof Reflect&&Reflect.apply||(j?tz.bind(tG):function(){return tz.apply(tG,arguments)});var tK={},tQ={},tJ=(tQ=function(e){if("Function"===D(e))return M(e)})(tQ.bind);tK=function(e,t){return el(e),void 0===t?e:j?tJ(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=J("document","documentElement");var tV={};tV=M([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/ipad|iphone|ipod/i.test(ee)&&/applewebkit/i.test(ee);var t1={},t2={},t9=function(e){return ee.slice(0,e.length)===e};t1="NODE"===(t2=t9("Bun/")?"BUN":t9("Cloudflare-Workers")?"CLOUDFLARE":t9("Deno/")?"DENO":t9("Node.js/")?"NODE":_.Bun&&"string"==typeof Bun.version?"BUN":_.Deno&&"object"==typeof Deno.version?"DENO":"process"===D(_.process)?"NODE":_.window&&_.document?"BROWSER":"REST");var t3=_.setImmediate,t4=_.clearImmediate,t7=_.process,t5=_.Dispatch,t6=_.Function,t8=_.MessageChannel,re=_.String,rt=0,rr={},rn="onreadystatechange";k(function(){d=_.location});var ra=function(e){if(eE(rr,e)){var t=rr[e];delete rr[e],t()}},ri=function(e){return function(){ra(e)}},ro=function(e){ra(e.data)},rs=function(e){_.postMessage(re(e),d.protocol+"//"+d.host)};t3&&t4||(t3=function(e){tX(arguments.length,1);var t=z(e)?e:t6(e),r=tV(arguments,1);return rr[++rt]=function(){tB(t,void 0,r)},f(rt),rt},t4=function(e){delete rr[e]},t1?f=function(e){t7.nextTick(ri(e))}:t5&&t5.now?f=function(e){t5.now(ri(e))}:t8&&!t0?(g=(h=new t8).port2,h.port1.onmessage=ro,f=tK(g.postMessage,g)):_.addEventListener&&z(_.postMessage)&&!_.importScripts&&d&&"file:"!==d.protocol&&!k(rs)?(f=rs,_.addEventListener("message",ro,!1)):f=rn in eF("script")?function(e){tY.appendChild(eF("script"))[rn]=function(){tY.removeChild(this),ra(e)}}:function(e){setTimeout(ri(e),0)});var rc=(tU={set:t3,clear:t4}).clear;b({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==rc},{clearImmediate:rc});var ru=tU.set,rl={},rp=_.Function,rd=/MSIE .\./.test(ee)||"BUN"===t2&&((t=_.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rl=function(e,t){var r=t?2:1;return rd?function(n,a){var i=tX(arguments.length,1)>r,o=z(n)?n:rp(n),s=i?tV(arguments,r):[],c=i?function(){tB(o,this,s)}:o;return t?e(c,a):e(c)}:e};var rf=_.setImmediate?rl(ru,!1):ru;b({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==rf},{setImmediate:rf});var rh=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var o,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return a(l,"_invoke",{value:(o=e,s=n,c=new $(i||[]),u=d,function(e,r){if(u===f)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var a=function e(r,n){var a=n.method,i=r.iterator[a];if(i===t)return(n.delegate=null,"throw"===a&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==a&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+a+"' method")),g);var o=p(i,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(a){if(a===g)continue;return a}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===d)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var i=p(o,s,c);if("normal"===i.type){if(u=c.done?h:"suspendedYield",i.arg===g)continue;return{value:i.arg,done:c.done}}"throw"===i.type&&(u=h,c.method="throw",c.arg=i.arg)}})}),l}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function b(){}var _={};u(_,o,function(){return this});var y=Object.getPrototypeOf,w=y&&y(y(L([])));w&&w!==r&&n.call(w,o)&&(_=w);var k=b.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;a(this,"_invoke",{value:function(a,i){function o(){return new t(function(r,o){!function r(a,i,o,s){var c=p(e[a],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(a,i,r,o)})}return r=r?r.then(o,o):o()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return m.prototype=b,a(k,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(j.prototype),u(j.prototype,s,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new j(l(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return(o.type=e,o.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rh}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rh:Function("r","regeneratorRuntime = r")(rh)}let rg="https://forkify-api.jonas.io/api/v2/recipes/",rv=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e}`))},1e3*e)})},rm=async function(e){try{let t=await Promise.race([fetch(e),rv(10)]);if(!t.ok)throw Error("Recipe not found. Please try searching for another one");return await t.json()}catch(e){throw e}},rb=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rv(10)]);if(!n.ok)throw Error("Error uploading the recipe.");return await n.json()}catch(e){throw e}},r_={recipe:{},searchData:{query:"",results:[],resultsPerPage:10,pageNumber:1},bookmarks:[],bookmarkPaginationNumber:1,bookmarksPerPage:4},ry=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,cookingTime:t.cooking_time,sourceUrl:t.source_url,imageURL:t.image_url,ingredients:t.ingredients,servings:t.servings,...e.key&&{key:e.key}}},rw=async function(e){try{let t=await rm(`${rg}${e}`);r_.recipe=ry(t),r_.bookmarks.some(t=>t.id===e)?r_.recipe.bookmarked=!0:r_.recipe.bookmarked=!1}catch(e){throw e}},rk=async function(e){try{r_.searchData.query=e;let t=await rm("https://forkify-api.jonas.io/api/v2/recipes?search="+e),r=t.data?.recipes;if(Array.isArray(r)&&0===r.length)throw Error(`No recipe found for ${e}! Please try another keyword`);r_.searchData.results=r.map(e=>({id:e.id,imageURL:e.image_url,title:e.title,publisher:e.publisher})),r_.searchData.pageNumber=1}catch(e){throw e}},rE=function(e=r_.searchData.pageNumber){r_.searchData.pageNumber=e;let t=(e-1)*r_.searchData.resultsPerPage,r=e*r_.searchData.resultsPerPage;return r_.searchData.results.slice(t,r)},rj=function(e){r_.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/r_.recipe.servings}),r_.recipe.servings=e},rS=function(){localStorage.setItem("bookmarks",JSON.stringify(r_.bookmarks))},rP=function(e){r_.bookmarks.push(e),e.id===r_.recipe.id&&(r_.recipe.bookmarked=!0),rS()},r$=function(e){let t=r_.bookmarks.findIndex(t=>t.id===e.id);r_.bookmarks.splice(t,1),e.id===r_.recipe.id&&(r_.recipe.bookmarked=!1),rS()};(e=localStorage.getItem("bookmarks"))&&(r_.bookmarks=JSON.parse(e));let rL=function(e=r_.bookmarkPaginationNumber){r_.bookmarkPaginationNumber=e;let t=(r_.bookmarkPaginationNumber-1)*r_.bookmarksPerPage,r=r_.bookmarkPaginationNumber*r_.bookmarksPerPage;return r_.bookmarks.slice(t,r)},rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Please make sure your input follows the right format");let[r,n,a]=checkRecipe;return{quantity:r?+r:"",unit:n||"",description:a||""}}),r={title:e.title,publisher:e.publisher,image_url:e.image_url,source_url:e.source_url,servings:+e.servings,cooking_time:+e.cooking_time,ingredients:t},n=await rb(`${rg}?key=0a9d7076-c6bd-454e-834c-8c83c5909e19`,r);r_.recipe=ry(n),rP(r_.recipe)}catch(e){throw e}};var rx={};rx=import.meta.resolve("eyyUD");var rM={};function rN(e,t,r,n,a){var i,o,s,c;let u=[2,3,5];if(!0===a)for(let t=3;t*t<=e;t+=2)e%t==0&&u.push(t);let l=0,p=e,d=t;for(;l<=u.length;)p%u[l]==0&&d%u[l]==0?(u[l],p/=u[l],d/=u[l]):l++;return i=d,o=p,s=r,c=n,1===i&&1===o?(s=`${c}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${c}${s}`:"0"==s?`${c}${o}/${i}`:`${c}${s} ${o}/${i}`}rM=function(e){var t,r,n,a,i,o,s,c;let u,l;if(e<0?(e=Math.abs(e),u="-"):u="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${u}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${u}${e}`;if(e<1e-6)return"0";let p=e.toString(),d=p.split("."),f=d[0];if("0"==l&&"0"!==f)return f;if("0"==l&&"0"==f)return"0";if("99"==(l=p.length>=17?d[1].slice(0,d[1].length-1):d[1])&&"0"!==f)return`${f} 99/100`;if("99"==l&&"0"==f)return"99/100";if(1-parseFloat(`.${l}`)<.0011&&(l="999"),void 0==l)return f;let h=l.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!h||!(l.length>2)){return t=l,r=f,n=u,rN(parseInt(t,10),Math.pow(10,t.length),r,n,!1)}{let e,t,r,n,p=h[0].split("").reverse().join(""),d=h[1].split("").reverse().join("");if(d.length>1){let e=d.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(d=e[0])}return d.length>1&&d.length%2==0&&(d=parseInt(d.slice(0,d.length/2),10)-parseInt(d.slice(d.length/2,d.length),10)==0?d.slice(0,d.length/2):d),a=l,i=d,o=p,s=f,c=u,t=Math.pow(10,e=a.length-o.length>=1?a.length-o.length:1),rN(Math.round(((r=parseFloat(`0.${a}`))*(n=Math.pow(10,i.length))-r)*Math.pow(10,e)),(n-1)*t,s,c,!0)}};class rT{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return;this._data=e;let r=this._recipeMarkup();if(!t)return r;this._clearParentContainer(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clearParentContainer(){this._parentElement.innerHTML=""}update(e){this._data=e;let t=this._recipeMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];r.isEqualNode(e)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),r.isEqualNode(e)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}loadSpinner(){let e=` 
    <div class="spinner">
      <svg>
        <use href="${m(rx)}#icon-loader"></use>
      </svg>
    </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e){let t=`<div class="recipe__error">
      <svg>
        <use href="${m(rx)}#icon-alert-triangle"></use>
      </svg>
      <p>
        ${e}
      </p>
    </div>`;this._clearParentContainer(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccessMessage(e=this._successMessage){let t=`<div class="recipe__message">
      <svg>
        <use href="${m(rx)}#icon-smile"></use>
      </svg>
      <p>
        ${e}
      </p>
    </div>`;this._clearParentContainer(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rI extends rT{_parentElement=document.querySelector(".recipe__js");_data;_successMessage="Recipe successfully found";addRecipeHandler(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".js__bookmark__btn")&&e()})}updateServingsHandler(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".js__btn__servings");if(!r)return;let{updateTo:n}=r.dataset;0!=+n&&e(+n)})}_recipeMarkup(){return`
    <figure class="recipe__fig">
      <img class="recipe__img" src="${this._data.imageURL}" alt="${this._data.imageUrl}">
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe__detail">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${m(rx)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${m(rx)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny js__btn__servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${m(rx)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny js__btn__servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${m(rx)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="recipe__user-generated">
        <svg>
          <use href="${m(rx)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round js__bookmark__btn">
        <svg>
          <use href="${m(rx)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe Ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")}
      </ul>
    </div>

    <div class="recipe__direction">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__direction--text">
        This recipe was carefully designed and tested by <span>The Pioneer Woman</span>. <br>
        Please check out directions at their wedsite.
      </p>
      <a class="btn--small recipe__btn" 
      href="${this._data.sourceUrl}" target="_blank">
        <span>Directions</span>
        <svg>
          <use href="${m(rx)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg>
        <use href="${m(rx)}#icon-check"></use>
      </svg>
      <span class="recipe__quantity">${e.quantity?m(rM)(e.quantity):""}</span>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var rD=new rI;class rR{_searchKeyword=document.querySelector(".js-search-field");_searchForm=document.querySelector(".js-search-form");getKeyword(){let e=this._searchKeyword.value;return this._clearInput(),e}addHandlerSearch(e){this._searchForm.addEventListener("submit",function(t){t.preventDefault(),e()})}_clearInput(){this._searchKeyword.value=""}}var rF=new rR,rq=new class extends rT{_recipeMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview preview__orange ${this._data.id===e?"preview__selected":""}">
        <a class="preview__link" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.imageURL}" alt="${this._data.title}">
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
          <!-- <div class="preview__user-generated">
            <svg>
              <use href="${m(rx)}#icon-user"></use>
            </svg>
          </div> -->
        </a>
      </li>`}};class rA extends rT{_parentElement=document.querySelector(".results__js");_data;_successMessage="Recipe successfully found";_recipeMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rH=new rA;class rC extends rT{_parentElement=document.querySelector(".js-pagination");_data;paginationHandler(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".pagination__btn");r&&e(+r.dataset.goto)})}_recipeMarkup(){let e=this._data.pageNumber,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
      <button></button> <!-- Added this empty button here to maintain the flex order when user is on page 1 -->
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next pagination__btn">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${m(rx)}#icon-arrow-right"></use>
        </svg>
      </button>`:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev pagination__btn">
        <svg class="search__icon">
          <use href="${m(rx)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>`:e<t?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev pagination__btn">
        <svg class="search__icon">
          <use href="${m(rx)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next pagination__btn">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${m(rx)}#icon-arrow-right"></use>
        </svg>
      </button>
      `:""}}var rU=new rC;class rB extends rT{_parentElement=document.querySelector(".js__bookmark__list");_data;_successMessage="Recipe successfully found";renderLocalStorageHandler(e){window.addEventListener("load",e)}_recipeMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}bookmarkMessage(){let e=`
    <div class="message">
      <svg>
        <use href="${m(rx)}#icon-smile"></use>
      </svg>
      <p>
        No bookmarks yet. Find a nice recipe and bookmark it
      </p>
    </div>`;this._clearParentContainer(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var rW=new rB;class rG extends rT{_window=document.querySelector(".js__window");_parentElement=document.querySelector(".js__upload__form");_overlay=document.querySelector(".js__overlay");_addRecipeBtn=document.querySelector(".js__addrecipe");_closeModalBtn=document.querySelector(".js__close__modal");_successMessage="Recipe has been successfully created";constructor(){super(),this._addRecipeHandler(),this._hideModalHandler()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_hideModalHandler(){[this._closeModalBtn,this._overlay].forEach(e=>e.addEventListener("click",this.toggleWindow.bind(this)))}uploadRecipeHandler(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}renderError(e){let t=`<div class="recipe__upload__error">
      <svg>
        <use href="${m(rx)}#icon-alert-triangle"></use>
      </svg>
      <p>
        ${e}
      </p>
    </div>`;this._clearParentContainer(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_addRecipeHandler(){this._addRecipeBtn.addEventListener("click",(function(e){let t=`
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" type="text" required name="title" >
          <label>URL</label>
          <input value="TEST" type="text" required name="source_url">
          <label>Image URL</label>
          <input value="TEST" type="text" required name="image_url">
          <label> Publisher</label>
          <input value="TEST" type="text" required name="publisher">
          <label>Prep Time</label>
          <input value="23" type="text" required name="cooking_time">
          <label>Servings</label>
          <input value="23" type="text" required name="servings">
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input 
            value="0.5,kg,Rice" 
            type="text" 
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 2</label>
          <input 
            value="1,,Avocado" 
            type="text" 
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 3</label>
          <input 
            value=",,Salt" 
            type="text" 
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 4</label>
          <input 
            type="text" 
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 5</label>
          <input 
            type="text"
            name="ingredient-5" 
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 6</label>
          <input 
            type="text" 
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
        </div>

        <button class="upload__btn">
          <svg>
            <use href="${m(rx)}#icon-upload-cloud"></use>
          </svg>
          <span>upload</span>
        </button>`;this._clearParentContainer(),this._parentElement.insertAdjacentHTML("afterbegin",t),this.toggleWindow()}).bind(this))}}var rz=new rG;class rK extends rT{_parentElement=document.querySelector(".js__bookmark__btns");_data;bookmarkPageHandler(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".js_bookmark_btn_arrow");if(!r)return;let n=r.dataset.pageNumber;n<1||e(+n)})}_recipeMarkup(){let e=Math.ceil(this._data.bookmarks.length/this._data.bookmarksPerPage);return 1===this._data.bookmarkPaginationNumber&&e>1?`
      <div></div>
      <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber+1}">
        <span>&rightarrow;</span>
      </button>`:this._data.bookmarkPaginationNumber===e&&e>1?`
        <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber-1}">
          <span>&LeftArrow;</span>
        </button>
      `:this._data.bookmarkPaginationNumber<e?`
        <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber-1}">
          <span>&LeftArrow;</span>
        </button>
        <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber+1}">
          <span>&rightarrow;</span>
        </button>
      `:""}}var rQ=new rK;async function rJ(){try{let e=window.location.hash.slice(1);if(!e)return;rD.loadSpinner(),await rw(e),rD.render(r_.recipe),rH.update(rE()),rW.render(rL(r_.bookmarkPaginationNumber)),rQ.render(r_)}catch(e){rD.renderError(e)}}let rY=async function(){try{rH.loadSpinner();let e=rF.getKeyword();if(!e)return;await rk(e),rH.render(rE()),rU.render(r_.searchData)}catch(e){rH.renderError(e)}},rV=async function(e){try{rz.loadSpinner(),await rO(e),rD.render(r_.recipe),rz.renderSuccessMessage(),rW.render(rL(r_.bookmarkPaginationNumber)),rQ.render(r_),setTimeout(()=>{rz.toggleWindow()},3e3)}catch(e){rz.renderError(e)}};rW.renderLocalStorageHandler(function(){rW.render(r_.bookmarks)}),rD.addRecipeHandler(rJ),rD.updateServingsHandler(function(e){rj(e),rD.update(r_.recipe)}),rF.addHandlerSearch(rY),rU.paginationHandler(function(e){rH.render(rE(e)),rU.render(r_.searchData)}),rD.addBookmark(function(){r_.recipe.bookmarked?r$(r_.recipe):rP(r_.recipe),rD.update(r_.recipe),r_.bookmarks.length>0?(rW.render(rL(r_.bookmarkPaginationNumber)),rQ.render(r_)):rW.bookmarkMessage()}),rQ.bookmarkPageHandler(function(e){rW.render(rL(e)),rQ.render(r_)}),rz.uploadRecipeHandler(rV);
//# sourceMappingURL=forkify-app.442d1af4.js.map
