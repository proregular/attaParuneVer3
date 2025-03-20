import{a9 as m,u as k,R as f,aA as M,c as n,r as y,w as B,j as e,aB as I,aC as A,S as Z,at as F,au as T,q as i,aD as _,J as V,p as R}from"./index-DE1blNUs.js";import{f as E,g as H}from"./index-BOCF7S2W.js";import{b as P}from"./index-WfN3VHbb.js";import{u as $}from"./useModal-DPzFyzw8.js";function z(t){return m({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78C96.4,49.53,61.2,38.28,12.49,62.06A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM48,152a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm80,8a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm96,8a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"},child:[]}]})(t)}function L(t){return m({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M120,16V8a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm80,32a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,200,48ZM50.34,45.66A8,8,0,0,0,61.66,34.34l-8-8A8,8,0,0,0,42.34,37.66ZM232,176v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16V128a88,88,0,0,1,88.67-88c48.15.36,87.33,40.29,87.33,89v31A16,16,0,0,1,232,176ZM134.68,87.89C153.67,91.08,168,108.32,168,128a8,8,0,0,0,16,0c0-27.4-20.07-51.43-46.68-55.89a8,8,0,1,0-2.64,15.78ZM216,200V176H40v24H216Z"},child:[]}]})(t)}function D(t){return m({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 1.999H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm-6 11H7v-2h7v2zm3-4H7v-2h10v2z"},child:[]}]})(t)}const r=V.div`
  padding: 5px 10px;
  margin-left: 60px;
  margin-top: 10px;
  cursor: pointer;
  color: #fff;
`,U=()=>{const t=k(),[o,c]=f(M),[d,p]=n.useState(!1),[q,h]=f(y),{Modal:g,open:v,close:w}=$({title:"결제 비밀번호 재설정",width:450,height:600}),[j,u]=n.useState(""),b=B(),C=parseInt(sessionStorage.getItem("adminId")),s=parseInt(sessionStorage.getItem("coalitionState"));n.useEffect(()=>{c({"/store":"table","/store/menu":"menu","/store/sales":"sales","/store/info":"store","/store/review":"review"}[location.pathname]||""),location.pathname==="/store/info"&&p(!0)},[location.pathname]);const l=(a,x)=>{c(a),t(x)},N=async()=>{const a={adminId:C};try{await R.patch("/api/admin/v3/coalition-request",a,{headers:{Authorization:`Bearer ${b}`}}),s===0?i.fire({title:`제휴 해지 요청이
정상적으로 접수되었습니다.`,icon:"success"}):s===1&&i.fire({title:`제휴 신청이
성공적으로 완료되었습니다`,icon:"success"})}catch(x){console.log(x)}},S=()=>{s===0||s===1?i.fire({title:j,icon:"question",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(a=>{a.isConfirmed&&N()}):s===2?i.fire({title:`제휴 해지 요청 처리중입니다.
잠시만 기다려 주세요.`,icon:"info"}):s===3&&i.fire({title:`제휴 신청 요청 처리중입니다.
잠시만 기다려 주세요.`,icon:"info"})};return n.useEffect(()=>{s===0?u("제휴 해지 신청을 하시겠습니까?"):s===1&&u("제휴 신청을 하시겠습니까?")},[]),e.jsxs("div",{className:"flex flex-col w-44 h-dvh items-center bg-primaryFocus",children:[e.jsxs("div",{className:"w-full mt-8 flex-grow",children:[e.jsx("div",{className:"flex mb-6 px-4 w-44 justify-center items-center",children:e.jsx("img",{src:"/adminLogo.png",className:"flex w-full h-full pb-6"})}),e.jsxs("div",{className:"flex flex-col justify-between",children:[e.jsxs("div",{className:`flex gap-3 pl-8 py-4 items-center cursor-pointer ${o==="table"?"bg-gray text-black ml-6 rounded-l-full shadow-lg":"text-white"}`,onClick:()=>l("table","/store"),children:[e.jsx(P,{className:"text-2xl"}),e.jsx("span",{className:"text-lg",children:"테이블"})]}),e.jsxs("div",{className:`flex gap-3 pl-8 py-4 items-center cursor-pointer ${o==="menu"?"bg-gray text-black ml-6 rounded-l-full shadow-[-3px_5px_0_rgba(0,0,0,0.08)]":"text-white"}`,onClick:()=>l("menu","/store/menu"),children:[e.jsx(I,{className:"text-2xl"}),e.jsx("div",{className:"text-lg",children:"메뉴"})]}),e.jsxs("div",{className:`flex gap-3 pl-8 py-4 items-center cursor-pointer ${o==="review"?"bg-gray text-black ml-6 rounded-l-full shadow-[-3px_5px_0_rgba(0,0,0,0.08)]":"text-white"}`,onClick:()=>l("review","/store/review"),children:[e.jsx(D,{className:"text-2xl"}),e.jsx("div",{className:"text-lg",children:"리뷰관리"})]})]}),e.jsxs("div",{className:`flex gap-3 pl-8 py-4 items-center cursor-pointer ${o==="sales"?"bg-gray text-black ml-6 rounded-l-full shadow-lg":"text-white"}`,onClick:()=>l("sales","/store/sales"),children:[e.jsx(z,{className:"text-2xl"}),e.jsx("div",{className:"text-lg",children:"매출확인"})]}),e.jsxs("div",{className:"flex gap-3 pl-8 items-center mt-3 cursor-pointer text-white",onClick:()=>{c("store")},children:[e.jsx(A,{className:"text-2xl"}),e.jsx("div",{className:"text-lg",children:"내 매장"}),o==="store"?e.jsx(E,{className:"w-6 h-6 mt-3"}):e.jsx(H,{className:"w-6 h-6 mb-3"})]}),o==="store"&&e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>l("store","/store/info"),style:{backgroundColor:d?"#eee":"#4825b6",color:d?"#333":"#fff",boxShadow:d&&"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",borderRadius:"2px 0 0 2px"},children:"정보수정"}),e.jsx(r,{onClick:v,children:"PIN 변경"}),e.jsx(r,{onClick:()=>{t("/auth/editpw"),h(Z)},children:"비밀번호 변경"}),e.jsx(r,{onClick:()=>S(),children:"제휴상태 변경"})]})]}),e.jsx("div",{onClick:()=>{window.sessionStorage.removeItem("adminId"),window.sessionStorage.removeItem("restaurantId"),window.sessionStorage.removeItem("coalitionState"),F(),T(),i.fire({title:"로그아웃 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(a=>{a.isConfirmed&&t("/")})},className:"rounded-md bg-secondary text-white font-bold tracking-wider px-6 py-2 mb-16 cursor-pointer shadow-lg",children:"로그아웃"}),e.jsx(g,{children:e.jsx(_,{mode:"edit",close:w})})]})};export{L as P,U as S};
