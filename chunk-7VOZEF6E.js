import{_ as v,aa as h}from"./chunk-ZYNN5BW4.js";import{Db as f,Jb as m,Lb as u,Pc as y,Sb as l,Zb as p,gc as g,ha as i,m as c,n as a,qb as s,wa as r,xb as d}from"./chunk-P742YXUY.js";function I(e,b){if(e&1&&p(0,"nz-icon",0),e&2){let n=g();m("nzType",n.iconType)}}var N=(()=>{class e{formStatusChanges=new a(1);static \u0275fac=function(t){return new(t||e)};static \u0275prov=i({token:e,factory:e.\u0275fac})}return e})(),T=(()=>{class e{noFormStatus=new c(!1);static \u0275fac=function(t){return new(t||e)};static \u0275prov=i({token:e,factory:e.\u0275fac})}return e})(),F={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"},j=(()=>{class e{cdr;status="";constructor(n){this.cdr=n}iconType=null;ngOnChanges(n){this.updateIcon()}updateIcon(){this.iconType=this.status?F[this.status]:null,this.cdr.markForCheck()}static \u0275fac=function(t){return new(t||e)(s(y))};static \u0275cmp=d({type:e,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(t,o){t&2&&u("ant-form-item-feedback-icon-error",o.status==="error")("ant-form-item-feedback-icon-warning",o.status==="warning")("ant-form-item-feedback-icon-success",o.status==="success")("ant-form-item-feedback-icon-validating",o.status==="validating")},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[r],decls:1,vars:1,consts:[[3,"nzType"]],template:function(t,o){t&1&&f(0,I,1,1,"nz-icon",0),t&2&&l(o.iconType?0:-1)},dependencies:[h,v],encapsulation:2,changeDetection:0})}return e})();export{N as a,T as b,j as c};
