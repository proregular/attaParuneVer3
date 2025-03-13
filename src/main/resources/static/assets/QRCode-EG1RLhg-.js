import{o as g,ad as L,ae as R,g as E,r as n,u as H,d as f,e as S,j as t,P as C}from"./index-BXJcS394.js";import{Q as A}from"./index-Bk8EfdaW.js";import{M as D}from"./MenuBar-DLMOn1Ja.js";import"./index-CowzvnjE.js";import"./index-B2dqu-W3.js";const M=()=>{var m,p,h;const[i,v]=g(L),[r,j]=g(R),u=E(),k=sessionStorage.getItem("userId"),[x,w]=n.useState({couponW:0,visualH:0,infoH:0}),[Q,N]=n.useState(0),$=H(),o=n.useRef(null),l=n.useRef(null),b=()=>{const s=o.current,e=s.clientWidth,c=l.current,a=s.clientHeight,d=c.clientHeight;s.style.clipPath=`path('M0 0 L0 ${a-10} Q10 ${a-10} 10 ${a} L ${e-10} ${a} Q${e-10} ${a-10} ${e} ${a-10} L${e} 0 Z')`,c.style.clipPath=`path('M10 0 Q10 10 0 10 L0 ${d} L${e} ${d} L${e} 10 Q${e-10} 10 ${e-10} 0 Z')`};n.useLayoutEffect(()=>{x.couponW>0&&requestAnimationFrame(()=>{b()})},[x]),n.useEffect(()=>{const s=()=>{o.current&&l.current&&w({couponW:o.current.clientWidth,visualH:o.current.clientHeight,infoH:l.current.clientHeight})};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),n.useEffect(()=>{(!i||i<=0)&&y()},[]),n.useEffect(()=>{i&&i>0&&I(i)},[i]);const y=async()=>{const s={userId:k};try{const e=await f.get("/api/order/ticket/ticketOne",{params:s,headers:{Authorization:`Bearer ${u}`}});console.log("API 응답:",e.data);const c=e.data.resultData;c?v(c):console.warn("유효한 티켓 ID가 없습니다.")}catch(e){console.error("티켓 ID를 가져오는 중 오류 발생:",e)}},I=async s=>{try{const e=await f.get("/api/order/ticket",{params:{ticketId:s},headers:{Authorization:`Bearer ${u}`}});console.log(e),j(e.data.resultData.ticket)}catch(e){console.error("티켓 데이터를 가져오는 중 오류 발생:",e),alert("티켓 정보를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.")}};return n.useEffect(()=>{const s=setInterval(async()=>{const e={ticketId:i};try{const a=(await f.get("/api/order/ticket",{params:e,headers:{Authorization:`Bearer ${u}`}})).data.resultData.ticket;console.log(a.ticketStatus),a.ticketStatus===1&&(N(1),clearInterval(s),S.fire({title:"식권이 사용되었어요",icon:"success",confirmButtonText:"확인",allowOutsideClick:!1}).then(d=>{d.isConfirmed&&$("/user")}))}catch(c){console.error("티켓 상태 조회 실패:",c)}},3e3);return()=>clearInterval(s)},[i]),t.jsxs("div",{className:"flex flex-col w-full h-dvh px-10 pt-20 overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[t.jsx("section",{id:"visual",ref:o,children:t.jsxs("div",{className:"gap-4 pb-4 flex flex-col items-center justify-center bg-gray rounded-t-2xl border-b-4 border-dotted border-darkGray",children:[t.jsx("div",{className:"w-full text-center bg-primary rounded-t-2xl p-6 text-white font-bold",children:t.jsx("span",{className:"font-bold text-4xl text-nowrap",children:r.restaurantName})}),t.jsxs("div",{className:"flex flex-col w-full items-center",children:[t.jsx("span",{className:"text-base -ml-44 text-nowrap",children:"식권 발급 시간"}),t.jsxs("div",{className:"flex text-2xl text-center font-semibold gap-8",children:[t.jsx("span",{className:"flex tracking-widest",children:(m=r==null?void 0:r.reservationTime)==null?void 0:m.split(" ")[0]}),t.jsx("span",{className:"flex tracking-widest",children:(h=(p=r==null?void 0:r.reservationTime)==null?void 0:p.split(" ")[1])==null?void 0:h.slice(0,5)})]})]}),t.jsxs("div",{className:"flex flex-col w-full items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:r.menuNames}),t.jsxs("span",{className:"text-4xl font-bold tracking-wider",children:[r.totalAmount.toLocaleString("ko-KR"),"원"]}),t.jsxs("span",{className:"text-xl",children:[r.personCount,"명 결제"]})]})]})}),t.jsx("section",{id:"info",ref:l,children:t.jsx("div",{className:"p-10 flex flex-col justify-center items-center bg-gray rounded-b-2xl",children:t.jsx("div",{className:"flex w-full justify-center items-center ",children:t.jsx(A,{value:`${C}/user/placetoorder`,size:180,bgColor:"none"})})})}),t.jsx("div",{className:"text-xl underline text-center mt-10 pb-16",children:"예약 취소는 매장으로 문의해주세요"}),t.jsx(D,{})]})};export{M as default};
