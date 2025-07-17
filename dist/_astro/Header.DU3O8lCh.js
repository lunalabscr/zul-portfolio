import{r as h}from"./index.BVOCwoKb.js";import{s as n}from"./index.95d291e9.DwABn2zr.js";var d={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function x(){if(p)return t;p=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(l,e,a){var u=null;if(a!==void 0&&(u=""+a),e.key!==void 0&&(u=""+e.key),"key"in e){a={};for(var c in e)c!=="key"&&(a[c]=e[c])}else a=e;return e=a.ref,{$$typeof:s,type:l,key:u,ref:e!==void 0?e:null,props:a}}return t.Fragment=i,t.jsx=o,t.jsxs=o,t}var m;function _(){return m||(m=1,d.exports=x()),d.exports}var r=_();const j=()=>{const[s,i]=h.useState(!1),o=()=>{i(!s)},l=[{name:"Bio",path:"#bio"},{name:"Musica",path:"#music"},{name:"Videos",path:"#videos"},{name:"Tienda",path:"#store"},{name:"Conciertos",path:"#events"},{name:"Espacio Lavanda",path:"#lavanda"},{name:"Blog",path:"#blog"},{name:"Contacto",path:"#contact"}],e=h.useMemo(()=>l.map(a=>r.jsx("li",{children:r.jsx("a",{href:a.path,className:n.header__nav__link,children:a.name})},a.name)),[]);return r.jsxs("header",{className:`${n.header} ${n["header--null"]}`,children:[r.jsxs("nav",{className:n.header__nav,children:[r.jsx("h1",{children:"Samantha Zul"}),r.jsx("button",{onClick:o,className:n.header__nav__toggle,children:"Menu"}),r.jsx("ul",{className:n.header__nav__ul,children:e})]}),r.jsx("ul",{className:n[`header__nav__open-menu${s?"--open":""}`],children:e})]})};export{j as Header};
