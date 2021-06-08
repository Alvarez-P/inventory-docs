(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{379:function(e,a,s){"use strict";s.r(a);var t=s(26),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion"}},[e._v("#")]),e._v(" Configuración")]),e._v(" "),s("h2",{attrs:{id:"desarrollo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desarrollo"}},[e._v("#")]),e._v(" Desarrollo")]),e._v(" "),s("p",[e._v("Para ejecutar la API en el ambiente de desarrollo es necesario crear un archivo llamado "),s("code",[e._v(".env")]),e._v(" donde se establecerán las variables necesarias para el proyecto con el formato establecido en el archivo "),s("code",[e._v(".env.example")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Nota")]),e._v(" "),s("p",[e._v("Para el ambiente de desarrollo las siguientes variables deben tener los siguientes valores:")]),e._v(" "),s("ul",[s("li",[e._v("DB_HOST=db")]),e._v(" "),s("li",[e._v("DOCKER_COMMAND=npm run start")]),e._v(" "),s("li",[e._v("DOCKER_NODE_ENV=development")])])]),e._v(" "),s("p",[e._v("Después de ésto basta con ejecutar el proyecto con el comando:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ docker-compose up -d \n")])])]),s("p",[e._v("Unicamente es necesario esperar unos segundos a que la base de datos inicie y el proyecto ya estará listo para usarlo.")]),e._v(" "),s("p",[e._v("Para detenerlo se usa el comando:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ docker-compose down\n")])])]),s("h2",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),s("p",[e._v("Para ejecutar los tests de la API es necesario crear un archivo llamado "),s("code",[e._v(".env.test")]),e._v(" donde se establecerán las variables necesarias para el proyecto con el formato establecido en el archivo "),s("code",[e._v(".env.example")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Nota")]),e._v(" "),s("p",[e._v("Para los tests las siguientes variables deben tener los siguientes valores:")]),e._v(" "),s("ul",[s("li",[e._v("DB_HOST=db")]),e._v(" "),s("li",[e._v("DOCKER_COMMAND=npm run test")]),e._v(" "),s("li",[e._v("DOCKER_NODE_ENV=test")])])]),e._v(" "),s("p",[e._v("Después de ésto basta con ejecutar el proyecto con el comando:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ docker-compose --env-file ./.env.test up\n")])])]),s("p",[e._v("Unicamente es necesario esperar unos segundos a que la base de datos inicie y se ejecutarán tanto las migraciones como los tests.")]),e._v(" "),s("p",[e._v("Para detenerlo basta con el atajo "),s("code",[e._v("Ctrl + C")])])])}),[],!1,null,null,null);a.default=o.exports}}]);