(this.webpackJsonpcs510=this.webpackJsonpcs510||[]).push([[0],{37:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),c=a(10),n=a.n(c),o=(a(36),a(37),a(11)),i=a(13),l=a(14),h=a(16),d=a(15),p=a(12),u=a(76),j=a(68),m=a(69),b=a(70),g=a(71),f=a(72),O=a(73),v=a(74),x=a(75),y=a(3),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value;"checkbox"===e.target.type&&(s=e.target.checked);var c=Object(o.a)(Object(o.a)({},r.state.activeItem),{},Object(p.a)({},a,s));r.setState({activeItem:c})},r.state={activeItem:r.props.activeItem},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.toggle,r=t.onSave;return Object(y.jsxs)(u.a,{isOpen:!0,toggle:a,children:[Object(y.jsx)(j.a,{toggle:a,children:"Query"}),Object(y.jsx)(m.a,{children:Object(y.jsx)(b.a,{children:Object(y.jsxs)(g.a,{children:[Object(y.jsx)(f.a,{for:"todo-title",children:"Query (Please don't press enter)"}),Object(y.jsx)(O.a,{type:"text",id:"todo-title",name:"query",value:this.state.activeItem.query,onChange:this.handleChange,placeholder:"Enter Query"})]})})}),Object(y.jsx)(v.a,{children:Object(y.jsx)(x.a,{color:"success",onClick:function(){return r(e.state.activeItem)},children:"Submit"})})]})}}]),a}(r.Component),I=a(19),S=a.n(I),N="https://cors-anywhere.herokuapp.com/",C="https://backend.cs411team1.web.illinois.edu/polls/",P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).toggle=function(){r.setState({modal:!r.state.modal})},r.handleSubmit=function(e){var t=r.state.flag;r.toggle();var a=e.query;a=a.replaceAll(" ","_"),r.setState({Q:e.query}),console.log(e.query),0===t?S.a.get(N+C+"getProfessors/"+"".concat(a)).then((function(t){return r.getProfessorUpdate(t.data,e)})):1===t&&S.a.get(N+C+"getProfessors/"+"".concat(a)).then((function(t){return r.getPaperUpdate(t.data,e)}))},r.createItem=function(){r.setState({flag:0,activeItem:{rank:"",score:"",professor:"",homepage:""},modal:!r.state.modal})},r.createItem2=function(){r.setState({flag:1,activeItem:{professor:"",homepage:""},modal:!r.state.modal})},r.renderItems=function(){if(1===r.state.flag){var e=r.state.paperList;return console.log(e),e.map((function(e){return Object(y.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:Object(y.jsxs)("span",{className:"todo-title mr-2",title:e.homepage,children:[Object(y.jsx)("div",{className:"d",children:Object(y.jsx)("a",{href:e.homepage,children:e.professor})}),Object(y.jsxs)("div",{children:["rank: ",e.rank,", score: ",e.score]}),Object(y.jsxs)("div",{children:["paper: ",e.paper]})]})},e.rank)}))}var t=r.state.resultList;return console.log(t),t.map((function(e){return Object(y.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:Object(y.jsxs)("span",{className:"todo-title mr-2",title:e.homepage,children:[Object(y.jsx)("div",{className:"d",children:Object(y.jsx)("a",{href:e.homepage,children:e.professor})}),Object(y.jsxs)("div",{children:["rank: ",e.rank,", score: ",e.score]})]})},e.rank)}))},r.state={flag:0,resultList:[],paperList:[],modal:!1,Q:"",activeItem:{query:"",rank:"",score:0,professor:"",homepage:"",paper:""}},r}return Object(l.a)(a,[{key:"getProfessorUpdate",value:function(e,t){for(var a=[],r={rank:"",score:"",professor:"",homepage:"",paper:""},s=0;s<e.length;s++)r=JSON.parse(e[s]),0!==parseFloat(r.score)&&a.push(r);0===a.length&&(r={rank:0,score:"",professor:"No relevant data found",homepage:"",paper:""},a.push(r)),this.setState({resultList:a})}},{key:"getPaperUpdate",value:function(e,t){for(var a=[],r={rank:"",score:"",professor:"",homepage:"",paper:""},s=0;s<e.length;s++)r=JSON.parse(e[s]),r=Object(o.a)(Object(o.a)({},r),{},{paper:"Conducting Truthful Surveys, Cheaply\uff0c Efficiently Learning from Revealed Preference"}),a.push(r);this.setState({paperList:a})}},{key:"render",value:function(){return Object(y.jsxs)("main",{className:"container",children:[Object(y.jsx)("h1",{className:"text-black-50 text-uppercase text-center my-4",children:"Professor Search Engine"}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(y.jsxs)("div",{className:"card p-3",children:[Object(y.jsxs)("div",{children:["Go to ",Object(y.jsx)("a",{href:N,children:N})," to request temporary access to the demo server"]}),Object(y.jsx)("div",{className:"mb-4",children:Object(y.jsx)("button",{className:"btn btn-primary",onClick:this.createItem,children:"Enter Research Topic"})}),Object(y.jsxs)("div",{children:["Current Query: ",this.state.Q]}),Object(y.jsx)("ul",{className:"list-group list-group-flush border-top-0",children:this.renderItems()})]})})}),this.state.modal?Object(y.jsx)(k,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null]})}}]),a}(r.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),c(e),n(e)}))};n.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.e2604991.chunk.js.map