import{u as D,r as b,D as B,z as F,j as e,I,i as k,U as L,c as m,d as u,B as R}from"./index-ji0Yrnpj.js";import{o as T,c as E,a as h}from"./index.esm-D8A7WmYZ.js";import{u as P}from"./index.esm-Lv2zPOY3.js";import{L as $,H as O,C as U,F as V,T as Y,I as f,S as x,Y as p,a as A}from"./loginStyle-QJIAXPef.js";const H=E({id:h().min(6,"최소 6자 이상 작성해야 합니다.").max(12,"최대 12자까지 작성 가능합니다."),email:h().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다.")});function N(){var c,d;const t=D(),[j,g]=b.useState(!1),a=B(F),{register:o,handleSubmit:w,formState:{errors:r},watch:n}=P({mode:"onChange",resolver:T(H)}),v=async i=>{try{a===L?(await m.put("/api/user/find-passowrd",i),u.fire({title:`${i.email}로 비밀번호가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&t("/auth")})):a===R&&(await m.put("/api/admin/find-passowrd",i),u.fire({title:`${i.email}로 비밀번호가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&t("/auth")}))}catch(s){console.log(s)}},S=i=>{g(s=>!s),v(i)},C=n("id"),y=n("email"),l=C&&y;return e.jsxs("div",{children:[e.jsxs($,{style:{position:"relative"},children:[e.jsx(O,{children:e.jsx(U,{children:e.jsx(I,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>t(-1)})})}),e.jsx(V,{children:e.jsxs("form",{onSubmit:w(S),children:[e.jsx(Y,{children:"비밀번호 찾기"}),e.jsxs(f,{children:[e.jsx(x,{type:"text",placeholder:"아이디",...o("id")}),e.jsx(p,{children:(c=r.id)==null?void 0:c.message})]}),e.jsxs(f,{children:[e.jsx(x,{type:"email",placeholder:"이메일",...o("email")}),e.jsx(p,{children:(d=r.email)==null?void 0:d.message})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx(A,{type:"submit",style:{backgroundColor:l?"#6F4CDB":"#ddd"},disabled:!l,children:"확인"})})]})})]}),j&&e.jsx(k,{})]})}export{N as default};
