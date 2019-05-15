(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-443b83b0"],{"0c99":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("div",{staticClass:"login-con"},[t("Card",{attrs:{icon:"log-in",title:"欢迎注册",bordered:!1}},[t("div",{staticClass:"form-con"},[t("register-form",{on:{"on-success-valid":e.handleSubmit}}),t("p",{staticClass:"login-tip"},[t("a",{attrs:{href:"https://github.com/izghua/go-blog"}},[e._v("https://github.com/izghua/go-blog")])])],1)])],1)])},o=[],n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules},nativeOn:{keydown:function(r){return"button"in r||!e._k(r.keyCode,"enter",13,r.key,"Enter")?e.handleSubmit(r):null}}},[t("FormItem",{attrs:{prop:"userName"}},[t("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(r){e.$set(e.form,"userName",r)},expression:"form.userName"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("Icon",{attrs:{size:16,type:"ios-person"}})],1)])],1),t("FormItem",{attrs:{prop:"email"}},[t("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("Icon",{attrs:{size:16,type:"ios-person"}})],1)])],1),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("Icon",{attrs:{size:14,type:"md-lock"}})],1)])],1),t("FormItem",{attrs:{prop:"rePassword"}},[t("Input",{attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.form.rePassword,callback:function(r){e.$set(e.form,"rePassword",r)},expression:"form.rePassword"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("Icon",{attrs:{size:14,type:"md-lock"}})],1)])],1),t("FormItem",[t("Button",{attrs:{type:"primary",long:""},on:{click:e.handleSubmit}},[e._v("注册")])],1)],1)},a=[],i=t("3786"),u={name:"RegisterForm",props:{userNameRules:{type:Array,default:function(){return[{required:!0,message:"账号不能为空",trigger:"blur"}]}},passwordRules:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"},{type:"string",min:6,message:"密码长度不能小于6位",trigger:"blur"}]}},emailRules:{type:Array,default:function(){return[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}}},data:function(){var e=this,r=function(r,t,s){""===t?s(new Error("请再次输入密码")):t!==e.form.password?s(new Error("两次密码不一致")):s()};return{form:{email:"",password:"",userName:"",rePassword:""},rePasswdRule:r}},computed:{rules:function(){return{email:this.emailRules,password:this.passwordRules,userName:this.userNameRules,rePassword:this.rePasswdRule}}},mounted:function(){this.defaultInit()},methods:{handleSubmit:function(){var e=this;this.$refs.loginForm.validate(function(r){r&&Object(i["b"])(e.form.userName,e.form.email,e.form.password).then(function(r){0===r.data.code?(e.$Message.success(r.data.message),setTimeout(function(){e.$router.push("/login")},2e3)):e.$Message.error(r.data.message)}).catch(function(r){e.$Message.error("操作失败"+r)})})},defaultInit:function(){var e=this;Object(i["d"])().then(function(r){0!==r.data.code&&e.$router.push("/login")}).catch(function(r){e.$Message.error("操作失败"+r)})}}},l=u,c=t("2877"),p=Object(c["a"])(l,n,a,!1,null,null,null);p.options.__file="register-form.vue";var m=p.exports,d=m,f={components:{RegisterForm:d},methods:{handleSubmit:function(e){e.userName,e.password;this.$router.push("/home")}}},g=f,h=(t("5d6d"),t("9172"),Object(c["a"])(g,s,o,!1,null,null,null));h.options.__file="register.vue";r["default"]=h.exports},"1ecd":function(e,r,t){},3786:function(e,r,t){"use strict";t.d(r,"d",function(){return a}),t.d(r,"b",function(){return i}),t.d(r,"c",function(){return u}),t.d(r,"a",function(){return l});var s=t("0d5e"),o=Object(s["a"])(),n={headers:{"Content-Type":"multipart/form-data"}};function a(e){return o.get("/console/register",{params:e})}function i(e,r,t){return o.post("/console/register/",{userName:e,email:r,password:t},n)}function u(e){return o.get("/console/login",{params:e})}function l(e,r,t,s){return o.post("/console/login",{captchaKey:e,email:r,password:t,captcha:s},n)}},"5d6d":function(e,r,t){"use strict";var s=t("1ecd"),o=t.n(s);o.a},9172:function(e,r,t){"use strict";var s=t("ecb3"),o=t.n(s);o.a},ecb3:function(e,r,t){}}]);