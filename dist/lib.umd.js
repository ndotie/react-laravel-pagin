!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t||self).reactLaravelPagin={},t.react)}(this,function(t,e){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){var e={exports:{}};return t(e,e.exports),e.exports}var o,i,c=function(t){return t&&t.Math==Math&&t},u=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},f=function(t){return"function"==typeof t},s=function(t){return"object"==typeof t?null!==t:f(t)},l=u.document,p=s(l)&&s(l.createElement),v=function(t){return p?l.createElement(t):{}},h=v("span").classList,d=h&&h.constructor&&h.constructor.prototype,y=d===Object.prototype?void 0:d,m=function(t){try{return!!t()}catch(t){return!0}},g=!m(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),b=Function.prototype,w=b.call,S=g&&b.bind.bind(w,w),O=g?function(t){return t&&S(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},j=O({}.toString),E=O("".slice),P=function(t){return E(j(t),8,-1)},T=u.Object,L=O("".split),R=m(function(){return!T("z").propertyIsEnumerable(0)})?function(t){return"String"==P(t)?L(t,""):T(t)}:T,x=u.TypeError,k=function(t){if(null==t)throw x("Can't call method on "+t);return t},A=function(t){return R(k(t))},I=Object.defineProperty,F=function(t,e){try{I(u,t,{value:e,configurable:!0,writable:!0})}catch(n){u[t]=e}return e},M="__core-js_shared__",_=u[M]||F(M,{}),C=r(function(t){(t.exports=function(t,e){return _[t]||(_[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})}),N=u.Object,D=function(t){return N(k(t))},G=O({}.hasOwnProperty),U=Object.hasOwn||function(t,e){return G(D(t),e)},q=0,z=Math.random(),V=O(1..toString),B=function(t){return"Symbol("+(void 0===t?"":t)+")_"+V(++q+z,36)},H=function(t){return f(t)?t:void 0},W=function(t,e){return arguments.length<2?H(u[t]):u[t]&&u[t][e]},Y=W("navigator","userAgent")||"",K=u.process,X=u.Deno,$=K&&K.versions||X&&X.version,J=$&&$.v8;J&&(i=(o=J.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&Y&&(!(o=Y.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=Y.match(/Chrome\/(\d+)/))&&(i=+o[1]);var Q,Z=i,tt=!!Object.getOwnPropertySymbols&&!m(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}),et=tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,nt=C("wks"),rt=u.Symbol,ot=rt&&rt.for,it=et?rt:rt&&rt.withoutSetter||B,ct=function(t){if(!U(nt,t)||!tt&&"string"!=typeof nt[t]){var e="Symbol."+t;nt[t]=tt&&U(rt,t)?rt[t]:et&&ot?ot(e):it(e)}return nt[t]},ut=u.String,at=u.TypeError,ft=function(t){if(s(t))return t;throw at(ut(t)+" is not an object")},st=!m(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),lt=st&&m(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),pt=!st&&!m(function(){return 7!=Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a}),vt=Function.prototype.call,ht=g?vt.bind(vt):function(){return vt.apply(vt,arguments)},dt=O({}.isPrototypeOf),yt=u.Object,mt=et?function(t){return"symbol"==typeof t}:function(t){var e=W("Symbol");return f(e)&&dt(e.prototype,yt(t))},gt=u.String,bt=function(t){try{return gt(t)}catch(t){return"Object"}},wt=u.TypeError,St=function(t){if(f(t))return t;throw wt(bt(t)+" is not a function")},Ot=function(t,e){var n=t[e];return null==n?void 0:St(n)},jt=u.TypeError,Et=u.TypeError,Pt=ct("toPrimitive"),Tt=function(t){var e=function(t,e){if(!s(t)||mt(t))return t;var n,r=Ot(t,Pt);if(r){if(void 0===e&&(e="default"),n=ht(r,t,e),!s(n)||mt(n))return n;throw Et("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&f(n=t.toString)&&!s(r=ht(n,t)))return r;if(f(n=t.valueOf)&&!s(r=ht(n,t)))return r;if("string"!==e&&f(n=t.toString)&&!s(r=ht(n,t)))return r;throw jt("Can't convert object to primitive value")}(t,e)}(t,"string");return mt(e)?e:e+""},Lt=u.TypeError,Rt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,kt={f:st?lt?function(t,e,n){if(ft(t),e=Tt(e),ft(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=xt(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Rt(t,e,n)}:Rt:function(t,e,n){if(ft(t),e=Tt(e),ft(n),pt)try{return Rt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Lt("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},At=Math.ceil,It=Math.floor,Ft=function(t){var e=+t;return e!=e||0===e?0:(e>0?It:At)(e)},Mt=Math.max,_t=Math.min,Ct=Math.min,Nt=function(t){return(e=t.length)>0?Ct(Ft(e),9007199254740991):0;var e},Dt=function(t){return function(e,n,r){var o,i=A(e),c=Nt(i),u=function(t,e){var n=Ft(t);return n<0?Mt(n+e,0):_t(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},Gt={includes:Dt(!0),indexOf:Dt(!1)},Ut={},qt=Gt.indexOf,zt=O([].push),Vt=function(t,e){var n,r=A(t),o=0,i=[];for(n in r)!U(Ut,n)&&U(r,n)&&zt(i,n);for(;e.length>o;)U(r,n=e[o++])&&(~qt(i,n)||zt(i,n));return i},Bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ht=Object.keys||function(t){return Vt(t,Bt)},Wt=st&&!lt?Object.defineProperties:function(t,e){ft(t);for(var n,r=A(e),o=Ht(e),i=o.length,c=0;i>c;)kt.f(t,n=o[c++],r[n]);return t},Yt={f:Wt},Kt=W("document","documentElement"),Xt=C("keys"),$t=function(t){return Xt[t]||(Xt[t]=B(t))},Jt=$t("IE_PROTO"),Qt=function(){},Zt=function(t){return"<script>"+t+"<\/script>"},te=function(t){t.write(Zt("")),t.close();var e=t.parentWindow.Object;return t=null,e},ee=function(){try{Q=new ActiveXObject("htmlfile")}catch(t){}var t,e;ee="undefined"!=typeof document?document.domain&&Q?te(Q):((e=v("iframe")).style.display="none",Kt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Zt("document.F=Object")),t.close(),t.F):te(Q);for(var n=Bt.length;n--;)delete ee.prototype[Bt[n]];return ee()};Ut[Jt]=!0;var ne=Object.create||function(t,e){var n;return null!==t?(Qt.prototype=ft(t),n=new Qt,Qt.prototype=null,n[Jt]=t):n=ee(),void 0===e?n:Yt.f(n,e)},re=ct("unscopables"),oe=Array.prototype;null==oe[re]&&kt.f(oe,re,{configurable:!0,value:ne(null)});var ie=function(t){oe[re][t]=!0},ce={},ue=O(Function.toString);f(_.inspectSource)||(_.inspectSource=function(t){return ue(t)});var ae,fe,se,le=_.inspectSource,pe=u.WeakMap,ve=f(pe)&&/native code/.test(le(pe)),he=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},de=st?function(t,e,n){return kt.f(t,e,he(1,n))}:function(t,e,n){return t[e]=n,t},ye="Object already initialized",me=u.TypeError;if(ve||_.state){var ge=_.state||(_.state=new(0,u.WeakMap)),be=O(ge.get),we=O(ge.has),Se=O(ge.set);ae=function(t,e){if(we(ge,t))throw new me(ye);return e.facade=t,Se(ge,t,e),e},fe=function(t){return be(ge,t)||{}},se=function(t){return we(ge,t)}}else{var Oe=$t("state");Ut[Oe]=!0,ae=function(t,e){if(U(t,Oe))throw new me(ye);return e.facade=t,de(t,Oe,e),e},fe=function(t){return U(t,Oe)?t[Oe]:{}},se=function(t){return U(t,Oe)}}var je,Ee,Pe,Te={set:ae,get:fe,has:se,enforce:function(t){return se(t)?fe(t):ae(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=fe(e)).type!==t)throw me("Incompatible receiver, "+t+" required");return n}}},Le={}.propertyIsEnumerable,Re=Object.getOwnPropertyDescriptor,xe={f:Re&&!Le.call({1:2},1)?function(t){var e=Re(this,t);return!!e&&e.enumerable}:Le},ke=Object.getOwnPropertyDescriptor,Ae={f:st?ke:function(t,e){if(t=A(t),e=Tt(e),pt)try{return ke(t,e)}catch(t){}if(U(t,e))return he(!ht(xe.f,t,e),t[e])}},Ie=Function.prototype,Fe=st&&Object.getOwnPropertyDescriptor,Me=U(Ie,"name"),_e={EXISTS:Me,PROPER:Me&&"something"===function(){}.name,CONFIGURABLE:Me&&(!st||st&&Fe(Ie,"name").configurable)},Ce=r(function(t){var e=_e.CONFIGURABLE,n=Te.get,r=Te.enforce,o=String(String).split("String");(t.exports=function(t,n,i,c){var a,s=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:n;f(i)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!U(i,"name")||e&&i.name!==v)&&de(i,"name",v),(a=r(i)).source||(a.source=o.join("string"==typeof v?v:""))),t!==u?(s?!p&&t[n]&&(l=!0):delete t[n],l?t[n]=i:de(t,n,i)):l?t[n]=i:F(n,i)})(Function.prototype,"toString",function(){return f(this)&&n(this).source||le(this)})}),Ne=Bt.concat("length","prototype"),De={f:Object.getOwnPropertyNames||function(t){return Vt(t,Ne)}},Ge={f:Object.getOwnPropertySymbols},Ue=O([].concat),qe=W("Reflect","ownKeys")||function(t){var e=De.f(ft(t)),n=Ge.f;return n?Ue(e,n(t)):e},ze=function(t,e,n){for(var r=qe(e),o=kt.f,i=Ae.f,c=0;c<r.length;c++){var u=r[c];U(t,u)||n&&U(n,u)||o(t,u,i(e,u))}},Ve=/#|\.prototype\./,Be=function(t,e){var n=We[He(t)];return n==Ke||n!=Ye&&(f(e)?m(e):!!e)},He=Be.normalize=function(t){return String(t).replace(Ve,".").toLowerCase()},We=Be.data={},Ye=Be.NATIVE="N",Ke=Be.POLYFILL="P",Xe=Be,$e=Ae.f,Je=function(t,e){var n,r,o,i,c,a=t.target,f=t.global,s=t.stat;if(n=f?u:s?u[a]||F(a,{}):(u[a]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=$e(n,r))&&c.value:n[r],!Xe(f?r:a+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ze(i,o)}(t.sham||o&&o.sham)&&de(i,"sham",!0),Ce(n,r,i,t)}},Qe=!m(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Ze=$t("IE_PROTO"),tn=u.Object,en=tn.prototype,nn=Qe?tn.getPrototypeOf:function(t){var e=D(t);if(U(e,Ze))return e[Ze];var n=e.constructor;return f(n)&&e instanceof n?n.prototype:e instanceof tn?en:null},rn=ct("iterator"),on=!1;[].keys&&("next"in(Pe=[].keys())?(Ee=nn(nn(Pe)))!==Object.prototype&&(je=Ee):on=!0);var cn=null==je||m(function(){var t={};return je[rn].call(t)!==t});cn&&(je={}),f(je[rn])||Ce(je,rn,function(){return this});var un={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:on},an=kt.f,fn=ct("toStringTag"),sn=function(t,e,n){t&&!n&&(t=t.prototype),t&&!U(t,fn)&&an(t,fn,{configurable:!0,value:e})},ln=un.IteratorPrototype,pn=function(){return this},vn=u.String,hn=u.TypeError,dn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=O(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return ft(n),function(t){if("object"==typeof t||f(t))return t;throw hn("Can't set "+vn(t)+" as a prototype")}(r),e?t(n,r):n.__proto__=r,n}}():void 0),yn=_e.PROPER,mn=_e.CONFIGURABLE,gn=un.IteratorPrototype,bn=un.BUGGY_SAFARI_ITERATORS,wn=ct("iterator"),Sn="keys",On="values",jn="entries",En=function(){return this},Pn=kt.f,Tn="Array Iterator",Ln=Te.set,Rn=Te.getterFor(Tn),xn=function(t,e,n,r,o,i,c){!function(t,e,n,r){var o="Array Iterator";t.prototype=ne(ln,{next:he(1,function(){var t=Rn(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}})}),sn(t,o,!1),ce[o]=pn}(n);var u,a,s,l=function(t){if(t===o&&d)return d;if(!bn&&t in v)return v[t];switch(t){case Sn:case On:case jn:return function(){return new n(this,t)}}return function(){return new n(this)}},p=!1,v=t.prototype,h=v[wn]||v["@@iterator"]||v.values,d=!bn&&h||l(o),y=v.entries||h;if(y&&(u=nn(y.call(new t)))!==Object.prototype&&u.next&&(nn(u)!==gn&&(dn?dn(u,gn):f(u[wn])||Ce(u,wn,En)),sn(u,"Array Iterator",!0)),yn&&h&&h.name!==On&&(mn?de(v,"name",On):(p=!0,d=function(){return ht(h,this)})),void(a={values:l(On),keys:l(Sn),entries:l(jn)}))for(s in a)(bn||p||!(s in v))&&Ce(v,s,a[s]);else Je({target:"Array",proto:!0,forced:bn||p},a);return v[wn]!==d&&Ce(v,wn,d,{name:o}),ce.Array=d,a}(Array,0,function(t,e){Ln(this,{type:Tn,target:A(t),index:0,kind:e})},0,"values"),kn=ce.Arguments=ce.Array;if(ie("keys"),ie("values"),ie("entries"),st&&"values"!==kn.name)try{Pn(kn,"name",{value:"values"})}catch(t){}var An=ct("iterator"),In=ct("toStringTag"),Fn=xn.values,Mn=function(t,e){if(t){if(t[An]!==Fn)try{de(t,An,Fn)}catch(e){t[An]=Fn}if(t[In]||de(t,In,e),a[e])for(var n in xn)if(t[n]!==xn[n])try{de(t,n,xn[n])}catch(e){t[n]=xn[n]}}};for(var _n in a)Mn(u[_n]&&u[_n].prototype,_n);Mn(y,"DOMTokenList");var Cn={};Cn[ct("toStringTag")]="z";var Nn="[object z]"===String(Cn),Dn=ct("toStringTag"),Gn=u.Object,Un="Arguments"==P(function(){return arguments}()),qn=Nn?P:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Gn(t),Dn))?n:Un?P(e):"Object"==(r=P(e))&&f(e.callee)?"Arguments":r},zn=u.String,Vn="\t\n\v\f\r                　\u2028\u2029\ufeff",Bn=O("".replace),Hn="["+Vn+"]",Wn=RegExp("^"+Hn+Hn+"*"),Yn=RegExp(Hn+Hn+"*$"),Kn=function(t){return function(e){var n=function(t){if("Symbol"===qn(t))throw TypeError("Cannot convert a Symbol value to a string");return zn(t)}(k(e));return 1&t&&(n=Bn(n,Wn,"")),2&t&&(n=Bn(n,Yn,"")),n}},Xn={start:Kn(1),end:Kn(2),trim:Kn(3)},$n=_e.PROPER,Jn=Xn.trim;Je({target:"String",proto:!0,forced:m(function(){return!!Vn.trim()||"​᠎"!=="​᠎".trim()||$n&&"trim"!==Vn.trim.name})},{trim:function(){return Jn(this)}});var Qn=u.Promise,Zn=ct("species"),tr=u.TypeError,er=O(O.bind),nr=function(t,e){return St(t),void 0===e?t:g?er(t,e):function(){return t.apply(e,arguments)}},rr=ct("iterator"),or=Array.prototype,ir=ct("iterator"),cr=function(t){if(null!=t)return Ot(t,ir)||Ot(t,"@@iterator")||ce[qn(t)]},ur=u.TypeError,ar=function(t,e,n){var r,o;ft(t);try{if(!(r=Ot(t,"return"))){if("throw"===e)throw n;return n}r=ht(r,t)}catch(t){o=!0,r=t}if("throw"===e)throw n;if(o)throw r;return ft(r),n},fr=u.TypeError,sr=function(t,e){this.stopped=t,this.result=e},lr=sr.prototype,pr=function(t,e,n){var r,o,i,c,u,a,f,s,l=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),v=!(!n||!n.INTERRUPTED),h=nr(e,n&&n.that),d=function(t){return r&&ar(r,"normal",t),new sr(!0,t)},y=function(t){return l?(ft(t),v?h(t[0],t[1],d):h(t[0],t[1])):v?h(t,d):h(t)};if(p)r=t;else{if(!(o=cr(t)))throw fr(bt(t)+" is not iterable");if(void 0!==(s=o)&&(ce.Array===s||or[rr]===s)){for(i=0,c=Nt(t);c>i;i++)if((u=y(t[i]))&&dt(lr,u))return u;return new sr(!1)}r=function(t,e){var n=arguments.length<2?cr(t):e;if(St(n))return ft(ht(n,t));throw ur(bt(t)+" is not iterable")}(t,o)}for(a=r.next;!(f=ht(a,r)).done;){try{u=y(f.value)}catch(t){ar(r,"throw",t)}if("object"==typeof u&&u&&dt(lr,u))return u}return new sr(!1)},vr=ct("iterator"),hr=!1;try{var dr=0,yr={next:function(){return{done:!!dr++}},return:function(){hr=!0}};yr[vr]=function(){return this},Array.from(yr,function(){throw 2})}catch(t){}var mr=function(){},gr=[],br=W("Reflect","construct"),wr=/^\s*(?:class|function)\b/,Sr=O(wr.exec),Or=!wr.exec(mr),jr=function(t){if(!f(t))return!1;try{return br(mr,gr,t),!0}catch(t){return!1}},Er=function(t){if(!f(t))return!1;switch(qn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Or||!!Sr(wr,le(t))}catch(t){return!0}};Er.sham=!0;var Pr,Tr,Lr,Rr,xr=!br||m(function(){var t;return jr(jr.call)||!jr(Object)||!jr(function(){t=!0})||t})?Er:jr,kr=u.TypeError,Ar=ct("species"),Ir=Function.prototype,Fr=Ir.apply,Mr=Ir.call,_r="object"==typeof Reflect&&Reflect.apply||(g?Mr.bind(Fr):function(){return Mr.apply(Fr,arguments)}),Cr=O([].slice),Nr=u.TypeError,Dr=function(t,e){if(t<e)throw Nr("Not enough arguments");return t},Gr=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y),Ur="process"==P(u.process),qr=u.setImmediate,zr=u.clearImmediate,Vr=u.process,Br=u.Dispatch,Hr=u.Function,Wr=u.MessageChannel,Yr=u.String,Kr=0,Xr={};try{Pr=u.location}catch(t){}var $r=function(t){if(U(Xr,t)){var e=Xr[t];delete Xr[t],e()}},Jr=function(t){return function(){$r(t)}},Qr=function(t){$r(t.data)},Zr=function(t){u.postMessage(Yr(t),Pr.protocol+"//"+Pr.host)};qr&&zr||(qr=function(t){Dr(arguments.length,1);var e=f(t)?t:Hr(t),n=Cr(arguments,1);return Xr[++Kr]=function(){_r(e,void 0,n)},Tr(Kr),Kr},zr=function(t){delete Xr[t]},Ur?Tr=function(t){Vr.nextTick(Jr(t))}:Br&&Br.now?Tr=function(t){Br.now(Jr(t))}:Wr&&!Gr?(Rr=(Lr=new Wr).port2,Lr.port1.onmessage=Qr,Tr=nr(Rr.postMessage,Rr)):u.addEventListener&&f(u.postMessage)&&!u.importScripts&&Pr&&"file:"!==Pr.protocol&&!m(Zr)?(Tr=Zr,u.addEventListener("message",Qr,!1)):Tr="onreadystatechange"in v("script")?function(t){Kt.appendChild(v("script")).onreadystatechange=function(){Kt.removeChild(this),$r(t)}}:function(t){setTimeout(Jr(t),0)});var to,eo,no,ro,oo,io,co,uo,ao={set:qr,clear:zr},fo=/ipad|iphone|ipod/i.test(Y)&&void 0!==u.Pebble,so=/web0s(?!.*chrome)/i.test(Y),lo=ao.set,po=u.MutationObserver||u.WebKitMutationObserver,vo=u.document,ho=u.process,yo=u.Promise,mo=(0,Ae.f)(u,"queueMicrotask"),go=mo&&mo.value;go||(to=function(){var t,e;for(Ur&&(t=ho.domain)&&t.exit();eo;){e=eo.fn,eo=eo.next;try{e()}catch(t){throw eo?ro():no=void 0,t}}no=void 0,t&&t.enter()},Gr||Ur||so||!po||!vo?!fo&&yo&&yo.resolve?((co=yo.resolve(void 0)).constructor=yo,uo=nr(co.then,co),ro=function(){uo(to)}):Ur?ro=function(){ho.nextTick(to)}:(lo=nr(lo,u),ro=function(){lo(to)}):(oo=!0,io=vo.createTextNode(""),new po(to).observe(io,{characterData:!0}),ro=function(){io.data=oo=!oo}));var bo=go||function(t){var e={fn:t,next:void 0};no&&(no.next=e),eo||(eo=e,ro()),no=e},wo=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=St(e),this.reject=St(n)},So={f:function(t){return new wo(t)}},Oo=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},jo=function(){this.head=null,this.tail=null};jo.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}};var Eo,Po,To,Lo,Ro,xo=jo,ko="object"==typeof window,Ao=ao.set,Io=ct("species"),Fo="Promise",Mo=Te.getterFor(Fo),_o=Te.set,Co=Te.getterFor(Fo),No=Qn&&Qn.prototype,Do=Qn,Go=No,Uo=u.TypeError,qo=u.document,zo=u.process,Vo=So.f,Bo=Vo,Ho=!!(qo&&qo.createEvent&&u.dispatchEvent),Wo=f(u.PromiseRejectionEvent),Yo="unhandledrejection",Ko=!1,Xo=Xe(Fo,function(){var t=le(Do),e=t!==String(Do);if(!e&&66===Z)return!0;if(Z>=51&&/native code/.test(t))return!1;var n=new Do(function(t){t(1)}),r=function(t){t(function(){},function(){})};return(n.constructor={})[Io]=r,!(Ko=n.then(function(){})instanceof r)||!e&&ko&&!Wo}),$o=Xo||!function(t,e){if(!hr)return!1;var n=!1;try{var r={};r[vr]=function(){return{next:function(){return{done:n=!0}}}},Do.all(r).catch(function(){})}catch(t){}return n}(),Jo=function(t){var e;return!(!s(t)||!f(e=t.then))&&e},Qo=function(t,e){var n,r,o,i=e.value,c=1==e.state,u=c?t.ok:t.fail,a=t.resolve,f=t.reject,s=t.domain;try{u?(c||(2===e.rejection&&ri(e),e.rejection=1),!0===u?n=i:(s&&s.enter(),n=u(i),s&&(s.exit(),o=!0)),n===t.promise?f(Uo("Promise-chain cycle")):(r=Jo(n))?ht(r,n,a,f):a(n)):f(i)}catch(t){s&&!o&&s.exit(),f(t)}},Zo=function(t,e){t.notified||(t.notified=!0,bo(function(){for(var n,r=t.reactions;n=r.get();)Qo(n,t);t.notified=!1,e&&!t.rejection&&ei(t)}))},ti=function(t,e,n){var r,o;Ho?((r=qo.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Wo&&(o=u["on"+t])?o(r):t===Yo&&function(t,e){var n=u.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},ei=function(t){ht(Ao,u,function(){var e,n=t.facade,r=t.value;if(ni(t)&&(e=Oo(function(){Ur?zo.emit("unhandledRejection",r,n):ti(Yo,n,r)}),t.rejection=Ur||ni(t)?2:1,e.error))throw e.value})},ni=function(t){return 1!==t.rejection&&!t.parent},ri=function(t){ht(Ao,u,function(){var e=t.facade;Ur?zo.emit("rejectionHandled",e):ti("rejectionhandled",e,t.value)})},oi=function(t,e,n){return function(r){t(e,r,n)}},ii=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,Zo(t,!0))},ci=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Uo("Promise can't be resolved itself");var r=Jo(e);r?bo(function(){var n={done:!1};try{ht(r,e,oi(ci,n,t),oi(ii,n,t))}catch(e){ii(n,e,t)}}):(t.value=e,t.state=1,Zo(t,!1))}catch(e){ii({done:!1},e,t)}}};if(Xo&&(Do=function(t){!function(t,e){if(dt(e,t))return t;throw tr("Incorrect invocation")}(this,Go),St(t),ht(Eo,this);var e=Mo(this);try{t(oi(ci,e),oi(ii,e))}catch(t){ii(e,t)}},(Eo=function(t){_o(this,{type:Fo,done:!1,notified:!1,parent:!1,reactions:new xo,rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Ce(t,r,e[r],void 0);return t}(Go=Do.prototype,{then:function(t,e){var n,r,o,i=Co(this),c=Vo((n=Do,void 0===(o=ft(this).constructor)||null==(r=ft(o)[Ar])?n:function(t){if(xr(t))return t;throw kr(bt(t)+" is not a constructor")}(r)));return i.parent=!0,c.ok=!f(t)||t,c.fail=f(e)&&e,c.domain=Ur?zo.domain:void 0,0==i.state?i.reactions.add(c):bo(function(){Qo(c,i)}),c.promise},catch:function(t){return this.then(void 0,t)}}),Po=function(){var t=new Eo,e=Mo(t);this.promise=t,this.resolve=oi(ci,e),this.reject=oi(ii,e)},So.f=Vo=function(t){return t===Do||t===To?new Po(t):Bo(t)},f(Qn)&&No!==Object.prototype)){Lo=No.then,Ko||(Ce(No,"then",function(t,e){var n=this;return new Do(function(t,e){ht(Lo,n,t,e)}).then(t,e)},{unsafe:!0}),Ce(No,"catch",Go.catch,{unsafe:!0}));try{delete No.constructor}catch(t){}dn&&dn(No,Go)}Je({global:!0,wrap:!0,forced:Xo},{Promise:Do}),sn(Do,Fo,!1),Ro=W(Fo),st&&Ro&&!Ro[Zn]&&(0,kt.f)(Ro,Zn,{configurable:!0,get:function(){return this}}),To=W(Fo),Je({target:Fo,stat:!0,forced:Xo},{reject:function(t){var e=Vo(this);return ht(e.reject,void 0,t),e.promise}}),Je({target:Fo,stat:!0,forced:Xo},{resolve:function(t){return function(t,e){if(ft(t),s(e)&&e.constructor===t)return e;var n=So.f(t);return(0,n.resolve)(e),n.promise}(this,t)}}),Je({target:Fo,stat:!0,forced:$o},{all:function(t){var e=this,n=Vo(e),r=n.resolve,o=n.reject,i=Oo(function(){var n=St(e.resolve),i=[],c=0,u=1;pr(t,function(t){var a=c++,f=!1;u++,ht(n,e,t).then(function(t){f||(f=!0,i[a]=t,--u||r(i))},o)}),--u||r(i)});return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Vo(e),r=n.reject,o=Oo(function(){var o=St(e.resolve);pr(t,function(t){ht(o,e,t).then(n.resolve,r)})});return o.error&&r(o.value),n.promise}});const ui=t=>{const{label:e,setUrl:n,url:r,linkStyle:o,active:i}=t,c=o?o(i,"&laquo; Previous"===e,"Next &raquo;"===e):"";/*#__PURE__*/return React.createElement("span",{className:""+c,onClick:()=>{r&&n(r)}},e)};t.ReactLaravelPagin=t=>{const{baseLink:n,headers:r={},setIsLoading:o,dataPicker:i,setDataList:c,customDots:u,linkStyle:a=(()=>{}),customPrev:f,customNext:s}=t,[l,p]=e.useState([]),[v,h]=e.useState();if(e.useEffect(()=>{d(v)},[n,v]),!n||n.trim().length<1)/*#__PURE__*/return React.createElement("div",null);const d=function(t){try{function e(){o(!1)}o(!0);const u=function(e,o){try{var u=Promise.resolve(fetch(t||n,{method:"GET",headers:r})).then(function(t){console.log(t),t&&t.data&&(t=i(t.data),console.log(t),t&&t.data&&t.links?(p(t.links||[]),c(t.data)):c([]))})}catch(t){return}return u&&u.then?u.then(void 0,function(){}):u}();return Promise.resolve(u&&u.then?u.then(e):e())}catch(a){return Promise.reject(a)}};/*#__PURE__*/return React.createElement("div",null,l.map(t=>{let{url:e,label:n,active:r}=t;return u&&"..."===n?/*#__PURE__*/React.createElement(React.Fragment,null,u()):f&&"&laquo; Previous"===n?/*#__PURE__*/React.createElement(React.Fragment,null,f({onClick:()=>{e&&h(e)}})):s&&"Next &raquo;"===n?/*#__PURE__*/React.createElement(React.Fragment,null,s({onClick:()=>{e&&h(e)}})):/*#__PURE__*/React.createElement(ui,{key:n,label:n,url:e,active:r,setUrl:h,linkStyle:a})}))}});
//# sourceMappingURL=lib.umd.js.map