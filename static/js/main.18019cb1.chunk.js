(this["webpackJsonptic-tac-toe-demo"]=this["webpackJsonptic-tac-toe-demo"]||[]).push([[0],[,,function(e,a,t){},,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),l=(t(10),t(1));t(2);var i=function(e){var a=e.value,t=e.onClick;return r.a.createElement("button",{className:"square",onClick:t},a)};function s(e){var a=e.onClick;return r.a.createElement("button",{className:"restart",onClick:a},"Play again")}var u=function(){var e=Object(n.useState)(Array(9).fill(null)),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!0),u=Object(l.a)(o,2),m=u[0],v=u[1],d=m?"X":"O",f=function(e){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<a.length;t++){var n=Object(l.a)(a[t],3),r=n[0],c=n[1],o=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return e[r]}return null}(t);function E(e){return r.a.createElement(i,{value:t[e],onClick:function(){if(null==t[e]&&null==f){var a=t.slice();a[e]=d,c(a),v(!m)}}})}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement("div",{className:"board-row"},E(0),E(1),E(2)),r.a.createElement("div",{className:"board-row"},E(3),E(4),E(5)),r.a.createElement("div",{className:"board-row"},E(6),E(7),E(8))),r.a.createElement("div",{className:"game-info"},f?"Winner: "+f:function(e){for(var a=0;a<e.length;a++)if(null==e[a])return!1;return!0}(t)?"Draw!":"Next player: "+d),r.a.createElement("div",{className:"restart-button"},r.a.createElement(s,{onClick:function(){c(Array(9).fill(null)),v(!0)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.18019cb1.chunk.js.map