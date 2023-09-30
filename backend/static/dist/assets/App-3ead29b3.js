/**
 * The frontend part of web-vcc
 * @copyright The vcc group
 * @license AGPL-3.0-or-later
 */
import{j as Ut,F as Ht,d as zt,Q as Gt,p as Wt,o as Bt}from"./index-057a36d6.js";/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */function I(r){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},I(r)}function ke(r,a){return ke=Object.setPrototypeOf||function(l,f){return l.__proto__=f,l},ke(r,a)}function $t(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}function oe(r,a,o){return $t()?oe=Reflect.construct:oe=function(f,_,g){var N=[null];N.push.apply(N,_);var B=Function.bind.apply(f,N),$=new B;return g&&ke($,g.prototype),$},oe.apply(null,arguments)}function L(r){return jt(r)||Yt(r)||Vt(r)||Xt()}function jt(r){if(Array.isArray(r))return Pe(r)}function Yt(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Vt(r,a){if(r){if(typeof r=="string")return Pe(r,a);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Pe(r,a)}}function Pe(r,a){(a==null||a>r.length)&&(a=r.length);for(var o=0,l=new Array(a);o<a;o++)l[o]=r[o];return l}function Xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qt=Object.hasOwnProperty,lt=Object.setPrototypeOf,Kt=Object.isFrozen,Zt=Object.getPrototypeOf,Qt=Object.getOwnPropertyDescriptor,E=Object.freeze,O=Object.seal,Jt=Object.create,pt=typeof Reflect<"u"&&Reflect,se=pt.apply,Fe=pt.construct;se||(se=function(a,o,l){return a.apply(o,l)});E||(E=function(a){return a});O||(O=function(a){return a});Fe||(Fe=function(a,o){return oe(a,L(o))});var er=b(Array.prototype.forEach),st=b(Array.prototype.pop),X=b(Array.prototype.push),le=b(String.prototype.toLowerCase),De=b(String.prototype.toString),tr=b(String.prototype.match),R=b(String.prototype.replace),rr=b(String.prototype.indexOf),ar=b(String.prototype.trim),A=b(RegExp.prototype.test),Me=nr(TypeError);function b(r){return function(a){for(var o=arguments.length,l=new Array(o>1?o-1:0),f=1;f<o;f++)l[f-1]=arguments[f];return se(r,a,l)}}function nr(r){return function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return Fe(r,o)}}function s(r,a,o){o=o||le,lt&&lt(r,null);for(var l=a.length;l--;){var f=a[l];if(typeof f=="string"){var _=o(f);_!==f&&(Kt(a)||(a[l]=_),f=_)}r[f]=!0}return r}function P(r){var a=Jt(null),o;for(o in r)se(qt,r,[o])===!0&&(a[o]=r[o]);return a}function ne(r,a){for(;r!==null;){var o=Qt(r,a);if(o){if(o.get)return b(o.get);if(typeof o.value=="function")return b(o.value)}r=Zt(r)}function l(f){return console.warn("fallback value for",f),null}return l}var ut=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),we=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ce=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ir=E(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ie=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),or=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ft=E(["#text"]),ct=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),xe=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),mt=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ie=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),lr=O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),sr=O(/<%[\w\W]*|[\w\W]*%>/gm),ur=O(/\${[\w\W]*}/gm),fr=O(/^data-[\-\w.\u00B7-\uFFFF]/),cr=O(/^aria-[\-\w]+$/),mr=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),pr=O(/^(?:\w+script|data):/i),dr=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),hr=O(/^html$/i),Tr=function(){return typeof window>"u"?null:window},vr=function(a,o){if(I(a)!=="object"||typeof a.createPolicy!="function")return null;var l=null,f="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(f)&&(l=o.currentScript.getAttribute(f));var _="dompurify"+(l?"#"+l:"");try{return a.createPolicy(_,{createHTML:function(N){return N},createScriptURL:function(N){return N}})}catch(g){return console.warn("TrustedTypes policy "+_+" could not be created."),null}};function dt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Tr(),a=function(e){return dt(e)};if(a.version="2.4.5",a.removed=[],!r||!r.document||r.document.nodeType!==9)return a.isSupported=!1,a;var o=r.document,l=r.document,f=r.DocumentFragment,_=r.HTMLTemplateElement,g=r.Node,N=r.Element,B=r.NodeFilter,$=r.NamedNodeMap,Tt=$===void 0?r.NamedNodeMap||r.MozNamedAttrMap:$,vt=r.HTMLFormElement,_t=r.DOMParser,q=r.trustedTypes,K=N.prototype,At=ne(K,"cloneNode"),Et=ne(K,"nextSibling"),yt=ne(K,"childNodes"),ue=ne(K,"parentNode");if(typeof _=="function"){var fe=l.createElement("template");fe.content&&fe.content.ownerDocument&&(l=fe.content.ownerDocument)}var S=vr(q,o),ce=S?S.createHTML(""):"",Z=l,me=Z.implementation,gt=Z.createNodeIterator,bt=Z.createDocumentFragment,St=Z.getElementsByTagName,Rt=o.importNode,Ue={};try{Ue=P(l).documentMode?l.documentMode:{}}catch(i){}var D={};a.isSupported=typeof ue=="function"&&me&&typeof me.createHTMLDocument<"u"&&Ue!==9;var pe=lr,de=sr,he=ur,Lt=fr,Ot=cr,Nt=pr,He=dr,Te=mr,m=null,ze=s({},[].concat(L(ut),L(we),L(Ce),L(Ie),L(ft))),p=null,Ge=s({},[].concat(L(ct),L(xe),L(mt),L(ie))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),j=null,ve=null,We=!0,_e=!0,Be=!1,$e=!0,F=!1,x=!1,Ae=!1,Ee=!1,U=!1,Q=!1,J=!1,je=!0,Ye=!1,Dt="user-content-",ye=!0,Y=!1,H={},z=null,Ve=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,qe=s({},["audio","video","img","source","image","track"]),ge=null,Ke=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ee="http://www.w3.org/1998/Math/MathML",te="http://www.w3.org/2000/svg",M="http://www.w3.org/1999/xhtml",G=M,be=!1,Se=null,Mt=s({},[ee,te,M],De),k,wt=["application/xhtml+xml","text/html"],Ct="text/html",d,W=null,It=l.createElement("form"),Ze=function(e){return e instanceof RegExp||e instanceof Function},Re=function(e){W&&W===e||((!e||I(e)!=="object")&&(e={}),e=P(e),k=wt.indexOf(e.PARSER_MEDIA_TYPE)===-1?k=Ct:k=e.PARSER_MEDIA_TYPE,d=k==="application/xhtml+xml"?De:le,m="ALLOWED_TAGS"in e?s({},e.ALLOWED_TAGS,d):ze,p="ALLOWED_ATTR"in e?s({},e.ALLOWED_ATTR,d):Ge,Se="ALLOWED_NAMESPACES"in e?s({},e.ALLOWED_NAMESPACES,De):Mt,ge="ADD_URI_SAFE_ATTR"in e?s(P(Ke),e.ADD_URI_SAFE_ATTR,d):Ke,Xe="ADD_DATA_URI_TAGS"in e?s(P(qe),e.ADD_DATA_URI_TAGS,d):qe,z="FORBID_CONTENTS"in e?s({},e.FORBID_CONTENTS,d):Ve,j="FORBID_TAGS"in e?s({},e.FORBID_TAGS,d):{},ve="FORBID_ATTR"in e?s({},e.FORBID_ATTR,d):{},H="USE_PROFILES"in e?e.USE_PROFILES:!1,We=e.ALLOW_ARIA_ATTR!==!1,_e=e.ALLOW_DATA_ATTR!==!1,Be=e.ALLOW_UNKNOWN_PROTOCOLS||!1,$e=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,F=e.SAFE_FOR_TEMPLATES||!1,x=e.WHOLE_DOCUMENT||!1,U=e.RETURN_DOM||!1,Q=e.RETURN_DOM_FRAGMENT||!1,J=e.RETURN_TRUSTED_TYPE||!1,Ee=e.FORCE_BODY||!1,je=e.SANITIZE_DOM!==!1,Ye=e.SANITIZE_NAMED_PROPS||!1,ye=e.KEEP_CONTENT!==!1,Y=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,G=e.NAMESPACE||M,c=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(_e=!1),Q&&(U=!0),H&&(m=s({},L(ft)),p=[],H.html===!0&&(s(m,ut),s(p,ct)),H.svg===!0&&(s(m,we),s(p,xe),s(p,ie)),H.svgFilters===!0&&(s(m,Ce),s(p,xe),s(p,ie)),H.mathMl===!0&&(s(m,Ie),s(p,mt),s(p,ie))),e.ADD_TAGS&&(m===ze&&(m=P(m)),s(m,e.ADD_TAGS,d)),e.ADD_ATTR&&(p===Ge&&(p=P(p)),s(p,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&s(ge,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(z===Ve&&(z=P(z)),s(z,e.FORBID_CONTENTS,d)),ye&&(m["#text"]=!0),x&&s(m,["html","head","body"]),m.table&&(s(m,["tbody"]),delete j.tbody),E&&E(e),W=e)},Qe=s({},["mi","mo","mn","ms","mtext"]),Je=s({},["foreignobject","desc","title","annotation-xml"]),xt=s({},["title","style","font","a","script"]),re=s({},we);s(re,Ce),s(re,ir);var Le=s({},Ie);s(Le,or);var kt=function(e){var t=ue(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});var n=le(e.tagName),u=le(t.tagName);return Se[e.namespaceURI]?e.namespaceURI===te?t.namespaceURI===M?n==="svg":t.namespaceURI===ee?n==="svg"&&(u==="annotation-xml"||Qe[u]):!!re[n]:e.namespaceURI===ee?t.namespaceURI===M?n==="math":t.namespaceURI===te?n==="math"&&Je[u]:!!Le[n]:e.namespaceURI===M?t.namespaceURI===te&&!Je[u]||t.namespaceURI===ee&&!Qe[u]?!1:!Le[n]&&(xt[n]||!re[n]):!!(k==="application/xhtml+xml"&&Se[e.namespaceURI]):!1},w=function(e){X(a.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(n){e.remove()}}},Oe=function(e,t){try{X(a.removed,{attribute:t.getAttributeNode(e),from:t})}catch(n){X(a.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!p[e])if(U||Q)try{w(t)}catch(n){}else try{t.setAttribute(e,"")}catch(n){}},et=function(e){var t,n;if(Ee)e="<remove></remove>"+e;else{var u=tr(e,/^[\r\n\t ]+/);n=u&&u[0]}k==="application/xhtml+xml"&&G===M&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var y=S?S.createHTML(e):e;if(G===M)try{t=new _t().parseFromString(y,k)}catch(T){}if(!t||!t.documentElement){t=me.createDocument(G,"template",null);try{t.documentElement.innerHTML=be?ce:y}catch(T){}}var v=t.body||t.documentElement;return e&&n&&v.insertBefore(l.createTextNode(n),v.childNodes[0]||null),G===M?St.call(t,x?"html":"body")[0]:x?t.documentElement:v},tt=function(e){return gt.call(e.ownerDocument||e,e,B.SHOW_ELEMENT|B.SHOW_COMMENT|B.SHOW_TEXT,null,!1)},Pt=function(e){return e instanceof vt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Tt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},V=function(e){return I(g)==="object"?e instanceof g:e&&I(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},C=function(e,t,n){D[e]&&er(D[e],function(u){u.call(a,t,n,W)})},rt=function(e){var t;if(C("beforeSanitizeElements",e,null),Pt(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return w(e),!0;var n=d(e.nodeName);if(C("uponSanitizeElement",e,{tagName:n,allowedTags:m}),e.hasChildNodes()&&!V(e.firstElementChild)&&(!V(e.content)||!V(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||n==="select"&&A(/<template/i,e.innerHTML))return w(e),!0;if(!m[n]||j[n]){if(!j[n]&&nt(n)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,n)||c.tagNameCheck instanceof Function&&c.tagNameCheck(n)))return!1;if(ye&&!z[n]){var u=ue(e)||e.parentNode,y=yt(e)||e.childNodes;if(y&&u)for(var v=y.length,T=v-1;T>=0;--T)u.insertBefore(At(y[T],!0),Et(e))}return w(e),!0}return e instanceof N&&!kt(e)||(n==="noscript"||n==="noembed")&&A(/<\/no(script|embed)/i,e.innerHTML)?(w(e),!0):(F&&e.nodeType===3&&(t=e.textContent,t=R(t,pe," "),t=R(t,de," "),t=R(t,he," "),e.textContent!==t&&(X(a.removed,{element:e.cloneNode()}),e.textContent=t)),C("afterSanitizeElements",e,null),!1)},at=function(e,t,n){if(je&&(t==="id"||t==="name")&&(n in l||n in It))return!1;if(!(_e&&!ve[t]&&A(Lt,t))){if(!(We&&A(Ot,t))){if(!p[t]||ve[t]){if(!(nt(e)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&A(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||t==="is"&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,n)||c.tagNameCheck instanceof Function&&c.tagNameCheck(n))))return!1}else if(!ge[t]){if(!A(Te,R(n,He,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&rr(n,"data:")===0&&Xe[e])){if(!(Be&&!A(Nt,R(n,He,"")))){if(n)return!1}}}}}}return!0},nt=function(e){return e.indexOf("-")>0},it=function(e){var t,n,u,y;C("beforeSanitizeAttributes",e,null);var v=e.attributes;if(v){var T={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p};for(y=v.length;y--;){t=v[y];var ae=t,h=ae.name,Ne=ae.namespaceURI;if(n=h==="value"?t.value:ar(t.value),u=d(h),T.attrName=u,T.attrValue=n,T.keepAttr=!0,T.forceKeepAttr=void 0,C("uponSanitizeAttribute",e,T),n=T.attrValue,!T.forceKeepAttr&&(Oe(h,e),!!T.keepAttr)){if(!$e&&A(/\/>/i,n)){Oe(h,e);continue}F&&(n=R(n,pe," "),n=R(n,de," "),n=R(n,he," "));var ot=d(e.nodeName);if(at(ot,u,n)){if(Ye&&(u==="id"||u==="name")&&(Oe(h,e),n=Dt+n),S&&I(q)==="object"&&typeof q.getAttributeType=="function"&&!Ne)switch(q.getAttributeType(ot,u)){case"TrustedHTML":n=S.createHTML(n);break;case"TrustedScriptURL":n=S.createScriptURL(n);break}try{Ne?e.setAttributeNS(Ne,h,n):e.setAttribute(h,n),st(a.removed)}catch(Er){}}}}C("afterSanitizeAttributes",e,null)}},Ft=function i(e){var t,n=tt(e);for(C("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)C("uponSanitizeShadowNode",t,null),!rt(t)&&(t.content instanceof f&&i(t.content),it(t));C("afterSanitizeShadowDOM",e,null)};return a.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,n,u,y,v;if(be=!i,be&&(i="<!-->"),typeof i!="string"&&!V(i)){if(typeof i.toString!="function")throw Me("toString is not a function");if(i=i.toString(),typeof i!="string")throw Me("dirty is not a string, aborting")}if(!a.isSupported){if(I(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(V(i))return r.toStaticHTML(i.outerHTML)}return i}if(Ae||Re(e),a.removed=[],typeof i=="string"&&(Y=!1),Y){if(i.nodeName){var T=d(i.nodeName);if(!m[T]||j[T])throw Me("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof g)t=et("<!---->"),n=t.ownerDocument.importNode(i,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!U&&!F&&!x&&i.indexOf("<")===-1)return S&&J?S.createHTML(i):i;if(t=et(i),!t)return U?null:J?ce:""}t&&Ee&&w(t.firstChild);for(var ae=tt(Y?i:t);u=ae.nextNode();)u.nodeType===3&&u===y||rt(u)||(u.content instanceof f&&Ft(u.content),it(u),y=u);if(y=null,Y)return i;if(U){if(Q)for(v=bt.call(t.ownerDocument);t.firstChild;)v.appendChild(t.firstChild);else v=t;return(p.shadowroot||p.shadowrootmod)&&(v=Rt.call(o,v,!0)),v}var h=x?t.outerHTML:t.innerHTML;return x&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(hr,t.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+h),F&&(h=R(h,pe," "),h=R(h,de," "),h=R(h,he," ")),S&&J?S.createHTML(h):h},a.setConfig=function(i){Re(i),Ae=!0},a.clearConfig=function(){W=null,Ae=!1},a.isValidAttribute=function(i,e,t){W||Re({});var n=d(i),u=d(e);return at(n,u,t)},a.addHook=function(i,e){typeof e=="function"&&(D[i]=D[i]||[],X(D[i],e))},a.removeHook=function(i){if(D[i])return st(D[i])},a.removeHooks=function(i){D[i]&&(D[i]=[])},a.removeAllHooks=function(){D={}},a}var ht=dt();console.log(ht);class _r extends HTMLElement{connectedCallback(){const a=this.attachShadow({mode:"open"});a.innerHTML=this.getAttribute("html")}static get observedAttributes(){return["html"]}attributeChangedCallback(a,o,l){this.shadowRoot&&(this.shadowRoot.innerHTML=l)}}customElements.define("app-container",_r);const Ar="app-container";function gr(){const[r,a]=Ut(null),o=Ht(()=>r?ht.sanitize("<wbr>"+r,{ADD_TAGS:["style"]}):"",[r]),l=zt(_=>_.appHook),{name:f}=Gt();return Wt(()=>{l!==null&&(async()=>{var _,g;a((g=(_=await l(f))==null?void 0:_.html)!=null?g:null)})()},[l,f]),Bt(Ar,{html:o})}export{gr as Component};