!function(a,b){function c(a){var b=a.i,c=a.str;return c[b]+c[b+1]==="/*"}function d(a){var b=a.i;return a.str[b]+a.str[b+1]==="</"}function e(a){var b=a.i;return"\x3c!--"===a.str.substring(b,b+4)}function f(a){var b=a.i;return"<!doctype"===a.str.substring(b,b+9).toLowerCase()}function g(a){var b=a.i,c=a.str;return c[b]+c[b+1]==="//"&&D[c[b-1]]}function h(a){var b=a.i,c=a.str,d=c[b+1],e=c[b+2];return"<"===c[b]&&(J[d]&&(J[e]||" "===e||">"===e)||F[d+e])&&"arguments"!==c.substring(b+1,b+10)}function i(a){var b=a.str[a.i],c=(a.str[a.i+1],a.i),d=a.str;return"/"===b&&("("===d[c-1]||"="===d[c-1]||" "===d[c-1]&&"="===d[c-2])}function j(a){var b=a.i,c=a.str.substring(b+1,b+9).toLowerCase();return I[c.substring(0,2)]&&(E[c[2]]||D[c[2]])||I[c.substring(0,3)]&&(E[c[3]]||D[c[3]])||I[c.substring(0,4)]&&(E[c[4]]||D[c[4]])||I[c.substring(0,5)]&&(E[c[5]]||D[c[5]])||I[c.substring(0,6)]&&(E[c[6]]||D[c[6]])||I[c.substring(0,7)]&&(E[c[7]]||D[c[7]])||I[c]&&(E[c[2]]||D[c[2]])}function k(a){var b=a.str[a.i],c=a.str[a.i-1];return("'"===b||'"'===b||"`"===b)&&!J[c]}function l(a){return"<"!==a.str[a.i]}function m(a){var b=a.i;return"<?xml "===a.str.substring(b,b+6).toLowerCase()}function n(a){for(var b=a.split("-"),c=0,d=b.length;c<d;c++)b[c]=0===c?b[c].toLowerCase():b[c][0].toUpperCase()+b[c].slice(1).toLowerCase();return b.join("")}function o(a){var b=!1,c=a.i,e=a.i,f=a.str;for(a.content+=f[e],e+=1;!b&&f[e];e++)b=f[e-1]+f[e]==="*/",a.content+=f[e];if(!b)for(;!h(a)&&!d(a)&&e>c;)a.content=f.substring(c,e),e-=1;a.i=e}function p(a){var b="";for(a.i+=4;"--\x3e"!==a.str.substring(a.i,a.i+3)&&a.str[a.i];)b+=a.str[a.i],a.i+=1;a.i+=3,a.nodes.push({tagName:"comment",value:b}),C(a)}function q(a){var b,c=a.str,d=a.i,e="",f="",g="",h="";for(d+=10;!D[c[d]]&&">"!==c[d]&&c[d];)e+=c[d],d+=1;for(;D[c[d]]&&c[d];)d+=1;for(;!D[c[d]]&&">"!==c[d]&&c[d];)f+=c[d],d+=1;if(">"!==c[d]){for(;"'"!==c[d]&&'"'!==c[d]&&c[d];)d+=1;for(b=c[d],d+=1;c[d]!==b&&c[d];)g+=c[d],d+=1;for(d+=1;"'"!==c[d]&&'"'!==c[d]&&c[d];)d+=1;for(b=c[d],d+=1;c[d]!==b&&c[d];)h+=c[d],d+=1;for(;">"!==c[d]&&c[d];)d+=1}a.i=d,a.nodes.push({tagName:"doctype",rootElement:e,type:f.length?f.toLowerCase():void 0,publicIdentifier:g.length?g:void 0,privateIdentifier:h.length?h:void 0}),C(a)}function r(a){var b=a.i,c=a.str;for(a.content+=c[b]+c[b+1],b+=2;"\n"!==c[b]&&c[b];)a.content+=c[b],b+=1;a.i=b}function s(a){var b,e=!1,f=!0,l="";for(a.open+=1,a.i+=1;">"!==a.str[a.i]&&a.str[a.i];)l+=a.str[a.i],a.i+=1;if("/"===l[l.length-1]&&(l=l.substring(0,l.length-1),e=!0),a.i+=1,b=A(l),l="",e&&I[b.tagName]||I[b.tagName])f=!1,a.nodes.push(b),C(a),a.i-=1;else if(e)throw new Error("Tag: '"+b.tagName+"' is not a self closing tag.");for(;a.i<a.length&&f;)k(a)&&u(a),g(a)&&r(a),c(a)&&o(a),i(a)&&t(a),j(a)?(a.open+=1,a.closed+=1):h(a)&&(a.open+=1),d(a)&&(a.closed+=1),a.open-a.closed==0&&(b.childNodes=B(a.content),a.nodes.push(b),a.i=a.str.indexOf(">",a.i),a.i-=1,C(a),f=!1),a.open>a.closed&&(a.content+=a.str[a.i]),a.i+=1}function t(a){var b=!1,c=a.str,d=a.i;for(a.content+=c[d],d+=1;!b&&c[d];d++)b="/"===c[d]&&"\\"!==c[d-1],a.content+=c[d];a.i=d}function u(a){var b=a.str[a.i],c=!1,d=a.str,e=a.i;for(a.content+=d[e],e+=1;!c&&d[e];e++)c=d.substring(e-3,e)==="\\\\"+b||d[e]===b&&"\\"!==d[e-1],a.content+=d[e];a.i=e}function v(a){for(var b,e=!0;a.i<a.length&&e;)k(a)&&u(a),g(a)&&r(a),c(a)&&o(a),i(a)&&t(a),h(a)||d(a)?e=!1:a.i+=1;a.i-=1,b=a.str.substring(a.anchor,a.i+1),b.trim()&&a.nodes.push(b),C(a)}function w(a){var b={tagName:"xml",attributes:{}},c="",d=[],e=a.str,f=a.i;for(f+=6;!H[e[f-1]+e[f]]&&e[f];){if(c+=e[f],f+=1,D[e[f]]||H[e[f-1]+e[f]]){for(d=c.split("=");!G[d[1][0]];)d[1]=d[1].substring(1);for(;!G[d[1][d[1].length-1]];)d[1]=d[1].substring(0,d[1].length-1);d[1]=d[1].substring(1,d[1].length-1),b.attributes[d[0]]=d[1],c=""}for(;D[e[f]]&&e[f];)f+=1}a.i=f,a.nodes.push(b),C(a)}function x(a){return"class"===a?"className":a}function y(a){for(var b,c={},d=a.split(";"),e=0,f=d.length;e<f;e++)d[e].length&&(b=d[e].split(":"),c[n(b[0].trim())]=b.slice(1,f).join(":").trim());return c}function z(a,b){return"style"===a?y(b):b}function A(a){for(var b,c=0,d=a.length,e={tagName:"",attributes:{},childNodes:[]},f={name:"",value:""};!D[a[c]]&&a[c];)e.tagName+=a[c],c+=1;for(e.tagName=e.tagName.toLowerCase();c<d;c++){for(;D[a[c]]&&a[c];)c+=1;for(;"="!==a[c]&&a[c];)f.name+=a[c],c+=1;if("="===a[c]){for(;!G[a[c]]&&a[c];)c+=1;for(b=a[c],c+=1;a[c]!==b&&a[c];)f.value+=a[c],c+=1;c+=1,e.attributes[x(f.name)]=z(f.name,f.value),f.name="",f.value=""}}return e}function B(a){for(var b={content:"",str:a,i:0,anchor:0,open:0,closed:0,length:a.length,nodes:[]};b.i<b.length;b.i++)D[b.str[b.i]]||(h(b)?s(b):l(b)?v(b):e(b)?p(b):f(b)?q(b):m(b)&&w(b));return b.nodes}function C(a){a.open=0,a.closed=0,a.anchor=a.i,a.content=""}var D={" ":!0,"\t":!0,"\n":!0},E={">":!0},F={h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0},G={"'":!0,'"':!0},H={"?>":!0},I={br:!0,hr:!0,col:!0,img:!0,wbr:!0,area:!0,base:!0,link:!0,meta:!0,embed:!0,input:!0,param:!0,param:!0,track:!0,keygen:!0,source:!0,command:!0,circle:!0,rect:!0,path:!0,polygon:!0},J={a:!0,b:!0,c:!0,d:!0,e:!0,f:!0,g:!0,h:!0,i:!0,j:!0,k:!0,l:!0,m:!0,n:!0,o:!0,p:!0,q:!0,r:!0,s:!0,t:!0,u:!0,v:!0,w:!0,x:!0,y:!0,z:!0,A:!0,B:!0,C:!0,D:!0,E:!0,F:!0,G:!0,H:!0,I:!0,J:!0,K:!0,L:!0,M:!0,N:!0,O:!0,P:!0,Q:!0,R:!0,S:!0,T:!0,U:!0,V:!0,W:!0,X:!0,Y:!0,Z:!0};"object"==typeof module?module.exports=B:flatman&&(flatman.parse=B),b.true=a}({},function(){return this}());