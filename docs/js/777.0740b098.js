"use strict";(self["webpackChunkmango_site"]=self["webpackChunkmango_site"]||[]).push([[777],{777:function(s,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var s=this,e=s._self._c;return e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card card-container"},[e("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),e("form",{attrs:{name:"form"},on:{submit:function(e){return e.preventDefault(),s.handleLogin.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[s._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:s.user.username},on:{input:function(e){e.target.composing||s.$set(s.user,"username",e.target.value)}}}),s.errors.has("username")?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[s._v("Username is required!")]):s._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:s.user.password},on:{input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}}),s.errors.has("password")?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[s._v("Password is required!")]):s._e()]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:s.loading}},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),e("span",[s._v("Login")])])]),e("div",{staticClass:"form-group"},[s.message?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[s._v(s._s(s.message))]):s._e()])])])])},t=[];class i{constructor(s,e,a){this.username=s,this.email=e,this.password=a}}var o={name:"Login",data(){return{user:new i("",""),loading:!1,message:""}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/admin/profile")},methods:{handleLogin(){this.loading=!0,this.$validator.validateAll().then((s=>{s?this.user.username&&this.user.password&&this.$store.dispatch("auth/login",this.user).then((()=>{this.$router.push("/admin/profile")}),(s=>{this.loading=!1,this.message=s.response&&s.response.data||s.message||s.toString()})):this.loading=!1}))}}},n=o,l=a(1),d=(0,l.Z)(n,r,t,!1,null,"0ad42664",null),u=d.exports}}]);
//# sourceMappingURL=777.0740b098.js.map