(this["webpackJsonpexcalibur-web"]=this["webpackJsonpexcalibur-web"]||[]).push([[0],{27:function(e,n,t){e.exports=t(38)},33:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(20),c=t.n(l),i=t(6),u=t(3),o=(t(32),t(33),t(1)),m=t(2),d=t(7),p=Object(a.createContext)({}),f=function(e){var n=e.children,t=r.a.useState(!1),a=Object(d.a)(t,2),l=a[0],c=a[1],i=r.a.useState(r.a.createElement(r.a.Fragment,null)),u=Object(d.a)(i,2),o={modalStatus:[l,c],modalContent:[u[0],u[1]]};return r.a.createElement(p.Provider,{value:o},n)},E=function(){var e=Object(a.useContext)(p),n=e.modalStatus,t=e.modalContent,r=n,l=Object(d.a)(r,2),c=l[0],i=l[1],u=t,o=Object(d.a)(u,2),m=o[0],f=o[1];return{open:c,setOpen:i,content:m,setContent:f,setAndOpen:function(e){f(e),i(!0)}}};function h(){var e=Object(o.a)(["\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  &:hover,\n  &:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n"]);return h=function(){return e},e}function x(){var e=Object(o.a)(["\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n"]);return x=function(){return e},e}function s(){var e=Object(o.a)(["\n  display: ",";\n  position: fixed;\n  z-index: 300;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n"]);return s=function(){return e},e}var b=m.a.div(s(),(function(e){return e.open?"block":"none"})),g=m.a.div(x()),v=m.a.span(h()),V=function(){var e=E(),n=e.open,t=e.content,a=e.setOpen;return r.a.createElement(b,{open:n},r.a.createElement(g,null,r.a.createElement(v,{onClick:function(){a(!1)}},"\xd7"),t))};function C(){var e=Object(o.a)(["\n  display: flex;\n  height: 100%;\n  margin: 0 auto;\n  max-width: 1080px;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return e},e}var w=m.a.div(C());function H(){var e=Object(o.a)(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  justify-content: flex-end;\n  list-style: none;\n  height: 100%;\n"]);return H=function(){return e},e}var O=m.a.ul(H());function j(){var e=Object(o.a)(["\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  min-height: calc(100vh - 80px);\n  padding-left: 13px;\n  padding-top: 80px;\n  @media (max-width: 1080px) {\n    padding-top: 50px;\n  }\n"]);return j=function(){return e},e}var y=m.a.article(j()),M=function(e){var n=e.width,t=e.height;return r.a.createElement("svg",{width:n,height:t,viewBox:"0 0 329 82",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M92.248 60.312H118.04V55.512H97.88V40.472H113.304V35.736H97.88V22.168H117.848V17.304H92.248V60.312ZM122.215 60.312H128.231L136.103 48.024L143.783 60.312H150.311L139.751 44.12L149.479 28.504H143.591L136.679 40.28L129.191 28.504H122.663L132.903 44.12L122.215 60.312ZM168.465 60.888C172.881 60.888 175.761 59.736 177.873 58.392V54.04C176.209 54.808 173.329 56.28 169.041 56.28C162.641 56.28 159.312 52.888 159.312 44.952V43.288C159.312 36.312 162.769 32.536 168.401 32.536C172.625 32.536 174.609 33.304 177.425 34.52V29.976C175.313 28.696 172.881 27.864 168.785 27.864C160.401 27.864 153.681 32.856 153.681 44.056V45.144C153.681 55.768 159.441 60.888 168.465 60.888ZM191.785 60.888C196.009 60.888 198.505 59.416 200.105 57.624H200.425L201.001 60.312H205.353V37.272C205.353 30.872 201.321 27.864 194.281 27.864C190.441 27.864 187.433 28.504 184.553 29.592V33.496C186.473 33.112 189.033 32.6 192.169 32.6C197.865 32.6 199.977 33.752 199.977 38.616V41.56L191.529 42.584C185.513 43.352 181.929 46.36 181.929 51.864C181.929 58.008 186.089 60.888 191.785 60.888ZM193.129 56.664C189.801 56.664 187.561 55.064 187.561 51.736C187.561 48.28 189.289 46.808 192.937 46.424L199.977 45.72V54.488C198.569 55.768 195.945 56.664 193.129 56.664ZM213.98 60.312H219.484V14.488H213.98V60.312ZM228.48 60.312H233.984V28.504H228.48V60.312ZM228.48 22.232H234.048V16.536H228.48V22.232ZM254.564 61.08C265.06 61.08 270.5 54.872 270.5 44.312V43.352C270.5 31.512 264.1 27.864 258.148 27.864C253.924 27.864 251.044 28.952 248.612 30.424H248.292V14.488H242.852V59.416C245.54 60.376 250.916 61.08 254.564 61.08ZM254.948 56.472C251.748 56.472 249.636 55.96 248.292 55.448V34.328C249.764 33.688 252.644 32.536 255.588 32.536C261.988 32.536 264.932 35.352 264.932 43.736V45.144C264.932 54.04 260.132 56.472 254.948 56.472ZM286.951 60.888C290.791 60.888 294.055 59.416 296.679 57.56H296.999L297.639 60.312H302.247V28.504H296.743V53.912C294.503 55.064 291.815 56.216 288.551 56.216C283.943 56.216 282.599 54.552 282.599 50.648V28.504H277.223V51.544C277.223 57.688 280.615 60.888 286.951 60.888ZM310.977 60.312H316.417V35.48C318.657 34.008 321.665 33.048 324.673 33.048C325.185 33.048 326.209 33.112 327.105 33.24V28.376C326.785 28.248 325.889 28.12 325.121 28.12C321.665 28.12 318.209 29.912 316.481 32.024H316.161V28.504H310.977V60.312Z",fill:"black"}),r.a.createElement("path",{d:"M16.4583 42.7917H62.5417V36.2083H16.4583V42.7917ZM9.875 55.9583H55.9583V49.375H9.875V55.9583ZM23.0417 23.0417V29.625H69.125V23.0417H23.0417Z",fill:"black"}))};M.defaultProps={width:"329",height:"82"};var Z=M,k=function(){return r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z",fill:"black"}))},L=t(26);function S(){var e=Object(o.a)(["\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n  }\n"]);return S=function(){return e},e}function z(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  min-width: 80px;\n  height: 80px;\n  margin: 0 10px;\n  align-items: center;\n  height: 100%;\n  padding: ",";\n  background-color: ",";\n"]);return z=function(){return e},e}function B(){var e=Object(o.a)(["\n  width: 100%;\n  height: 80px;\n  position: relative;\n  border-bottom: 1px solid #efefef;\n  position: fixed;\n  background-color: white;\n  @media (max-width: 1080px) {\n    height: 50px;\n  }\n"]);return B=function(){return e},e}var F=m.a.div(B()),A=m.a.li(z(),(function(e){return e.h&&"0 30px"}),(function(e){return e.h&&"rgb(178, 224, 223);"})),J=m.a.div(S()),P=function(){var e=Object(L.a)("(max-width: 1080px)"),n=E().setAndOpen;return r.a.createElement(F,null,r.a.createElement(w,{style:{paddingLeft:"15px",display:"flex",justifyContent:e?"space-between":"center"}},r.a.createElement(i.b,{to:"/",style:{textDecoration:"none",width:"200px",height:e?"50px":"74px"}},r.a.createElement(Z,{width:"200",height:e?"50":"74"})),e?r.a.createElement(J,{onClick:function(){n(r.a.createElement("div",null,"hi!"))}},r.a.createElement(k,null)):r.a.createElement(O,null,r.a.createElement(A,null,"\uc5d1\uc2a4\uce7c\ub9ac\ubc84 \uc18c\uac1c"),r.a.createElement(A,null,"\uacf5\uc9c0\uc0ac\ud56d"),r.a.createElement(A,{h:!0},"\uace0\uac1d\uc13c\ud130"))))};function D(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return e},e}function I(){var e=Object(o.a)(["\n  width: 100%;\n  height: 80px;\n  position: relative;\n  background-color: rgb(238, 238, 238);\n"]);return I=function(){return e},e}var R=m.a.footer(I()),T=m.a.li(D()),q=function(){return r.a.createElement(R,null,r.a.createElement(w,{style:{paddingLeft:"13px"}},r.a.createElement(O,{style:{justifyContent:"flex-start"}},r.a.createElement(T,null,r.a.createElement(i.b,{to:"/privacy"},"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68")))))};function G(){var e=Object(o.a)(["\n  margin: 0;\n  padding: 10px 0;\n"]);return G=function(){return e},e}var K=m.a.p(G()),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(y,null,r.a.createElement(K,null,"\uc548\ub155\ud558\uc138\uc694, Excalibur\uc785\ub2c8\ub2e4."),r.a.createElement(K,null,"Excalibur\ub294 SwordMaster\uc5d0\uc11c \uac1c\ubc1c\ud55c, \ud654\uc0c1\uac15\uc758 \uc9d1\uc911\ub825 \ud5a5\uc0c1 \uc194\ub8e8\uc158\uc785\ub2c8\ub2e4.")),r.a.createElement(q,null))};function Q(){var e=Object(o.a)(["\n  word-wrap: normal;\n  color: ",";\n  font-size: 16px;\n  line-height: 32px;\n  margin-left: ",";\n"]);return Q=function(){return e},e}function U(){var e=Object(o.a)(["\n  margin-top: 100px;\n"]);return U=function(){return e},e}function W(){var e=Object(o.a)([""]);return W=function(){return e},e}var X=m.a.h1(W()),Y=m.a.h2(U()),$=m.a.p(Q(),(function(e){return e.color?e.color:"#333"}),(function(e){return 16*e.indent+"px"})),_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(y,{style:{paddingLeft:"13px",paddingRight:"13px",paddingTop:"130px"}},r.a.createElement(X,null,"\uac1c\uc778\uc815\ubcf4\ubcf4\ud638\uc815\ucc45"),r.a.createElement(Y,null,"\uc81c1\uc870 (\uac1c\uc778\uc815\ubcf4\uc758 \ucc98\ub9ac \ubaa9\uc801)"),r.a.createElement($,null,"SwordMaster(\uc774\ud558 \u201c\uc18c\ub4dc\ub9c8\uc2a4\ud130\u201d\ub77c \ud569\ub2c8\ub2e4)\ub294 \ub2e4\uc74c\uc758 \ubaa9\uc801\uc744 \uc704\ud558\uc5ec \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \ucc98\ub9ac\ud558\uace0 \uc788\ub294 \uac1c\uc778\uc815\ubcf4\ub294 \ub2e4\uc74c\uc758 \ubaa9\uc801 \uc774\uc678\uc758 \uc6a9\ub3c4\ub85c\ub294 \uc774\uc6a9\ub418\uc9c0 \uc54a\uc73c\uba70, \uc774\uc6a9 \ubaa9\uc801\uc774 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ubc95 \uc81c18\uc870\uc5d0 \ub530\ub77c \ubcc4\ub3c4\uc758 \ub3d9\uc758\ub97c \ubc1b\ub294 \ub4f1 \ud544\uc694\ud55c \uc870\uce58\ub97c \uc774\ud589\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."),r.a.createElement($,{indent:1},"1. \ud648\ud398\uc774\uc9c0 \ud68c\uc6d0 \uac00\uc785 \ubc0f \uad00\ub9ac \ud68c\uc6d0 \uac00\uc785\uc758\uc0ac \ud655\uc778, \ud68c\uc6d0\uc81c \uc11c\ube44\uc2a4 \uc81c\uacf5\uc5d0 \ub530\ub978 \ubcf8\uc778 \uc2dd\ubcc4\u2024\uc778\uc99d, \ud68c\uc6d0\uc790\uaca9 \uc720\uc9c0\u2024\uad00\ub9ac, \uc81c\ud55c\uc801 \ubcf8\uc778\ud655\uc778\uc81c \uc2dc\ud589\uc5d0 \ub530\ub978 \ubcf8\uc778\ud655\uc778, \uc11c\ube44\uc2a4 \ubd80\uc815\uc774\uc6a9 \ubc29\uc9c0, \ub9cc 14\uc138 \ubbf8\ub9cc \uc544\ub3d9\uc758 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\uc2dc \ubc95\uc815\ub300\ub9ac\uc778\uc758 \ub3d9\uc758\uc5ec\ubd80 \ud655\uc778, \uac01\uc885 \uace0\uc9c0\u2024\ud1b5\uc9c0, \uace0\ucda9\ucc98\ub9ac \ub4f1\uc744 \ubaa9\uc801\uc73c\ub85c \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),r.a.createElement($,{indent:1},"2. \uc7ac\ud654 \ub610\ub294 \uc11c\ube44\uc2a4 \uc81c\uacf5 \ubb3c\ud488\ubc30\uc1a1, \uc11c\ube44\uc2a4 \uc81c\uacf5, \uacc4\uc57d\uc11c\u2024\uccad\uad6c\uc11c \ubc1c\uc1a1, \ucf58\ud150\uce20 \uc81c\uacf5, \ub9de\ucda4\uc11c\ube44\uc2a4 \uc81c\uacf5, \ubcf8\uc778\uc778\uc99d, \uc5f0\ub839\uc778\uc99d, \uc694\uae08\uacb0\uc81c\u2024\uc815\uc0b0, \ucc44\uad8c\ucd94\uc2ec \ub4f1\uc744 \ubaa9\uc801\uc73c\ub85c \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),r.a.createElement($,{indent:1},"3. \uace0\ucda9\ucc98\ub9ac \ubbfc\uc6d0\uc778\uc758 \uc2e0\uc6d0 \ud655\uc778, \ubbfc\uc6d0\uc0ac\ud56d \ud655\uc778, \uc0ac\uc2e4\uc870\uc0ac\ub97c \uc704\ud55c \uc5f0\ub77d\u2024\ud1b5\uc9c0, \ucc98\ub9ac\uacb0\uacfc \ud1b5\ubcf4 \ub4f1\uc758 \ubaa9\uc801\uc73c\ub85c \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),r.a.createElement($,{indent:1},"4. \ud574\ub2f9 \uc0ac\uc5c5\uc790/\ub2e8\uccb4\uc758 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\uc5c5\ubb34 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\uc5c5\ubb34\uc5d0 \ub530\ub978 \ucc98\ub9ac\ubaa9\uc801\uc73c\ub85c \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),r.a.createElement(Y,null,"\uc81c2\uc870 (\uac1c\uc778\uc815\ubcf4\uc758 \ucc98\ub9ac \ubc0f \ubcf4\uc720 \uae30\uac04)"),r.a.createElement($,null,"\u2460 \uc18c\ub4dc\ub9c8\uc2a4\ud130\ub294 \ubc95\ub839\uc5d0 \ub530\ub978 \uac1c\uc778\uc815\ubcf4 \ubcf4\uc720\u2024\uc774\uc6a9\uae30\uac04 \ub610\ub294 \uc815\ubcf4\uc8fc\uccb4\ub85c\ubd80\ud130 \uac1c\uc778\uc815\ubcf4\ub97c \uc218\uc9d1\uc2dc\uc5d0 \ub3d9\uc758\ubc1b\uc740 \uac1c\uc778\uc815\ubcf4 \ubcf4\uc720\u2024\uc774\uc6a9\uae30\uac04 \ub0b4\uc5d0\uc11c \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\u2024\ubcf4\uc720\ud569\ub2c8\ub2e4."),r.a.createElement($,null,"\u2461 \uac01\uac01\uc758 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac \ubc0f \ubcf4\uc720 \uae30\uac04\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),r.a.createElement($,{indent:1},"1. \ud648\ud398\uc774\uc9c0 \ud68c\uc6d0 \uac00\uc785 \ubc0f \uad00\ub9ac : \uc0ac\uc5c5\uc790/\ub2e8\uccb4 \ud648\ud398\uc774\uc9c0 \ud0c8\ud1f4\uc2dc\uae4c\uc9c0 \ub2e4\ub9cc, \ub2e4\uc74c\uc758 \uc0ac\uc720\uc5d0 \ud574\ub2f9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \uc0ac\uc720 \uc885\ub8cc\uc2dc\uae4c\uc9c0"),r.a.createElement($,{indent:2},"1) \uad00\uacc4 \ubc95\ub839 \uc704\ubc18\uc5d0 \ub530\ub978 \uc218\uc0ac\u2024\uc870\uc0ac \ub4f1\uc774 \uc9c4\ud589\uc911\uc778 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \uc218\uc0ac\u2024\uc870\uc0ac \uc885\ub8cc\uc2dc\uae4c\uc9c0"),r.a.createElement($,{indent:2},"2) \ud648\ud398\uc774\uc9c0 \uc774\uc6a9\uc5d0 \ub530\ub978 \ucc44\uad8c\u2024\ucc44\ubb34\uad00\uacc4 \uc794\uc874\uc2dc\uc5d0\ub294 \ud574\ub2f9 \ucc44\uad8c\u2024\ucc44\ubb34\uad00\uacc4 \uc815\uc0b0\uc2dc\uae4c\uc9c0"),r.a.createElement($,{indent:2},"3) \uc608\uc678 \uc0ac\uc720 \uc2dc\uc5d0\ub294 5\ub144 \uae4c\uc9c0"),r.a.createElement($,{indent:1},"2. \uc7ac\ud654 \ub610\ub294 \uc11c\ube44\uc2a4 \uc81c\uacf5 : \uc7ac\ud654\u2024\uc11c\ube44\uc2a4 \uacf5\uae09\uc644\ub8cc \ubc0f \uc694\uae08\uacb0\uc81c\u2024\uc815\uc0b0 \uc644\ub8cc\uc2dc\uae4c\uc9c0 \ub2e4\ub9cc, \ub2e4\uc74c\uc758 \uc0ac\uc720\uc5d0 \ud574\ub2f9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \uae30\uac04 \uc885\ub8cc\uc2dc\uae4c\uc9c0"),r.a.createElement($,{indent:2},"1) \u300c\uc804\uc790\uc0c1\uac70\ub798 \ub4f1\uc5d0\uc11c\uc758 \uc18c\ube44\uc790 \ubcf4\ud638\uc5d0 \uad00\ud55c \ubc95\ub960\u300d\uc5d0 \ub530\ub978 \ud45c\uc2dc\u2024\uad11\uace0, \uacc4\uc57d\ub0b4\uc6a9 \ubc0f \uc774\ud589 \ub4f1 \uac70\ub798\uc5d0 \uad00\ud55c \uae30\ub85d ",r.a.createElement("br",null),"- \ud45c\uc2dc\u2024\uad11\uace0\uc5d0 \uad00\ud55c \uae30\ub85d : 6\uac1c\uc6d4 ",r.a.createElement("br",null),"- \uacc4\uc57d \ub610\ub294 \uccad\uc57d\ucca0\ud68c, \ub300\uae08\uacb0\uc81c, \uc7ac\ud654 \ub4f1\uc758 \uacf5\uae09\uae30\ub85d : 5\ub144",r.a.createElement("br",null)," - \uc18c\ube44\uc790 \ubd88\ub9cc \ub610\ub294 \ubd84\uc7c1\ucc98\ub9ac\uc5d0 \uad00\ud55c \uae30\ub85d : 3\ub144"),r.a.createElement($,{indent:2},"2) \u300c\ud1b5\uc2e0\ube44\ubc00\ubcf4\ud638\ubc95\u300d\uc81c41\uc870\uc5d0 \ub530\ub978 \ud1b5\uc2e0\uc0ac\uc2e4\ud655\uc778\uc790\ub8cc \ubcf4\uad00 ",r.a.createElement("br",null),"- \uac00\uc785\uc790 \uc804\uae30\ud1b5\uc2e0\uc77c\uc2dc, \uac1c\uc2dc\u2024\uc885\ub8cc\uc2dc\uac04, \uc0c1\ub300\ubc29 \uac00\uc785\uc790\ubc88\ud638, \uc0ac\uc6a9\ub3c4\uc218, \ubc1c\uc2e0\uae30\uc9c0\uad6d \uc704\uce58\ucd94\uc801\uc790\ub8cc : 1\ub144 ",r.a.createElement("br",null),"- \ucef4\ud4e8\ud130\ud1b5\uc2e0, \uc778\ud130\ub137 \ub85c\uadf8\uae30\ub85d\uc790\ub8cc, \uc811\uc18d\uc9c0 \ucd94\uc801\uc790\ub8cc : 3\uac1c\uc6d4"),r.a.createElement($,{indent:2},"3) \u300c\uc815\ubcf4\ud1b5\uc2e0\ub9dd \uc774\uc6a9\ucd09\uc9c4 \ubc0f \uc815\ubcf4\ubcf4\ud638 \ub4f1\uc5d0 \uad00\ud55c \ubc95\ub960\u300d\uc2dc\ud589\ub839 \uc81c29\uc870\uc5d0 \ub530\ub978 \ubcf8\uc778\ud655\uc778\uc815\ubcf4 \ubcf4\uad00 : \uac8c\uc2dc\ud310\uc5d0 \uc815\ubcf4 \uac8c\uc2dc\uac00 \uc885\ub8cc\ub41c \ud6c4 6\uac1c\uc6d4"),r.a.createElement($,{indent:2},"4) `\uac1c\uc778\uc815\ubcf4 \ubcf4\uc720\uae30\uac04 \uadfc\uac70\ubc95\ub839 \ubc0f \uc870\ubb38` :`\ubcf4\uc720\uae30\uac04`"),r.a.createElement($,{indent:1},"3. `\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\uc5c5\ubb34` : `\ubcf4\uc720\uae30\uac04`"),r.a.createElement(Y,null,"\uc81c3\uc870 (\uac1c\uc778\uc815\ubcf4\uc758 \uc81c3\uc790 \uc81c\uacf5)"),r.a.createElement($,null,"\u2460 `\uc0ac\uc5c5\uc790/\ub2e8\uccb4\uba85`\uc740(\ub294) \uc815\ubcf4\uc8fc\uccb4\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \uc81c1\uc870(\uac1c\uc778\uc815\ubcf4\uc758 \ucc98\ub9ac \ubaa9\uc801)\uc5d0\uc11c \uba85\uc2dc\ud55c \ubc94\uc704 \ub0b4\uc5d0\uc11c\ub9cc \ucc98\ub9ac\ud558\uba70, \uc815\ubcf4\uc8fc\uccb4\uc758 \ub3d9\uc758, \ubc95\ub960\uc758 \ud2b9\ubcc4\ud55c \uaddc\uc815 \ub4f1 \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ubc95 \uc81c17\uc870 \ubc0f \uc81c18\uc870\uc5d0 \ud574\ub2f9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uac1c\uc778\uc815\ubcf4\ub97c \uc81c3\uc790\uc5d0\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4."),r.a.createElement($,null,"\u2461 `\uc0ac\uc5c5\uc790/\ub2e8\uccb4\uba85`\uc740(\ub294) \ub2e4\uc74c\uacfc \uac19\uc774 \uac1c\uc778\uc815\ubcf4\ub97c \uc81c3\uc790\uc5d0\uac8c \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement($,{indent:1},"1. OOO \uc2e0\uc6a9\uce74\ub4dc\uc0ac (\uc5c5\ubb34\uc81c\ud734\uc0ac)",r.a.createElement("br",null),"- \uac1c\uc778\uc815\ubcf4\ub97c \uc81c\uacf5\ubc1b\ub294 \uc790 : (\uc8fc) OOO \uce74\ub4dc",r.a.createElement("br",null),"- \uc81c\uacf5\ubc1b\ub294 \uc790\uc758 \uac1c\uc778\uc815\ubcf4 \uc774\uc6a9\ubaa9\uc801 : \uc774\ubca4\ud2b8 \uacf5\ub3d9\uac1c\ucd5c \ub4f1 \uc5c5\ubb34\uc81c\ud734 \ubc0f \uc81c\ud734 \uc2e0\uc6a9\uce74\ub4dc \ubc1c\uae09",r.a.createElement("br",null),"- \uc81c\uacf5\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9 : \uc131\uba85, \uc8fc\uc18c, \uc804\ud654\ubc88\ud638, \uc774\uba54\uc77c\uc8fc\uc18c, \uce74\ub4dc\uacb0\uc81c\uacc4\uc88c\uc815\ubcf4, \uc2e0\uc6a9\ub3c4\uc815\ubcf4",r.a.createElement("br",null),"- \uc81c\uacf5\ubc1b\ub294 \uc790\uc758 \ubcf4\uc720\u2024\uc774\uc6a9\uae30\uac04 : \uc2e0\uc6a9\uce74\ub4dc \ubc1c\uae09\uacc4\uc57d\uc5d0 \ub530\ub978 \uac70\ub798\uae30\uac04\ub3d9\uc548"),r.a.createElement($,{indent:1},"2. OOO\uc0ac",r.a.createElement("br",null)," - \uac1c\uc778\uc815\ubcf4\ub97c \uc81c\uacf5\ubc1b\ub294 \uc790 : `\uc81c\uacf5\ubc1b\ub294 \uc790\uc758 \ubc95\uc778\uba85 \ub610\ub294 \uba85\uce6d` - \uc81c\uacf5\ubc1b\ub294 \uc790\uc758 \uac1c\uc778\uc815\ubcf4 \uc774\uc6a9\ubaa9\uc801 : `\uad6c\uccb4\uc801 \uc774\uc6a9\ubaa9\uc801` ",r.a.createElement("br",null),"- \uc81c\uacf5\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9 : `\uac01 \ud56d\ubaa9` ",r.a.createElement("br",null),"- \uc81c\uacf5\ubc1b\ub294 \uc790\uc758 \ubcf4\uc720\u2024\uc774\uc6a9\uae30\uac04 : `OO\uc2dc\uae4c\uc9c0` \ub610\ub294 `0\ub144`"),r.a.createElement(Y,null,"\uc81c4\uc870 (\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac \uc704\ud0c1)"),r.a.createElement(Y,null,"\uc81c5\uc870 (\uace0\uac1d\uc758 \uad8c\ub9ac\xb7\uc758\ubb34 \ubc0f \uadf8 \ud589\uc0ac\ubc29\ubc95)"),r.a.createElement(Y,null,"\uc81c6\uc870 (\ucc98\ub9ac\ud558\ub294 \uac1c\uc778\uc815\ubcf4\uc758 \ud56d\ubaa9)"),r.a.createElement(Y,null,"\uc81c7\uc870 (\uac1c\uc778\uc815\ubcf4\uc758 \ud30c\uae30\uc808\ucc28 \ubc0f \ud30c\uae30\ubc29\ubc95)"),r.a.createElement(Y,null,"\uc81c8\uc870 (\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ucc45\uc784\uc790)"),r.a.createElement(Y,null,"\uc81c9\uc870 (\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68\uc758 \ubcc0\uacbd)"),r.a.createElement(Y,null,"\uc81c10\uc870 (\uac1c\uc778\uc815\ubcf4\uc758 \uc548\uc804\uc131 \ud655\ubcf4\uc870\uce58)"),r.a.createElement(Y,null,"\uc81c11\uc870 (\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \ucc45\uc784\uc790)"),r.a.createElement(Y,null,"\uc81c12\uc870 (\uac1c\uc778\uc815\ubcf4 \uc790\ub3d9 \uc218\uc9d1 \uc7a5\uce58\uc758 \uc124\uce58 \u2219 \uc6b4\uc601 \ubc0f \uadf8 \uac70\ubd80\uc5d0 \uad00\ud55c \uc0ac\ud56d)"),r.a.createElement("p",null,"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 \ubc84\uc804\ubc88\ud638 : Ver 1.0",r.a.createElement("br",null),"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 \uc2dc\ud589\uc77c\uc790 : 2020.10.18")),r.a.createElement(q,null))};var ee=function(){return r.a.createElement(f,null,r.a.createElement(V,null),r.a.createElement(i.a,null,r.a.createElement(u.a,{exact:!0,key:"/",path:"/",component:N}),r.a.createElement(u.a,{exact:!0,key:"/privacy",path:"/privacy",component:_})))};c.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e2d237d1.chunk.js.map