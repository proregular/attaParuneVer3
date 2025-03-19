import{p as j,q as g,R as l,aw as T,c as w,u as G,w as k,j as e,I as $,l as L,ax as M}from"./index-D16XrLiV.js";import{e as D}from"./index-DRuKjLjO.js";import{n as C,a as z,i as F,p as R,o as U}from"./MenuBar-CYNEtNSP.js";const E=g.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:p=>{p.onmouseenter=g.stopTimer,p.onmouseleave=g.resumeTimer}}),b=async({sessionId:p,accessToken:I,isLogin:n,setIsNotice:r,setIsPriceNotice:t,setIsOrderNotice:u})=>{var x,i;const y={userId:p};if(n===!0)try{const c=await j.get("/api/user/alert",{params:y,headers:{Authorization:`Bearer ${I}`}});console.log("get 데이터 : ",c.data.resultData);const o=c.data.resultData;(x=o[0])!=null&&x.orderId?(r(o),console.log("결제 승인 요청이 왔습니다"),t(!0),E.fire({title:"결제 승인 요청이 왔습니다!",text:"알림 메세지를 확인해주세요",icon:"info",customClass:{popup:"flex w-[90%]",title:"text-2xl"}})):(i=o[1])!=null&&i.orderId?(r(o),u(!0)):o.length===0&&(t(!1),u(!1),r([]))}catch(c){console.log(c)}else r([])},W=()=>{var v;const[p,I]=l(T),[n,r]=l(C),[t,u]=w.useState({}),[y,x]=l(z),[i,c]=w.useState({}),[o,f]=w.useState(!1),h=G(),m=k(),N=window.sessionStorage.getItem("userId"),A=async s=>{console.log(s);const a={userId:N,orderId:s.orderId,orderUserId:s.orderUserId};try{const d=await j.get("/api/user/user-payment-member/my",{params:a,headers:{Authorization:`Bearer ${m}`}});console.log(d.data.resultData),c({...d.data.resultData,orderId:s.orderId})}catch(d){console.log(d)}},B=async()=>{const s={orderId:parseInt(i.orderId),userId:parseInt(N),approvalStatus:1};console.log("보낼 데이터 : ",s),x(!1);try{const a=await j.patch("/api/user/user-payment-member",s,{headers:{Authorization:`Bearer ${m}`}});console.log(a.data.resultData),f(!1),g.fire({title:"결제가 승인 되었습니다!",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1,customClass:{popup:"flex w-[80%]",title:"text-xl text-black"}}).then(d=>{d.isConfirmed&&(h("/user"),b({sessionId,accessToken:m,isLogin,setIsNotice:r}))})}catch(a){console.log(a)}},S=async()=>{const s={orderId:parseInt(i.orderId),userId:parseInt(N),approvalStatus:2};console.log("보낼 데이터 : ",s);try{const a=await j.patch("/api/user/user-payment-member",s,{headers:{Authorization:`Bearer ${m}`}});console.log("api 연결 성공 후 response : ",a.data.result),f(!1),g.fire({title:"결제가 거절되었습니다.",icon:"error",confirmButtonText:"확인",allowOutsideClick:!1}).then(d=>{d.isConfirmed&&(h("/user"),b({sessionId,accessToken:m,isLogin,setIsNotice:r}))})}catch(a){console.log(a)}},O=s=>{h(`/user/placetoorder/member/${s}`,{state:{orderId:s}}),I(s),x(!1)},P=s=>{console.log("데이터 불러오기",s),u({...s})};return e.jsxs("div",{className:"absolute top-12 right-5 w-[80%] bg-white z-50 border-2 border-darkGray rounded-md pb-4 overflow-x-hidden over overflow-y-scroll scrollbar-hide",children:[e.jsx("div",{className:"p-5 font-semibold text-darkGray",children:"알림"}),e.jsxs("div",{className:"flex flex-col px-5 gap-5 font-medium text-nowrap",children:[(n==null?void 0:n.length)>0?n.map(s=>e.jsx("div",{onClick:()=>{s.message==="나한테 온 승인요청 메세지"?(A(s),f(!0)):O(s.orderId)},className:"flex w-full h-[10%]",children:s.message==="나한테 온 승인요청 메세지"?e.jsx(e.Fragment,{children:e.jsx("span",{className:"font-bold cursor-pointer",onClick:()=>P(s),children:s.message})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex gap-2 items-center cursor-pointer",children:[e.jsx("span",{className:"text-black text-xl",children:s.restaurantName}),e.jsx("span",{className:"text-darkGray",children:"주문을 완성해주세요"})]})})},s.orderId)):e.jsx("span",{className:"text-darkGray tracking-wide",children:"새로운 알림이 없습니다"}),o?e.jsx("div",{className:"w-full h-dvh overflow-hidden fixed top-0 left-0 bg-darkGray bg-opacity-70 flex justify-center items-center text-center z-10",children:e.jsxs("div",{onClick:s=>s.stopPropagation(),className:"absolute top-40 left-1/6 w-[340px] h-[280px] z-50 bg-white border-2 border-darkGray rounded-lg border-opacity-30 overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[e.jsx("div",{className:"relative flex w-full h-[20%]",children:e.jsxs("div",{className:"absolute top-0 left-0 flex w-full h-full justify-between items-center px-5 border-b-2 border-gray",children:[e.jsxs("span",{className:"font-medium text-2xl",children:[t==null?void 0:t.orderUserName,"님의 승인 요청"]}),e.jsx($,{onClick:()=>f(!1),className:"font-semibold size-6"})]})}),e.jsxs("div",{className:"flex w-full h-[85%] flex-col py-4 gap-3",children:[e.jsx("span",{className:"text-xl",children:t==null?void 0:t.restaurantName}),e.jsxs("span",{className:"text-2xl",children:[(v=t==null?void 0:t.point)==null?void 0:v.toLocaleString("ko-KR")," 원"]}),e.jsx("span",{className:"text-xl",children:"결제를 승인하시겠습니까?"}),e.jsxs("div",{className:"flex w-full justify-center items-center gap-10 mt-4",children:[e.jsx("span",{onClick:()=>B(),className:"px-3 py-1 bg-blue text-white rounded-sm ",children:"승인"}),e.jsx("span",{onClick:()=>S(),className:"px-3 py-1 bg-red text-white rounded-sm ",children:"거절"})]})]})]})}):e.jsx("div",{})]})]})},H=()=>{const[p,I]=l(F),[n,r]=l(C),[t,u]=l(R),[y,x]=l(U),[i,c]=l(z),[o,f]=l(L),h=sessionStorage.getItem("userId"),m=k();return w.useEffect(()=>{b({sessionId:h,accessToken:m,isLogin:o,setIsNotice:r,setIsPriceNotice:u,setIsOrderNotice:x})},[]),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("div",{onClick:()=>c(!i),className:"absolute right-5 top-5 z-50 cursor-pointer",children:[n.length!==0&&e.jsx(D,{className:"absolute -right-0 -top-1 text-xs text-red animate-ping z-50"}),e.jsx(M,{className:`size-6 drop-shadow-xl ${p?"text-white":"text-black"}`})]})}),i&&e.jsx(W,{})]})};export{H as N};
