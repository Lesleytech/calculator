(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{18:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(8),c=a.n(l),i=(a(23),a(14)),r=a(9),o=a(10),u=a(15),b=a(11),d=a(16),m=(a(24),a(29)),h=(a(25),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(b.a)(t).call(this))).handleCalculate=function(e){try{return Object(m.a)(e)}catch(t){return"Error"}},e.handleClick=function(t){var a=t.target,n=a.value,s=a.id;switch(n){case"+":case"-":case"*":case"/":case"^":if(""===e.state.expression&&"-"!==n||"-"===e.state.expression)break;/[-*+^/]$/g.test(e.state.expression)?e.setState((function(){var t=Object(i.a)(e.state.expression.split(""));return t[t.length-1]=n,{expression:t.join("")}})):e.setState((function(e){return e.expression+=n,{expression:e.expression,calculated:!1}}));break;case"backspace":!e.state.calculated&&e.setState((function(e){return{expression:e.expression.slice(0,-1)}}));break;case"calculate":e.setState((function(t){return{expression:"",result:e.handleCalculate(t.expression),calculated:!0}}));break;case"clear":e.setState({expression:"",result:0,calculated:!1});break;default:if("answer"===s&&/[^-*+/]$/g.test(e.state.expression))break;!0===e.state.calculated&&/[\d()]/g.test(n)?e.setState({expression:n,calculated:!1}):e.setState((function(e){return e.expression+=n,{expression:e.expression,calculated:!1}}))}},e.state={expression:"",result:0,calculated:!1},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"container"},s.a.createElement("div",{id:"calculator"},s.a.createElement("div",{id:"calculator-screen"},s.a.createElement("input",{name:"expression",id:"expression",value:this.state.expression,className:"text-right px-2",readOnly:!0,disabled:!0}),s.a.createElement("input",{name:"result",id:"result",value:this.state.result,className:"text-right px-2",readOnly:!0,disabled:!0})),s.a.createElement("div",{id:"calculator-body"},s.a.createElement("button",{value:0,id:"zero",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"0"),s.a.createElement("button",{value:1,id:"one",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"1"),s.a.createElement("button",{value:2,id:"two",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"2"),s.a.createElement("button",{value:3,id:"three",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"3"),s.a.createElement("button",{value:4,id:"four",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"4"),s.a.createElement("button",{value:5,id:"five",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"5"),s.a.createElement("button",{value:6,id:"six",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"6"),s.a.createElement("button",{value:7,id:"seven",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"7"),s.a.createElement("button",{value:8,id:"eight",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"8"),s.a.createElement("button",{value:9,id:"nine",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"9"),s.a.createElement("button",{value:"+",id:"add",className:"btn btn-sm btn-primary",onClick:this.handleClick},"+"),s.a.createElement("button",{value:"-",id:"subtract",className:"btn btn-sm btn-primary",onClick:this.handleClick},"-"),s.a.createElement("button",{value:"*",id:"multiply",className:"btn btn-sm btn-primary",onClick:this.handleClick},"x"),s.a.createElement("button",{value:"/",id:"divide",className:"btn btn-sm btn-primary",onClick:this.handleClick},"/"),s.a.createElement("button",{value:"calculate",id:"equals",className:"btn btn-sm btn-success",onClick:this.handleClick},"="),s.a.createElement("button",{value:"clear",id:"clear",className:"btn btn-sm btn-danger",onClick:this.handleClick},"C"),s.a.createElement("button",{value:"(",id:"left-bracket",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"("),s.a.createElement("button",{value:")",id:"right-bracket",className:"btn btn-sm btn-secondary",onClick:this.handleClick},")"),s.a.createElement("button",{value:"E"!==this.state.result?this.state.result:"",id:"answer",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"Ans"),s.a.createElement("button",{value:"backspace",id:"backspace",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"\u21e6"),s.a.createElement("button",{value:".",id:"decimal",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"."),s.a.createElement("button",{value:"^",id:"exponent",className:"btn btn-sm btn-secondary",onClick:this.handleClick},"x",s.a.createElement("sup",null,"y")))),s.a.createElement("small",{id:"author-comment"},"Coded with ",s.a.createElement("span",null,"\u2665")," by Lafen Lesley"))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ca330676.chunk.js.map