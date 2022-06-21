import{r as o,u as h,a as e,j as a,L as x}from"./index.2d5db207.js";import{u as y,e as v,f as w,k as b,m as N,r as C}from"./swal.entity.db083ada.js";function S(){const[t,u]=o.exports.useState(""),[n,m]=o.exports.useState(""),[l,p]=o.exports.useState(""),[d,g]=o.exports.useState(""),{error:s,loading:i}=h(r=>r.auth),c=y();o.exports.useEffect(()=>{i?v():w(),s&&b("error",s,c,N)},[s,i]);const f=r=>{r.preventDefault(),c(C(t,n,l,d))};return e("div",{className:"flex flex-col h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:a("div",{className:"max-w-md w-full space-y-8",children:[a("div",{children:[e("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign up to your account"}),a("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or",e(x,{to:"/login",className:"font-medium text-indigo-600 hover:text-indigo-500",children:" sign in to your account"})]})]}),a("form",{className:"mt-8 space-y-6",onSubmit:r=>f(r),children:[e("input",{type:"hidden",name:"remember",value:"true"}),a("div",{className:"rounded-md shadow-sm -space-y-px",children:[a("div",{children:[e("label",{htmlFor:"username",className:"sr-only",children:"Email address"}),e("input",{id:"username",name:"email",type:"text",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",value:t,onChange:r=>u(r.target.value)})]}),a("div",{children:[e("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),e("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:r=>m(r.target.value)})]}),a("div",{children:[e("label",{htmlFor:"password",className:"sr-only",children:"Password"}),e("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",value:l,onChange:r=>p(r.target.value)})]}),a("div",{children:[e("label",{htmlFor:"password",className:"sr-only",children:"Confirm Password"}),e("input",{id:"confirmPassword",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Confirm Password",value:d,onChange:r=>g(r.target.value)})]})]}),e("div",{children:a("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[e("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:e("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),"Sign up"]})})]})]})})}export{S as default};