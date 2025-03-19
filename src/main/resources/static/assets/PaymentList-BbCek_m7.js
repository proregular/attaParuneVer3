import{a9 as k,u as I,c as n,R as C,w as D,j as e,ak as G,al as L,a0 as d,am as m,an as $,D as M,af as Y,p}from"./index-D16XrLiV.js";import{a as P}from"./index-Ca6ZBES-.js";import{i as T,M as S}from"./MenuBar-CYNEtNSP.js";import"./index-OzmStwKr.js";import{N as O}from"./NotificationIcon-B3fXYEsJ.js";import"./index-rJPs3tYL.js";import"./index-DFmSg0Wd.js";import"./index-DRuKjLjO.js";function R(t){return k({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"},child:[]}]})(t)}const K=()=>{const t=I(),[o,c]=n.useState(!0),[i,j]=n.useState([]),[r,w]=n.useState({}),[A,y]=C(T),x=window.sessionStorage.getItem("userId"),f=D();n.useEffect(()=>{y(!1),(async()=>{try{if(x){const a=(await p.get("/api/user/pastOrderCheck",{headers:{Authorization:`Bearer ${f}`}})).data.resultData;j([...a])}}catch(l){console.log(l)}})()},[]),n.useEffect(()=>{const s={userId:x};(async()=>{try{const a=await p.get("/api/user/activeOrderCheck",{params:s,headers:{Authorization:`Bearer ${f}`}});console.log(a.data);const h=a.data.resultData,b=d(h.orderDate).format("YYYY-MM-DD HH:mm");w({...h,orderDate:b})}catch(a){console.log(a)}})()},[]),console.log("진행중인 주문내역 : ",r),console.log("지난 주문 내역 : ",i);const N=s=>{if(r.ticketId)t(`/user/placetoorder/coupon/${s.ticketId}`,{state:{...s}});else return},u=s=>!s||s.length!==11?s:s.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"),v=s=>{console.log("리뷰써보자 : ",s),t(`/user/review/${s.orderId}`,{state:{...s}})},g=s=>{t(`/user/restaurant/detail/${s}`,{state:{from:"/user/order"}})};return e.jsxs("div",{className:"w-full h-dvh flex flex-col justify-between overflow-x-hidden overflow-y-scroll scrollbar-hide bg-white",children:[e.jsx(O,{}),e.jsxs("div",{className:"absolute top-0 left-0 w-full flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white",children:[e.jsx("span",{children:" "}),e.jsx("span",{className:"text-xl font-semibold tracking-wider",children:"주문내역"}),e.jsx("span",{children:" "})]}),e.jsxs("div",{className:"absolute top-16 left-0 w-full flex justify-between border-b-2 border-gray border-opacity-70 bg-white",children:[e.jsx("div",{onClick:()=>c(!0),className:`w-1/2 text-center text-xl font-semibold py-3 ${o?"border-b-2 border-black":"text-darkGray font-normal"}`,children:"진행 중인 주문"}),e.jsx("div",{onClick:()=>c(!1),className:`w-1/2 text-center text-xl font-semibold py-3 ${o?"text-darkGray font-normal":"border-b-2 border-black"}`,children:"지난 주문 내역"})]}),o?r.orderId?e.jsxs("div",{className:"flex flex-col w-full h-dvh gap-10 pt-24 pb-20",children:[e.jsx("div",{className:"flex w-full h-[14%] justify-center items-end text-primary text-2xl font-semibold tracking-widest",children:r.ticketId?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(G,{}),e.jsx("span",{children:"예약완료"})]}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{color:"#6f4cdb"}),e.jsx("span",{children:"예약중"})]})}),e.jsxs("div",{className:"flex flex-col w-full h-[35%] px-10 gap-5",children:[e.jsx("span",{className:"mb-2",children:"매장 정보"}),e.jsxs("div",{className:"flex flex-col w-full h-full px-4 justify-between",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"text-xl",children:r.restaurantName}),e.jsx("span",{className:"text-darkGray",children:r.categoryName})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"text-darkGray",children:"주문일시"}),e.jsx("span",{className:"text-lg",children:d(r.orderDate).format("YYYY-MM-DD")})]}),r.orderDetails.map(s=>e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx("span",{className:"flex w-[60%] text-nowrap",children:s.menuName}),e.jsxs("div",{className:"flex w-[40%] justify-end text-nowrap",children:[e.jsxs("span",{className:"flex w-1/3 justify-end",children:[s.menuCount,"개"]}),e.jsxs("span",{className:"flex w-2/3 justify-end",children:[s.menuPrice.toLocaleString("ko"),"원"]})]})]},s.menuId)),e.jsxs("div",{className:"flex w-full items-center justify-center gap-6",children:[e.jsx("span",{className:"flex w-[20%] justify-end",children:"총 가격"}),e.jsxs("span",{className:"flex w-[50%] justify-center text-2xl",children:[r.totalMenuCost.toLocaleString("ko"),"원"]}),r.ticketId?e.jsx("div",{onClick:()=>N(r),className:"flex w-[15%] text-3xl justify-start",children:e.jsx(R,{className:"cursor-pointer"})}):e.jsx("div",{className:"flex w-[15%] text-3xl justify-start"})]})]})]}),e.jsxs("div",{className:"flex flex-col w-full h-[30%] px-10 gap-5",children:[e.jsx("span",{className:"mb-2",children:"예약자 정보"}),e.jsxs("div",{className:"flex flex-col w-full h-full px-4 justify-between",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("span",{className:"flex w-[25%] mr-4 text-darkGray justify-end text-nowrap",children:"이름"}),e.jsx("span",{children:r.reservationUserName||r.orderUserName})]}),e.jsxs("div",{className:"flex w-full",children:[e.jsx("span",{className:"flex w-[25%] mr-4 text-darkGray justify-end text-nowrap",children:"핸드폰 번호"}),e.jsx("span",{children:u(r==null?void 0:r.reservationUserPhone)||u(r==null?void 0:r.orderUserPhone)})]}),e.jsxs("div",{className:"flex w-full",children:[e.jsx("span",{className:"flex w-[25%] mr-4 text-darkGray justify-end text-nowrap",children:"인원"}),e.jsx("span",{children:r.reservationPeopleCount===0?"앉아서 주문":`${r.reservationPeopleCount}명 예약`})]}),e.jsxs("div",{className:"flex w-full",children:[e.jsx("span",{className:"flex w-[25%] mr-4 text-darkGray justify-end text-nowrap",children:"예약시간"}),e.jsx("span",{children:r.reservationTime!==null?r.reservationTime:r.orderDate})]})]})]})]}):e.jsxs("div",{className:"flex flex-col w-full h-dvh justify-center items-center gap-3",children:[e.jsx(P,{className:"text-8xl text-darkGray"}),e.jsx("span",{className:"text-2xl text-darkGray",children:"진행 중인 주문이 없습니다"}),e.jsxs("div",{onClick:()=>c(!1),className:"flex items-center gap-1 mt-3 text-xl border border-darkGray px-3 py-1 rounded-lg bg-white cursor-pointer",children:["지난 주문 내역 보기",e.jsx(m,{})]})]}):e.jsx("div",{className:`flex flex-col w-full h-dvh justify-start items-center gap-5 overflow-x-hidden overflow-y-scroll scrollbar-hide ${i.length===0?"":"py-36"}`,children:i.length===0?e.jsxs("div",{className:"flex flex-col w-full h-dvh justify-center items-center gap-3",children:[e.jsx($,{className:"text-8xl text-darkGray"}),e.jsx("span",{className:"text-2xl text-darkGray",children:"아직 주문 내역이 없습니다"}),e.jsxs("div",{onClick:()=>c(!0),className:"flex items-center gap-1 mt-3 text-xl border border-darkGray px-3 py-1 rounded-lg bg-white cursor-pointer",children:["진행 중인 주문 보기",e.jsx(m,{})]})]}):i.map((s,l)=>e.jsxs("div",{className:"w-full h-48 bg-white shadow-lg border-y border-y-gray py-3 px-6",children:[e.jsxs("div",{className:"w-full h-1/5 flex justify-between items-center",children:[e.jsx("span",{className:"text-darkGray",children:d(s.createdAt).format("YYYY-MM-DD")}),e.jsx("span",{className:"font-semibold",children:s.reservationYn>0?"예약주문":"현장결제"})]}),e.jsxs("div",{className:"w-full h-2/5 flex justify-start items-center gap-6",children:[e.jsx("img",{src:s.pic===null?"/restaurant_default.png":`${M}/pic/restaurant/${s==null?void 0:s.restaurantId}/${s==null?void 0:s.pic}`,alt:"식당이미지",className:"w-16 h-16 rounded-xl border border-neutral-200 object-cover shadow-sm p-0.5"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("div",{className:"flex font-semibold text-2xl",children:e.jsxs("div",{onClick:()=>g(s.restaurantId),className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("span",{children:s.restaurantName}),e.jsx(Y,{})]})}),e.jsx("div",{className:"flex flex-col w-full items-center justify-between",children:s.pastDtoList.length>0&&e.jsxs("div",{className:"flex w-full gap-2 items-center",children:[e.jsx("span",{className:"text-nowrap",children:s.pastDtoList[0].menuName}),s.pastDtoList.length>1&&e.jsxs("span",{className:"text-nowrap",children:["외 ",s.pastDtoList.length-1,"개"]})]})})]})]}),e.jsxs("div",{className:"flex w-full h-1/5 text-nowrap gap-2 items-center justify-end",children:[e.jsx("span",{className:"text-darkGray",children:"총 가격"}),e.jsxs("span",{className:"text-lg",children:[s.menuTotalPrice.toLocaleString("ko-KR"),"원"]})]}),e.jsx("div",{className:"flex justify-center h-1/5",children:e.jsx("button",{onClick:()=>v(s),className:`h-2/3 flex p-4 border border-darkGray rounded-sm text-nowrap items-center justify-center 
                        ${s.reviewStatus===1?"cursor-not-allowed text-darkGray border-gray":"hover:bg-primary hover:text-white cursor-pointer focus:outline focus:outline-2 focus:outline-primary hover:border-none"}
                      `,disabled:s.reviewStatus===1,children:s.reviewStatus===1?"리뷰 작성완료":"리뷰 작성"})})]},l))}),e.jsx(S,{})]})};export{K as default};
