(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(30),s=a.n(r),i=(a(38),a(39),a(31)),o=a(2),d=a(8),l=a(9),j=a(12),h=a(11),b=a(10),u=a(15),O=a.n(u),p="http://localhost:8080/api/board",x=new(function(){function e(){Object(d.a)(this,e)}return Object(l.a)(e,[{key:"getBoards",value:function(){return O.a.get(p)}},{key:"createBoard",value:function(e){return O.a.post(p,e)}},{key:"getOneBoard",value:function(e){return O.a.get(p+"/"+e)}},{key:"updateBoard",value:function(e,t){return O.a.put(p+"/"+e,t)}}]),e}()),m=a(0),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={board:[]},n.createBoard=n.createBoard.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.getBoards().then((function(t){e.setState({boards:t.data})}))}},{key:"createBoard",value:function(){this.props.history.push("/create-board/_create")}},{key:"readBoard",value:function(e){this.props.history.push("/read-board/".concat(e))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"text-center",children:"Board List"}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:this.createBoard,children:"\uae00 \uc791\uc131"})}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\uae00 \ubc88\ud638"}),Object(m.jsx)("th",{children:"\ud0c0\uc774\ud2c0"}),Object(m.jsx)("th",{children:"\uc791\uc131\uc77c"}),Object(m.jsx)("th",{children:"\uac31\uc2e0\uc77c"})]})}),Object(m.jsx)("tbody",{children:this.state.boards&&this.state.boards.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",t.id," "]}),Object(m.jsxs)("td",{onClick:function(){return e.readBoard(t.id)},children:[" ",t.title," "]}),Object(m.jsxs)("td",{children:[" ",t.createdTime," "]}),Object(m.jsxs)("td",{children:[" ",t.upadtedTime," "]})]},t.id)}))})]})})]})}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("header",{className:"mb-2",children:Object(m.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"https://localhost:3000",className:"navbar-brand",children:"Board App"})})})})})}}]),a}(n.Component),y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("footer",{className:"footer mt-2",children:Object(m.jsx)("span",{className:"text-muted",children:"start react app 2021"})})})}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeTypeHandler=function(e){n.setState({type:e.target.value})},n.changeTitleHandler=function(e){n.setState({title:e.target.value})},n.changeContentsHandler=function(e){n.setState({contents:e.target.value})},n.createBoard=function(e){e.preventDefault();var t={type:n.state.type,title:n.state.title,contents:n.state.contents};"_create"===n.state.id?x.createBoard(t).then((function(e){n.props.history.push("/board")})):x.updateBoard(n.state.id,t).then((function(e){n.props.history.push("/board")}))},n.state={type:"",title:"",contents:""},n.changeTypeHandler=n.changeTypeHandler.bind(Object(j.a)(n)),n.changeTitleHandler=n.changeTitleHandler.bind(Object(j.a)(n)),n.changeContentsHandler=n.changeContentsHandler.bind(Object(j.a)(n)),n.createBoard=n.createBoard.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"cancel",value:function(){this.props.history.push("/board")}},{key:"getTitle",value:function(){return"_create"===this.state.id?Object(m.jsx)("h3",{className:"text-center",children:"\uac8c\uc2dc\uae00 \uc791\uc131"}):Object(m.jsx)("h3",{className:"text-center",children:"\uac8c\uc2dc\uae00 \uc218\uc815"})}},{key:"componentDidMount",value:function(){var e=this;"_create"!==this.state.id&&x.getOneBoard(this.state.id).then((function(t){var a=t.data;e.setState({type:a.type,title:a.title,contents:a.contents})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[this.getTitle(),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:" Type "}),Object(m.jsxs)("select",{placeholder:"type",name:"type",className:"form-control",value:this.state.type,onChange:this.changeTypeHandler,children:[Object(m.jsx)("option",{value:"1",children:"\uc790\uc720\uac8c\uc2dc\ud310"}),Object(m.jsx)("option",{value:"2",children:"\uc9c8\ubb38\uacfc \ub2f5\ubcc0"})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:" Title "}),Object(m.jsx)("input",{type:"text",placeholder:"title",name:"title",className:"form-control",value:this.state.title,onChange:this.changeTitleHandler})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:" Contents  "}),Object(m.jsx)("textarea",{placeholder:"contents",name:"contents",className:"form-control",value:this.state.contents,onChange:this.changeContentsHandler})]}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.createBoard,children:"Save"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Cancel"})]})})]})})})})}}]),a}(n.Component),N=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,board:{}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.getOneBoard(this.state.id).then((function(t){console.log(t.data),e.setState({board:t.data})}))}},{key:"returnBoardType",value:function(e){var t=null;switch(e){case 1:t="\uc790\uc720\uac8c\uc2dc\ud310";break;case 2:t="\uc9c8\ubb38\uacfc \ub2f5\ubcc0";break;default:t="\ud0c0\uc785 \ubbf8\uc9c0\uc815"}return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{children:"Board Type : "})," ",t]})}},{key:"updateBoard",value:function(e){this.props.history.push("/create-board/"+e)}},{key:"goToList",value:function(){this.props.history.push("/board")}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"card col-md-6 offset-md-3",children:[Object(m.jsx)("h3",{className:"text-center",children:" Read Detail"}),Object(m.jsxs)("div",{className:"card-body",children:[this.returnBoardType(this.state.board.type),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{children:" Title "})," : ",this.state.board.title]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Contents"}),Object(m.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:this.state.board.contents})]})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{children:" \uc791\uc131\uc77c "})," : ",this.state.board.createdTime]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{children:" \uc218\uc815\uc77c "})," : ",this.state.board.updatedTime]}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:this.goToList.bind(this),style:{marginLeft:"10px"},children:"\uae00 \ubaa9\ub85d\uc73c\ub85c \uc774\ub3d9"}),Object(m.jsx)("button",{className:"btn btn-info",onClick:this.updateBoard(this.state.board.id),style:{marginLeft:"10px"},children:"\uae00 \uc218\uc815"})]})]})})}}]),a}(n.Component);var k=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/board",component:v}),Object(m.jsx)(o.a,{path:"/create-board/:id",component:g}),Object(m.jsx)(o.a,{path:"/read-board/:id",component:N})]})}),Object(m.jsx)(y,{})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),B()}},[[64,1,2]]]);
//# sourceMappingURL=main.6caaec3d.chunk.js.map