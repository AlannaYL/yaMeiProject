import"../tailwind.517bfc7a.js";axios.get("http://localhost:4000/Appointment").then(function(u){const c=u.data;console.log(c);function o(e){const t=document.querySelector(".inquireInfo");t.innerHTML=e}function n(e){return e.map(t=>`<div class="bg-white">
  <h3 class="bg-primary-300 text-center px-12 text-white">\u9810\u7D04\u8A0A\u606F</h3>
  <div class="bg-white p-3">
     <h4 class="text-center px-12 text-primary-300 ">\u75C7\u72C0</h4>
     <p class="departCheck p-3 text-center ">${t.depart}</p>
     <p class="symptomCheck p-3 text-center ">${t.symptom}</p>
     <h4 class="text-center px-12 text-primary-300 ">\u9810\u7D04\u65E5\u671F\u53CA\u6642\u9593</h4>
     <p class="dateCheck p-3 text-center ">\u9810\u7D04\u65E5\u671F</p>
     <p class="timeCheck p-3 text-center ">${t.time}</p>
     <h4 class="text-center px-12 text-primary-300">\u770B\u8A3A\u865F\u78BC</h4>

  </div>
</div>`)}document.querySelector("[data-appointmentInfo-form]").addEventListener("submit",e=>{e.preventDefault(),o(n(r(e.target.searchIdNum.value)))});function r(e,t=c){return t.filter(d=>d.idNum.includes(e))}});const h=document.querySelector(".send"),a=document.querySelector(".name"),m=document.querySelector(".idNumber"),l=document.querySelector(".birth"),p=document.querySelector(".mail"),i=document.querySelector(".phone"),s=document.querySelector(".remark"),y=document.querySelector(".departCheck"),v=document.querySelector(".dateCheck"),k=document.querySelector(".timeCheck"),q=document.querySelector(".symptomCheck"),S=document.querySelector(".nameCheck"),C=document.querySelector(".idNumCheck"),x=document.querySelector(".birthCheck"),L=document.querySelector(".mailCheck"),T=document.querySelector(".phoneCheck"),$=document.querySelector(".sexCheck"),f=document.querySelector(".remarkCheck");h.addEventListener("click",function(u){const c=document.querySelector("input[type=radio][name=department]:checked");y.innerHTML=`<p>${c.value}</p>`;const o=document.querySelector("input[type=radio][name=time]:checked");k.innerHTML=`<p>${o.value}</p>`;const n=document.querySelector("input[type=radio][name=sex]:checked");$.innerHTML=`<p>${n.value}</p>`;const r=document.querySelector("#symptom");q.innerHTML=`<p>${r.value}</p>`;const e=document.querySelector("#date");v.innerHTML=`<p>${e.value}</p>`,S.innerHTML=`<p>${a.value}</p>`,C.innerHTML=`<p>${m.value}</p>`,x.innerHTML=`<p>${l.value}</p>`,L.innerHTML=`<p>${p.value}</p>`,T.innerHTML=`<p>${i.value}</p>`,f.innerHTML=`<p>${s.value}</p>`});const H=document.querySelector(".save");H.addEventListener("click",function(u){const c=document.querySelector("input[type=radio][name=department]:checked"),o=document.querySelector("input[type=radio][name=time]:checked"),n=document.querySelector("#symptom"),r=document.querySelector("#date"),e=document.querySelector("input[type=radio][name=sex]:checked");axios.post("http://localhost:4000/Appointment",{depart:c.value,date:r.value,time:o.value,symptom:n.value,name:a.value,sex:e.value,idNum:m.value,birth:l.value,mail:p.value,phone:i.value,remark:s.value}),alert("\u9810\u7D04\u6210\u529F"),n.value="",r.value="",a.value="",m.value="",l.value="",p.value="",i.value="",s.value=""});
