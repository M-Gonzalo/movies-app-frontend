(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},60:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(17),s=n.n(r),i=(n(39),n(40),n(8)),o=n(6),l=n(5),j=n.n(l),u=n(9),d=n.n(u),b=(n(60),n(12)),h=n(1);var O=function(){var e,t,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],s=a[1],l="https://vadith-moviesapp-backend.herokuapp.com/search?year=2021-2022&order_by=rating&limit=100";return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(l);case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){s(e[Math.floor(Math.random()*e.length)])}))}),[]),Object(h.jsxs)("header",{className:"banner__container",style:{backgroundImage:"url(".concat(r?r.large_cover_image:"",")")},children:[Object(h.jsxs)("div",{className:"banner_content",children:[Object(h.jsx)("h1",{className:"banner__title",children:r?r.title:""}),Object(h.jsxs)("div",{className:"banner_buttons",children:[Object(h.jsx)("button",{className:"banner__button",onClick:function(e){window.open("https://www.youtube.com/watch?v=".concat(r.yt_trailer_code),"_blank")},children:"Trailer"}),Object(h.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(h.jsx)("h1",{className:"banner__description",children:(e="".concat(r?r.synopsis:""),t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(h.jsx)("div",{className:"banner__fadeBottom"})]})},m=n(13);n(65);var p=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],r=n[1],s=e.genre[0],l="https://vadith-moviesapp-backend.herokuapp.com";Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(l,"/search?genre=").concat(s,"&year=2021-2022&order_by=rating"));case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){r(e)}))}),[]);var u=e.description||e.genre;return a.length>0?Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:u}),Object(h.jsx)("div",{className:"row__poster",children:a.map((function(e){return Object(h.jsx)("div",{className:"",children:Object(h.jsx)(m.b,{to:"/detail/".concat(e.id),children:Object(h.jsx)("img",{className:"card-img-top",src:e.small_cover_image,alt:e.title})})},e.id)}))})]}):Object(h.jsx)("div",{children:"Loading..."})};n(66);var v=function(){return Object(h.jsxs)("div",{className:"home_container",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)(p,{genre:[""],description:"Weekly ranking"}),Object(h.jsx)(p,{genre:["Action"]}),Object(h.jsx)(p,{genre:["Comedy"]}),Object(h.jsx)(p,{genre:["Drama"]}),Object(h.jsx)(p,{genre:["Horror"]}),Object(h.jsx)(p,{genre:["Romance"]})]})]})},f=n.p+"static/media/logo_netflix.774e8c16.png",x=n.p+"static/media/avatar.3f9fc097.png",g=n(31);n(67);var _=n(3);var N=function(){var e=Object(_.f)(),t=Object(b.b)(),n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1],d=function(){window.scrollY>100?u(!0):u(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]),Object(h.jsx)("div",{className:"nav__container ".concat(j&&"nav__black"),children:Object(h.jsxs)("div",{className:"nav__content",children:[Object(h.jsx)(m.b,{to:"/home",children:Object(h.jsx)("img",{src:f,alt:"",className:"nav__logo"})}),Object(h.jsxs)("div",{className:"container-2",children:[Object(h.jsx)(g.a,{onClick:function(n){return function(n){n.preventDefault(),t({type:"PICK_SEARCH_TERM",payload:r}),s(""),e("/searchs")}(n)},className:"icon"}),Object(h.jsx)("input",{onChange:function(e){return function(e){e.preventDefault(),s(e.target.value)}(e)},type:"search",value:r,id:"search",placeholder:"Search..."})]}),Object(h.jsx)("img",{src:x,alt:"",className:"avatar__logo"})]})})},y=n(32);n(68);var w=function(){var e=Object(_.g)().id,t=Object(b.b)();Object(c.useEffect)((function(){t(function(e){return function(){var t=Object(i.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://vadith-moviesapp-backend.herokuapp.com/movies/".concat(e));case 2:return c=t.sent,t.abrupt("return",n({type:"GET_DETAIL",payload:c.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t,e]);var n=Object(b.c)((function(e){return e.detail}));return Object(h.jsx)("div",{className:"container_detail",children:n.length>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"background_content",style:{backgroundImage:"url(".concat(n[0].background_image_original,")")}}),Object(h.jsxs)("div",{className:"row_d",children:[Object(h.jsxs)("div",{className:"movie_p_d",children:[Object(h.jsx)("img",{src:n[0].medium_cover_image,alt:"",className:"img_detail"}),n[0].yt_trailer_code.length>0&&Object(h.jsxs)("button",{className:"triler__button",onClick:function(e){window.open("https://www.youtube.com/watch?v=".concat(n[0].yt_trailer_code),"_blank")},children:[Object(h.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(h.jsx)("span",{children:"TRAILER"})]})]}),Object(h.jsxs)("div",{className:"info_d",children:[Object(h.jsx)("div",{className:"subtitle",children:n[0].title}),Object(h.jsxs)("div",{className:"year_d",children:[Object(h.jsx)("h4",{children:"Year"}),n[0].year]}),Object(h.jsx)("div",{className:"genre_d",children:n.map((function(e){return e.genres})).join(",")}),Object(h.jsxs)("div",{className:"rating",children:[Object(h.jsx)(y.a,{className:"icon"}),Object(h.jsx)("h4",{children:"rating "}),n[0].rating]})]})]}),Object(h.jsx)("div",{className:"description",children:n[0].synopsis}),Object(h.jsx)("div",{className:"controls__detail",children:Object(h.jsx)("button",{className:"add__button",children:Object(h.jsx)("span",{className:"icon__add",children:"+"})})})]}):Object(h.jsx)("img",{className:"loading_d",src:f,alt:""})})};n(69);var E=function(e){var t=e.title,n=e.img,c=e.id;return e.genres,Object(h.jsx)("div",{className:"container_m",children:Object(h.jsxs)("div",{className:"movie_card",children:[Object(h.jsx)("div",{className:"body_m",children:Object(h.jsx)("div",{className:"m_title",children:t})}),Object(h.jsx)("div",{children:Object(h.jsx)(m.b,{to:"/detail/"+c,children:Object(h.jsx)("img",{src:n,alt:"",className:"m_img"})})})]})})},k=n(14),T=n(4);n(70);var C=function(e){for(var t=e.moviesPerPage,n=e.movies,a=e.paginado,r=[],s=1;s<=Math.ceil(n/t);s++)r.push(s);return Object(c.useEffect)((function(){window.scrollTo(0,0)})),Object(h.jsx)("div",{className:"center_m",children:Object(h.jsx)("div",{className:"pagination_m",children:null===r||void 0===r?void 0:r.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:"button_m",onClick:function(){return a(e)},children:e})},e)}))})})},R=(n(71),function(e){var t=e.handleInputChange,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://vadith-moviesapp-backend.herokuapp.com/genres");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)("div",{className:"orders",children:[Object(h.jsxs)("select",{onChange:function(e){return t(e)},name:"order",className:"order_r",defaultValue:"default",children:[Object(h.jsx)("option",{value:"default",disabled:!0,children:"Rating"}),Object(h.jsx)("option",{value:"asc",children:"asc"}),Object(h.jsx)("option",{value:"desc",children:"desc"})]}),Object(h.jsxs)("div",{className:"yearInput",children:[Object(h.jsx)("input",{onChange:function(e){return t(e)},name:"year1",className:"year_r",type:"number",placeholder:"From year..."}),"    ",Object(h.jsx)("input",{onChange:function(e){return t(e)},name:"year2",className:"year_r",type:"number",placeholder:"To year: ".concat((new Date).getFullYear())}),"    "]}),Object(h.jsxs)("select",{onChange:function(e){return t(e)},name:"genre",className:"order_r",defaultValue:"default",children:[Object(h.jsx)("option",{value:"default",disabled:!0,children:"Genre"}),null===r||void 0===r?void 0:r.map((function(e,t){return Object(h.jsx)("option",{name:e,value:e,children:e},t)}))]})]})});n(72);var S=function(){var e=Object(b.c)((function(e){return e.searchTerm})),t=Object(c.useState)({order:"",year1:"",year2:"",genre:""}),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),l=Object(o.a)(s,2),u=l[0],O=l[1];console.log(e),Object(c.useEffect)((function(){var t=a.year1||0,n=a.year2||(new Date).getFullYear(),c=Number(t)<Number(n)?"".concat(t,"-").concat(n):"".concat(n,"-").concat(t),r=function(){var t=Object(i.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d()("".concat("https://vadith-moviesapp-backend.herokuapp.com/search?","title=").concat(e,"&order_by=rating&sort=").concat(a.order,"&year=").concat(c,"&genre=").concat(a.genre));case 2:n=t.sent,O(n.data.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();r()}),[e,a]);var m=Object(c.useState)(1),p=Object(o.a)(m,2),v=p[0],f=p[1],x=Object(c.useState)(6),g=Object(o.a)(x,1)[0],_=v*g,N=_-g,y=u.slice(N,_);return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(R,{handleInputChange:function(e){e.preventDefault(),r(Object(T.a)(Object(T.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))}}),Object(h.jsxs)("div",{className:"content",children:[u.length>0?y.map((function(e){return Object(h.jsx)(E,{title:e.title,img:e.large_cover_image,id:e.id,genres:e.genres})})):Object(h.jsx)("h1",{children:"Loading...."}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(C,{moviesPerPage:g,movies:u.length,paginado:function(e){f(e)},currentPage:y})})]})]})};n(73);n(74);var I=function(){return Object(h.jsx)(m.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(N,{}),Object(h.jsxs)(_.c,{children:[Object(h.jsx)(_.a,{path:"/home",element:Object(h.jsx)(v,{})}),Object(h.jsx)(_.a,{path:"/searchs",element:Object(h.jsx)(S,{})}),Object(h.jsx)(_.a,{path:"/detail/:id",element:Object(h.jsx)(w,{})}),Object(h.jsx)(_.a,{path:"/search",element:Object(h.jsx)(E,{})})]})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},A=n(18),F=n(33),M={movies:[],allmovies:[],detail:[],searchR:[],user:[],name:[],searchTerm:""};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(T.a)(Object(T.a)({},e),{},{movies:t.payload,allmovies:t.payload});case"GET_DETAIL":return Object(T.a)(Object(T.a)({},e),{},{detail:t.payload});case"GET_NAME_MOVIES":return Object(T.a)(Object(T.a)({},e),{},{name:t.name,searchR:t.payload});case"FILTER_BY_RATING":case"FILTER_BY_YEAR":case"FILTER_BY_GENRE":return Object(T.a)(Object(T.a)({},e),{},{searchR:t.payload});case"POST_USER":return Object(T.a)(Object(T.a)({},e),{},{user:[]});case"GET_CLEAN":return Object(T.a)(Object(T.a)({},e),{},{searchR:[]});case"PICK_SEARCH_TERM":return Object(T.a)(Object(T.a)({},e),{},{searchTerm:t.payload});default:return e}},P=n(34),G=Object(A.createStore)(D,Object(F.composeWithDevTools)(Object(A.applyMiddleware)(P.a)));s.a.render(Object(h.jsx)(b.a,{store:G,children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(I,{})})}),document.getElementById("root")),L()}},[[75,1,2]]]);
//# sourceMappingURL=main.3fa62427.chunk.js.map