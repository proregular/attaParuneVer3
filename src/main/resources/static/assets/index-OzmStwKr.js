import{ao as R}from"./index-D16XrLiV.js";var le=Object.defineProperty,D=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,Y=(u,l,s)=>l in u?le(u,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[l]=s,z=(u,l)=>{for(var s in l||(l={}))V.call(l,s)&&Y(u,s,l[s]);if(D)for(var s of D(l))x.call(l,s)&&Y(u,s,l[s]);return u},U=(u,l)=>{var s={};for(var c in u)V.call(u,c)&&l.indexOf(c)<0&&(s[c]=u[c]);if(u!=null&&D)for(var c of D(u))l.indexOf(c)<0&&x.call(u,c)&&(s[c]=u[c]);return s};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var S;(u=>{const l=class g{constructor(e,n,t,r){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<g.MIN_VERSION||e>g.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let i=0;i<this.size;i++)o.push(!1);for(let i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(t);if(this.drawCodewords(a),r==-1){let i=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const h=this.getPenaltyScore();h<i&&(r=m,i=h),this.applyMask(m)}}E(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(e,n){const t=u.QrSegment.makeSegments(e);return g.encodeSegments(t,n)}static encodeBinary(e,n){const t=u.QrSegment.makeBytes(e);return g.encodeSegments([t],n)}static encodeSegments(e,n,t=1,r=40,o=-1,a=!0){if(!(g.MIN_VERSION<=t&&t<=r&&r<=g.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let i,m;for(i=t;;i++){const d=g.getNumDataCodewords(i,n)*8,w=A.getTotalBits(e,i);if(w<=d){m=w;break}if(i>=r)throw new RangeError("Data too long")}for(const d of[g.Ecc.MEDIUM,g.Ecc.QUARTILE,g.Ecc.HIGH])a&&m<=g.getNumDataCodewords(i,d)*8&&(n=d);let h=[];for(const d of e){s(d.mode.modeBits,4,h),s(d.numChars,d.mode.numCharCountBits(i),h);for(const w of d.getData())h.push(w)}E(h.length==m);const P=g.getNumDataCodewords(i,n)*8;E(h.length<=P),s(0,Math.min(4,P-h.length),h),s(0,(8-h.length%8)%8,h),E(h.length%8==0);for(let d=236;h.length<P;d^=253)s(d,8,h);let p=[];for(;p.length*8<h.length;)p.push(0);return h.forEach((d,w)=>p[w>>>3]|=d<<7-(w&7)),new g(i,n,p,o)}getModule(e,n){return 0<=e&&e<this.size&&0<=n&&n<this.size&&this.modules[n][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),n=e.length;for(let t=0;t<n;t++)for(let r=0;r<n;r++)t==0&&r==0||t==0&&r==n-1||t==n-1&&r==0||this.drawAlignmentPattern(e[t],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const n=this.errorCorrectionLevel.formatBits<<3|e;let t=n;for(let o=0;o<10;o++)t=t<<1^(t>>>9)*1335;const r=(n<<10|t)^21522;E(r>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,c(r,o));this.setFunctionModule(8,7,c(r,6)),this.setFunctionModule(8,8,c(r,7)),this.setFunctionModule(7,8,c(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,c(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,c(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,c(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;const n=this.version<<12|e;E(n>>>18==0);for(let t=0;t<18;t++){const r=c(n,t),o=this.size-11+t%3,a=Math.floor(t/3);this.setFunctionModule(o,a,r),this.setFunctionModule(a,o,r)}}drawFinderPattern(e,n){for(let t=-4;t<=4;t++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(t)),a=e+r,i=n+t;0<=a&&a<this.size&&0<=i&&i<this.size&&this.setFunctionModule(a,i,o!=2&&o!=4)}}drawAlignmentPattern(e,n){for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,n+t,Math.max(Math.abs(r),Math.abs(t))!=1)}setFunctionModule(e,n,t){this.modules[n][e]=t,this.isFunction[n][e]=!0}addEccAndInterleave(e){const n=this.version,t=this.errorCorrectionLevel;if(e.length!=g.getNumDataCodewords(n,t))throw new RangeError("Invalid argument");const r=g.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][n],o=g.ECC_CODEWORDS_PER_BLOCK[t.ordinal][n],a=Math.floor(g.getNumRawDataModules(n)/8),i=r-a%r,m=Math.floor(a/r);let h=[];const P=g.reedSolomonComputeDivisor(o);for(let d=0,w=0;d<r;d++){let N=e.slice(w,w+m-o+(d<i?0:1));w+=N.length;const F=g.reedSolomonComputeRemainder(N,P);d<i&&N.push(0),h.push(N.concat(F))}let p=[];for(let d=0;d<h[0].length;d++)h.forEach((w,N)=>{(d!=m-o||N>=i)&&p.push(w[d])});return E(p.length==a),p}drawCodewords(e){if(e.length!=Math.floor(g.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const a=t-o,m=(t+1&2)==0?this.size-1-r:r;!this.isFunction[m][a]&&n<e.length*8&&(this.modules[m][a]=c(e[n>>>3],7-(n&7)),n++)}}E(n==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let n=0;n<this.size;n++)for(let t=0;t<this.size;t++){let r;switch(e){case 0:r=(t+n)%2==0;break;case 1:r=n%2==0;break;case 2:r=t%3==0;break;case 3:r=(t+n)%3==0;break;case 4:r=(Math.floor(t/3)+Math.floor(n/2))%2==0;break;case 5:r=t*n%2+t*n%3==0;break;case 6:r=(t*n%2+t*n%3)%2==0;break;case 7:r=((t+n)%2+t*n%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[n][t]&&r&&(this.modules[n][t]=!this.modules[n][t])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let a=!1,i=0,m=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[o][h]==a?(i++,i==5?e+=g.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,m),a||(e+=this.finderPenaltyCountPatterns(m)*g.PENALTY_N3),a=this.modules[o][h],i=1);e+=this.finderPenaltyTerminateAndCount(a,i,m)*g.PENALTY_N3}for(let o=0;o<this.size;o++){let a=!1,i=0,m=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[h][o]==a?(i++,i==5?e+=g.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,m),a||(e+=this.finderPenaltyCountPatterns(m)*g.PENALTY_N3),a=this.modules[h][o],i=1);e+=this.finderPenaltyTerminateAndCount(a,i,m)*g.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let a=0;a<this.size-1;a++){const i=this.modules[o][a];i==this.modules[o][a+1]&&i==this.modules[o+1][a]&&i==this.modules[o+1][a+1]&&(e+=g.PENALTY_N2)}let n=0;for(const o of this.modules)n=o.reduce((a,i)=>a+(i?1:0),n);const t=this.size*this.size,r=Math.ceil(Math.abs(n*20-t*10)/t)-1;return E(0<=r&&r<=9),e+=r*g.PENALTY_N4,E(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,n=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let t=[6];for(let r=this.size-7;t.length<e;r-=n)t.splice(1,0,r);return t}}static getNumRawDataModules(e){if(e<g.MIN_VERSION||e>g.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return E(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(g.getNumRawDataModules(e)/8)-g.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*g.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let r=0;r<e-1;r++)n.push(0);n.push(1);let t=1;for(let r=0;r<e;r++){for(let o=0;o<n.length;o++)n[o]=g.reedSolomonMultiply(n[o],t),o+1<n.length&&(n[o]^=n[o+1]);t=g.reedSolomonMultiply(t,2)}return n}static reedSolomonComputeRemainder(e,n){let t=n.map(r=>0);for(const r of e){const o=r^t.shift();t.push(0),n.forEach((a,i)=>t[i]^=g.reedSolomonMultiply(a,o))}return t}static reedSolomonMultiply(e,n){if(e>>>8||n>>>8)throw new RangeError("Byte out of range");let t=0;for(let r=7;r>=0;r--)t=t<<1^(t>>>7)*285,t^=(n>>>r&1)*e;return E(t>>>8==0),t}finderPenaltyCountPatterns(e){const n=e[1];E(n<=this.size*3);const t=n>0&&e[2]==n&&e[3]==n*3&&e[4]==n&&e[5]==n;return(t&&e[0]>=n*4&&e[6]>=n?1:0)+(t&&e[6]>=n*4&&e[0]>=n?1:0)}finderPenaltyTerminateAndCount(e,n,t){return e&&(this.finderPenaltyAddHistory(n,t),n=0),n+=this.size,this.finderPenaltyAddHistory(n,t),this.finderPenaltyCountPatterns(t)}finderPenaltyAddHistory(e,n){n[0]==0&&(e+=this.size),n.pop(),n.unshift(e)}};l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],u.QrCode=l;function s(C,e,n){if(e<0||e>31||C>>>e)throw new RangeError("Value out of range");for(let t=e-1;t>=0;t--)n.push(C>>>t&1)}function c(C,e){return(C>>>e&1)!=0}function E(C){if(!C)throw new Error("Assertion error")}const f=class M{constructor(e,n,t){if(this.mode=e,this.numChars=n,this.bitData=t,n<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}static makeBytes(e){let n=[];for(const t of e)s(t,8,n);return new M(M.Mode.BYTE,e.length,n)}static makeNumeric(e){if(!M.isNumeric(e))throw new RangeError("String contains non-numeric characters");let n=[];for(let t=0;t<e.length;){const r=Math.min(e.length-t,3);s(parseInt(e.substring(t,t+r),10),r*3+1,n),t+=r}return new M(M.Mode.NUMERIC,e.length,n)}static makeAlphanumeric(e){if(!M.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let n=[],t;for(t=0;t+2<=e.length;t+=2){let r=M.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;r+=M.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),s(r,11,n)}return t<e.length&&s(M.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new M(M.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return e==""?[]:M.isNumeric(e)?[M.makeNumeric(e)]:M.isAlphanumeric(e)?[M.makeAlphanumeric(e)]:[M.makeBytes(M.toUtf8ByteArray(e))]}static makeEci(e){let n=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)s(e,8,n);else if(e<16384)s(2,2,n),s(e,14,n);else if(e<1e6)s(6,3,n),s(e,21,n);else throw new RangeError("ECI assignment value out of range");return new M(M.Mode.ECI,0,n)}static isNumeric(e){return M.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return M.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,n){let t=0;for(const r of e){const o=r.mode.numCharCountBits(n);if(r.numChars>=1<<o)return 1/0;t+=4+o+r.bitData.length}return t}static toUtf8ByteArray(e){e=encodeURI(e);let n=[];for(let t=0;t<e.length;t++)e.charAt(t)!="%"?n.push(e.charCodeAt(t)):(n.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return n}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let A=f;u.QrSegment=f})(S||(S={}));(u=>{(l=>{const s=class{constructor(E,f){this.ordinal=E,this.formatBits=f}};s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),l.Ecc=s})(u.QrCode||(u.QrCode={}))})(S||(S={}));(u=>{(l=>{const s=class{constructor(E,f){this.modeBits=E,this.numBitsCharCount=f}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),l.Mode=s})(u.QrSegment||(u.QrSegment={}))})(S||(S={}));var O=S;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var ae={L:O.QrCode.Ecc.LOW,M:O.QrCode.Ecc.MEDIUM,Q:O.QrCode.Ecc.QUARTILE,H:O.QrCode.Ecc.HIGH},X=128,K="L",W="#FFFFFF",j="#000000",Z=!1,J=1,ce=4,ue=0,he=.1;function q(u,l=0){const s=[];return u.forEach(function(c,E){let f=null;c.forEach(function(A,C){if(!A&&f!==null){s.push(`M${f+l} ${E+l}h${C-f}v1H${f+l}z`),f=null;return}if(C===c.length-1){if(!A)return;f===null?s.push(`M${C+l},${E+l} h1v1H${C+l}z`):s.push(`M${f+l},${E+l} h${C+1-f}v1H${f+l}z`);return}A&&f===null&&(f=C)})}),s.join("")}function ee(u,l){return u.slice().map((s,c)=>c<l.y||c>=l.y+l.h?s:s.map((E,f)=>f<l.x||f>=l.x+l.w?E:!1))}function fe(u,l,s,c){if(c==null)return null;const E=u.length+s*2,f=Math.floor(l*he),A=E/l,C=(c.width||f)*A,e=(c.height||f)*A,n=c.x==null?u.length/2-C/2:c.x*A,t=c.y==null?u.length/2-e/2:c.y*A,r=c.opacity==null?1:c.opacity;let o=null;if(c.excavate){let i=Math.floor(n),m=Math.floor(t),h=Math.ceil(C+n-i),P=Math.ceil(e+t-m);o={x:i,y:m,w:h,h:P}}const a=c.crossOrigin;return{x:n,y:t,h:e,w:C,excavation:o,opacity:r,crossOrigin:a}}function de(u,l){return l!=null?Math.max(Math.floor(l),0):u?ce:ue}function te({value:u,level:l,minVersion:s,includeMargin:c,marginSize:E,imageSettings:f,size:A,boostLevel:C}){let e=R.useMemo(()=>{const i=(Array.isArray(u)?u:[u]).reduce((m,h)=>(m.push(...O.QrSegment.makeSegments(h)),m),[]);return O.QrCode.encodeSegments(i,ae[l],s,void 0,void 0,C)},[u,l,s,C]);const{cells:n,margin:t,numCells:r,calculatedImageSettings:o}=R.useMemo(()=>{let a=e.getModules();const i=de(c,E),m=a.length+i*2,h=fe(a,A,i,f);return{cells:a,margin:i,numCells:m,calculatedImageSettings:h}},[e,A,f,c,E]);return{qrcode:e,margin:t,cells:n,numCells:r,calculatedImageSettings:o}}var me=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),ge=R.forwardRef(function(l,s){const c=l,{value:E,size:f=X,level:A=K,bgColor:C=W,fgColor:e=j,includeMargin:n=Z,minVersion:t=J,boostLevel:r,marginSize:o,imageSettings:a}=c,m=U(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:h}=m,P=U(m,["style"]),p=a==null?void 0:a.src,d=R.useRef(null),w=R.useRef(null),N=R.useCallback(y=>{d.current=y,typeof s=="function"?s(y):s&&(s.current=y)},[s]),[F,_]=R.useState(!1),{margin:L,cells:T,numCells:B,calculatedImageSettings:v}=te({value:E,level:A,minVersion:t,boostLevel:r,includeMargin:n,marginSize:o,imageSettings:a,size:f});R.useEffect(()=>{if(d.current!=null){const y=d.current,I=y.getContext("2d");if(!I)return;let k=T;const b=w.current,H=v!=null&&b!==null&&b.complete&&b.naturalHeight!==0&&b.naturalWidth!==0;H&&v.excavation!=null&&(k=ee(T,v.excavation));const $=window.devicePixelRatio||1;y.height=y.width=f*$;const G=f/B*$;I.scale(G,G),I.fillStyle=C,I.fillRect(0,0,B,B),I.fillStyle=e,me?I.fill(new Path2D(q(k,L))):T.forEach(function(re,oe){re.forEach(function(se,ie){se&&I.fillRect(ie+L,oe+L,1,1)})}),v&&(I.globalAlpha=v.opacity),H&&I.drawImage(b,v.x+L,v.y+L,v.w,v.h)}}),R.useEffect(()=>{_(!1)},[p]);const ne=z({height:f,width:f},h);let Q=null;return p!=null&&(Q=R.createElement("img",{src:p,key:p,style:{display:"none"},onLoad:()=>{_(!0)},ref:w,crossOrigin:v==null?void 0:v.crossOrigin})),R.createElement(R.Fragment,null,R.createElement("canvas",z({style:ne,height:f,width:f,ref:N,role:"img"},P)),Q)});ge.displayName="QRCodeCanvas";var Ee=R.forwardRef(function(l,s){const c=l,{value:E,size:f=X,level:A=K,bgColor:C=W,fgColor:e=j,includeMargin:n=Z,minVersion:t=J,boostLevel:r,title:o,marginSize:a,imageSettings:i}=c,m=U(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:h,cells:P,numCells:p,calculatedImageSettings:d}=te({value:E,level:A,minVersion:t,boostLevel:r,includeMargin:n,marginSize:a,imageSettings:i,size:f});let w=P,N=null;i!=null&&d!=null&&(d.excavation!=null&&(w=ee(P,d.excavation)),N=R.createElement("image",{href:i.src,height:d.h,width:d.w,x:d.x+h,y:d.y+h,preserveAspectRatio:"none",opacity:d.opacity,crossOrigin:d.crossOrigin}));const F=q(w,h);return R.createElement("svg",z({height:f,width:f,viewBox:`0 0 ${p} ${p}`,ref:s,role:"img"},m),!!o&&R.createElement("title",null,o),R.createElement("path",{fill:C,d:`M0,0 h${p}v${p}H0z`,shapeRendering:"crispEdges"}),R.createElement("path",{fill:e,d:F,shapeRendering:"crispEdges"}),N)});Ee.displayName="QRCodeSVG";export{Ee as Q};
