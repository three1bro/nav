import{f as O,i as B}from"./chunk-VU4ZT5QE.js";import"./chunk-7VOZEF6E.js";import{a as $,b as F}from"./chunk-BCYYOIS3.js";import{Fb as U,Kb as G,hb as V,ib as T,kb as D,lb as k,pb as L,sb as E,vb as W}from"./chunk-ZYNN5BW4.js";import{Ac as x,Db as z,Ie as j,Jb as r,Je as q,Pd as A,Qd as I,Rd as N,Xb as a,Yb as s,bc as f,ec as h,f as w,gc as m,lb as i,le as P,md as M,qb as y,sc as c,uc as g,ud as S,xa as u,xb as b,ya as d,yc as _,zc as C}from"./chunk-P742YXUY.js";function H(n,l){if(n&1){let t=f();a(0,"div",3)(1,"input",4),x("ngModelChange",function(e){u(t);let p=m();return C(p.authCode,e)||(p.authCode=e),d(e)}),s(),a(2,"div",5)(3,"button",6),h("click",function(){u(t);let e=m();return d(e.handleSubmitAuthCode())}),c(4),s()()()}if(n&2){let t=m();i(),r("placeholder",t.$t("_inputAuthCode")),_("ngModel",t.authCode),i(2),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," ")}}function J(n,l){if(n&1){let t=f();a(0,"div")(1,"div",7),c(2),s(),a(3,"input",8),x("ngModelChange",function(e){u(t);let p=m();return C(p.url,e)||(p.url=e),d(e)}),s(),a(4,"div",9)(5,"button",6),h("click",function(){u(t);let e=m();return d(e.handleSave())}),c(6),s(),a(7,"button",10),h("click",function(){u(t);let e=m();return d(e.logoutAuthCode())}),c(8),s()()()}if(n&2){let t=m();i(2),g(" ",t.$t("_bindDomain")," "),i(),_("ngModel",t.url),i(2),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," "),i(),r("nzLoading",t.submitting),i(),g(" ",t.$t("_logoutAuthCode")," ")}}var v=class n{constructor(l){this.message=l}$t=P;submitting=!1;isPermission=!!A();authCode="";url="";ngOnInit(){this.isPermission&&this.getUserInfo()}getUserInfo(l){return w(this,null,function*(){return this.submitting=!0,j(l).then(t=>(typeof t.data?.data?.url=="string"&&(this.isPermission=!0,this.url=t.data.data.url),t)).finally(()=>{this.submitting=!1})})}handleSubmitAuthCode(){this.submitting||!this.authCode||this.getUserInfo({code:this.authCode}).then(()=>{N(this.authCode),window.location.reload()})}handleSave(){this.submitting=!0,q({url:this.url}).then(()=>{this.getUserInfo(),this.message.success(this.$t("_saveSuccess"))}).finally(()=>{this.submitting=!1})}logoutAuthCode(){I(),window.location.reload()}static \u0275fac=function(t){return new(t||n)(y(G))};static \u0275cmp=b({type:n,selectors:[["auth"]],decls:3,vars:3,consts:[["nzTip","Loading...",3,"nzSpinning"],["class","text-center",4,"ngIf"],[4,"ngIf"],[1,"text-center"],["nz-input","","autofocus","",3,"ngModelChange","placeholder","ngModel"],[1,"text-left","mt-2.5"],["nz-button","","nzType","primary",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5"],["nz-input","","placeholder","example.cn,example.com",3,"ngModelChange","ngModel"],[1,"mt-2.5"],["nz-button","","nzType","primary","nzDanger","",2,"margin-left","20px",3,"click","nzLoading"]],template:function(t,o){t&1&&(a(0,"nz-spin",0),z(1,H,5,4,"div",1)(2,J,9,6,"div",2),s()),t&2&&(r("nzSpinning",o.submitting),i(),r("ngIf",!o.isPermission),i(),r("ngIf",o.isPermission))},dependencies:[S,M,U,L,E,W,B,O,k,D,V,T,F,$],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.poster[_ngcontent-%COMP%]{width:1000px;max-width:100%;border-radius:12px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{v as default};
