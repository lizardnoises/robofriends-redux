(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{23:function(e,t,r){},26:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),o=r(4),s=r.n(o),a=r(3),i=r(5),d=(r(23),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,29)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),o(e),s(e)}))}),b=(r(24),r(1));var u=function(e){var t=e.id,r=e.name,n=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:r}),Object(b.jsx)("p",{children:n})]})]})};var h=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(u,{id:e.id,name:e.name,email:e.email},e.id)}))})};var l=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})};var j=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},f=r(9),O=r(10),g=r(14),p=r(13),v=function(e){Object(g.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(f.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(O.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),r}(n.Component),x=(r(26),r(2)),m={searchField:""},y={isPending:!1,robots:[],error:""},C=function(e){return e.searchReducer.searchField},R=function(e){return{robots:e.requestRobotsReducer.robots,isPending:e.requestRobotsReducer.isPending,error:e.requestRobotsReducer.error}};var w=function(){var e=Object(a.c)(R),t=e.robots,r=e.isPending,c=Object(a.c)(C),o=Object(a.b)();Object(n.useEffect)((function(){return o((function(e){return e({type:"robots/pending"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"robots/fulfilled",payload:e}}(t))})).catch((function(t){return e(function(e){return{type:"robots/rejected",payload:e}}(t))}))}))}),[o]);var s=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return r?Object(b.jsx)("h1",{className:"tc",children:"Loading"}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(l,{searchChange:function(e){return o({type:"robots/searchChanged",payload:e.target.value})}}),Object(b.jsx)(j,{children:Object(b.jsx)(v,{children:Object(b.jsx)(h,{robots:s})})})]})},P=r(11),F=r(12),L=Object(P.createLogger)(),N=Object(i.b)({searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"robots/searchChanged"===t.type?Object(x.a)(Object(x.a)({},e),{},{searchField:t.payload}):e},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"robots/pending":return Object(x.a)(Object(x.a)({},e),{},{isPending:!0});case"robots/fulfilled":return Object(x.a)(Object(x.a)({},e),{},{isPending:!1,robots:t.payload});case"robots/rejected":return Object(x.a)(Object(x.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}}),k=Object(i.c)(N,Object(i.a)(F.a,L));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(a.a,{store:k,children:Object(b.jsx)(w,{})})}),document.getElementById("root")),d()}},[[28,1,2]]]);
//# sourceMappingURL=main.bec52120.chunk.js.map