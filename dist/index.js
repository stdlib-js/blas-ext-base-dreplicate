"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var d=p(function(H,x){
function g(e,r,i,t,v,a,n,s){var u,o,l,c,q;if(e<=0||r<=0)return a;for(u=v,o=s,c=0;c<e;c++){for(l=i[u],q=0;q<r;q++)a[o]=l,o+=n;u+=t}return a}x.exports=g
});var m=p(function(I,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),h=d();function w(e,r,i,t,v,a){var n=y(e,t),s=y(e*r,a);return h(e,r,i,t,n,v,a,s)}j.exports=w
});var E=p(function(J,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),A=d();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=E(),f,b=C(B(__dirname,"./native.js"));D(b)?f=F:f=b;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
