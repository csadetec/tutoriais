(this.webpackJsonpminhas_series=this.webpackJsonpminhas_series||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"media/logo.b352c65f.png"},30:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),i=a.n(r),c=a(5),o=a(6),l=a(8),m=a(7),u=a(9),d=a(4),h=a(11),v=a(14),f=a.n(v),p=a(12),g=a.n(p),E="http://localhost/tutoriais/minhas_series/backend/index.php",b={loadGenres:function(){return g.a.get("".concat(E,"/genres"))},loadSeries:function(){return g.a.get("".concat(E,"/series"))},saveSeries:function(e){return g.a.post("".concat(E,"/series/post"),e)},loadSeriesByGenre:function(e){return g.a.get("".concat(E,"/series/genre/").concat(e))},deleteSeries:function(e){return g.a.delete("".concat(E,"/series/").concat(e))},loadSeriesById:function(e){return g.a.get("".concat(E,"/series/").concat(e))},updateSeries:function(e){return g.a.put("".concat(E,"/series/").concat(e.id),e)}},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={genres:[],isLoading:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),b.loadGenres().then((function(t){console.log(t),e.setState({isLoading:!1,genres:t.data})}))}},{key:"renderGenreLink",value:function(e){return s.a.createElement("span",{key:e.id},"\xa0",s.a.createElement(d.b,{to:"/series/".concat(e.name)},e.name),"\xa0")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{id:"intro",className:"intro-section"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h1",null,s.a.createElement("img",{src:f.a,alt:"Logo do site"})),s.a.createElement("p",null,"Nunca mais esque\xe7a uma s\xe9rie que voc\xea assistiu ou que algu\xe9m lhe indicou."))))),s.a.createElement("section",null,this.state.isLoading&&s.a.createElement("span",null,"Aguarde, carregando ..."),!this.state.isLoading&&s.a.createElement("div",null,"Ver s\xe9ries do gen\xearo:",this.state.genres.map(this.renderGenreLink))))}}]),t}(n.Component),N=a(10),y={watched:"Assistido",watching:"Assistindo",toWatch:"Assitir"},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={genres:[],isLoading:!1,redirect:!1},a.saveSeries=a.saveSeries.bind(Object(N.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),b.loadGenres().then((function(t){e.setState({isLoading:!1,genres:t.data})}))}},{key:"saveSeries",value:function(e){e.preventDefault();var t={name:this.refs.name.value,status:this.refs.status.value,genre:this.refs.genre.value,comments:this.refs.comments.value};console.log(e.target.elements),t=JSON.stringify(t),b.saveSeries(t).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){return s.a.createElement("section",{className:"intro-section"},this.state.redirect&&s.a.createElement(h.a,{to:this.state.redirect}),s.a.createElement("h1",null,"Nova S\xe9rie"),s.a.createElement("form",{onSubmit:this.saveSeries},"Nome: ",s.a.createElement("input",{ref:"name",type:"text",className:"form-control"}),s.a.createElement("br",null),"Status:",s.a.createElement("select",{ref:"status",className:"form-control"},Object.keys(y).map((function(e){return s.a.createElement("option",{key:e,value:e},y[e])})))," ",s.a.createElement("br",null),"Genero:",s.a.createElement("select",{ref:"genre",className:"form-control"},this.state.genres.map((function(e){return s.a.createElement("option",{key:e.id,value:e.name},e.name)}))),s.a.createElement("br",null),"Coment\xe1rios : ",s.a.createElement("textarea",{ref:"comments",className:"form-control"}),s.a.createElement("br",null),s.a.createElement("button",null,"Salvar")))}}]),t}(n.Component),j={watched:"Assistido",watching:"Assistido",toWatch:"Assistir"},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isLoading:!1,series:[]},a.renderSeries=a.renderSeries.bind(Object(N.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),b.loadSeriesByGenre(this.props.match.params.genre).then((function(t){e.setState({isLoading:!1,series:t.data})}))}},{key:"deleteSeries",value:function(e){var t=this;b.deleteSeries(e).then((function(e){return t.componentDidMount()}))}},{key:"renderSeries",value:function(e){var t=this;return s.a.createElement("div",{key:e.id,className:"item  col-xs-4 col-lg-4"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("img",{className:"group list-group-image",src:"http://placehold.it/400x250/000/fff",alt:""}),s.a.createElement("div",{className:"caption"},s.a.createElement("h4",{className:"group inner list-group-item-heading"},e.name),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12 col-md-6"},s.a.createElement("p",{className:"lead"},e.genre," / ",j[e.status])),s.a.createElement("div",{className:"col-xs-12 col-md-6"},s.a.createElement(d.b,{className:"btn btn-success",to:"/series/edit/"+e.id},"Editar"),s.a.createElement("button",{onClick:function(){return t.deleteSeries(e.id)},className:"btn btn-success"},"Excluir"))))))}},{key:"render",value:function(){return s.a.createElement("section",{id:"intro",className:"intro-section"},s.a.createElement("h2",null,"Series ",this.props.match.params.genre),s.a.createElement("div",{id:"series",className:"row list-group"},this.state.isLoading&&s.a.createElement("p",null,"Carregando, aguarde ..."),!this.state.isLoading&&0===this.state.series.length&&s.a.createElement("div",{className:"alert alert-info"},"Nenhuma S\xe9rie Cadastrada."),!this.state.isLoading&&this.state.series.map(this.renderSeries)))}}]),t}(n.Component),L={watched:"Assistido",watching:"Assistindo",toWatch:"Assitir"},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={genres:[],isLoading:!1,redirect:!1,series:{}},a.saveSeries=a.saveSeries.bind(Object(N.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),b.loadSeriesById(this.props.match.params.id).then((function(t){e.setState({series:t.data}),e.refs.name.value=e.state.series.name,e.refs.genre.value=e.state.series.genre,e.refs.comments.value=e.state.series.comments})),b.loadGenres().then((function(t){e.setState({isLoading:!1,genres:t.data})}))}},{key:"saveSeries",value:function(e){var t=this;e.preventDefault();var a={id:this.props.match.params.id,name:this.refs.name.value,status:this.refs.status.value,genre:this.refs.genre.value,comments:this.refs.comments.value};b.updateSeries(a).then((function(e){t.setState({redirect:"/series/"+t.refs.genre.value})}))}},{key:"render",value:function(){return s.a.createElement("section",{className:"intro-section"},this.state.redirect&&s.a.createElement(h.a,{to:this.state.redirect}),s.a.createElement("h1",null,"Editar S\xe9rie"),s.a.createElement("form",{onSubmit:this.saveSeries},"Nome: ",s.a.createElement("input",{ref:"name",type:"text",className:"form-control"}),s.a.createElement("br",null),"Status:",s.a.createElement("select",{ref:"status",className:"form-control"},Object.keys(L).map((function(e){return s.a.createElement("option",{key:e,value:e},L[e])})))," ",s.a.createElement("br",null),"Genero:",s.a.createElement("select",{ref:"genre",className:"form-control"},this.state.genres.map((function(e){return s.a.createElement("option",{key:e,value:e},e)}))),s.a.createElement("br",null),"Coment\xe1rios : ",s.a.createElement("textarea",{ref:"comments",className:"form-control"}),s.a.createElement("br",null),s.a.createElement("button",null,"Salvar")))}}]),t}(n.Component),x=function(){return s.a.createElement("section",{className:"intro-section"},s.a.createElement("h2",null,"Sobre"))},A=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top",role:"navigation"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-header page-scroll"},s.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},s.a.createElement("img",{src:f.a,height:"30",alt:"Logo do site"}))),s.a.createElement("div",{className:"collapse navbar-collapse navbar-ex1-collapse"},s.a.createElement("ul",{className:"nav navbar-nav"},s.a.createElement("li",null,s.a.createElement(d.b,{to:"/"},"Menu item")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/new"},"Nova S\xe9rie")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/about"},"Sobre")))))),s.a.createElement(h.b,{exact:!0,path:"/",component:S}),s.a.createElement(h.b,{exact:!0,path:"/series/edit/:id",component:w}),s.a.createElement(h.b,{exact:!0,path:"/series/:genre",component:k}),s.a.createElement(h.b,{path:"/new",component:O}),s.a.createElement(h.b,{path:"/about",component:x}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d5748345.chunk.js.map