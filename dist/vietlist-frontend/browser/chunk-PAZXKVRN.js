import{a as F,c as E,f as D,i as z,m as j,u as I,x as m,y as T}from"./chunk-E5WGR4OY.js";import{Aa as O,Ba as o,Ca as r,Da as g,Ha as v,I as C,L as h,N as s,Na as d,Oa as x,Ra as p,ha as l,ia as c,ib as w,jb as k,qb as S,ra as b,ta as y,ya as P,za as _}from"./chunk-IPTEZCAU.js";var u=(()=>{let e=class e{constructor(t,n){this.http=t,this.localStorage=n,typeof document<"u"&&(this.bearerToken=n.getData("vietlist::session"))}profileData(){let t=E.appendBaseUrl(F.ProfileDetail),n=new w().set("Authorization",this.bearerToken);return this.http.get(t,{headers:n})}};e.\u0275fac=function(n){return new(n||e)(h(k),h(m))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var U=(()=>{let e=class e{constructor(t,n){this.profileDetail=t,this.router=n}ngOnInit(){this.fetchProfileDetail()}fetchProfileDetail(){this.profileDetail.profileData().subscribe({next:t=>{t&&(this.showUserProfile=t,this.userDetails=t.data.user,this.email=t.data.user.user_email,this.userName=t.data.user.user_nicename,console.log("check the email,username",this.userName,this.email))},error:t=>{this.router.navigateByUrl("/login"),console.log("showUserProfile-error",t)}})}};e.\u0275fac=function(n){return new(n||e)(c(u),c(S))},e.\u0275cmp=s({type:e,selectors:[["app-edit-profile"]],standalone:!0,features:[p],decls:13,vars:2,consts:[[1,"profile-heading"],[1,"row","mt-5"],[1,"form-group"],[1,"col-12"],["type","text","readonly","",1,"input-control",3,"ngModel","ngModelChange"],[1,"btn","orange-background-btn-w-100"]],template:function(n,a){n&1&&(o(0,"section")(1,"h1",0),d(2," Edit Profile "),r(),o(3,"div",1)(4,"div",2)(5,"div",3)(6,"input",4),v("ngModelChange",function(f){return a.email=f}),r()()(),o(7,"div",2)(8,"div",3)(9,"input",4),v("ngModelChange",function(f){return a.userName=f}),r()()(),o(10,"div",2)(11,"button",5),d(12,"Update Profile"),r()()()()),n&2&&(l(6),b("ngModel",a.email),l(3),b("ngModel",a.userName))},dependencies:[I,D,z,j],styles:[".orange-background-btn[_ngcontent-%COMP%]{background:var(--primary-color-orange);width:fit-content;padding:10px 42px;color:var(--light-grey-2)}.orange-background-btn-w-100[_ngcontent-%COMP%]{background:var(--primary-color-orange);width:100%;padding:10px 42px;color:var(--light-grey-2);font-size:16px}.orange-background-btn-w-100[_ngcontent-%COMP%]:hover{background:var(--primary-color-orange);color:var(--light-grey-2)}.grey-bg-btn[_ngcontent-%COMP%]{width:12em;height:46px;border-radius:4px;background-color:var(--light-grey);color:var(--primary-color-mustard);font-size:16px;line-height:27px;transition:background-color .3s cubic-bezier(.68,-.55,.27,1.55),transform .3s ease}.input-control[_ngcontent-%COMP%]{width:100%;background:#f5f5f5;border:solid 1px rgba(128,128,128,.1882352941);height:40px;padding:10px;border-radius:4px}.input-control[_ngcontent-%COMP%]:focus{outline:solid 2px var(--primary-color-orange);border:none}.form-group[_ngcontent-%COMP%]{margin-bottom:16px}.profile-heading[_ngcontent-%COMP%]{font-size:1.75rem;color:var(--dark-grey)}"]});let i=e;return i})();function A(i,e){if(i&1&&(o(0,"li")(1,"span"),g(2,"i"),r(),d(3),r()),i&2){let M=e.$implicit;l(2),y(M.icon),l(),x(M.label)}}var ee=(()=>{let e=class e{constructor(t,n,a){this.sidebarService=t,this.profileDetail=n,this.localStorage=a,this.sidebarMenu=[],this.getSidebarLinks(),this.userEmail=JSON.parse(a.getData("vietlist::userdata"))}getSidebarLinks(){this.sidebarService.getSidebarLinks().subscribe(t=>{this.sidebarMenu=t,console.log(t)})}};e.\u0275fac=function(n){return new(n||e)(c(T),c(u),c(m))},e.\u0275cmp=s({type:e,selectors:[["app-main"]],standalone:!0,features:[p],decls:19,vars:1,consts:[[1,"container-fluid","g-0"],[1,"banner"],[1,"content"],[1,"container"],[1,"row","my-5"],[1,"col-4"],[1,"sidebar-cnt"],[1,"sidebar-items"],[1,"upload-profile"],[1,"profile-pic-div"],[1,"user-email"],[1,"col-8","mt-4"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"section",1)(2,"div",2)(3,"h1"),d(4,"Account"),r()()(),o(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),g(11,"div",9),r(),o(12,"p",10),d(13),r(),o(14,"ul"),_(15,A,4,3,"li",null,P),r()()()(),o(17,"div",11),g(18,"app-edit-profile"),r()()()()),n&2&&(l(13),x(a.userEmail.user_email),l(2),O(a.sidebarMenu))},dependencies:[U],styles:['[_ngcontent-%COMP%]:root{--primary-color-orange: #FF9900;--primary-color-mustard: #FF9900;--primary-color-blue: #146EB4;--black: #000000;--dark-grey: #232f3e;--light-grey: #F2F2F2;--light-grey-2:#FFFFFF;--white: #fff}[_ngcontent-%COMP%]:root{--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700}.mat-mdc-select-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentColor;position:absolute;top:0!important;left:50%;transform:translate(-50%,-50%)}.mat-mdc-select[_ngcontent-%COMP%]{background:#f5f5f5;border:solid 1px rgba(128,128,128,.1882352941);height:40px;padding:10px;border-radius:4px;width:100%}.mat-mdc-select[_ngcontent-%COMP%]:focus{outline:solid 2px var(--primary-color-orange);border:none}.orange-background-btn[_ngcontent-%COMP%]{background:var(--primary-color-orange);width:fit-content;padding:10px 42px;color:var(--light-grey-2)}.orange-background-btn-w-100[_ngcontent-%COMP%]{background:var(--primary-color-orange);width:100%;padding:10px 42px;color:var(--light-grey-2);font-size:16px}.orange-background-btn-w-100[_ngcontent-%COMP%]:hover{background:var(--primary-color-orange);color:var(--light-grey-2)}.grey-bg-btn[_ngcontent-%COMP%]{width:12em;height:46px;border-radius:4px;background-color:var(--light-grey);color:var(--primary-color-mustard);font-size:16px;line-height:27px;transition:background-color .3s cubic-bezier(.68,-.55,.27,1.55),transform .3s ease}.input-control[_ngcontent-%COMP%]{width:100%;background:#f5f5f5;border:solid 1px rgba(128,128,128,.1882352941);height:40px;padding:10px;border-radius:4px}.input-control[_ngcontent-%COMP%]:focus{outline:solid 2px var(--primary-color-orange);border:none}.form-group[_ngcontent-%COMP%]{margin-bottom:16px}.profile-heading[_ngcontent-%COMP%]{font-size:1.75rem;color:var(--dark-grey)}.banner[_ngcontent-%COMP%]{height:450px;width:100%;position:relative;background-image:url(/assets/resgister-banner-img.jpeg);display:flex;justify-content:center;align-items:center}.banner[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#121212cb;z-index:1}.banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center;margin-top:22px}.banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:var(--font-weight-medium);color:var(--light-grey);font-size:48px}.sidebar-cnt[_ngcontent-%COMP%]{height:100vh;width:70%;margin:auto;background-color:#f3f8fd;display:flex;justify-content:center}.sidebar-items[_ngcontent-%COMP%]{margin:0 auto;width:80%;padding:20px 35px}.sidebar-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:2.5rem;padding:0}.sidebar-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:26px;line-height:20px;color:#00000080;font-size:16px}.sidebar-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.upload-profile[_ngcontent-%COMP%]{height:20vh;width:100%}.profile-pic-div[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:var(--light-grey);border:solid 2px #fff}.user-email[_ngcontent-%COMP%]{color:#1e73be;text-align:center;font-weight:var(--font-weight-semibold);font-size:16px;margin-top:1rem}']});let i=e;return i})();export{ee as MainComponent};
