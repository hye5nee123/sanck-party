"use strict";(self["webpackChunksnack_party"]=self["webpackChunksnack_party"]||[]).push([[262],{7109:function(t,n,r){r.r(n),r.d(n,{default:function(){return C}});var e=r(6768);const l=(0,e.Lk)("h3",null,"InquiryList.vue",-1);function a(t,n,r,a,i,u){const o=(0,e.g2)("InquiryListComp");return(0,e.uX)(),(0,e.CE)("div",null,[l,(0,e.bF)(o)])}var i=r(4232);const u=t=>((0,e.Qi)("data-v-286b6eba"),t=t(),(0,e.jt)(),t),o={class:"content-wrapper"},s={class:"container-xxl flex-grow-1 container-p-y"},c={class:"card"},d={class:"table-responsive text-nowrap"},k={class:"table table-hover"},y=u((()=>(0,e.Lk)("thead",null,[(0,e.Lk)("tr",null,[(0,e.Lk)("th",null,"번호"),(0,e.Lk)("th",null,"분류"),(0,e.Lk)("th",null,"제목"),(0,e.Lk)("th",null,"상태"),(0,e.Lk)("th",null,"등록일")])],-1))),h={class:"table-border-bottom-0"},L=["onClick"];function b(t,n,r,l,a,u){return(0,e.uX)(),(0,e.CE)("div",o,[(0,e.Lk)("div",s,[(0,e.Lk)("div",c,[(0,e.Lk)("div",d,[(0,e.Lk)("table",k,[y,(0,e.Lk)("tbody",h,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(a.inquiryAll,((t,n)=>((0,e.uX)(),(0,e.CE)("tr",{key:n,onClick:n=>u.goToInquiryInfo(t.inquiry_code)},[(0,e.Lk)("td",null,(0,i.v_)(t.inquiry_code.slice(-3)),1),(0,e.Lk)("td",null,(0,i.v_)(t.p_inquiry_type),1),(0,e.Lk)("td",null,(0,i.v_)(t.title),1),(0,e.Lk)("td",null,(0,i.v_)(t.answer_status),1),(0,e.Lk)("td",null,(0,i.v_)(u.formatDate(t.inquiry_date)),1)],8,L)))),128))])])])])])])}r(4114);var p=r(8355),v={data(){return{inquiryAll:[],member_code:""}},created(){this.member_code=this.$store.state.memberStore.memberInfo.member_code,this.getInquiryAll()},methods:{async getInquiryAll(){try{const t=await p.A.get("/api/inquiry/test");this.inquiryAll=t.data}catch(t){console.error("Error fetching inquiry data:",t)}},formatDate(t){return this.$formatDate(t)},goToInquiryInfo(t){this.$router.push({path:"/inquiryInfo",query:{inquiry_code:t}})}}},q=r(1241);const _=(0,q.A)(v,[["render",b],["__scopeId","data-v-286b6eba"]]);var m=_,f={components:{InquiryListComp:m},data(){return{}}};const I=(0,q.A)(f,[["render",a]]);var C=I}}]);
//# sourceMappingURL=InquiryList.d1dd3677.js.map