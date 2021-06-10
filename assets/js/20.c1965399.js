(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{401:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"inventory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inventory"}},[t._v("#")]),t._v(" Inventory")]),t._v(" "),s("h2",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" GET")]),t._v(" "),s("h3",{attrs:{id:"obtener-lista"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obtener-lista"}},[t._v("#")]),t._v(" Obtener lista")]),t._v(" "),s("p",[t._v("Roles permitidos: "),s("code",[t._v("ADMIN")]),t._v(" "),s("code",[t._v("CASHIER")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET http://host.com/api/users?limit=20&offset=0&order[]=id&order[]=ASC\nAuthorization: Bearer {token}\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Queries disponibles")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("?limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 20 es el valor por defecto")]),t._v("\n?offset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 es el valor por defecto")]),t._v("\n?order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ASC     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [id, ASC] es el valor por defecto")]),t._v("\n?email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Opcional")]),t._v("\n?firstname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Opcional")]),t._v("\n?lastname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Opcional")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"obtener-uno"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obtener-uno"}},[t._v("#")]),t._v(" Obtener uno")]),t._v(" "),s("p",[t._v("Roles permitidos: "),s("code",[t._v("ADMIN")]),t._v(" "),s("code",[t._v("CASHIER")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET http://host.com/api/{uuid}\nAuthorization: Bearer {token}\n")])])]),s("h2",{attrs:{id:"post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[t._v("#")]),t._v(" POST")]),t._v(" "),s("p",[t._v("Roles permitidos: "),s("code",[t._v("ADMIN")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('POST http://host.com/api/users\nAuthorization: Bearer {token}\nContent-Type: application/json\n\n{\n    "email": "adolfo@gmail.com",\n    "password": "aeap19980929",\n    "firstname": "Adolfo",\n    "lastname": "Alvarez"\n}\n')])])]),s("h2",{attrs:{id:"put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[t._v("#")]),t._v(" PUT")]),t._v(" "),s("p",[t._v("Roles permitidos: "),s("code",[t._v("ADMIN")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('PUT http://host.com/api/users/{uuid}\nAuthorization: Bearer {token}\nContent-Type: application/json\n\n{\n    "email": "",\n    "password": "",\n    "firstname": "",\n    "lastname": ""\n}\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Nota")]),t._v(" "),s("p",[t._v("Todos los campos son opcionales, pero es requerido al menos uno")])]),t._v(" "),s("h2",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),s("p",[t._v("Roles permitidos: "),s("code",[t._v("ADMIN")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE http://host.com/api/users/{uuid}\nAuthorization: Bearer {token}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);