(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4710:function(e,t,l){Promise.resolve().then(l.bind(l,73))},73:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return b}});var r=l(9533),n=l(1229),a=e=>{let{value:t,onClick:l}=e;return(0,r.jsx)("div",{onClick:l,className:"".concat("flex justify-center items-center w-10 h-10 border border-gray-800"," bg-green-400"),style:{width:"40px",height:"40px"},children:("black"===t||"white"===t)&&(0,r.jsx)("div",{className:"rounded-full ".concat("black"===t?"bg-black":"bg-white"," "),style:{width:"30px",height:"30px"}})})},c=e=>{let{board:t,onCellClick:l}=e;return(0,r.jsx)("div",{className:"grid grid-cols-8 grid-rows-8 mx-auto",style:{width:"320px",height:"320px"},children:t.map((e,t)=>e.map((e,n)=>(0,r.jsx)(a,{value:e,onClick:()=>l(t,n)},"".concat(t,"-").concat(n))))})};let i=()=>{let e=Array(8).fill(null).map(()=>Array(8).fill(null));return e[3][3]="white",e[3][4]="black",e[4][3]="black",e[4][4]="white",e},s=(e,t,l,r)=>{if(null!==e[t][l])return null;let n=!1,a=e.map(e=>[...e]);return([[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]].forEach(c=>{let[i,s]=c,u=t+i,o=l+s,h=[];for(;u>=0&&u<8&&o>=0&&o<8&&e[u][o]===("black"===r?"white":"black");)h.push([u,o]),u+=i,o+=s;u>=0&&u<8&&o>=0&&o<8&&e[u][o]===r&&h.length>0&&(n=!0,h.forEach(e=>{let[t,l]=e;a[t][l]=r}))}),n)?(a[t][l]=r,a):null},u=e=>{let t=0,l=0;return e.forEach(e=>{e.forEach(e=>{"black"===e&&t++,"white"===e&&l++})}),{black:t,white:l}},o=e=>{let{black:t,white:l}=u(e);return t+l===64||0===t||0===l?t>l?"black":l>t?"white":"draw":null},h=(e,t)=>{for(let l=0;l<8;l++)for(let r=0;r<8;r++)if(s(e,l,r,t))return!0;return!1};var d=e=>{let{winner:t,onDismiss:l}=e,n="draw"===t?"引き分け！":"".concat(t.toUpperCase()," の勝利！");return(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",onClick:l,children:(0,r.jsx)("div",{className:"animate-bounce bg-white p-10 rounded-lg shadow-xl text-3xl",children:n})})};function b(){let[e,t]=(0,n.useState)(i()),[l,a]=(0,n.useState)("black"),[u,b]=(0,n.useState)(null);return(0,n.useEffect)(()=>{null!==u||h(e,l)||(alert("".concat(l.toUpperCase(),"はパスします")),a("black"===l?"white":"black"))},[e,l,u]),(0,r.jsxs)("div",{className:"container mx-auto p-4",children:[(0,r.jsx)(c,{board:e,onCellClick:(r,n)=>{let c=s(e,r,n,l);if(c){t(c);let e=o(c);e?b(e):a("black"===l?"white":"black")}}}),(0,r.jsxs)("p",{className:"text-center text-lg font-bold mt-4",children:["現在のプレイヤー: ",l.toUpperCase()]}),u&&(0,r.jsx)(d,{winner:u,onDismiss:()=>{b(null),t(i()),a("black")}})]})}}},function(e){e.O(0,[170,842,744],function(){return e(e.s=4710)}),_N_E=e.O()}]);