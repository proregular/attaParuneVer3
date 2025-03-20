import{p as j,q as m,R as r,aw as M,l as A,c as b,u as R,w as B,j as e,I as D,ax as U}from"./index-DE1blNUs.js";import{e as q}from"./index-BOCF7S2W.js";import{n as P,a as S,i as E,p as W,o as _}from"./MenuBar-1ew51my2.js";m.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:c=>{c.onmouseenter=m.stopTimer,c.onmouseleave=m.resumeTimer}});const v=async({sessionId:c,accessToken:u,isLogin:o,setIsNotice:i,setIsPriceNotice:h,setIsOrderNotice:w})=>{const t={userId:c};if(o===!0)try{const l=await j.get("/api/user/alert",{params:t,headers:{Authorization:`Bearer ${u}`}});console.log("사용자 알림 데이터 : ",l.data.resultData);const p=l.data.resultData;i([...p])}catch(l){console.log(l)}else i([])},H=()=>{var z;const[c,u]=r(M),[o,i]=r(P),[h,w]=r(A),[t,l]=b.useState({}),[p,f]=r(S),[g,k]=b.useState({}),[y,d]=b.useState(!1),I=R(),x=B(),N=window.sessionStorage.getItem("userId"),O=async s=>{console.log(s);const a={userId:N,orderId:s.orderId,orderUserId:s.orderUserId};try{const n=await j.get("/api/user/user-payment-member/my",{params:a,headers:{Authorization:`Bearer ${x}`}});console.log(n.data.resultData),k({...n.data.resultData,orderId:s.orderId})}catch(n){console.log(n)}},G=async()=>{const s={orderId:parseInt(g.orderId),userId:parseInt(N),approvalStatus:1};console.log("보낼 데이터 : ",s),f(!1);try{const a=await j.patch("/api/user/user-payment-member",s,{headers:{Authorization:`Bearer ${x}`}});console.log(a.data.resultData),d(!1),m.fire({title:"결제가 승인 되었습니다!",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1,customClass:{popup:"flex w-[80%]",title:"text-xl text-black"}}).then(n=>{n.isConfirmed&&(I("/user"),v({sessionId:N,accessToken:x,isLogin:h,setIsNotice:i}))})}catch(a){console.log(a)}},$=async()=>{const s={orderId:parseInt(g.orderId),userId:parseInt(N),approvalStatus:2};console.log("보낼 데이터 : ",s);try{const a=await j.patch("/api/user/user-payment-member",s,{headers:{Authorization:`Bearer ${x}`}});console.log("api 연결 성공 후 response : ",a.data.result),d(!1),m.fire({title:"결제가 거절되었습니다.",icon:"error",confirmButtonText:"확인",allowOutsideClick:!1}).then(n=>{n.isConfirmed&&(I("/user"),v({sessionId,accessToken:x,isLogin:h,setIsNotice:i}))})}catch(a){console.log(a)}},T=s=>{I(`/user/placetoorder/member/${s}`,{state:{orderId:s}}),u(s),f(!1)},F=s=>{I(`/user/placetoorder/request/${s}`)},L=s=>{switch(s.message){case"나한테 온 승인요청 메세지":C(s),O(s),d(!0);break;case"인원 선택 메세지":T(s.orderId);break;case"식권 생성 요청 메세지":F(s.orderId);break;default:console.warn("알 수 없는 알림 타입:",s.message)}},C=s=>{console.log("데이터 불러오기",s),l({...s})};return e.jsxs("div",{className:"absolute top-12 right-5 w-[80%] bg-white z-50 border-2 border-darkGray rounded-md pb-4 overflow-x-hidden over overflow-y-scroll scrollbar-hide",children:[e.jsx("div",{className:"p-5 font-semibold text-darkGray",children:"알림"}),e.jsxs("div",{className:"flex flex-col px-5 gap-5 font-medium text-nowrap",children:[(o==null?void 0:o.length)>0?o.map(s=>e.jsx("div",{onClick:()=>L(s),className:"flex w-full h-[10%]",children:s.message==="나한테 온 승인요청 메세지"?e.jsx(e.Fragment,{children:e.jsx("span",{className:"font-bold cursor-pointer",onClick:()=>C(s),children:s.message})}):s.message==="인원 선택 메세지"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex gap-2 items-center cursor-pointer",children:[e.jsx("span",{className:"text-black text-xl",children:s.restaurantName}),e.jsx("span",{className:"text-darkGray",children:"인원 선택"})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex gap-2 items-center cursor-pointer",children:[e.jsx("span",{className:"text-black text-xl",children:s.restaurantName}),e.jsx("span",{className:"text-darkGray",children:"식권 생성"})]})})},s.orderId)):e.jsx("span",{className:"text-darkGray tracking-wide",children:"새로운 알림이 없습니다"}),y?e.jsx("div",{className:"w-full h-dvh overflow-hidden fixed top-0 left-0 bg-darkGray bg-opacity-70 flex justify-center items-center text-center z-10",children:e.jsxs("div",{onClick:s=>s.stopPropagation(),className:"absolute top-40 left-1/6 w-[340px] h-[280px] z-50 bg-white border-2 border-darkGray rounded-lg border-opacity-30 overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[e.jsx("div",{className:"relative flex w-full h-[20%]",children:e.jsxs("div",{className:"absolute top-0 left-0 flex w-full h-full justify-between items-center px-5 border-b-2 border-gray",children:[e.jsxs("span",{className:"font-medium text-2xl",children:[t==null?void 0:t.orderUserName,"님의 승인 요청"]}),e.jsx(D,{onClick:()=>d(!1),className:"font-semibold size-6"})]})}),e.jsxs("div",{className:"flex w-full h-[85%] flex-col py-4 gap-3",children:[e.jsx("span",{className:"text-xl",children:t==null?void 0:t.restaurantName}),e.jsxs("span",{className:"text-2xl",children:[(z=t==null?void 0:t.point)==null?void 0:z.toLocaleString("ko-KR")," 원"]}),e.jsx("span",{className:"text-xl",children:"결제를 승인하시겠습니까?"}),e.jsxs("div",{className:"flex w-full justify-center items-center gap-10 mt-4",children:[e.jsx("span",{onClick:()=>G(),className:"px-3 py-1 bg-blue text-white rounded-sm ",children:"승인"}),e.jsx("span",{onClick:()=>$(),className:"px-3 py-1 bg-red text-white rounded-sm ",children:"거절"})]})]})]})}):e.jsx("div",{})]})]})},V=()=>{const[c,u]=r(E),[o,i]=r(P),[h,w]=r(W),[t,l]=r(_),[p,f]=r(S),[g,k]=r(A),y=sessionStorage.getItem("userId"),d=B();return b.useEffect(()=>{v({sessionId:y,accessToken:d,isLogin:g,setIsNotice:i,setIsPriceNotice:w,setIsOrderNotice:l})},[]),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("div",{onClick:()=>f(!p),className:"absolute right-5 top-5 z-50 cursor-pointer",children:[o.length!==0&&e.jsx(q,{className:"absolute -right-0 -top-1 text-xs text-red animate-ping z-50"}),e.jsx(U,{className:`size-6 drop-shadow-xl ${c?"text-white":"text-black"}`})]})}),p&&e.jsx(H,{})]})};export{V as N};
