(function(t){function e(e){for(var n,l,a=e[0],i=e[1],u=e[2],f=0,s=[];f<a.length;f++)l=a[f],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&s.push(c[l][0]),c[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(s.length)s.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var i=o[a];0!==c[i]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},c={app:0},r=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=i;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"12ad":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c={id:"nav"},r=Object(n["g"])("Home"),l=Object(n["g"])(" | "),a=Object(n["g"])("ToDo");function i(t,e){var o=Object(n["y"])("router-link"),i=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",c,[Object(n["h"])(o,{to:"/"},{default:Object(n["D"])((function(){return[r]})),_:1}),l,Object(n["h"])(o,{to:"/todo"},{default:Object(n["D"])((function(){return[a]})),_:1})]),Object(n["h"])(i)],64)}o("705a");var u=o("6b0d"),d=o.n(u);const f={},s=d()(f,[["render",i]]);var m=s,p=o("6c02"),b=o("cf05"),O=o.n(b),j={class:"home"},v=Object(n["f"])("img",{alt:"Vue logo",src:O.a},null,-1),g=Object(n["f"])("h1",null,"Test work with use Vue 3 Cli, Router and Vuex.",-1),h=[v,g];function C(t,e){return Object(n["r"])(),Object(n["e"])("div",j,h)}const y={},I=d()(y,[["render",C]]);var T=I,P=function(t){return Object(n["u"])("data-v-c53373c6"),t=t(),Object(n["s"])(),t},S={class:"page"},L=P((function(){return Object(n["f"])("h1",null,"ToDo list",-1)})),w={class:"work-panel"},k={class:"filter-btns"},x={key:0,class:"list"},_=["onClick"],D={key:1},N=P((function(){return Object(n["f"])("p",null,"Todo list is empty",-1)})),F=[N],J={key:2},A=P((function(){return Object(n["f"])("p",null,"Completed list is empty",-1)})),M=[A];function V(t,e,o,c,r,l){return Object(n["r"])(),Object(n["e"])("div",S,[L,Object(n["f"])("input",{class:"input-to-do",type:"text",placeholder:"What needs to be done?",onKeydown:e[0]||(e[0]=Object(n["E"])((function(){return t.createNewTodo&&t.createNewTodo.apply(t,arguments)}),["enter"]))},null,32),Object(n["f"])("div",w,[Object(n["f"])("div",null,Object(n["A"])(t.todoList.length-t.completedItemCount)+" item left",1),Object(n["f"])("div",k,[Object(n["f"])("button",{class:Object(n["n"])(["btn",{"active-filter-btn":"all"===t.filterParam}]),onClick:e[1]||(e[1]=function(e){return t.changeFilterParam("all")})},"All",2),Object(n["f"])("button",{class:Object(n["n"])(["btn",{"active-filter-btn":"active"===t.filterParam}]),onClick:e[2]||(e[2]=function(e){return t.changeFilterParam("active")})},"Active",2),Object(n["f"])("button",{class:Object(n["n"])(["btn",{"active-filter-btn":"completed"===t.filterParam}]),onClick:e[3]||(e[3]=function(e){return t.changeFilterParam("completed")})},"Completed",2)]),Object(n["f"])("button",{class:Object(n["n"])({"not-active-clear-btn":0===t.completedItemCount}),onClick:e[4]||(e[4]=function(){return t.removeCompletedTodo&&t.removeCompletedTodo.apply(t,arguments)})},"Clear completed",2)]),t.todoList.length>0?(Object(n["r"])(),Object(n["e"])("div",x,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.filteredTodo,(function(e){return Object(n["r"])(),Object(n["e"])("div",{class:Object(n["n"])(["list__item",{"todo-completed":e.completed}]),key:e.id,onClick:function(o){return t.toggleItemCompleted(e.id)}},Object(n["A"])(e.text),11,_)})),128))])):(Object(n["r"])(),Object(n["e"])("div",D,F)),"completed"===t.filterParam&&t.todoList.length&&!t.completedItemCount?(Object(n["r"])(),Object(n["e"])("div",J,M)):Object(n["d"])("",!0)])}var E=o("5530"),H=o("5502"),K={methods:Object(E["a"])({},Object(H["c"])({toggleItemCompleted:"toggleItemCompleted",setDefaultTodo:"setDefaultTodo",createNewTodo:"createNewTodo",removeCompletedTodo:"removeCompletedTodo",changeFilterParam:"changeFilterParam"})),computed:Object(E["a"])(Object(E["a"])({},Object(H["d"])({completedItemCount:"completedItemCount",todoList:"todoList",filterParam:"filterParam"})),Object(H["b"])({filteredTodo:"filteredTodo",saveStateInLocalStorage:"saveStateInLocalStorage"})),created:function(){localStorage.todoList&&localStorage.completedItemCount&&this.setDefaultTodo()},beforeUpdate:function(){this.saveStateInLocalStorage}};o("8fb1");const R=d()(K,[["render",V],["__scopeId","data-v-c53373c6"]]);var U=R,W=[{path:"/",name:"Home",component:T},{path:"/todo",name:"ToDo",component:U}],q=Object(p["a"])({history:Object(p["b"])("/"),routes:W}),z=q,B=(o("d3b7"),o("159b"),o("4de4"),o("e9c4"),Object(H["a"])({state:{completedItemCount:0,todoList:[],filteredTodo:"",filterParam:"all"},mutations:{toggleItemCompleted:function(t,e){t.todoList.forEach((function(o){o.id===e&&(o.completed?(o.completed=!1,t.completedItemCount--):(o.completed=!0,t.completedItemCount++))}))},setDefaultTodo:function(t){t.todoList=JSON.parse(localStorage.getItem("todoList")),t.completedItemCount=JSON.parse(localStorage.getItem("completedItemCount"))},createNewTodo:function(t,e){t.todoList.push({id:Date.now(),text:e.target.value,completed:!1}),e.target.value=""},removeCompletedTodo:function(t){t.todoList=t.todoList.filter((function(t){return!t.completed})),t.completedItemCount=0},changeFilterParam:function(t,e,o){t.filterParam=e,console.log(o)}},getters:{filteredTodo:function(t){return"active"===t.filterParam?t.todoList.filter((function(t){return!t.completed})):"completed"===t.filterParam?t.todoList.filter((function(t){return t.completed})):t.todoList},saveStateInLocalStorage:function(t){localStorage.setItem("todoList",JSON.stringify(t.todoList)),localStorage.setItem("completedItemCount",JSON.stringify(t.completedItemCount))}},modules:{}}));Object(n["c"])(m).use(B).use(z).mount("#app")},"705a":function(t,e,o){"use strict";o("a211")},"8fb1":function(t,e,o){"use strict";o("12ad")},a211:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.69839dde.js.map