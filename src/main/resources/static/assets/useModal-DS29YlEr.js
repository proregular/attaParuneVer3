import{j as e,y as u,r as o}from"./index-ji0Yrnpj.js";const x=({onClose:r,children:a,title:s})=>e.jsx("div",{className:"w-full h-dvh overflow-hidden fixed top-0 left-0 bg-darkGray bg-opacity-70 flex justify-center items-center text-center z-10",children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:"absolute top-40 left-1/3 w-[400px] h-[450px] z-50 bg-white border-2 border-darkGray rounded-lg border-opacity-30 overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[e.jsx("div",{className:"relative flex w-full h-[15%]",children:e.jsxs("div",{className:"absolute top-0 left-0 flex w-full h-full justify-between items-center px-5 border-b-2 border-gray",children:[e.jsx("span",{className:"font-medium text-2xl",children:s}),e.jsx(u,{onClick:r,className:"font-semibold size-6 cursor-pointer"})]})}),e.jsx("div",{className:"flex w-full h-[85%]",children:a})]})}),p=({useBlur:r=!0,title:a}={})=>{const[s,l]=o.useState(!1),[c,d]=o.useState({}),i=o.useCallback(t=>{console.log(t),d({...t}),l(()=>!0)},[]),n=o.useCallback(()=>{l(()=>!1)},[]);return{Modal:s?({children:t})=>e.jsx(x,{onClose:r?n:null,title:a,children:t}):()=>null,open:i,close:n,isOpen:s,eventData:c}};export{p as u};
