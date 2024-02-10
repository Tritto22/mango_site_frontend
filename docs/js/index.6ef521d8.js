(function(){"use strict";var t={188:function(t,e,a){a.d(e,{Z:function(){return c}});var n=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"loader"})])}],s={name:"Loader"},o=s,r=a(1),l=(0,r.Z)(o,n,i,!1,null,"233ead0d",null),c=l.exports},666:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[t.slider.length>0?e("div",{staticClass:"slider"},t._l(t.slider,(function(a,n){return e("div",{key:n,staticClass:"hero",class:[n==t.position?"active":"disable",t.mouseHover?"":"effect"]},[null!=a.imageDataBase64?e("img",{key:n,staticClass:"myImg",attrs:{src:a.imageDataBase64,alt:a.title},on:{mousedown:function(e){return t.stopAutoplay()},mouseup:function(e){return t.autoplay()}}}):t._e()])})),0):e("div",[e("Loader")],1)])},i=[],s=a(493),o=a(188),r={name:"Home",components:{Loader:o.Z},data(){return{slider:[],firstPaintingSlider:{title:"Quadro slider",imageDataBase64:a(276),size:"100x100",year:2022,tecnique:"Olio",description:"quadro sintesi",slug:"quadro-slider",totPages:1,favorite:!0},position:0,autoplayID:null,mouseHover:!1}},methods:{left:function(){0==this.position?this.position=this.slider.length-1:this.position--},right:function(){this.position==this.slider.length-1?this.position=0:this.position++},autoplay:function(){this.autoplayID=setInterval(this.right,5e3),this.mouseHover=!1},stopAutoplay:function(){clearInterval(this.autoplayID),this.mouseHover=!0}},created(){s.Z.getSliderPaintings().then((t=>{this.slider=[...this.slider,...t.data.payload],this.slider.splice(0,0,this.firstPaintingSlider)}),(t=>{console.log("Errore:",t)}))},mounted(){this.autoplay()}},l=r,c=a(1),u=(0,c.Z)(l,n,i,!1,null,"1ee3c604",null),g=u.exports},253:function(t,e,a){var n=a(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.isPublicRoute?e("div",{staticClass:"public"},[e("Header"),e("Main"),e("Footer")],1):e("div",{staticClass:"admin"},[e("AuthHeader"),e("AuthMain")],1)])},s=[],o=function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col d-flex justify-content-center"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v(" Leonardo Da Vinci ")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[e("div",{staticClass:"navbar-nav"},[e("h4",{class:{"nav-link":!0,"font-weight-bolder":"/"===t.$route.path}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("h4",{class:{"nav-link":!0,"font-weight-bolder":"/galleries"===t.$route.path}},[e("router-link",{attrs:{to:"/galleries"}},[t._v("Gallery")])],1),e("h4",{class:{"nav-link":!0,"font-weight-bolder":"/about"===t.$route.path}},[e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("h4",{class:{"nav-link":!0,"font-weight-bolder":"/contact"===t.$route.path}},[e("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])],1)])])])])},r=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Header"},c=l,u=a(1),g=(0,u.Z)(c,o,r,!1,null,"d2b53846",null),A=g.exports,d=function(){var t=this,e=t._self._c;return e("main",[e("router-view")],1)},m=[],p={name:"Main"},f=p,h=(0,u.Z)(f,d,m,!1,null,null,null),v=h.exports,C=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"d-flex align-items-center justify-content-center"},[e("p",{staticClass:"copyRight"},[t._v("All images © LeonardoDaVinci")])])}],B={name:"Footer"},P=B,b=(0,u.Z)(P,C,w,!1,null,null,null),D=b.exports,Q=function(){var t=this,e=t._self._c;return e("header",[e("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[e("a",{staticClass:"navbar-brand",attrs:{href:""},on:{click:function(t){t.preventDefault()}}},[t._v("Mango's Site")]),e("div",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[t.currentUser?e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/dashboard"},on:{click:t.clearSelectedPainting}},[t._v("Dashboard")]):t._e()],1)]),t.currentUser?e("div",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/profile"}},[e("font-awesome-icon",{attrs:{icon:"user"}}),t._v(" "+t._s(t.currentUser.username)+" ")],1)],1),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logOut.apply(null,arguments)}}},[e("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),t._v("LogOut ")],1)])]):t._e()])])},I=[],y={name:"AuthHeader",computed:{isPublicRoute(){return!this.$route.path.includes("/admin")},currentUser(){return this.$store.state.auth.user}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/")},clearSelectedPainting(){this.$store.dispatch("painting/clearSelectedPainting")}}},S=y,x=(0,u.Z)(S,Q,I,!1,null,"1f325d95",null),k=x.exports,F=function(){var t=this,e=t._self._c;return e("main",[e("router-view")],1)},E=[],O={name:"AuthMain"},Z=O,M=(0,u.Z)(Z,F,E,!1,null,null,null),Y=M.exports,H={name:"App",components:{Header:A,Main:v,Footer:D,AuthHeader:k,AuthMain:Y},mounted(){document.addEventListener("contextmenu",this.disableContextMenu)},beforeDestroy(){document.removeEventListener("contextmenu",this.disableContextMenu)},computed:{isPublicRoute(){return!this.$route.path.includes("/admin")}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/admin/login")}}},G=H,L=(0,u.Z)(G,i,s,!1,null,null,null),N=L.exports,K=a(345),U=a(666),_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid d-flex flex-column justify-content-center align-items-center h-100"},[t.paintings.length>0?e("div",{staticClass:"row justify-content-center align-items-center flex-column gallery h-100"},[t.showPaintingGallery?e("div",{staticClass:"col d-flex flex-wrap justify-content-center h-100"},t._l(t.paintings,(function(a,n){return e("div",{key:n,staticClass:"painting-card d-flex justify-content-center align-items-center"},[e("img",{attrs:{src:a.imageDataBase64,alt:a.title},on:{click:function(e){return t.viewSinglePainting(a)}}})])})),0):t._e(),t.showSinglePainting?e("div",{staticClass:"container-fluid painting-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 col-md-12"},[e("div",{staticClass:"painting-single d-flex justify-content-center align-items-center"},[t.viewMainPainting?e("img",{attrs:{src:t.singlePainting.imageDataBase64,alt:t.singlePainting.title}}):e("img",{attrs:{src:t.currentDetail.imageBase64,alt:t.currentDetail.name}})]),e("div",{staticClass:"info mt-5"},[e("h4",[t._v("Informazioni")]),e("ul",[e("li",[t._v("Titolo: "+t._s(t.singlePainting.title))]),e("li",[t._v("Dimensioni: "+t._s(t.singlePainting.size))]),e("li",[t._v("Tecnica: "+t._s(t.singlePainting.tecnique))]),e("li",[t._v("Anno: "+t._s(t.singlePainting.year))])]),e("button",{attrs:{id:"btn-gallery"},on:{click:t.viewPaintingGallery}},[t._v("Gallery")])])]),e("div",{staticClass:"row md-down-screen d-flex w-100"},[null!=t.singlePainting.details&&t.singlePainting.details.length>0?e("div",{staticClass:"details-container-md"},[e("h4",[t._v("Dettagli")]),e("div",{staticClass:"body-details-md d-flex flex-wrap"},t._l(t.singlePainting.details,(function(a,n){return e("div",{key:n,staticClass:"details-md"},[e("img",{attrs:{src:a.imageBase64,alt:a.name},on:{click:function(e){return t.viewSingleDetail(a)}}})])})),0)]):t._e(),e("div",{staticClass:"mini-painting-container"},[e("h4",[t._v("Quadro")]),e("div",{staticClass:"mini-painting-md"},[e("img",{attrs:{src:t.singlePainting.imageDataBase64,alt:t.singlePainting.title},on:{click:t.viewMainPaintingFn}})])])]),e("div",{staticClass:"col-lg-2 lg-up-screen"},[null!=t.singlePainting.details&&t.singlePainting.details.length>0?e("div",{staticClass:"details-container"},[e("h4",{attrs:{id:"titolo-dettagli"}},[t._v("Dettagli")]),e("div",{staticClass:"body-details"},t._l(t.singlePainting.details,(function(a,n){return e("div",{key:n,staticClass:"details d-flex justify-content-center align-items-center"},[e("img",{attrs:{src:a.imageBase64,alt:a.name},on:{click:function(e){return t.viewSingleDetail(a)}}})])})),0)]):t._e(),e("h4",[t._v("Quadro")]),e("div",{staticClass:"mini-painting d-flex justify-content-center align-items-center"},[e("img",{attrs:{src:t.singlePainting.imageDataBase64,alt:t.singlePainting.title},on:{click:t.viewMainPaintingFn}})])])])]):t._e()]):e("div",[e("Loader")],1),t.currentPage<t.pages?e("div",{staticClass:"row",attrs:{id:"plus"}},[e("div",{staticClass:"button",on:{click:function(e){return t.addPainting()}}})]):t._e()])},T=[],z=a(493),j=a(188),R={name:"Galleries",components:{Loader:j.Z},data(){return{paintings:[],pages:0,pageSize:10,currentPage:1,singlePainting:{},showPaintingGallery:!0,showSinglePainting:!1,viewMainPainting:!0,currentDetail:{}}},created(){this.loadData(this.currentPage-1,this.pageSize)},methods:{loadData(t,e){z.Z.getGalleriesPaintings(t,e).then((t=>{this.paintings=[...this.paintings,...t.data.payload],this.paintings&&this.paintings.length>0?this.pages=this.paintings[0].totPages:1!==this.currentPage&&this.currentPage>=this.pages&&this.getPageData(this.currentPage-1,this.pageSize)}),(t=>{console.log("Errore:",t)}))},addPainting(){this.currentPage++,this.loadData(this.currentPage-1,this.pageSize)},handlePageLeft(t,e){this.getPageData(t,e)},handlePageRight(t,e){this.getPageData(t,e)},getPageData(t,e){this.currentPage=t,this.loadData(t-1,e)},viewSinglePainting(t){this.singlePainting=t,this.showPaintingGallery=!1,this.showSinglePainting=!0},viewPaintingGallery(){this.singlePainting={},this.showPaintingGallery=!0,this.showSinglePainting=!1},viewMainPaintingFn(){this.viewMainPainting=!0},viewSingleDetail(t){this.currentDetail=t,this.viewMainPainting=!1}}},J=R,V=(0,u.Z)(J,_,T,!1,null,"1fe92606",null),W=V.exports,X=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"container-fluid"},[t._m(0),e("div",{staticClass:"row"},[t._m(1),t.loading?e("div",{staticClass:"col-lg-6 col-sm-12 d-flex justify-content-center"},[e("Loader")],1):e("div",{staticClass:"col-lg-6 col-sm-12 d-flex justify-content-center p-5"},[e("img",{attrs:{id:"profile-img",src:t.imageSrc,alt:"fotoProfilo"}})])]),t._m(2),t._m(3)])])},q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h2",[t._v("Biografia")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-6"},[e("p",[t._v(" Leonardo ha svolto la sua attività a cavallo di due secoli, il 1400 e il 1500, e proprio in questo sta la sua peculiarità: spesso gli è stato riconosciuto il merito di essere colui che, sintetizzando i caratteri della cultura quattrocentesca, ha posto le basi per una nuova impostazione nel Cinquecento, un secolo sconvolto da grandi avvenimenti religiosi e politici. La sua grande curiosità è stata sempre accompagnata da un grande desiderio di concretizzare le sue conoscenze: scienza e pratica erano quindi indissolubili. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h2",[t._v("Opere")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("p",[t._v(' Di Leonardo scrittore si trova una curiosa testimonianza nelle sue "Favole", una raccolta di brevi componimenti che, mescolando arguzia e dottrina, nascondono un serio ammonimento: la farfalla che attratta dallo splendore del lume si brucia, la scimmia che si innamora dell’uccellino e lo soffoca di baci, l’asino che addormentandosi sul ghiaccio lo fonde e annega. Tutti i componimenti sembrano ricordare la tragedia dell’ignoranza dell’uomo sulle leggi naturali. Grande importanza ha per Leonardo il rapporto tra scienza e arte: partendo da una concezione quattrocentesca, Leonardo ha fatto della produzione artistica lo specchio della natura, che deve essere studiata e indagata a fondo per essere degnamente rappresentata. Da qui la sua dedizione per gli studi di botanica, anatomia e in particolare ottica, dove l’occhio è considerato come tramite tra l’immagine e l’anima. ')])])])}],$={name:"About",data(){return{loading:!0,imageSrc:a(932)}},components:{Loader:j.Z},created(){this.setCookie()},methods:{setCookie(){document.cookie="__Host-GAPS=valoreDelCookie; secure; samesite=None"}},mounted:function(){this.$nextTick((function(){this.loading=!1}))}},tt=$,et=(0,u.Z)(tt,X,q,!1,null,"171cd076",null),at=et.exports,nt=function(){var t=this;t._self._c;return t._m(0)},it=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h2",[t._v("Blog Page")])])}],st={name:"Blog"},ot=st,rt=(0,u.Z)(ot,nt,it,!1,null,null,null),lt=rt.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid h-100"},[t.formPage?e("div",{staticClass:"container-form d-flex justify-content-center align-items-center h-100"},[e("form",{staticClass:"show-form"},[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col"},[e("label",{attrs:{for:"name"}},[t._v("Nome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control p-2",attrs:{id:"name",type:"text",placeholder:"Nome"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"col"},[e("label",{attrs:{for:"surname"}},[t._v("Cognome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],staticClass:"form-control p-2",attrs:{id:"surname",type:"text",placeholder:"Cognome"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}})])]),e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"mailAddress"}},[t._v("Indirizzo Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mailAddress,expression:"mailAddress"}],staticClass:"form-control p-2",attrs:{type:"text",id:"mailAddress",placeholder:"Inserisci il tuo indirizzo email"},domProps:{value:t.mailAddress},on:{input:function(e){e.target.composing||(t.mailAddress=e.target.value)}}})]),e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"message"}},[t._v("Messaggio")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"message",rows:"5"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col d-flex justify-content-between"},[e("button",{staticClass:"btn btn-primary p-2 mb-4",attrs:{type:"button"}},[t._v("Invia")]),e("button",{staticClass:"btn btn-primary p-2 mb-4",attrs:{type:"button"},on:{click:t.showLogo}},[t._v("Indietro")])])])])]):e("div",{staticClass:"row row-cols-1 row-cols-md-2 row-cols-lg-3 h-100 align-items-center"},[t._m(0),t._m(1),t._m(2)])])},ut=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col logo-card"},[e("a",{attrs:{href:"",id:""}},[e("img",{staticClass:"logo",attrs:{src:a(593),alt:"facebook"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col logo-card"},[e("a",{attrs:{href:""}},[e("img",{staticClass:"logo",attrs:{src:a(591),alt:"instagram"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col logo-card"},[e("a",{attrs:{href:"mailto:tritto.simone@gmail.com?subject=Richiesta di contatto&body=Ciao%20%2C%0A%0AVorrei%20contattarti%20per%20..."}},[e("img",{staticClass:"logo",attrs:{src:a(233),alt:"mail"}})])])}],gt={name:"Contact",data(){return{formPage:!1,name:"",surname:"",mailAddress:"",message:""}},methods:{showForm(){this.formPage=!0},showLogo(){this.formPage=!1}}},At=gt,dt=(0,u.Z)(At,ct,ut,!1,null,"fc85b43e",null),mt=dt.exports;n.ZP.use(K.ZP);const pt=new K.ZP({routes:[{path:"/",name:"public",component:()=>Promise.resolve().then(a.bind(a,666))},{path:"/home",name:"home",component:U["default"]},{path:"/galleries",name:"galleries",component:W},{path:"/about",name:"about",component:at},{path:"/blog",name:"blog",component:lt},{path:"/contact",name:"contact",component:mt},{path:"/admin",name:"admin",component:()=>a.e(202).then(a.bind(a,202))},{path:"/admin/login",name:"admin-login",component:()=>a.e(777).then(a.bind(a,777))},{path:"/admin/profile",name:"admin-profile",component:()=>a.e(226).then(a.bind(a,226))},{path:"/admin/board-admin",name:"admin-board-admin",component:()=>a.e(371).then(a.bind(a,371))},{path:"/admin/user/update",name:"admin-user-update",component:()=>a.e(260).then(a.bind(a,260))},{path:"/admin/dashboard",name:"admin-painting-dashboard",component:()=>a.e(783).then(a.bind(a,783)),props:!0},{path:"/admin/painting/:slug",name:"admin-painting-single",component:()=>a.e(507).then(a.bind(a,507)),props:!0},{path:"/admin/painting/update/:slug",name:"admin-painting-update",component:()=>a.e(395).then(a.bind(a,395)),props:!0},{path:"/admin/new-painting/create",name:"admin-painting-create",component:()=>a.e(631).then(a.bind(a,631))},{path:"*",redirect:"/home"}]});var ft=pt,ht=a(629),vt=a(121);const Ct="https://www.simonetritto.site/api/auth/";vt.Z.defaults.headers.common["Access-Control-Allow-Origin"]="*",vt.Z.defaults.headers.common["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept",vt.Z.defaults.withCredentials=!1,vt.Z.defaults.crossDomain=!0;class wt{login(t){return vt.Z.post(Ct+"signin",{username:t.username,password:t.password}).then((t=>(t.data.token?localStorage.setItem("user",JSON.stringify(t.data)):console.log("token mancante:  "+JSON.stringify(t)),t.data)))}logout(){localStorage.removeItem("user")}}var Bt=new wt,Pt=a(270);const bt=JSON.parse(localStorage.getItem("user")),Dt=bt?{status:{loggedIn:!0},user:bt}:{status:{loggedIn:!1},user:null},Qt={namespaced:!0,state:Dt,actions:{login({commit:t},e){return Bt.login(e).then((e=>(t("loginSuccess",e),Promise.resolve(e))),(e=>(t("loginFailure"),Promise.reject(e))))},logout({commit:t}){Bt.logout(),t("logout")},update({commit:t},e){return Pt.Z.update(e).then((e=>(t("updateSuccess"),Promise.resolve(e.data))),(e=>(t("updateFailure"),Promise.reject(e))))}},mutations:{loginSuccess(t,e){t.status.loggedIn=!0,t.user=e},loginFailure(t){t.status.loggedIn=!1,t.user=null},logout(t){t.status.loggedIn=!1,t.user=null},updateSuccess(t,e){t.status.loggedIn=!1,t.user=e},updateFailure(t){t.status.loggedIn=!1,t.user=null}}},It={namespaced:!0,state:{selectedPainting:JSON.parse(localStorage.getItem("selectedPainting"))||null},actions:{clearSelectedPainting({commit:t}){localStorage.removeItem("selectedPainting"),t("clearSelectedPainting")}},mutations:{setSelectedPainting(t,e){t.selectedPainting=e},clearSelectedPainting(t){t.selectedPainting=null}}};n.ZP.use(ht.ZP);var yt=new ht.ZP.Store({modules:{auth:Qt,painting:It}}),St=(a(734),a(954)),xt=a(947),kt=a(810),Ft=a(436),Et=a(288);xt.vI.add(Ft.J9Y,Ft.ILF,Ft.FKd,Ft.$Wj,Ft.jLD,Ft.Tab,Et.Tab),n.ZP.config.productionTip=!1,n.ZP.use(St.ZP),n.ZP.component("font-awesome-icon",kt.GN),new n.ZP({router:ft,store:yt,render:t=>t(N)}).$mount("#app")},8:function(t,e,a){function n(){let t=JSON.parse(localStorage.getItem("user"));return t&&t.token?{Authorization:"Bearer "+t.token}:{}}a.d(e,{Z:function(){return n}})},493:function(t,e,a){var n=a(121);const i="https://www.simonetritto.site/api/public/";n.Z.defaults.headers.common["Access-Control-Allow-Origin"]="*",n.Z.defaults.headers.common["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept",n.Z.defaults.withCredentials=!1,n.Z.defaults.crossDomain=!0;class s{getSliderPaintings(){return n.Z.get(i+"home")}getGalleriesPaintings(t,e){return n.Z.get(`${i}gallery?pageNumber=${t}&pageSize=${e}`)}}e.Z=new s},270:function(t,e,a){var n=a(121),i=a(8);const s="https://www.simonetritto.site/api/user/";n.Z.defaults.headers.common["Access-Control-Allow-Origin"]="*",n.Z.defaults.headers.common["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept",n.Z.defaults.withCredentials=!1,n.Z.defaults.crossDomain=!0;class o{update(t){const e={};return null!==t.username&&(e.username=t.username),null!==t.email&&(e.email=t.email),null!==t.password&&(e.password=t.password),n.Z.put(s+"update",e,{headers:(0,i.Z)()})}}e.Z=new o},593:function(t){t.exports="data:image/png;base64,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"},591:function(t,e,a){t.exports=a.p+"img/instagram.72264a5d.png"},233:function(t,e,a){t.exports=a.p+"img/mail.60efdc02.png"},932:function(t,e,a){t.exports=a.p+"img/imgProfilo.79cdd2a7.jpg"},276:function(t,e,a){t.exports=a.p+"img/gioconda.91ddab72.jpg"}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,s){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],s=t[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,i,s]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{202:"60b2e79c",226:"438c7acb",260:"34f07697",371:"18b1821f",395:"5d63e72e",507:"e98039ae",631:"95c65350",777:"0740b098",783:"63436df2"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{395:"f5d16b7f",507:"1b559aca",777:"6155b156",783:"06172e41"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mango_site:";a.l=function(n,i,s,o){if(t[n])t[n].push(i);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var g=c[u];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==e+s){r=g;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+s),r.src=n),t[n]=[i];var A=function(e,a){r.onerror=r.onload=null,clearTimeout(d);var i=t[n];if(delete t[n],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(a)})),e)return e(a)},d=setTimeout(A.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=A.bind(null,r.onerror),r.onload=A.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/mango_site_frontend/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,n,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=r,s.parentNode&&s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=o,s.href=e,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=a[n],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===t||s===e))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){i=o[n],s=i.getAttribute("data-href");if(s===t||s===e)return i}},n=function(n){return new Promise((function(i,s){var o=a.miniCssF(n),r=a.p+o;if(e(o,r))return i();t(n,r,null,i,s)}))},i={826:0};a.f.miniCss=function(t,e){var a={395:1,507:1,777:1,783:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=n(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={826:0};a.f.j=function(e,n){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var s=new Promise((function(a,n){i=t[e]=[a,n]}));n.push(i[2]=s);var o=a.p+a.u(e),r=new Error,l=function(n){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,i[1](r)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var u=l(a)}for(e&&e(n);c<o.length;c++)s=o[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},n=self["webpackChunkmango_site"]=self["webpackChunkmango_site"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(253)}));n=a.O(n)})();
//# sourceMappingURL=index.6ef521d8.js.map