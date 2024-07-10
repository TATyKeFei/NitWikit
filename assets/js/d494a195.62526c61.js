"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6664],{61336:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=i(74848),s=i(28453);const r={title:"\u914d\u7f6e",slug:"/database/configure",sidebar_position:2},d="\u914d\u7f6e",c={id:"advance/database/configure",title:"\u914d\u7f6e",description:"1. \u8bf7\u4e00\u5b9a\u8bb0\u5f97\u5173\u95ed\u8fdc\u7a0b\u6570\u636e\u5e93\u8bbf\u95ee;",source:"@site/docs/advance/database/configure.md",sourceDirName:"advance/database",slug:"/database/configure",permalink:"/NitWikit/database/configure",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/configure.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1720533259e3,sidebarPosition:2,frontMatter:{title:"\u914d\u7f6e",slug:"/database/configure",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/NitWikit/database/install"},next:{title:"\u5907\u4efd",permalink:"/NitWikit/database/backup"}},a={},o=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8bf7\u4e00\u5b9a\u8bb0\u5f97\u5173\u95ed\u8fdc\u7a0b\u6570\u636e\u5e93\u8bbf\u95ee;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e00\u5b9a\u8981\u5f00\u542f\u8fdc\u7a0b\u6570\u636e\u5e93\u8bf7\u8bbe\u7f6e\u590d\u6742\u5bc6\u7801;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5fc5\u987b\u8981\u5148\u521b\u5efa\u6570\u636e\u5e93\u63d2\u4ef6\u624d\u6709\u6743\u9650\u521b\u5efa\u8868(\u8fd9\u4e0d\u5e9f\u8bdd\u5417\u4e0d\u7136\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u91cc\u586b\u4ec0\u4e48);"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u8bed\u53e5\u793a\u4f8b:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE <\u6570\u636e\u5e93\u540d\u79f0> CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;\n"})}),(0,t.jsxs)(n.p,{children:["\u89e3\u91ca: ",(0,t.jsx)(n.code,{children:"CHARACTER SET utf8mb4"})," \u5c06\u6570\u636e\u5e93\u5b57\u7b26\u96c6\u8bbe\u7f6e\u4e3a utf8mb4\uff0c \u80fd\u591f\u5b58\u50a8\u5305\u62ec\u8868\u60c5\u7b26\u53f7\u5728\u5185\u7684\u6240\u6709 Unicode \u5b57\u7b26\u3002 ",(0,t.jsx)(n.code,{children:"utf8mb4_general_ci"})," \u662f\u4e00\u79cd\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff08case-insensitive\uff09\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u5982\u679c\u4f60\u60f3\u533a\u5206\u5927\u5c0f\u5199\uff0c\u53ef\u4ee5\u6539\u4e3a ",(0,t.jsx)(n.code,{children:"utf8mb4_bin"}),"\uff0c",(0,t.jsx)(n.code,{children:"_bin"})," \u610f\u4e3a\u4ee5\u4e8c\u8fdb\u5236\u65b9\u5f0f\u6bd4\u8f83\u5b57\u7b26\u3002"]})]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"\u6570\u636e\u5e93\u53c2\u6570\u8bb0\u5f97\u8c03\u6574(TODO)"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"\u5c0f\u76ae\u6570\u636e\u5e93",children:"\u5c0f\u76ae\u6570\u636e\u5e93"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u914d\u7f6e\u6570\u636e\u5e93"}),(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u597d\u540e\u5728\u9996\u9875\u542f\u52a8 MySQL"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(78038).A+"",width:"800",height:"630"})}),(0,t.jsx)(n.p,{children:"\u66f4\u6539 root \u8d26\u6237\u7684\u5bc6\u7801"}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.p,{children:"\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u4e8e\u7b80\u5355\u7684\u5bc6\u7801\uff01"}),(0,t.jsxs)(n.p,{children:["\u5c24\u5176\u662f\u4f60\u6253\u7b97\u628a\u6570\u636e\u5e93\u5f00\u5230\u516c\u7f51\uff0c",(0,t.jsx)(n.strong,{children:"\u7edd\u5bf9\u4e0d\u8981"}),"\u8bbe\u7f6e\u8fc7\u4e8e\u7b80\u5355\u7684\u5bc6\u7801\uff01"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8fd9\u771f\u7684\u5f88\u4e25\u91cd"})})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(92956).A+"",width:"800",height:"630"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(75845).A+"",width:"800",height:"630"})}),(0,t.jsx)(n.p,{children:"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5efa\u6570\u636e\u5e93\u4e86\uff0c\u5efa\u597d\u4e4b\u540e\u628a\u4f60\u586b\u8fd9\u91cc\u7684\u4fe1\u606f\u586b\u5230\u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u91cc"})]}),"\n",(0,t.jsx)(n.h1,{id:"\u5b9d\u5854\u9762\u677f",children:"\u5b9d\u5854\u9762\u677f"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u914d\u7f6e\u6570\u636e\u5e93"}),(0,t.jsx)(n.p,{children:"TODO"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},92956:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},75845:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},78038:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);