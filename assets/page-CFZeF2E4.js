import{j as e,L as m,C as c,S as a,e as d,r as u,F as x}from"./index-Baok-rJZ.js";function j(){return e.jsx(m,{title:"Contact with us",description:"cotact Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione",href:"https://osama263.github.io/water/#/contact",children:e.jsxs(c,{children:[e.jsx(a,{children:e.jsxs("div",{className:"py-10 border-b flex items-center justify-center gap-8 border-Ocean",children:[e.jsx("img",{src:"logo.svg",className:"w-[5%]",alt:"spining logo"}),e.jsx("h1",{className:"sm:text-9xl text-5xl text-white font-semibold",children:"Contact"})]})}),e.jsx(a,{offset:.4,children:e.jsx(p,{})})]})})}const p=()=>{const r=d(),[i,n]=u.useState({}),s=t=>{n(o=>({...o,[t.target.name]:t.target.value}))},l=t=>{t.preventDefault(),console.log(i),r("/")};return e.jsxs(h,{onSubmit:l,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{onChange:t=>s(t),required:!0,type:"text",name:"name",id:"name",placeholder:"Enter your name",className:"input-styles"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"E-mail"}),e.jsx("input",{onChange:t=>s(t),required:!0,type:"email",name:"email",id:"email",placeholder:"Enter your e-mail",className:"input-styles"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{onChange:t=>s(t),required:!0,type:"text",name:"message",id:"message",placeholder:"Your message...",className:"input-styles",rows:4})]}),e.jsx("button",{"aria-label":"submit message",type:"submit",className:"main-btn !bg-Ocean !rounded-md !py-4",children:"Submit Message"})]})},h=x.form`
py-28
lg:w-1/2
mx-auto
[&>div]:space-y-6
[&>div]:text-Gray
[&_label]:cursor-pointer
[&_label]:text-xl
space-y-20
`;export{j as default};
