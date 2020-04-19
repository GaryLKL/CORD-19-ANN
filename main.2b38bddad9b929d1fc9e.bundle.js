!function(e){function t(t){for(var n,l,i=t[0],c=t[1],u=t[2],p=0,s=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);s.length;)s.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;o.push([229,1]),a()}({229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a(140),i=a.n(l),c=a(263),u=a(90),d=a.n(u),p={dark:"#424242",purple:"#71368A",golden:"#FFD700",red:"#cc2b1d",blue:"#6236FF",white:"#FFFFFF",darkGreen:"#327d4a",gray:"#A8A8A8",grayLight:"#fafafa",navy:"#004c6d",green:"#42f54e",orange:"#F28F3B",black:"#000000",dark_navy:"#022F59",yellow:"#FFD000"},s={palette:{type:"light",primary:{main:p.dark},secondary:{main:p.purple}},typography:{body2:{fontSize:"0.75rem"}}},m=a(16),f=a.n(m),h=a(26),g=a.n(h),y=a(234),v=a(266),b=a(235),x=a(139),E=a.n(x),w=(a(99),a(27)),N=a.n(w),S=a(5),k=a.n(S),F=a(258),O=a(265),j=a(257),B=a(233),R=a(137),T=a.n(R),D=(a(118),a(119),a(120),a(30)),A=a.n(D),C=a(13),W=a.n(C),P=a(264),_=a(256),M=a(267),I=N()({root:{borderBottom:"1px solid #e8e8e8"},indicator:{backgroundColor:"#1890ff"}})(P.a),q=N()((function(e){return{root:{variant:"button",textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(4),"&:hover":{color:"#40a9ff",opacity:1},"&$selected":{color:"#1890ff",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}))((function(e){return r.a.createElement(_.a,W()({disableRipple:!0},e))})),z=f()((function(e){return{root:{flexGrow:1},padding:{padding:e.spacing(3)},demo1:{backgroundColor:e.palette.background.paper},demo2:{backgroundColor:"#2e1534"}}}));function G(e){var t=e.children,a=e.value,n=e.index,o=A()(e,["children","value","index"]);return r.a.createElement(B.a,W()({component:"div",role:"tabpanel",hidden:a!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},o),a===n&&r.a.createElement(M.a,{p:3},t))}function L(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}function H(e,t){var a=e.indexOf(t);return[e.substring(0,a),e.substring(a,a+t.length),e.substring(a+t.length)]}G.propTypes={children:k.a.node,index:k.a.any.isRequired,value:k.a.any.isRequired};var J=a(259),K=f()((function(e){return{root:{width:"100%",padding:"10px 5px"},heading:{fontSize:e.typography.pxToRem(18),fontWeight:500,flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(13),color:e.palette.text.secondary},searchTitle:{padding:"28px 5px"},authors:{display:"flex",flexDirection:"row",flexWrap:"wrap",paddingBottom:"16px"},expansionDetails:{display:"flex",flexDirection:"column"}}})),$=N()({root:{marginBottom:"10px"},expanded:{}})(O.a),Q=N()({content:{display:"initial",padding:"0px 24px 0px 24px"}})(j.a),U=N()({root:{padding:"8px 49px 24px"}})(F.a),V=N()({root:{color:"blue"}})(J.a);function X(e){var t=K(),a=r.a.useState(!1),n=g()(a,2),o=n[0],l=n[1];return r.a.createElement("div",{className:t.root},e.response.hits.map((function(e,a){return r.a.createElement($,{key:a,expanded:o===a,onChange:(n=a,function(e,t){l(!!t&&n)})},r.a.createElement(Q,{expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(B.a,{className:t.heading,variant:"h1"},""===e.title?"No Title":e.title),r.a.createElement(B.a,{className:t.secondaryHeading,variant:"body1"},"Matching Sentence: ",e.sentence)),r.a.createElement(U,{className:t.expansionDetails},r.a.createElement("div",{className:t.authors},e.authors.map((function(t,a){return r.a.createElement(B.a,{variant:"body2",key:a,display:"initial"},t.first," ",t.last,a===e.authors.length-1?null:",","  ")}))),r.a.createElement(V,{variant:"body2",href:void 0===e.metadata?"#":e.metadata.url,target:"_blank"},void 0===e.metadata?"N/A":e.metadata.url),r.a.createElement("div",null,function(e){var t=z(),a=r.a.useState(0),n=g()(a,2),o=n[0],l=n[1];return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.demo1},r.a.createElement(I,{value:o,onChange:function(e,t){l(t)},"aria-label":"content"},r.a.createElement(q,W()({label:"Sentence Context"},L(0))),r.a.createElement(q,W()({label:"Abstract"},L(1))),r.a.createElement(q,W()({label:"Similarity"},L(2)))),r.a.createElement(G,{value:o,index:0},r.a.createElement(B.a,{variant:"body1",style:{display:"inline"}},H(e.paragraph.text,e.sentence)[0]),r.a.createElement(B.a,{variant:"body1",style:{fontWeight:"bold",display:"inline"}},H(e.paragraph.text,e.sentence)[1]),r.a.createElement(B.a,{variant:"body1",style:{display:"inline"}},H(e.paragraph.text,e.sentence)[2])),r.a.createElement(G,{value:o,index:1},r.a.createElement(B.a,{variant:"body1"},0===e.abstract.length?"No Abstract Available":e.abstract[0].text)),r.a.createElement(G,{value:o,index:2},r.a.createElement(B.a,{variant:"overline",style:{fontSize:13,fontWeight:"bold"}},"Distance: ",Number(e.distance.toFixed(4)))),r.a.createElement(B.a,{className:t.padding})))}(e))));var n})))}X.propTypes={response:k.a.object};var Y=a(260),Z=f()((function(e){return{root:{width:"100%","& > * + *":{marginLeft:e.spacing(2)}}}}));function ee(){var e=Z();return r.a.createElement("div",{className:e.root},r.a.createElement(Y.a,{color:"secondary"}))}var te=a(138),ae=a.n(te);function ne(e){return ae()({url:"http://10.101.54.153:1338/query",method:"post",data:e})}var re=f()((function(e){return{root:{padding:"2px 4px",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4},searchBar:{width:"100%",display:"flex",alignItems:"center"}}}));function oe(){var e=re(),t=r.a.useState(null),a=g()(t,2),n=a[0],o=a[1],l=r.a.useState(null),i=g()(l,2),c=i[0],u=i[1],d=r.a.useState(!1),p=g()(d,2),s=p[0],m=p[1];return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{component:"form",type:"submit",className:e.searchBar,onKeyPress:function(e){"Enter"===e.key&&(m(!0),ne(c).then((function(e){o(e.data),m(!1)})),e.preventDefault())}},r.a.createElement(v.a,{className:e.input,placeholder:"Enter sentence to search",onInput:function(e){return u(e.target.value)}}),r.a.createElement(b.a,{className:e.iconButton,"aria-label":"search",onClick:function(e){m(!0),ne(e.target.value).then((function(e){o(e.data),m(!1)}))}},r.a.createElement(E.a,null))),1==s&&r.a.createElement(ee,null),null!==n&&r.a.createElement(X,{className:e.resultShow,response:n}))}var le=f()((function(){return{root:{padding:"32px 22px",display:"flex",flexDirection:"column",alignItems:"center"}}}));var ie=function(){var e=le();return r.a.createElement("div",{className:e.root},r.a.createElement("h3",{align:"left"},"Enter a sentence to query the index. Results include the title of the journal and the sentence that was found ordered by similarity. More details are shown if expanded."),r.a.createElement(oe,null))},ce=a(261),ue=a(262),de=f()((function(){return{appRoot:{flexGrow:1},appTitle:{flexGrow:1},appBar:{alignItems:"center",backgroundColor:"#c13164"}}}));function pe(){var e=de();return r.a.createElement("div",{className:e.appRoot},r.a.createElement(ce.a,{position:"static",className:e.appBar},r.a.createElement(ue.a,null,r.a.createElement(B.a,{variant:"h6",className:e.appTitle},"CORD-19-ANN"))))}var se=function(){return r.a.createElement(i.a,{theme:d()(s)},r.a.createElement(c.a,null),r.a.createElement(pe,null),r.a.createElement(ie,null))};Object(o.render)(r.a.createElement(se,null),document.getElementById("root"))}});