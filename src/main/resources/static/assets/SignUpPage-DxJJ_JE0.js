import{u as L,D as B,z as F,r as f,j as e,I as k,i as q,c as A,d as U}from"./index-ji0Yrnpj.js";import{o as z,c as E,a as o}from"./index.esm-D8A7WmYZ.js";import{u as R}from"./index.esm-Lv2zPOY3.js";import{L as T,H as Y,C as H,F as Z,T as _,I as l,S as c,Y as d,a as M}from"./loginStyle-QJIAXPef.js";const N=E({roleId:o(),id:o().min(6,"최소 6자 이상 작성해야 합니다.").max(12,"최대 12자까지 작성 가능합니다."),pw:o().required("비밀번호는 필수입니다.").min(8,"최소 8자 이상 작성해야 합니다.").max(16,"최대 16자까지 작성 가능합니다.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"비밀번호는 영어, 숫자, 특수문자만 가능합니다."),name:o().required("이름은 필수입니다.").min(2,"이름은 최소 2자 이상이어야 합니다."),email:o().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다."),phone:o().required("전화번호는 필수입니다.").matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,"전화번호 형식이 올바르지 않습니다.")});function K(){var u,x,g,j;const p=L(),y=B(F),[v,S]=f.useState(!1),{register:n,handleSubmit:w,formState:{errors:r},watch:a,setValue:h}=R({mode:"onChange",resolver:z(N),defaultValues:{phone:""}}),$=a("id"),C=a("pw"),D=a("name"),b=a("email"),i=a("phone"),m=$&&C&&D&&b&&i,I=async s=>{try{await A.post("/api/admin/sign-up",s),U.fire({title:"회원가입이 완료 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(t=>{t.isConfirmed&&p("/auth/signup/emailauth")}),console.log("보낸 데이터??",s)}catch(t){console.log("보낸 데이터??",s),console.log(t)}},V=async s=>{console.log(s),S(t=>!t),s.phone=s.phone.replace(/-/g,""),I(s)};return f.useEffect(()=>{i.length===11&&h("phone",i.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")),i.length===13&&h("phone",i.replace(/-/g,"").replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")),console.log(i)},[i]),e.jsxs("div",{children:[e.jsxs(T,{style:{position:"relative"},children:[e.jsx(Y,{children:e.jsx(H,{children:e.jsx(k,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>p(-1)})})}),e.jsx(Z,{children:e.jsxs("form",{onSubmit:w(V),children:[e.jsx("input",{type:"text",value:y,style:{display:"none"},...n("roleId")}),e.jsx(_,{children:"회원가입"}),e.jsxs(l,{children:[e.jsx(c,{type:"text",placeholder:"아이디",...n("id")}),e.jsx(d,{children:(u=r.id)==null?void 0:u.message})]}),e.jsxs(l,{children:[e.jsx(c,{type:"password",placeholder:"비밀번호 (8-16자)",...n("pw")}),e.jsx(d,{children:(x=r.pw)==null?void 0:x.message})]}),e.jsxs(l,{children:[e.jsx(c,{type:"text",placeholder:"이름",...n("name")}),e.jsx(d,{children:(g=r.name)==null?void 0:g.message})]}),e.jsxs(l,{children:[e.jsx(c,{type:"tel",placeholder:"휴대전화번호",maxLength:13,...n("phone")}),e.jsx(d,{children:(j=r.phone)==null?void 0:j.message})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx(M,{type:"submit",style:{backgroundColor:m?"#6F4CDB":"#ddd"},disabled:!m,children:"가입하기"})})]})})]}),v&&e.jsx(q,{})]})}export{K as default};
