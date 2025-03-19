import{u as I,c as r,w as S,ah as k,j as e,I as u,J as g,p as $,q as w}from"./index-DE1blNUs.js";import{b as D,F,c as O}from"./index-BOCF7S2W.js";import{R as B}from"./quill.snow-KEBiyPNa.js";import{S as L,f as T}from"./swiper-react-D1XmPXkJ.js";/* empty css                      */import"./isEqual-CwlUOuli.js";const A=g.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  gap: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
  }
`,p=g.div`
  min-width: ${({width:i})=>i?`${i}px`:"25px"};
  min-height: ${({height:i})=>i?`${i}px`:"25px"};
  width: ${({width:i})=>i?`${i}px`:"25px"};
  height: ${({height:i})=>i?`${i}px`:"25px"};
`;function z(){const i=I(),[j,v]=r.useState(""),[c,m]=r.useState([]),[d,h]=r.useState([]),x=r.useRef(null),[f,N]=r.useState(0),y=S(),n=k();console.log(n.state);const b=a=>{const t=a.target.files&&a.target.files;if(console.log(t),t){const s=Array.from(t);h(s);const l=s.map(o=>URL.createObjectURL(o));m(l)}x.current&&(x.current.value="")},C=async()=>{const a={orderId:n.state.orderId,rating:f,reviewText:j};console.log(a);const t=new FormData;t.append("reviewRequestDto",new Blob([JSON.stringify(a)],{type:"application/json"})),d.forEach(s=>{t.append("reviewPics",s)});try{const s=await $.post("/api/user/v3/review",t,{headers:{Authorization:`Bearer ${y}`}});console.log("res : ",s.data),s.data.statusCode==="200"&&w.fire({title:"리뷰가 등록되었어요",icon:"success",confirmButtonText:"확인",allowOutsideClick:!1}).then(l=>{l.isConfirmed&&i("/user/order")})}catch(s){console.log("리뷰 작성 중 오류 발생 : ",s),w.fire({title:"리뷰 작성 중 오류발생",text:s==null?void 0:s.response.data.resultMsg,icon:"error",confirmButtonText:"확인",allowOutsideClick:!1}).then(l=>{l.isConfirmed&&i("/user/order")})}},R=a=>{const t=c.indexOf(a);t!==-1&&(m(s=>s.filter((l,o)=>o!==t)),h(s=>s.filter((l,o)=>o!==t)))};return r.useEffect(()=>{console.log("프리뷰",c),console.log("이미지 파일",d)},[d,c]),e.jsxs("div",{className:"h-[100vh] relative",children:[e.jsxs(A,{children:[e.jsx(p,{children:e.jsx(u,{className:"w-full h-full cursor-pointer",onClick:()=>i(-1)})}),e.jsx("span",{children:"만족도 평가 및 리뷰"})]}),e.jsxs("div",{className:"p-[10px] px-[15px] mt-2",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(p,{width:30,height:30,children:e.jsx(D,{className:"w-full h-full text-third"})}),e.jsx("div",{className:"text-[24px] font-bold",children:"음식 평가"})]}),e.jsxs("div",{className:"ml-[46px]",children:[e.jsx("div",{className:"mt-2 text-[18px]",children:n.state.restaurantName}),e.jsx("div",{className:"flex gap-1 mt-2",children:[...Array(5)].map((a,t)=>{const s=t+1;return e.jsx(F,{className:s<=f?"text-yellow":"text-gray",onClick:()=>N(s),style:{cursor:"pointer"}},s)})}),e.jsx(B,{className:"h-[150px] mt-6 mr-5",placeholder:"다른 고객들이 참고할 수 있도록 음식 맛, 가격, 양 등 음식에 대한 경험을 적어주세요.",modules:{toolbar:!1},readOnly:!1,onChange:a=>v(a)}),e.jsxs("div",{className:"flex mt-4 items-center gap-5 mr-5",children:[e.jsx("div",{className:"px-[10px] py-[10px] border border-black rounded-[5px] w-[85px] h-[85px]",children:e.jsxs("label",{htmlFor:"reviewImg",className:"cursor-pointer",children:[e.jsx(p,{width:30,height:30,className:"m-auto mb-2",children:e.jsx(O,{className:"w-full h-full"})}),e.jsx("div",{className:"w-[65px]",children:"사진 추가"})]})}),e.jsx("input",{type:"file",id:"reviewImg",multiple:!0,className:"opacity-0 w-0 h-0",accept:"image/png, image/jpeg",onChange:a=>b(a),ref:x}),e.jsx(L,{slidesPerView:2,spaceBetween:"5px",className:"w-[200px]",children:c.map((a,t)=>e.jsx(T,{className:"min-w-[85px]",children:e.jsxs(p,{width:85,height:85,className:"relative",children:[e.jsx("img",{src:a,alt:`preview-${t}`,className:"w-full h-full"}),e.jsx("div",{className:"w-[24px] h-[24px] cursor-pointer absolute top-0 right-0 rounded-full bg-black text-white p-[2px]",children:e.jsx(u,{onClick:()=>R(a),className:"w-full h-full"})})]},t)}))})]}),e.jsx("div",{className:"mt-5 flex justify-between mr-5 items-center",children:e.jsx("div",{children:n.state.pastDtoList.map((a,t)=>e.jsx("div",{children:e.jsx("div",{className:"text-[18px]",children:a.menuName})},t))})})]})]}),e.jsx("button",{onClick:C,className:"w-full py-3 bg-primary text-white absolute bottom-0",children:"등록하기"})]})}export{z as default};
