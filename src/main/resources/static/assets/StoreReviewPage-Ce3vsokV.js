import{c as r,h as q,j as e,A as H,B as N,e as n,n as m,f as o}from"./index-CQbk2HOI.js";import{d as v}from"./dayjs.min-CeLsBkk8.js";import{p as Q}from"./purify.es-DhD2mIk-.js";import{F as B}from"./index-A94kbpTM.js";import{S as U,P as V}from"./SideBar-DC-4fuHy.js";import{R as W}from"./quill.snow-n0zk02vA.js";import"./index-CYWm2DIY.js";import"./useModal-D2OSLqVb.js";import"./isEqual-CwlUOuli.js";const J=m.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,K=m.div`
  margin-top: 32px;
  flex-wrap: wrap;
  padding: 20px 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  width: 830px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #fff;
`,C=m.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`,X=m.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;function le(){const[k,p]=r.useState(0),[l,I]=r.useState(""),[j,y]=r.useState(!1),[x,D]=r.useState([]),[S,$]=r.useState([]),[R,A]=r.useState(0),w=v().format("YYYY-MM-DD"),T=v(w).add(-1,"day").format("YYYY-MM-DD"),[u,E]=r.useState(T),[h,Y]=r.useState(w),i=q(),c=parseInt(sessionStorage.getItem("adminId")),d=parseInt(sessionStorage.getItem("restaurantId")),f=async()=>{const t={adminId:c,restaurantId:d};try{const s=await n.get("/api/admin/restaurant/v3/black-list",{params:t,headers:{Authorization:`Bearer ${i}`}});$(s.data.resultData),console.log("블랙리스트 조회 완료",s.data.resultData)}catch(s){console.log(s)}},g=async()=>{const t={restaurantId:d,startDate:u,endDate:h};try{const s=await n.get("/api/restaurant/v3/review",{params:t});console.log("리뷰",s.data.resultData),A(s.data.resultData.avgRating),D(s.data.resultData.reviews)}catch(s){console.log(s)}},z=async t=>{const s={adminId:c,orderId:t};try{const a=await n.patch("/api/admin/restaurant/v3/review/del-request",s,{headers:{Authorization:`Bearer ${i}`}});o.fire({title:"신고가 성공적으로 접수되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),console.log(a)}catch(a){console.log(a)}},F=async t=>{const s={adminId:c,orderId:t,commentText:l};if(console.log(s),l==="<p><br></p>")o.fire({title:"댓글 내용을 입력해주세요.",icon:"error",allowOutsideClick:!1});else if(!l)o.fire({title:"댓글 내용을 입력해주세요.",icon:"error",allowOutsideClick:!1});else try{await n.post("/api/admin/restaurant/v3/review",s,{headers:{Authorization:`Bearer ${i}`}}),o.fire({title:"댓글이 등록되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),g()}catch(a){console.log(a)}},L=async t=>{const s={adminId:c,restaurantId:d,userId:t,reason:""};try{await n.post("/api/admin/restaurant/v3/black-list",s,{headers:{Authorization:`Bearer ${i}`}}),f()}catch(a){console.log(a)}},M=async t=>{try{await n.delete(`/api/admin/restaurant/reviewComment?restaurantId=${d}&orderId=${t}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire("댓글이 삭제 되었습니다.","","success"),g(),p(0)}catch(s){console.log(s)}},O=t=>{o.fire({title:"댓글을 삭제하시겠습니까?",text:"삭제한 댓글은 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(s=>{s.isConfirmed&&M(t)})},_=async(t,s)=>{try{await n.delete(`/api/admin/restaurant/v3/black-list?adminId=${c}&restaurantId=${d}&userId=${t}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire(`${s}님이 
 블랙리스트에서 삭제 되었습니다.`,"","success"),f()}catch(a){console.log(a)}},G=(t,s)=>{o.fire({title:`${s}님을 
 블랙리스트에서 삭제하시겠습니까?`,text:"삭제한 내용은 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(a=>{a.isConfirmed&&_(t,s)})};return r.useEffect(()=>{f(),g()},[u,h]),r.useEffect(()=>{console.log("가져온 데이터??",x)},[x]),r.useEffect(()=>{console.log("댓글",l)},[l]),e.jsx("div",{children:e.jsxs(J,{children:[e.jsx(U,{}),e.jsxs(K,{className:"scrollbar-hide",children:[e.jsx(C,{children:"리뷰관리"}),e.jsx("div",{className:"border-gray border mb-5"}),e.jsx("div",{className:"mb-2 text-[18px]",children:"전체 별점"}),e.jsxs("div",{className:"flex gap-3 items-center mb-3",children:[e.jsx(B,{className:"text-yellow"}),e.jsx("div",{className:"font-bold",children:R.toFixed(1)}),e.jsxs("div",{className:"text-darkGray",children:["(총 리뷰 ",x.length,"개)"]})]}),e.jsxs("div",{className:"inline-flex gap-3 items-center border border-gray px-4 py-2 rounded-[5px] mb-10",children:[e.jsx("div",{className:"text-darkGray",children:"조회기간"}),e.jsx("input",{type:"date",value:u,onChange:t=>E(t.target.value)}),e.jsx("div",{children:"~"}),e.jsx("input",{type:"date",value:h,onChange:t=>Y(t.target.value)})]}),x.map((t,s)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold mb-2",children:t.nickName}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{className:"font-bold text-[20px]",children:t.rating.toFixed(1)}),e.jsx("div",{className:"flex gap-2",children:[...Array(5)].map((a,P)=>{const b=P+1;return e.jsx(B,{className:`w-[20px] h-[20px] ${b<=t.rating?"text-yellow":"text-gray"}`},b)})})]}),e.jsx("div",{className:"mt-2 text-darkGray",children:v(t.createdAt).format("YYYY-MM-DD")})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-[435px]",children:t.reviewText}),e.jsx("div",{className:"flex w-[300px] my-3 gap-1",children:t.reviewPic.map(a=>e.jsx("img",{src:`${H}/${t.orderId}/${a}`,className:"flex min-w-[100px] w-[100px] h-[100px] object-cover rounded-[5px]",alt:""}))}),e.jsx("div",{className:"mb-2 w-[435px] flex flex-wrap gap-2",children:t.menuName.map(a=>e.jsx("div",{className:"border border-slate-300 px-3 py-1 rounded-full inline",children:a}))}),t.commentText?e.jsxs("div",{className:"mt-5 w-[435px]",children:[e.jsxs("div",{className:"flex gap-3 items-center mb-3",children:[e.jsx("div",{className:"font-bold text-[20px]",children:"내가 남긴 댓글"}),e.jsx(N,{onClick:()=>O(t.orderId),className:"cursor-pointer text-[20px]"})]}),e.jsx("p",{className:"bg-gray p-4 rounded-[5px]",dangerouslySetInnerHTML:{__html:Q.sanitize(String(t.commentText))}})]}):e.jsx("div",{children:k!==t.orderId?e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded-sm",onClick:()=>p(t.orderId),children:"댓글쓰기"}):e.jsxs("div",{children:[e.jsx(W,{className:"h-[150px] w-[435px]",placeholder:"소중한 리뷰에 답글을 남겨보세요!",modules:{toolbar:!1},readOnly:!1,onChange:a=>I(a)}),e.jsxs("div",{className:"flex justify-end gap-3 mt-2",children:[e.jsx("button",{className:"bg-gray py-1 px-3 rounded-[5px]",onClick:()=>p(0),children:"취소"}),e.jsx("button",{className:"bg-primary text-white py-1 px-3 rounded-[5px]",onClick:()=>F(t.orderId),children:"등록"})]})]})})]}),e.jsxs("div",{className:"flex gap-2 items-center cursor-pointer ml-5 text-red h-4",onClick:()=>{L(t.userId),z(t.orderId)},children:[e.jsx(V,{className:"w-[20px] h-[20px]"}),e.jsx("div",{children:"신고하기"})]})]}),e.jsx("div",{className:"border-gray border my-5"})]},s))]}),e.jsxs(X,{children:[e.jsx(C,{className:"text-center my-10",children:"블랙리스트 목록"}),e.jsx("div",{className:"mx-10 overflow-y-auto scrollbar-hide mb-5",children:S.map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsxs("div",{children:[t.nickName,"(",t.uid,")"]}),j&&e.jsx(N,{onClick:()=>G(t.userId,t.nickName),className:"cursor-pointer w-5 h-5"})]}),e.jsx("div",{className:"border-gray border mt-2"})]}))}),e.jsx("div",{className:"mt-auto mb-5 flex justify-center",children:j?e.jsx("button",{className:"bg-primary text-white py-2 px-5 rounded-[5px]",onClick:()=>y(!1),children:"확인"}):e.jsx("button",{className:"bg-primary text-white py-2 px-5 rounded-[5px]",onClick:()=>y(!0),children:"수정하기"})})]})]})})}export{le as default};
