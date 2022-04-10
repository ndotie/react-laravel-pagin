import{useState as t,useEffect as e}from"react";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){var e={exports:{}};return t(e,e.exports),e.exports}var o,i,c=function(t){return t&&t.Math==Math&&t},u=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},f=function(t){return"function"==typeof t},s=function(t){return"object"==typeof t?null!==t:f(t)},l=u.document,p=s(l)&&s(l.createElement),v=function(t){return p?l.createElement(t):{}},h=v("span").classList,d=h&&h.constructor&&h.constructor.prototype,y=d===Object.prototype?void 0:d,m=function(t){try{return!!t()}catch(t){return!0}},g=!m(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),b=Function.prototype,w=b.call,S=g&&b.bind.bind(w,w),O=g?function(t){return t&&S(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},j=O({}.toString),E=O("".slice),P=function(t){return E(j(t),8,-1)},T=u.Object,R=O("".split),L=m(function(){return!T("z").propertyIsEnumerable(0)})?function(t){return"String"==P(t)?R(t,""):T(t)}:T,k=u.TypeError,x=function(t){if(null==t)throw k("Can't call method on "+t);return t},A=function(t){return L(x(t))},I=Object.defineProperty,_=function(t,e){try{I(u,t,{value:e,configurable:!0,writable:!0})}catch(n){u[t]=e}return e},F=u["__core-js_shared__"]||_("__core-js_shared__",{}),M=r(function(t){(t.exports=function(t,e){return F[t]||(F[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})}),C=u.Object,N=function(t){return C(x(t))},D=O({}.hasOwnProperty),G=Object.hasOwn||function(t,e){return D(N(t),e)},U=0,z=Math.random(),V=O(1..toString),q=function(t){return"Symbol("+(void 0===t?"":t)+")_"+V(++U+z,36)},B=function(t){return f(t)?t:void 0},H=function(t,e){return arguments.length<2?B(u[t]):u[t]&&u[t][e]},W=H("navigator","userAgent")||"",Y=u.process,K=u.Deno,X=Y&&Y.versions||K&&K.version,$=X&&X.v8;$&&(i=(o=$.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&W&&(!(o=W.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=W.match(/Chrome\/(\d+)/))&&(i=+o[1]);var J,Q=i,Z=!!Object.getOwnPropertySymbols&&!m(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Q&&Q<41}),tt=Z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,et=M("wks"),nt=u.Symbol,rt=nt&&nt.for,ot=tt?nt:nt&&nt.withoutSetter||q,it=function(t){if(!G(et,t)||!Z&&"string"!=typeof et[t]){var e="Symbol."+t;et[t]=Z&&G(nt,t)?nt[t]:tt&&rt?rt(e):ot(e)}return et[t]},ct=u.String,ut=u.TypeError,at=function(t){if(s(t))return t;throw ut(ct(t)+" is not an object")},ft=!m(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),st=ft&&m(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),lt=!ft&&!m(function(){return 7!=Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a}),pt=Function.prototype.call,vt=g?pt.bind(pt):function(){return pt.apply(pt,arguments)},ht=O({}.isPrototypeOf),dt=u.Object,yt=tt?function(t){return"symbol"==typeof t}:function(t){var e=H("Symbol");return f(e)&&ht(e.prototype,dt(t))},mt=u.String,gt=function(t){try{return mt(t)}catch(t){return"Object"}},bt=u.TypeError,wt=function(t){if(f(t))return t;throw bt(gt(t)+" is not a function")},St=function(t,e){var n=t[e];return null==n?void 0:wt(n)},Ot=u.TypeError,jt=u.TypeError,Et=it("toPrimitive"),Pt=function(t){var e=function(t,e){if(!s(t)||yt(t))return t;var n,r=St(t,Et);if(r){if(void 0===e&&(e="default"),n=vt(r,t,e),!s(n)||yt(n))return n;throw jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&f(n=t.toString)&&!s(r=vt(n,t)))return r;if(f(n=t.valueOf)&&!s(r=vt(n,t)))return r;if("string"!==e&&f(n=t.toString)&&!s(r=vt(n,t)))return r;throw Ot("Can't convert object to primitive value")}(t,e)}(t,"string");return yt(e)?e:e+""},Tt=u.TypeError,Rt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,kt={f:ft?st?function(t,e,n){if(at(t),e=Pt(e),at(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=Lt(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Rt(t,e,n)}:Rt:function(t,e,n){if(at(t),e=Pt(e),at(n),lt)try{return Rt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Tt("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},xt=Math.ceil,At=Math.floor,It=function(t){var e=+t;return e!=e||0===e?0:(e>0?At:xt)(e)},_t=Math.max,Ft=Math.min,Mt=Math.min,Ct=function(t){return(e=t.length)>0?Mt(It(e),9007199254740991):0;var e},Nt=function(t){return function(e,n,r){var o,i=A(e),c=Ct(i),u=function(t,e){var n=It(t);return n<0?_t(n+e,0):Ft(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},Dt={includes:Nt(!0),indexOf:Nt(!1)},Gt={},Ut=Dt.indexOf,zt=O([].push),Vt=function(t,e){var n,r=A(t),o=0,i=[];for(n in r)!G(Gt,n)&&G(r,n)&&zt(i,n);for(;e.length>o;)G(r,n=e[o++])&&(~Ut(i,n)||zt(i,n));return i},qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Bt=Object.keys||function(t){return Vt(t,qt)},Ht=ft&&!st?Object.defineProperties:function(t,e){at(t);for(var n,r=A(e),o=Bt(e),i=o.length,c=0;i>c;)kt.f(t,n=o[c++],r[n]);return t},Wt={f:Ht},Yt=H("document","documentElement"),Kt=M("keys"),Xt=function(t){return Kt[t]||(Kt[t]=q(t))},$t=Xt("IE_PROTO"),Jt=function(){},Qt=function(t){return"<script>"+t+"<\/script>"},Zt=function(t){t.write(Qt("")),t.close();var e=t.parentWindow.Object;return t=null,e},te=function(){try{J=new ActiveXObject("htmlfile")}catch(t){}var t,e;te="undefined"!=typeof document?document.domain&&J?Zt(J):((e=v("iframe")).style.display="none",Yt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Qt("document.F=Object")),t.close(),t.F):Zt(J);for(var n=qt.length;n--;)delete te.prototype[qt[n]];return te()};Gt[$t]=!0;var ee=Object.create||function(t,e){var n;return null!==t?(Jt.prototype=at(t),n=new Jt,Jt.prototype=null,n[$t]=t):n=te(),void 0===e?n:Wt.f(n,e)},ne=it("unscopables"),re=Array.prototype;null==re[ne]&&kt.f(re,ne,{configurable:!0,value:ee(null)});var oe=function(t){re[ne][t]=!0},ie={},ce=O(Function.toString);f(F.inspectSource)||(F.inspectSource=function(t){return ce(t)});var ue,ae,fe,se=F.inspectSource,le=u.WeakMap,pe=f(le)&&/native code/.test(se(le)),ve=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},he=ft?function(t,e,n){return kt.f(t,e,ve(1,n))}:function(t,e,n){return t[e]=n,t},de=u.TypeError;if(pe||F.state){var ye=F.state||(F.state=new(0,u.WeakMap)),me=O(ye.get),ge=O(ye.has),be=O(ye.set);ue=function(t,e){if(ge(ye,t))throw new de("Object already initialized");return e.facade=t,be(ye,t,e),e},ae=function(t){return me(ye,t)||{}},fe=function(t){return ge(ye,t)}}else{var we=Xt("state");Gt[we]=!0,ue=function(t,e){if(G(t,we))throw new de("Object already initialized");return e.facade=t,he(t,we,e),e},ae=function(t){return G(t,we)?t[we]:{}},fe=function(t){return G(t,we)}}var Se,Oe,je,Ee={set:ue,get:ae,has:fe,enforce:function(t){return fe(t)?ae(t):ue(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=ae(e)).type!==t)throw de("Incompatible receiver, "+t+" required");return n}}},Pe={}.propertyIsEnumerable,Te=Object.getOwnPropertyDescriptor,Re={f:Te&&!Pe.call({1:2},1)?function(t){var e=Te(this,t);return!!e&&e.enumerable}:Pe},Le=Object.getOwnPropertyDescriptor,ke={f:ft?Le:function(t,e){if(t=A(t),e=Pt(e),lt)try{return Le(t,e)}catch(t){}if(G(t,e))return ve(!vt(Re.f,t,e),t[e])}},xe=Function.prototype,Ae=ft&&Object.getOwnPropertyDescriptor,Ie=G(xe,"name"),_e={EXISTS:Ie,PROPER:Ie&&"something"===function(){}.name,CONFIGURABLE:Ie&&(!ft||ft&&Ae(xe,"name").configurable)},Fe=r(function(t){var e=_e.CONFIGURABLE,n=Ee.get,r=Ee.enforce,o=String(String).split("String");(t.exports=function(t,n,i,c){var a,s=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:n;f(i)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!G(i,"name")||e&&i.name!==v)&&he(i,"name",v),(a=r(i)).source||(a.source=o.join("string"==typeof v?v:""))),t!==u?(s?!p&&t[n]&&(l=!0):delete t[n],l?t[n]=i:he(t,n,i)):l?t[n]=i:_(n,i)})(Function.prototype,"toString",function(){return f(this)&&n(this).source||se(this)})}),Me=qt.concat("length","prototype"),Ce={f:Object.getOwnPropertyNames||function(t){return Vt(t,Me)}},Ne={f:Object.getOwnPropertySymbols},De=O([].concat),Ge=H("Reflect","ownKeys")||function(t){var e=Ce.f(at(t)),n=Ne.f;return n?De(e,n(t)):e},Ue=function(t,e,n){for(var r=Ge(e),o=kt.f,i=ke.f,c=0;c<r.length;c++){var u=r[c];G(t,u)||n&&G(n,u)||o(t,u,i(e,u))}},ze=/#|\.prototype\./,Ve=function(t,e){var n=Be[qe(t)];return n==We||n!=He&&(f(e)?m(e):!!e)},qe=Ve.normalize=function(t){return String(t).replace(ze,".").toLowerCase()},Be=Ve.data={},He=Ve.NATIVE="N",We=Ve.POLYFILL="P",Ye=Ve,Ke=ke.f,Xe=function(t,e){var n,r,o,i,c,a=t.target,f=t.global,s=t.stat;if(n=f?u:s?u[a]||_(a,{}):(u[a]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=Ke(n,r))&&c.value:n[r],!Ye(f?r:a+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ue(i,o)}(t.sham||o&&o.sham)&&he(i,"sham",!0),Fe(n,r,i,t)}},$e=!m(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Je=Xt("IE_PROTO"),Qe=u.Object,Ze=Qe.prototype,tn=$e?Qe.getPrototypeOf:function(t){var e=N(t);if(G(e,Je))return e[Je];var n=e.constructor;return f(n)&&e instanceof n?n.prototype:e instanceof Qe?Ze:null},en=it("iterator"),nn=!1;[].keys&&("next"in(je=[].keys())?(Oe=tn(tn(je)))!==Object.prototype&&(Se=Oe):nn=!0);var rn=null==Se||m(function(){var t={};return Se[en].call(t)!==t});rn&&(Se={}),f(Se[en])||Fe(Se,en,function(){return this});var on={IteratorPrototype:Se,BUGGY_SAFARI_ITERATORS:nn},cn=kt.f,un=it("toStringTag"),an=function(t,e,n){t&&!n&&(t=t.prototype),t&&!G(t,un)&&cn(t,un,{configurable:!0,value:e})},fn=on.IteratorPrototype,sn=function(){return this},ln=u.String,pn=u.TypeError,vn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=O(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return at(n),function(t){if("object"==typeof t||f(t))return t;throw pn("Can't set "+ln(t)+" as a prototype")}(r),e?t(n,r):n.__proto__=r,n}}():void 0),hn=_e.PROPER,dn=_e.CONFIGURABLE,yn=on.IteratorPrototype,mn=on.BUGGY_SAFARI_ITERATORS,gn=it("iterator"),bn=function(){return this},wn=kt.f,Sn=Ee.set,On=Ee.getterFor("Array Iterator"),jn=function(t,e,n,r,o,i,c){!function(t,e,n,r){var o="Array Iterator";t.prototype=ee(fn,{next:ve(1,function(){var t=On(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}})}),an(t,o,!1),ie[o]=sn}(n);var u,a,s,l=function(t){if(t===o&&d)return d;if(!mn&&t in v)return v[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},p=!1,v=t.prototype,h=v[gn]||v["@@iterator"]||v.values,d=!mn&&h||l(o),y=v.entries||h;if(y&&(u=tn(y.call(new t)))!==Object.prototype&&u.next&&(tn(u)!==yn&&(vn?vn(u,yn):f(u[gn])||Fe(u,gn,bn)),an(u,"Array Iterator",!0)),hn&&h&&"values"!==h.name&&(dn?he(v,"name","values"):(p=!0,d=function(){return vt(h,this)})),void(a={values:l("values"),keys:l("keys"),entries:l("entries")}))for(s in a)(mn||p||!(s in v))&&Fe(v,s,a[s]);else Xe({target:"Array",proto:!0,forced:mn||p},a);return v[gn]!==d&&Fe(v,gn,d,{name:o}),ie.Array=d,a}(Array,0,function(t,e){Sn(this,{type:"Array Iterator",target:A(t),index:0,kind:e})},0,"values"),En=ie.Arguments=ie.Array;if(oe("keys"),oe("values"),oe("entries"),ft&&"values"!==En.name)try{wn(En,"name",{value:"values"})}catch(t){}var Pn=it("iterator"),Tn=it("toStringTag"),Rn=jn.values,Ln=function(t,e){if(t){if(t[Pn]!==Rn)try{he(t,Pn,Rn)}catch(e){t[Pn]=Rn}if(t[Tn]||he(t,Tn,e),a[e])for(var n in jn)if(t[n]!==jn[n])try{he(t,n,jn[n])}catch(e){t[n]=jn[n]}}};for(var kn in a)Ln(u[kn]&&u[kn].prototype,kn);Ln(y,"DOMTokenList");var xn={};xn[it("toStringTag")]="z";var An="[object z]"===String(xn),In=it("toStringTag"),_n=u.Object,Fn="Arguments"==P(function(){return arguments}()),Mn=An?P:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=_n(t),In))?n:Fn?P(e):"Object"==(r=P(e))&&f(e.callee)?"Arguments":r},Cn=u.String,Nn="\t\n\v\f\r                　\u2028\u2029\ufeff",Dn=O("".replace),Gn="["+Nn+"]",Un=RegExp("^"+Gn+Gn+"*"),zn=RegExp(Gn+Gn+"*$"),Vn=function(t){return function(e){var n=function(t){if("Symbol"===Mn(t))throw TypeError("Cannot convert a Symbol value to a string");return Cn(t)}(x(e));return 1&t&&(n=Dn(n,Un,"")),2&t&&(n=Dn(n,zn,"")),n}},qn={start:Vn(1),end:Vn(2),trim:Vn(3)},Bn=_e.PROPER,Hn=qn.trim;Xe({target:"String",proto:!0,forced:m(function(){return!!Nn.trim()||"​᠎"!=="​᠎".trim()||Bn&&"trim"!==Nn.trim.name})},{trim:function(){return Hn(this)}});var Wn=u.Promise,Yn=it("species"),Kn=u.TypeError,Xn=O(O.bind),$n=function(t,e){return wt(t),void 0===e?t:g?Xn(t,e):function(){return t.apply(e,arguments)}},Jn=it("iterator"),Qn=Array.prototype,Zn=it("iterator"),tr=function(t){if(null!=t)return St(t,Zn)||St(t,"@@iterator")||ie[Mn(t)]},er=u.TypeError,nr=function(t,e,n){var r,o;at(t);try{if(!(r=St(t,"return"))){if("throw"===e)throw n;return n}r=vt(r,t)}catch(t){o=!0,r=t}if("throw"===e)throw n;if(o)throw r;return at(r),n},rr=u.TypeError,or=function(t,e){this.stopped=t,this.result=e},ir=or.prototype,cr=function(t,e,n){var r,o,i,c,u,a,f,s,l=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),v=!(!n||!n.INTERRUPTED),h=$n(e,n&&n.that),d=function(t){return r&&nr(r,"normal",t),new or(!0,t)},y=function(t){return l?(at(t),v?h(t[0],t[1],d):h(t[0],t[1])):v?h(t,d):h(t)};if(p)r=t;else{if(!(o=tr(t)))throw rr(gt(t)+" is not iterable");if(void 0!==(s=o)&&(ie.Array===s||Qn[Jn]===s)){for(i=0,c=Ct(t);c>i;i++)if((u=y(t[i]))&&ht(ir,u))return u;return new or(!1)}r=function(t,e){var n=arguments.length<2?tr(t):e;if(wt(n))return at(vt(n,t));throw er(gt(t)+" is not iterable")}(t,o)}for(a=r.next;!(f=vt(a,r)).done;){try{u=y(f.value)}catch(t){nr(r,"throw",t)}if("object"==typeof u&&u&&ht(ir,u))return u}return new or(!1)},ur=it("iterator"),ar=!1;try{var fr=0,sr={next:function(){return{done:!!fr++}},return:function(){ar=!0}};sr[ur]=function(){return this},Array.from(sr,function(){throw 2})}catch(t){}var lr=function(){},pr=[],vr=H("Reflect","construct"),hr=/^\s*(?:class|function)\b/,dr=O(hr.exec),yr=!hr.exec(lr),mr=function(t){if(!f(t))return!1;try{return vr(lr,pr,t),!0}catch(t){return!1}},gr=function(t){if(!f(t))return!1;switch(Mn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return yr||!!dr(hr,se(t))}catch(t){return!0}};gr.sham=!0;var br,wr,Sr,Or,jr=!vr||m(function(){var t;return mr(mr.call)||!mr(Object)||!mr(function(){t=!0})||t})?gr:mr,Er=u.TypeError,Pr=it("species"),Tr=Function.prototype,Rr=Tr.apply,Lr=Tr.call,kr="object"==typeof Reflect&&Reflect.apply||(g?Lr.bind(Rr):function(){return Lr.apply(Rr,arguments)}),xr=O([].slice),Ar=u.TypeError,Ir=function(t,e){if(t<e)throw Ar("Not enough arguments");return t},_r=/(?:ipad|iphone|ipod).*applewebkit/i.test(W),Fr="process"==P(u.process),Mr=u.setImmediate,Cr=u.clearImmediate,Nr=u.process,Dr=u.Dispatch,Gr=u.Function,Ur=u.MessageChannel,zr=u.String,Vr=0,qr={};try{br=u.location}catch(t){}var Br=function(t){if(G(qr,t)){var e=qr[t];delete qr[t],e()}},Hr=function(t){return function(){Br(t)}},Wr=function(t){Br(t.data)},Yr=function(t){u.postMessage(zr(t),br.protocol+"//"+br.host)};Mr&&Cr||(Mr=function(t){Ir(arguments.length,1);var e=f(t)?t:Gr(t),n=xr(arguments,1);return qr[++Vr]=function(){kr(e,void 0,n)},wr(Vr),Vr},Cr=function(t){delete qr[t]},Fr?wr=function(t){Nr.nextTick(Hr(t))}:Dr&&Dr.now?wr=function(t){Dr.now(Hr(t))}:Ur&&!_r?(Or=(Sr=new Ur).port2,Sr.port1.onmessage=Wr,wr=$n(Or.postMessage,Or)):u.addEventListener&&f(u.postMessage)&&!u.importScripts&&br&&"file:"!==br.protocol&&!m(Yr)?(wr=Yr,u.addEventListener("message",Wr,!1)):wr="onreadystatechange"in v("script")?function(t){Yt.appendChild(v("script")).onreadystatechange=function(){Yt.removeChild(this),Br(t)}}:function(t){setTimeout(Hr(t),0)});var Kr,Xr,$r,Jr,Qr,Zr,to,eo,no={set:Mr,clear:Cr},ro=/ipad|iphone|ipod/i.test(W)&&void 0!==u.Pebble,oo=/web0s(?!.*chrome)/i.test(W),io=no.set,co=u.MutationObserver||u.WebKitMutationObserver,uo=u.document,ao=u.process,fo=u.Promise,so=(0,ke.f)(u,"queueMicrotask"),lo=so&&so.value;lo||(Kr=function(){var t,e;for(Fr&&(t=ao.domain)&&t.exit();Xr;){e=Xr.fn,Xr=Xr.next;try{e()}catch(t){throw Xr?Jr():$r=void 0,t}}$r=void 0,t&&t.enter()},_r||Fr||oo||!co||!uo?!ro&&fo&&fo.resolve?((to=fo.resolve(void 0)).constructor=fo,eo=$n(to.then,to),Jr=function(){eo(Kr)}):Fr?Jr=function(){ao.nextTick(Kr)}:(io=$n(io,u),Jr=function(){io(Kr)}):(Qr=!0,Zr=uo.createTextNode(""),new co(Kr).observe(Zr,{characterData:!0}),Jr=function(){Zr.data=Qr=!Qr}));var po=lo||function(t){var e={fn:t,next:void 0};$r&&($r.next=e),Xr||(Xr=e,Jr()),$r=e},vo=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=wt(e),this.reject=wt(n)},ho={f:function(t){return new vo(t)}},yo=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},mo=function(){this.head=null,this.tail=null};mo.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}};var go,bo,wo,So,Oo,jo=mo,Eo="object"==typeof window,Po=no.set,To=it("species"),Ro="Promise",Lo=Ee.getterFor(Ro),ko=Ee.set,xo=Ee.getterFor(Ro),Ao=Wn&&Wn.prototype,Io=Wn,_o=Ao,Fo=u.TypeError,Mo=u.document,Co=u.process,No=ho.f,Do=No,Go=!!(Mo&&Mo.createEvent&&u.dispatchEvent),Uo=f(u.PromiseRejectionEvent),zo=!1,Vo=Ye(Ro,function(){var t=se(Io),e=t!==String(Io);if(!e&&66===Q)return!0;if(Q>=51&&/native code/.test(t))return!1;var n=new Io(function(t){t(1)}),r=function(t){t(function(){},function(){})};return(n.constructor={})[To]=r,!(zo=n.then(function(){})instanceof r)||!e&&Eo&&!Uo}),qo=Vo||!function(t,e){if(!ar)return!1;var n=!1;try{var r={};r[ur]=function(){return{next:function(){return{done:n=!0}}}},Io.all(r).catch(function(){})}catch(t){}return n}(),Bo=function(t){var e;return!(!s(t)||!f(e=t.then))&&e},Ho=function(t,e){var n,r,o,i=e.value,c=1==e.state,u=c?t.ok:t.fail,a=t.resolve,f=t.reject,s=t.domain;try{u?(c||(2===e.rejection&&$o(e),e.rejection=1),!0===u?n=i:(s&&s.enter(),n=u(i),s&&(s.exit(),o=!0)),n===t.promise?f(Fo("Promise-chain cycle")):(r=Bo(n))?vt(r,n,a,f):a(n)):f(i)}catch(t){s&&!o&&s.exit(),f(t)}},Wo=function(t,e){t.notified||(t.notified=!0,po(function(){for(var n,r=t.reactions;n=r.get();)Ho(n,t);t.notified=!1,e&&!t.rejection&&Ko(t)}))},Yo=function(t,e,n){var r,o;Go?((r=Mo.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Uo&&(o=u["on"+t])?o(r):"unhandledrejection"===t&&function(t,e){var n=u.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Ko=function(t){vt(Po,u,function(){var e,n=t.facade,r=t.value;if(Xo(t)&&(e=yo(function(){Fr?Co.emit("unhandledRejection",r,n):Yo("unhandledrejection",n,r)}),t.rejection=Fr||Xo(t)?2:1,e.error))throw e.value})},Xo=function(t){return 1!==t.rejection&&!t.parent},$o=function(t){vt(Po,u,function(){var e=t.facade;Fr?Co.emit("rejectionHandled",e):Yo("rejectionhandled",e,t.value)})},Jo=function(t,e,n){return function(r){t(e,r,n)}},Qo=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,Wo(t,!0))},Zo=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Fo("Promise can't be resolved itself");var r=Bo(e);r?po(function(){var n={done:!1};try{vt(r,e,Jo(Zo,n,t),Jo(Qo,n,t))}catch(e){Qo(n,e,t)}}):(t.value=e,t.state=1,Wo(t,!1))}catch(e){Qo({done:!1},e,t)}}};if(Vo&&(Io=function(t){!function(t,e){if(ht(_o,t))return t;throw Kn("Incorrect invocation")}(this),wt(t),vt(go,this);var e=Lo(this);try{t(Jo(Zo,e),Jo(Qo,e))}catch(t){Qo(e,t)}},(go=function(t){ko(this,{type:Ro,done:!1,notified:!1,parent:!1,reactions:new jo,rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Fe(t,r,e[r],void 0);return t}(_o=Io.prototype,{then:function(t,e){var n,r,o,i=xo(this),c=No((n=Io,void 0===(o=at(this).constructor)||null==(r=at(o)[Pr])?n:function(t){if(jr(t))return t;throw Er(gt(t)+" is not a constructor")}(r)));return i.parent=!0,c.ok=!f(t)||t,c.fail=f(e)&&e,c.domain=Fr?Co.domain:void 0,0==i.state?i.reactions.add(c):po(function(){Ho(c,i)}),c.promise},catch:function(t){return this.then(void 0,t)}}),bo=function(){var t=new go,e=Lo(t);this.promise=t,this.resolve=Jo(Zo,e),this.reject=Jo(Qo,e)},ho.f=No=function(t){return t===Io||t===wo?new bo(t):Do(t)},f(Wn)&&Ao!==Object.prototype)){So=Ao.then,zo||(Fe(Ao,"then",function(t,e){var n=this;return new Io(function(t,e){vt(So,n,t,e)}).then(t,e)},{unsafe:!0}),Fe(Ao,"catch",_o.catch,{unsafe:!0}));try{delete Ao.constructor}catch(t){}vn&&vn(Ao,_o)}Xe({global:!0,wrap:!0,forced:Vo},{Promise:Io}),an(Io,Ro,!1),Oo=H(Ro),ft&&Oo&&!Oo[Yn]&&(0,kt.f)(Oo,Yn,{configurable:!0,get:function(){return this}}),wo=H(Ro),Xe({target:Ro,stat:!0,forced:Vo},{reject:function(t){var e=No(this);return vt(e.reject,void 0,t),e.promise}}),Xe({target:Ro,stat:!0,forced:Vo},{resolve:function(t){return function(t,e){if(at(t),s(e)&&e.constructor===t)return e;var n=ho.f(t);return(0,n.resolve)(e),n.promise}(this,t)}}),Xe({target:Ro,stat:!0,forced:qo},{all:function(t){var e=this,n=No(e),r=n.resolve,o=n.reject,i=yo(function(){var n=wt(e.resolve),i=[],c=0,u=1;cr(t,function(t){var a=c++,f=!1;u++,vt(n,e,t).then(function(t){f||(f=!0,i[a]=t,--u||r(i))},o)}),--u||r(i)});return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=No(e),r=n.reject,o=yo(function(){var o=wt(e.resolve);cr(t,function(t){vt(o,e,t).then(n.resolve,r)})});return o.error&&r(o.value),n.promise}});const ti=n=>{const{baseLink:r,headers:o={},setIsLoading:i,dataPicker:c,setDataList:u,customDots:a,linkStyle:f=(()=>{}),customPrev:s,customNext:l}=n,[p,v]=t([]),[h,d]=t();if(e(()=>{y(h)},[r,h]),!r||r.trim().length<1)/*#__PURE__*/return React.createElement("div",null);const y=function(t){try{function e(){i(!1)}i(!0);const n=function(e,n){try{var i=Promise.resolve(fetch(t||r,{method:"GET",headers:o})).then(function(t){console.log(t),t&&t.data&&(t=c(t.data),console.log(t),t&&t.data&&t.links?(v(t.links||[]),u(t.data)):u([]))})}catch(t){return}return i&&i.then?i.then(void 0,function(){}):i}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(a){return Promise.reject(a)}};/*#__PURE__*/return React.createElement("div",null,p.map(t=>{let{url:e,label:n,active:r}=t;return a&&"..."===n?/*#__PURE__*/React.createElement(React.Fragment,null,a()):s&&"&laquo; Previous"===n?/*#__PURE__*/React.createElement(React.Fragment,null,s({onClick:()=>{e&&d(e)}})):l&&"Next &raquo;"===n?/*#__PURE__*/React.createElement(React.Fragment,null,l({onClick:()=>{e&&d(e)}})):/*#__PURE__*/React.createElement(ei,{key:n,label:n,url:e,active:r,setUrl:d,linkStyle:f})}))},ei=t=>{const{label:e,setUrl:n,url:r,linkStyle:o,active:i}=t,c=o?o(i,"&laquo; Previous"===e,"Next &raquo;"===e):"";/*#__PURE__*/return React.createElement("span",{className:""+c,onClick:()=>{r&&n(r)}},e)};export{ti as ReactLaravelPagin};
//# sourceMappingURL=lib.module.js.map
