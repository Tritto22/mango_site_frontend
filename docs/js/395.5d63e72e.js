"use strict";(self["webpackChunkmango_site"]=self["webpackChunkmango_site"]||[]).push([[395],{395:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("section",[t.errorProp||t.submitted||t.delatedSucces?t._e():e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row p-4"},[e("div",{staticClass:"col"},[e("nav",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteSelectedPainting(t.painting)}}},[t._v("Elimina")])])])]),e("div",{staticClass:"row col-md-8 offset-md-2"},[e("div",{staticClass:"card w-100"},[t._m(0),e("div",{staticClass:"card-body"},[e("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.editPainting.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.slug,expression:"painting.slug"}],attrs:{type:"hidden"},domProps:{value:t.painting.slug},on:{input:function(e){e.target.composing||t.$set(t.painting,"slug",e.target.value)}}}),e("div",{staticClass:"form-group mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"title"}},[t._v("Titolo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.title,expression:"painting.title"}],staticClass:"form-control",attrs:{id:"title",placeholder:"Inserisci il titolo",type:"text"},domProps:{value:t.painting.title},on:{input:[function(e){e.target.composing||t.$set(t.painting,"title",e.target.value)},t.validateTitle]}}),t.isTitleValid?t._e():e("p",{staticClass:"text-danger"},[t._v("Il titolo non può essere vuoto o contenere solo spazi!")])]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"imageDataBytes"}},[t._v("Link immagine quadro file")]),e("div",[null!=t.painting.imageDataBase64?e("img",{staticClass:"img-detail",attrs:{src:t.painting.imageDataBase64,alt:""}}):t._e()]),e("input",{staticClass:"form-control-file",attrs:{type:"file",id:"imageDataBytes"},on:{change:t.handleFileChangePaintingImg}})]),null!=t.painting.details?e("div",{staticClass:"mb-3"},[t._l(t.painting.details,(function(a,i){return e("div",{key:i,staticClass:"detail mb-2"},[e("label",{staticClass:"form-label",attrs:{for:"img"}},[t._v("Link dettaglio quadro")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.details[i].name,expression:"painting.details[i].name"}],staticClass:"form-control mb-1",attrs:{type:"text",id:i+a.name,placeholder:"Inserisci il nome del dettaglio"},domProps:{value:t.painting.details[i].name},on:{input:function(e){e.target.composing||t.$set(t.painting.details[i],"name",e.target.value)}}}),null!=t.painting.details[i].imageBase64?e("img",{staticClass:"img-detail",attrs:{src:t.painting.details[i].imageBase64,alt:""}}):t._e(),e("input",{staticClass:"form-control-file",attrs:{type:"file",id:"imageDataBytes"},on:{change:function(e){return t.handleFileChangeDetailImg(e,i)}}}),e("button",{staticClass:"btn btn-danger mt-3",attrs:{type:"button"},on:{click:function(e){return t.deleteDetail(i)}}},[t._v("Rimuovi dettaglio")]),t.errors.details?e("p",{staticClass:"text-danger"},[t._v(t._s(t.errors.details))]):t._e()])})),t.countDetails>this.painting.details.length?e("div",{staticClass:"mb-3"},t._l(t.countDetails,(function(a){return e("div",{key:a,staticClass:"detail mb-2"},[e("label",{staticClass:"form-label",attrs:{for:"img"}},[t._v("Link dettaglio quadro")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.details[a-1].name,expression:"painting.details[i-1].name"}],staticClass:"form-control mb-1",attrs:{type:"text",id:a+"name",placeholder:"Inserisci il nome del dettaglio"},domProps:{value:t.painting.details[a-1].name},on:{input:function(e){e.target.composing||t.$set(t.painting.details[a-1],"name",e.target.value)}}}),null!=t.painting.details[a-1].imageBase64?e("img",{staticClass:"img-detail",attrs:{src:t.painting.details[a-1].imageBase64,alt:""}}):t._e(),e("input",{staticClass:"form-control-file",attrs:{type:"file",id:"imageDataBytes"},on:{change:function(e){return t.handleFileChangeDetailImg(e,a-1)}}}),e("button",{staticClass:"btn btn-danger mt-3",attrs:{type:"button"},on:{click:function(e){return t.deleteDetail(a-1)}}},[t._v("Rimuovi dettaglio")]),t.errors.details?e("p",{staticClass:"text-danger"},[t._v(t._s(t.errors.details))]):t._e()])})),0):t._e(),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.addDetail}},[t._v("Aggiungi dettaglio")])],2):t._e(),e("div",{staticClass:"form-group mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"size"}},[t._v("Misure")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.size,expression:"painting.size"}],staticClass:"form-control",attrs:{id:"size",placeholder:"Inserisci le misure",type:"text"},domProps:{value:t.painting.size},on:{input:function(e){e.target.composing||t.$set(t.painting,"size",e.target.value)}}}),t.errors.size?e("p",{staticClass:"text-danger"},[t._v(t._s(t.errors.size))]):t._e()]),e("div",{staticClass:"form-group mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"year"}},[t._v("Anno")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.year,expression:"painting.year"}],staticClass:"form-control",attrs:{id:"year",placeholder:"Inserisci l'anno",type:"text"},domProps:{value:t.painting.year},on:{input:[function(e){e.target.composing||t.$set(t.painting,"year",e.target.value)},t.validateYear]}}),t.isYearValid?t._e():e("p",{staticClass:"text-danger"},[t._v("L'anno deve essere compreso tra il 1993 e il 2199")])]),e("div",{staticClass:"form-group mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("Descrizione")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.painting.description,expression:"painting.description"}],staticClass:"form-control",attrs:{id:"description",placeholder:"Inserisci la nuova descrizione",rows:"5"},domProps:{value:t.painting.description},on:{input:function(e){e.target.composing||t.$set(t.painting,"description",e.target.value)}}}),t.errors.description?e("p",{staticClass:"text-danger"},[t._v(t._s(t.errors.description))]):t._e()]),e("div",{staticClass:"form-group form-check mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.favorite,expression:"painting.favorite"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"favorite",role:"button"},domProps:{checked:Array.isArray(t.painting.favorite)?t._i(t.painting.favorite,null)>-1:t.painting.favorite},on:{change:function(e){var a=t.painting.favorite,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=t._i(a,n);i.checked?r<0&&t.$set(t.painting,"favorite",a.concat([n])):r>-1&&t.$set(t.painting,"favorite",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.painting,"favorite",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"favorite"}},[t._v("Aggiungi ai preferiti")])]),t._m(1)])])])])]),t.errorProp||!t.submitted||t.delatedSucces?t._e():e("div",{class:t.successful?"alert-success text-center":"alert-danger text-center"},[e("h3",[t._v(t._s(t.message))])]),!t.errorProp||t.submitted||t.delatedSucces?t._e():e("div",{staticClass:"alert-danger text-center"},[e("h3",[t._v("Modifica impossibile, tornare alla Dashboard")])]),t.delatedSucces?e("div",{staticClass:"alert-success text-center"},[e("h3",[t._v("Eliminazione avvenuta con successo")])]):t._e()])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h2",{staticClass:"text-center"},[t._v("Modifica quadro")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Modifica")])])}],n=a(908),r={name:"UpdatePainting",data(){return{painting:{details:[{}]},successful:!1,submitted:!1,message:"",errorProp:!1,isTitleValid:!0,isYearValid:!0,delatedSucces:!1,countDetails:0}},computed:{currentUser(){return this.$store.state.auth.user}},created(){null!=this.$route.params.slug?this.loadData(this.$route.params.slug):this.errorProp=!0},mounted(){this.currentUser||this.$router.push("/admin/login")},methods:{loadData(t){n.Z.getSinglePainting(t).then((t=>{this.painting=t.data.payload,this.countDetails=this.painting.details.length}),(t=>{console.log("Errore:",t),t.response&&403===t.response.status&&(this.$store.dispatch("auth/logout"),this.$router.push("/admin/login"))}))},editPainting(){this.submitted=!0,this.errorProp=!1,n.Z.update(this.painting).then((t=>{null!=t.data.payload?(this.message="Modifica avvenuta con successo!",this.successful=!0):null!=t.data.error&&(this.message=t.data.error.msg,this.successful=!1)}),(t=>{this.message=t.response&&t.response.data||t.message||t.toString(),this.successful=!1,t.response&&403===t.response.status&&(this.$store.dispatch("auth/logout"),this.$router.push("/admin/login"))}))},validateTitle(){this.isTitleValid=""!==this.painting.title.trim()},validateYear(){this.painting.year>=1993&&this.painting.year<=2199?this.isYearValid=!0:this.isYearValid=!1},deleteSelectedPainting(t){n.Z.delete(t).then((t=>{this.delatedPainting=t.data.payload,this.delatedSucces=!0}),(t=>{console.log("Errore:",t)}))},addDetail(){this.countDetails++,this.painting.details.push({})},handleFileChangePaintingImg(t){const e=t.target,a=e.files[0];a&&this.readFilePainting(a)},readFilePainting(t){const e=new FileReader;e.onload=t=>{this.painting.imageDataBase64=t.target.result},e.readAsDataURL(t)},handleFileChangeDetailImg(t,e){console.log(e);const a=t.target,i=a.files[0];i&&this.readFileDetail(i,e)},readFileDetail(t,e){const a=new FileReader;a.onload=t=>{this.painting.details[e].imageBase64=t.target.result},a.readAsDataURL(t)},deleteDetail(t){this.painting.details.splice(t,1),this.countDetails--}}},l=r,o=a(1),d=(0,o.Z)(l,i,s,!1,null,"576a086f",null),c=d.exports},908:function(t,e,a){var i=a(121),s=a(8);const n="https://www.simonetritto.site/api/admin/";i.Z.defaults.headers.common["Access-Control-Allow-Origin"]="*",i.Z.defaults.headers.common["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept",i.Z.defaults.withCredentials=!1,i.Z.defaults.crossDomain=!0;class r{newPainting(t){return""!==t.title&&t.year>=1993&&t.year<=2199?i.Z.post(n+"addPainting",t,{headers:(0,s.Z)()}):Promise.reject("I dati del quadro non sono validi. Il titolo e l'anno non possono essere vuoti.")}getDashboard(t,e){return i.Z.get(`${n}dashboard?pageNumber=${t}&pageSize=${e}`,{headers:(0,s.Z)()})}getSinglePainting(t){return i.Z.get(`${n}single-view?slug=${t}`,{headers:(0,s.Z)()})}update(t){return""!==t.title&&t.year>=1993&&t.year<=2199?i.Z.put(n+"update",t,{headers:(0,s.Z)()}):Promise.reject("I dati del quadro non sono validi.")}delete(t){if(null!=t.slug)return i.Z.delete(n+"delete",{data:t,headers:(0,s.Z)()})}}e.Z=new r}}]);
//# sourceMappingURL=395.5d63e72e.js.map