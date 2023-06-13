(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(23),i=a.n(s),r=(a(45),a(46),a(6)),l=a(71),o=(a(47),a(48),a.p+"static/media/dog1.1f26d2ad.jpg"),d=a.p+"static/media/dog2.73a2d24e.jpg",m=a.p+"static/media/dog3.14be8e5f.jpg",j=a(8),u=a(0),h=function(){return Object(u.jsxs)("div",{className:"landing-page",children:[Object(u.jsx)("div",{className:"hero-section",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)("h1",{className:"text-center landing-title",children:"Bienvenido a Dogs World"}),Object(u.jsx)("p",{className:"text-center landing-subtitle",children:"Descubre el mundo de los perros y encuentra informaci\xf3n fascinante."}),Object(u.jsx)(j.b,{className:"botonlanding",to:"/home",children:"\ud83d\udc36 inicio \ud83d\udc36"})]})}),Object(u.jsx)("div",{className:"content-section",children:Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h2",{className:"section-title",children:"Explora diferentes razas de perros"}),Object(u.jsx)("p",{className:"section-description",children:"Descubre la diversidad de tama\xf1os, colores y formas que existen en el mundo canino, desde peque\xf1as razas de compa\xf1\xeda hasta imponentes razas de trabajo. Aprende sobre las peculiaridades de cada raza, desde las caracter\xedsticas f\xedsicas distintivas hasta sus comportamientos t\xedpicos, lo que te ayudar\xe1 a comprender mejor a tu futuro compa\xf1ero peludo. Obt\xe9n informaci\xf3n detallada sobre el temperamento de cada raza, lo que te permitir\xe1 elegir una que se adapte a tu estilo de vida, personalidad y necesidades espec\xedficas. Descubre los cuidados necesarios para mantener a tu perro sano y feliz, desde sus requerimientos de ejercicio y alimentaci\xf3n hasta las rutinas de higiene y atenci\xf3n veterinaria recomendadas. Explora el fascinante mundo de las razas de perros y encuentra el compa\xf1ero perfecto que se ajuste a tu estilo de vida y preferencias."})]}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{src:o,alt:"Perros",className:"img-fluid imagenes"})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{src:d,alt:"Perros",className:"img-fluid imagenes"})}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h2",{className:"section-title",children:"Crea una nueva raza"}),Object(u.jsx)("p",{className:"section-description",children:"En nuestra web, te brindamos la oportunidad de ser parte activa en el mundo de los perros. Queremos que compartas tus conocimientos y pasi\xf3n por los caninos al crear una nueva raza. Si has descubierto una raza \xfanica o tienes informaci\xf3n detallada sobre una raza poco conocida, este es el lugar perfecto para compartirla. A trav\xe9s de nuestro formulario de creaci\xf3n de razas, puedes agregar todos los detalles importantes, como el nombre de la raza, su origen, caracter\xedsticas distintivas y cualquier otra informaci\xf3n relevante. \xa1Ay\xfadanos a ampliar nuestra base de datos canina y contribuye a la comunidad compartiendo tu descubrimiento! Juntos, podemos explorar y celebrar la diversidad canina."})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h2",{className:"section-title",children:"Convi\xe9rtete en un experto en el apasionante mundo de los perros."}),Object(u.jsx)("p",{className:"section-description",children:"Sum\xe9rgete en un mar de conocimiento a trav\xe9s de una amplia gama de recursos disponibles. Explora art\xedculos informativos, sum\xe9rgete en libros especializados y descubre valiosos recursos en l\xednea. A medida que te sumerjas en este universo canino, adquirir\xe1s una comprensi\xf3n profunda de sus comportamientos, necesidades y cuidados. \xa1Prep\xe1rate para convertirte en un verdadero experto en el mundo de los perros! \ud83d\udc3e\ud83d\udcda\ud83d\udcd6"})]}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{src:m,alt:"Perro experto",className:"img-fluid imagenes"})})]})]})}),Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("p",{className:"text-center footer-text",children:"\xa9 2023 Dogs World. Todos los derechos reservados."})})})]})},b=a(10),p=a(9),O=a(38),x=a(14),g=a(17),v=a(70),f="GET_ALL_DOGS",N="GET_ALL_TEMPERAMENTS",_="GET_DOG_NAME",w="GET_DOG_DETAIL",y="FILTER_BY_NAME",T="FILTER_BY_WEIGHT",E="FILTER_BY_TEMPERAMENTS",D="FILTER_CREATED_DOG",C="CLEAR_DETAIL";function I(){return function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/temperaments");case 2:return a=e.sent,e.abrupt("return",t({type:N,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}a(62);function A(e){var t=e.image,a=e.name,n=e.temperament,c=e.weight_min,s=e.weight_max,i=e.id,r=e.lifeTime;return Object(u.jsx)("div",{className:"card-container",children:Object(u.jsxs)(j.b,{className:"link",to:"/home/".concat(i),children:[Object(u.jsx)("div",{className:"card-image-container",children:Object(u.jsx)("img",{className:"card-image",src:t,alt:"imagen de: ".concat(a)})}),Object(u.jsxs)("div",{className:"card-details",children:["\ud83d\udc36",Object(u.jsxs)("h2",{className:"card-title",children:[" ",a," "]}),Object(u.jsxs)("h4",{className:"card-text",children:["Temperamento: ",n]}),Object(u.jsxs)("h4",{className:"card-text",children:["Rango de peso: ",c," - ",s," Kg"]}),Object(u.jsxs)("h4",{className:"card-text",children:["Esperanza de vida: ",r]})]})]})})}a(63);function L(e){var t=e.paginado,a=Object(p.b)(),c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],l=s[1],o=Object(r.f)(),d=function(e){var n;e.preventDefault(),i&&a((n=i,function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/dogs?name=".concat(n));case 3:return a=e.sent,e.abrupt("return",t({type:_,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),alert("The dog could not be found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),l(""),o.push("/home"),t(1)};return Object(u.jsx)("div",{className:"searchbar_container",children:Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("input",{className:"searchbar",type:"text",onChange:function(e){return function(e){e.preventDefault(),l(e.target.value)}(e)},value:i,placeholder:"Search..."}),Object(u.jsx)("button",{className:"searchbar_button",type:"submit",onClick:function(e){return d(e)},children:"Search"})]})})}a(64);function S(e){for(var t=e.dogsPerPage,a=e.allDogs,n=e.paginado,c=e.currentPage,s=[],i=1;i<=Math.ceil(a/t);i++)s.push(i);return Object(u.jsx)("nav",{className:"back",children:Object(u.jsxs)("ul",{className:"ul",children:[Object(u.jsx)("li",{className:"list",children:Object(u.jsx)("button",{disabled:1===c,onClick:function(){return n(c-1)},children:"Back  \ud83d\udc3e"})}),Object(u.jsx)("li",{className:"list",children:Object(u.jsx)("button",{disabled:c===s.length,onClick:function(){return n(c+1)},children:"Go  \ud83d\udc3e"})})]})})}var M=a.p+"static/media/drawing-2802_256.cce8fc3a.gif";a(65);function P(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.dogs})),a=Object(p.c)((function(e){return e.temperaments})),c=Object(n.useState)(""),s=Object(b.a)(c,2),i=(s[0],s[1]),r=Object(n.useState)(1),l=Object(b.a)(r,2),o=l[0],d=l[1],m=Object(n.useState)(8),h=Object(b.a)(m,2),N=h[0],_=(h[1],o*N),w=_-N,C=t.slice(w,_),P=Object(n.useState)(!1),G=Object(b.a)(P,2),k=G[0],z=G[1],q=function(e){d(e)};Object(n.useEffect)((function(){e(function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/dogs");case 2:return a=e.sent,e.abrupt("return",t({type:f,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(I())}),[]);return Object(u.jsxs)("div",{className:"container_home",children:[Object(u.jsx)("h1",{children:"Dogs World"}),Object(u.jsxs)("div",{className:"headerContainerLeft",children:[Object(u.jsx)("div",{className:"menu-icon",onClick:function(){z(!k)},children:Object(u.jsx)(O.a,{})}),Object(u.jsxs)("div",{className:"containerFilters ".concat(k?"active":""),children:[Object(u.jsx)("div",{className:"select-container",children:Object(u.jsxs)("select",{onChange:function(t){var a;e((a=t.target.value,{type:y,payload:a})),d(1),i("Ordenado ".concat(t.target.value))},children:[Object(u.jsx)("option",{defaultValue:!0,children:"Ordenar por nombre"}),Object(u.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(u.jsx)("option",{value:"Z-A",children:"Z-A"})]})}),Object(u.jsx)("div",{className:"select-container",children:Object(u.jsxs)("select",{onChange:function(t){var a;e((a=t.target.value,{type:T,payload:a})),d(1),i("Ordenado ".concat(t.target.value))},children:[Object(u.jsx)("option",{defaultValue:!0,children:"Ordenar por peso"}),Object(u.jsx)("option",{value:"max_weight",children:"Max"}),Object(u.jsx)("option",{value:"min_weight",children:"Min"})]})}),Object(u.jsx)("div",{className:"select-container",children:Object(u.jsxs)("select",{onChange:function(t){var a;e((a=t.target.value,{type:D,payload:a})),d(1)},children:[Object(u.jsx)("option",{defaultValue:!0,children:"Ordenar por creaci\xf3n"}),Object(u.jsx)("option",{value:"all",children:"Todos"}),Object(u.jsx)("option",{value:"created",children:"Creados"}),Object(u.jsx)("option",{value:"api",children:"API"})]})}),Object(u.jsx)("div",{className:"select-container",children:Object(u.jsxs)("select",{onChange:function(t){var a;t.preventDefault(),e((a=t.target.value,{type:E,payload:a})),d(1)},children:[Object(u.jsx)("option",{defaultValue:!0,children:"Temperamentos"}),Object(u.jsx)("option",{value:"All",children:"Todos"}),a.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]})})]})]}),Object(u.jsx)("div",{className:"arreglo",children:Object(u.jsx)(j.b,{to:"/create",children:Object(u.jsx)("button",{className:"btn",children:"Crear"})})}),Object(u.jsx)(S,{dogsPerPage:N,allDogs:t.length,paginado:q,currentPage:o}),Object(u.jsx)("div",{className:"search",children:Object(u.jsx)(L,{paginado:q})}),Object(u.jsx)("div",{children:Object.keys(t).length?Object(u.jsx)("div",{children:null===C||void 0===C?void 0:C.map((function(e){return Object(u.jsx)("div",{className:"containertarjetas",children:Object(u.jsx)(A,{id:e.id,image:e.image,name:e.name,temperament:e.temperament,weight_min:e.weight_min,weight_max:e.weight_max,lifeTime:e.lifeTime},e.id)},e.id)}))}):Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"loading-image",src:M,alt:"Loading..."})})})})]})}a(66);function G(e){var t=Object(p.b)(),a=Object(p.c)((function(e){return e.dogDetail}));return Object(n.useEffect)((function(){var a;return t((a=e.match.params.id,function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var n;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/dogs/".concat(a));case 3:return n=e.sent,e.abrupt("return",t({type:w,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),function(){t({type:C})}}),[t,e.match.params.id]),Object(u.jsxs)("div",{className:"detail-container",children:[Object(u.jsx)(j.b,{to:"/home",children:Object(u.jsx)("button",{className:"go-home-btn",children:"Go Home"})}),Object.keys(a).length?Object(u.jsxs)("div",{className:"detail-content",children:[Object(u.jsxs)("div",{className:"detail-image",children:[!a[0].createdInDb&&Object(u.jsx)("div",{className:"detail-api",children:"***This dog was retrieved from the API***"}),a[0].createdInDb&&Object(u.jsx)("div",{className:"detail-createdInDb",children:"***This dog was created in the database***"}),Object(u.jsx)("img",{src:a[0].image?a[0].image:"./img/missing.jpg",alt:"Dog"})]}),Object(u.jsxs)("div",{className:"detail-info",children:[Object(u.jsxs)("h1",{className:"detail-id",children:[" Id: ",a[0].id+(a[0].createdInDb," ")," "]}),Object(u.jsxs)("h3",{className:"detail-name",children:[" Name: ",a[0].name]}),Object(u.jsxs)("div",{className:"detail-stats",children:[Object(u.jsxs)("div",{className:"detail-stat",children:[Object(u.jsx)("div",{className:"detail-stat-label",children:"Life Span:"}),Object(u.jsx)("div",{className:"detail-stat-value",children:a[0].lifeTime})]}),Object(u.jsxs)("div",{className:"detail-stat",children:[Object(u.jsx)("div",{className:"detail-stat-label",children:"Weight:"}),Object(u.jsx)("div",{className:"detail-stat-value",children:"".concat(a[0].weight_min," - ").concat(a[0].weight_max," KG")})]}),Object(u.jsxs)("div",{className:"detail-stat",children:[Object(u.jsx)("div",{className:"detail-stat-label",children:"Height:"}),Object(u.jsx)("div",{className:"detail-stat-value",children:"".concat(a[0].height," CM")})]})]}),Object(u.jsx)("div",{className:"detail-temperaments",children:Object(u.jsxs)("div",{className:"detail-temperaments-label",children:["Temperaments:",Object(u.jsx)("div",{className:"detail-temperaments-list",children:a[0].temperament.split(",").map((function(e){return Object(u.jsx)("div",{className:"detail-temperament",children:e.trim()},e)}))})]})})]})]}):Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"../../loading.gif",alt:""})})]})}var k=a(39),z=a(19),q=a(3),R=function(e){var t={};return e.name||(t.name="Must be a name"),e.name&&!/^[a-zA-Z]*$/.test(e.name)&&(t.name="The name can not contain numbers or special caracters"),(!e.height_min||e.height_min<=0)&&(t.height_min="The min height must be bigger"),(!e.height_max||e.height_max<=0)&&(t.height_max="The max height must be bigger"),parseInt(e.height_min)>=parseInt(e.height_max)&&(t.especial1="The height min can not be bigger or equal than the max height"),parseInt(e.weight_min)>=parseInt(e.weight_max)&&(t.especial2="The weight min can not be bigger or equal than the max weight"),e.height,(!e.weight_min||e.weight_min<=0)&&(t.weight_min="The min weight must be bigger"),e.weight_min&&e.weight_max,(!e.weight_max||e.weight_max<=0)&&(t.weight_max="The max weight must be bigger"),e.weight_max,(!e.lifeTime||e.lifeTime<=0)&&(t.lifeTime="The life span must be grather"),e.lifeTime,t};a(67);function F(){var e=Object(p.b)(),t=Object(r.f)(),a=Object(p.c)((function(e){return e.temperaments})),c=Object(n.useState)({}),s=Object(b.a)(c,2),i=s[0],l=s[1],o=Object(n.useState)({name:"",height_min:0,height_max:0,weight_min:0,weight_max:0,lifeTime:0,image:"",temperament:[]}),d=Object(b.a)(o,2),m=d[0],h=d[1],O=function(e){h(Object(q.a)(Object(q.a)({},m),{},Object(z.a)({},e.target.name,e.target.value))),console.log(e.target.value),l(R(Object(q.a)(Object(q.a)({},m),{},Object(z.a)({},e.target.name,e.target.value)))),console.log(m)};Object(n.useEffect)((function(){e(I())}),[e]);var f=function(e){m.temperament.includes(e.target.value)||h(Object(q.a)(Object(q.a)({},m),{},{temperament:[].concat(Object(k.a)(m.temperament),[e.target.value])}))};console.log(f);var N=function(a){a.preventDefault(),console.log(m),e(function(e){try{return Object(g.a)(Object(x.a)().mark((function t(){var a;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("/dogs",e);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))}catch(t){alert("The dog could not be created")}}(m));var n=document.createElement("div");n.textContent="\xa1The dog was created!",n.classList.add("alerta"),document.body.appendChild(n),h({name:"",height_min:0,height_max:0,weight_min:0,weight_max:0,lifeTime:0,temperament:[]}),t.push("/home"),setTimeout((function(){n.remove()}),2e3)};return Object(u.jsxs)("div",{className:"create-container",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)(j.b,{to:"/home",children:Object(u.jsx)("button",{className:"btn",children:"HOME"})}),Object(u.jsx)("h2",{children:"CREATE DOG"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"formStyle",onSubmit:function(e){return N(e)},children:[Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"NAME:"}),Object(u.jsx)("input",{required:!0,className:"numInput",type:"text",value:m.name,name:"name",onChange:function(e){return O(e)}}),Object(u.jsx)("h2",{className:"tex-err",children:i.name&&Object(u.jsxs)("p",{children:[" ",i.name," "]})})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"MIN HEIGHT:"}),Object(u.jsx)("input",{min:"0",className:"numInput",type:"number",value:m.height_min,name:"height_min",onChange:function(e){return O(e)}}),Object(u.jsx)("h2",{className:"tex-err",children:i.height_min&&Object(u.jsxs)("p",{children:[" ",i.height_min," "]})}),Object(u.jsx)("h2",{className:"tex-err",children:i.especial1&&Object(u.jsxs)("p",{children:[" ",i.especial1," "]})})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"MAX HEIGHT:"}),Object(u.jsx)("input",{min:"0",className:"numInput",type:"number",value:m.height_max,name:"height_max",onChange:function(e){return O(e)}}),Object(u.jsx)("h2",{className:"tex-err",children:i.height_max&&Object(u.jsxs)("p",{children:[" ",i.height_max," "]})})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"MIN WEIGHT: "}),Object(u.jsx)("input",{min:"0",className:"numInput",type:"number",value:m.weight_min,name:"weight_min",onChange:function(e){return O(e)}}),Object(u.jsx)("h2",{className:"tex-err",children:i.weight_min&&Object(u.jsxs)("p",{children:[" ",i.weight_min," "]})}),Object(u.jsx)("h2",{className:"tex-err",children:i.especial2&&Object(u.jsxs)("p",{children:[" ",i.especial2," "]})})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"MAX WEIGHT: "}),Object(u.jsx)("input",{min:"0",className:"numInput",type:"number",value:m.weight_max,name:"weight_max",onChange:function(e){return O(e)}}),Object(u.jsx)("div",{className:"probando",children:Object(u.jsx)("h2",{className:"tex-err",children:i.weight_max&&Object(u.jsxs)("p",{children:[" ",i.weight_max," "]})})})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"LIFE SPAN:"}),Object(u.jsx)("input",{min:"0",className:"numInput",type:"number",value:m.lifeTime,name:"lifeTime",onChange:function(e){return O(e)}}),Object(u.jsx)("h2",{className:"tex-err",children:i.lifeTime&&Object(u.jsxs)("p",{children:[" ",i.lifeTime," "]})})]}),Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("h3",{children:"TEMPERAMENTS"}),Object(u.jsxs)("select",{className:"numInput",onChange:f,children:[Object(u.jsx)("option",{value:"all",disabled:!0,selected:!0,defaultValue:!0,children:"prototemperament"}),a.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(u.jsx)("h2",{className:"tex-err",children:i.temperament&&Object(u.jsxs)("p",{children:[" ",i.temperament," "]})})]}),i&&!m.temperament.length?Object(u.jsx)("div",{className:"btnh2",children:"Debe seleccionar Temperamento"}):Object(u.jsx)("button",{className:"btn",type:"submit",children:"CREATE"})]}),Object(u.jsx)("div",{className:"mooDiv",children:m.temperament.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"btn3",children:[" ",e," "]}),Object(u.jsx)("button",{className:"eraerbtn",onClick:function(){return t=e,void h(Object(q.a)(Object(q.a)({},m),{},{temperament:m.temperament.filter((function(e){return e!==t}))}));var t},children:"X"})]},t++)}))}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{})})})]})]})}v.a.defaults.baseURL="http://localhost:3001";var H=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(u.jsx)(r.a,{exact:!0,path:"/home",component:P}),Object(u.jsx)(r.a,{path:"/home/:id",component:G}),Object(u.jsx)(r.a,{path:"/create",component:F})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))},B=a(27),Z=a(36),V=a(37),J={dogs:[],temperaments:[],allDogs:[],dogDetail:[]};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(q.a)(Object(q.a)({},e),{},{dogs:t.payload,allDogs:t.payload});case _:return Object(q.a)(Object(q.a)({},e),{},{dogs:t.payload});case w:return Object(q.a)(Object(q.a)({},e),{},{dogDetail:t.payload});case N:return Object(q.a)(Object(q.a)({},e),{},{temperaments:t.payload});case y:var a="A-Z"===t.payload?e.dogs.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0})):e.dogs.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:e.name.toLowerCase()<t.name.toLowerCase()?1:0}));return Object(q.a)(Object(q.a)({},e),{},{dogs:a});case D:var n=e.allDogs,c="created"===t.payload?n.filter((function(e){return e.createdInDb})):n.filter((function(e){return!e.createdInDb}));return Object(q.a)(Object(q.a)({},e),{},{dogs:"all"===t.payload?e.allDogs:c});case T:var s=e.allDogs.filter((function(e){return e.weight_min})),i="min_weight"===t.payload?s.sort((function(e,t){return e.weight_min-t.weight_min})):s.sort((function(e,t){return e.weight_min-t.weight_min})).reverse();return Object(q.a)(Object(q.a)({},e),{},{dogs:i});case E:var r=e.allDogs,l="All"===t.payload?r:r.filter((function(e){var a;return null===(a=e.temperament)||void 0===a?void 0:a.includes(t.payload)}));return Object(q.a)(Object(q.a)({},e),{},{dogs:l});case C:return Object(q.a)(Object(q.a)({},e),{},{dogDetail:{}});case"POST_DOG":return Object(q.a)({},e);default:return e}},Y=Object(B.createStore)(X,Object(Z.composeWithDevTools)(Object(B.applyMiddleware)(V.a)));i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p.a,{store:Y,children:Object(u.jsx)(j.a,{children:Object(u.jsx)(H,{})})})}),document.getElementById("root")),W()}},[[68,1,2]]]);
//# sourceMappingURL=main.f7e79444.chunk.js.map