(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(4),r=n(5),o=n(7),i=n(6),d=n(1),u=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={keyPressed:"",notPressed:!0},e.handleDocumentClick=function(t){e.setState({notPressed:!1}),e.setState({keyPressed:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentClick)}},{key:"render",value:function(){var e=this.state,t=e.keyPressed,n=e.notPressed;return Object(u.jsx)("div",{className:"App",children:n?Object(u.jsx)("p",{className:"App__message",children:"Nothing pressed yet"}):Object(u.jsxs)("p",{className:"App__message",children:["The last pressed key is [",t,"]"]})})}}]),n}(d.Component);n(13);c.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ddbad71f.chunk.js.map