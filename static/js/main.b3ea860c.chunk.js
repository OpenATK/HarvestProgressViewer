(this.webpackJsonpharvestprogressviewer=this.webpackJsonpharvestprogressviewer||[]).push([[0],{181:function(e,t){},321:function(e,t,n){"use strict";var r=n(197),a=n(28),i=n(72),s=n(69),c=n(81),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(322)),d=u(n(640)),h=n(641),p=function(){function e(t){s(this,e),this._token="",this._domain="",this._concurrency=1,this._domain=t.domain.replace(/^https:\/\//,""),this._token=t.token||this._token,this._concurrency=t.concurrency||this._concurrency,this._ws=new h.WebSocketClient(this._domain,this._concurrency)}return c(e,[{key:"clone",value:function(t){return new e({domain:this._domain,token:t,concurrency:this._concurrency,_ws:this._ws})}},{key:"getToken",value:function(){return this._token}},{key:"getDomain",value:function(){return this._domain}},{key:"disconnect",value:function(){return this._ws.disconnect()}},{key:"awaitConnection",value:function(){return this._ws.awaitConnection()}},{key:"get",value:function(){var e=i(a.mark((function e(t){var n,r,i,s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._ws.request({method:"get",headers:{authorization:"Bearer ".concat(this._token)},path:t.path},void 0,t.timeout);case 2:if(n=e.sent,!t.tree){e.next=9;break}return r=d.toArrayPath(t.path),i=d.getObjectAtPath(t.tree,r),e.next=8,this._recursiveGet(t.path,i,n.data||{});case 8:n.data=e.sent;case 9:if(!t.watchCallback){e.next=13;break}return s=n.headers?n.headers["x-oada-rev"]:void 0,e.next=13,this.watch({path:t.path,rev:s,watchCallback:t.watchCallback});case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"watch",value:function(){var e=i(a.mark((function e(t){var n,i;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},t.rev&&(n["x-oada-rev"]=t.rev),e.next=4,this._ws.request({method:"watch",headers:Object.assign({authorization:"Bearer ".concat(this._token)},n),path:t.path},(function(e){var n,a=r(e.change);try{for(a.s();!(n=a.n()).done;){var i=n.value;t.watchCallback(i)}}catch(s){a.e(s)}finally{a.f()}}),t.timeout);case 4:if(200===(i=e.sent).status){e.next=7;break}throw new Error("Watch request failed!");case 7:return e.abrupt("return",Array.isArray(i.requestId)?i.requestId[0]:i.requestId);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"unwatch",value:function(){var e=i(a.mark((function e(t){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._ws.request({path:"",headers:{authorization:""},method:"unwatch",requestId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recursiveGet",value:function(){var e=i(a.mark((function e(t,n,r){var s,c,o=this;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&r){e.next=2;break}throw new Error("Path mismatch.");case 2:if(!n._type){e.next=9;break}return e.next=5,this.get({path:t});case 5:if(e.t0=e.sent.data,e.t0){e.next=8;break}e.t0={};case 8:r=e.t0;case 9:return s=n["*"]?Object.keys(r).reduce((function(e,t){return r&&"object"==typeof r[t]&&e.push({treeKey:"*",dataKey:t}),e}),[]):Object.keys(n||{}).reduce((function(e,t){return r&&"object"==typeof r[t]&&e.push({treeKey:t,dataKey:t}),e}),[]),c=s.map(function(){var e=i(a.mark((function e(i){var s,c;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t+"/"+i.dataKey,r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,o._recursiveGet(s,n[i.treeKey],r[i.dataKey]);case 5:return c=e.sent,r[i.dataKey]=c,e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,Promise.all(c).then((function(){return r}));case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=i(a.mark((function e(t){var n,r,i,s,c,o,u,l,h,p,f,b,j,v;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.toArrayPath(t.path),!t.tree){e.next=42;break}r=0,i=null,s=[],c=n.length-1;case 6:if(!(c>=0)){e.next=42;break}if(o=n.slice(0,c+1),!("_type"in(u=d.getObjectAtPath(t.tree,o)))){e.next=39;break}return l=u._type,h=d.toStringPath(o),e.next=14,this._resourceExists(h);case 14:if(!(p=e.sent).exist){e.next=32;break}if(!(i&&s.length>0)){e.next=29;break}return e.next=19,this.put({path:d.toStringPath(s),contentType:l,data:i,revIfMatch:p.rev}).catch((function(e){if(412==e.status)return e;throw new Error("Error: ".concat(e.statusText))}));case 19:if(412!=e.sent.status){e.next=29;break}if(!(r++<5)){e.next=28;break}return e.next=24,d.delay(1e3*(r*r+Math.random()));case 24:return c=n.length-1,e.abrupt("continue",39);case 28:throw Error("If-match failed.");case 29:return e.abrupt("break",42);case 32:return f=s.slice(c+1),b=i?d.createNestedObject(i,f):{},e.next=36,this._createResource(l,b);case 36:j=e.sent,i="_rev"in u?{_id:j,_rev:0}:{_id:j},s=o.slice();case 39:c--,e.next=6;break;case 42:return v=t.contentType||t.data&&t.data._type||(t.tree?d.getObjectAtPath(t.tree,n)._type:"application/json"),e.abrupt("return",this._ws.request({method:"put",headers:Object.assign({authorization:"Bearer ".concat(this._token),"content-type":v},t.revIfMatch&&{"if-match":t.revIfMatch.toString()}),path:t.path,data:t.data},void 0,t.timeout));case 44:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=i(a.mark((function e(t){var n,r,i;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.toArrayPath(t.path),r=t.data,!t.tree){e.next=6;break}return t.data={},e.next=6,this.put(t);case 6:return i=t.contentType||t.data&&t.data._type||(t.tree?d.getObjectAtPath(t.tree,n)._type:"application/json"),e.abrupt("return",this._ws.request({method:"post",headers:{authorization:"Bearer ".concat(this._token),"content-type":i},path:t.path,data:r},void 0,t.timeout));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"head",value:function(){var e=i(a.mark((function e(t){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._ws.request({method:"head",headers:{authorization:"Bearer ".concat(this._token)},path:t.path},void 0,t.timeout));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=i(a.mark((function e(t){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._ws.request({method:"delete",headers:{authorization:"Bearer ".concat(this._token)},path:t.path},void 0,t.timeout));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createResource",value:function(){var e=i(a.mark((function e(t,n){var r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="resources/"+l.default.randomSync().string,e.next=3,this.put({path:"/"+r,data:n,contentType:t});case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_resourceExists",value:function(){var e=i(a.mark((function e(t){var n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/resources"!==t){e.next=2;break}return e.abrupt("return",{exist:!0});case 2:return e.next=4,this.head({path:t}).catch((function(e){if(404==e.status)return e;if(403==e.status&&t.match(/^\/resources/))return{status:404};throw new Error("Error: ".concat(e.statusText))}));case 4:if(200!=(n=e.sent).status){e.next=9;break}return e.abrupt("return",{exist:!0,rev:n.headers["x-oada-rev"]});case 9:if(404!=n.status){e.next=13;break}return e.abrupt("return",{exist:!1});case 13:throw Error("Status code is neither 200 nor 404.");case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.OADAClient=p},390:function(e,t){},400:function(e,t){},402:function(e,t){},407:function(e,t){},409:function(e,t){},418:function(e,t){},420:function(e,t){},445:function(e,t){},447:function(e,t){},448:function(e,t){},454:function(e,t){},456:function(e,t){},474:function(e,t){},476:function(e,t){},488:function(e,t){},491:function(e,t){},537:function(e,t){},612:function(e,t,n){"use strict";var r=n(28),a=n(72);Object.defineProperty(t,"__esModule",{value:!0});var i=n(321);function s(){return(s=a(r.mark((function e(t){var n;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new i.OADAClient(t),e.next=3,n.awaitConnection();case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.createInstance=function(e){return new i.OADAClient(e)},t.connect=function(e){return s.apply(this,arguments)};var c=n(321);t.OADAClient=c.OADAClient},640:function(e,t,n){"use strict";function r(e,t){return t.reduce((function(e,n){if(e[n])return e[n];if(e["*"])return e["*"];throw new Error("Specified path /"+t.join("/")+" does not exist in the tree.")}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.toStringPath=function(e){return"/"+e.join("/")},t.toArrayPath=function(e){var t=e.split("/");return t.length>0&&""==t[0]&&t.shift(),t.length>0&&""==t[t.length-1]&&t.pop(),t},t.getObjectAtPath=r,t.toTreePath=function(e,t){var n=[];return t.reduce((function(e,r){if(e[r])return n.push(r),e[r];if(e["*"])return n.push("*"),e["*"];throw new Error("Specified path /"+t.join("/")+" does not exist in the tree.")}),e),n},t.isResource=function(e,t){return"_id"in r(e,t)},t.createNestedObject=function(e,t){return t.slice().reverse().reduce((function(e,t){var n={};return n[t]=e,n}),e)},t.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},641:function(e,t,n){"use strict";var r=n(197),a=n(28),i=n(72),s=n(69),c=n(81),o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l,d=n(642),h=u(n(322)),p=u(n(643)),f=u(n(654)),b=f.default("@oada/client:ws:trace"),j=f.default("@oada/client:ws:error"),v=n(657),x=n(661),g=n(663),m=n(665);!function(e){e[e.Disconnected=0]="Disconnected",e[e.Connecting=1]="Connecting",e[e.Connected=2]="Connected"}(l||(l={}));var O=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;s(this,e),this._domain=t,this._requests=new Map,this._status=l.Connecting,this._ws=new Promise((function(e){var t=new d("wss://"+n._domain);t.onopen=function(){n._status=l.Connected,e(t)},t.onclose=function(){n._status=l.Disconnected},t.onmessage=n._receive.bind(n)})),this._q=new p.default({concurrency:r}),this._q.on("active",(function(){b("WS Queue. Size: ".concat(n._q.size," pending: ").concat(n._q.pending))}))}return c(e,[{key:"disconnect",value:function(){var e=i(a.mark((function e(){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._status!=l.Disconnected){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._ws;case 4:e.sent.close();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isConnected",value:function(){return this._status==l.Connected}},{key:"awaitConnection",value:function(){var e=i(a.mark((function e(){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._ws;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"request",value:function(e,t,n){var r=this;return this._q.add((function(){return r.doRequest(e,t,n)}))}},{key:"doRequest",value:function(){var e=i(a.mark((function e(t,n,r){var i,s,c,o=this;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.requestId||h.default.randomSync().string,t.requestId=i,v.assert(t),e.next=5,this._ws;case 5:if(e.sent.send(JSON.stringify(t)),s=new Promise((function(e,t){o._requests.set(i,{resolve:e,reject:t,settled:!1,persistent:!!n,callback:n})})),!(r&&r>0)){e.next=12;break}return c=new Promise((function(e,t){setTimeout((function(){var e=o._requests.get(i);e&&!e.settled&&(e.reject("Request timeout"),o._requests.delete(i)),t("Request timeout")}),r)})),e.abrupt("return",Promise.race([s,c]));case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_receive",value:function(e){try{var t,n=JSON.parse(e.data.toString());t=Array.isArray(n.requestId)?n.requestId:[n.requestId];var a,i=r(t);try{for(i.s();!(a=i.n()).done;){var s=a.value,c=this._requests.get(s);if(c)if(x.is(n)){if(c.callback||this._requests.delete(s),!c.settled)if(c.settled=!0,n.status&&n.status>=200&&n.status<300)c.resolve(n);else{if(!n.status)throw new Error("Request failed");c.reject(n)}}else{if(!c.callback||!g.is(n))throw new Error("Invalid websocket payload received");m.assert(n.change);var u={requestId:n.requestId,resourceId:n.resourceId,path_leftover:n.path_leftover,change:n.change.map((function(e){var t=e.body,n=o(e,["body"]);return Object.assign(Object.assign({},n),{body:t})}))};c.callback(u)}}}catch(l){i.e(l)}finally{i.f()}}catch(d){j("[Websocket ".concat(this._domain,"] Received invalid response. Ignoring.")),b("[Websocket ".concat(this._domain,"] Received invalid response. %O"),d)}}}]),e}();t.WebSocketClient=O},667:function(e,t,n){},669:function(e,t,n){},675:function(e,t,n){"use strict";n.r(t),n.d(t,"overmind",(function(){return ze}));var r={};n.r(r),n.d(r,"selectField",(function(){return b}));var a=n(2),i=n(51),s=n(140),c=n(0),o=n.n(c),u=n(20),l=n.n(u),d=n(76),h=n(141),p=n.n(h),f={oada:p()("oada").state,connection:null,loaded:!1,selectedField:null,mapCenter:{lat:40.77884287,lon:-102.084164,zoom:14},get fields(){return this.connection&&this.loaded?Object.keys(this.oada[this.connection].bookmarks.agrinovus["field-index"]):[]},get field(){if(this.connection&&this.loaded&&null!==this.selectedField){var e,t,n=this.fields[this.selectedField];return(null===(e=this.oada[this.connection].bookmarks.agrinovus["field-index"][n])||void 0===e||null===(t=e.field)||void 0===t?void 0:t.polygon)||[]}return[]},get progressPolygon(){if(this.connection&&this.loaded&&null!==this.selectedField){var e,t,n=this.fields[this.selectedField];return(null===(e=this.oada[this.connection].bookmarks.agrinovus["field-index"][n])||void 0===e||null===(t=e.progress)||void 0===t?void 0:t.polygon)||[]}return[]},get progress(){if(this.connection&&this.loaded&&null!==this.selectedField){var e,t,n,r,a=this.fields[this.selectedField];return{acre:null===(e=this.oada[this.connection].bookmarks.agrinovus["field-index"][a])||void 0===e||null===(t=e.progress)||void 0===t?void 0:t.areaInAcre,percentage:100*(null===(n=this.oada[this.connection].bookmarks.agrinovus["field-index"][a])||void 0===n||null===(r=n.progress)||void 0===r?void 0:r.progress)}}return{acre:0,percentage:0}},get statistics(){return this.connection&&this.loaded&&this.oada[this.connection].bookmarks.agrinovus.statistics?this.oada[this.connection].bookmarks.agrinovus.statistics:{numOfFieldsHarvested:0,numOfFieldsBeingHarvested:0,totalHarvestedAreaInAcre:0,totalAreaInAcre:0,progress:0}}},b=function(e,t){var n=e.state;n.selectedField=t,n.mapCenter.lat=n.field[0][0][0],n.mapCenter.lon=n.field[0][0][1]},j=n(28),v=n.n(j),x=n(339),g={bookmarks:{_type:"application/json",_rev:0,agrinovus:{_type:"application/json",_rev:0,"field-index":{"*":{_type:"application/json",_rev:0,field:{_type:"application/json",_rev:0},progress:{_type:"application/json",_rev:0},statistics:{_type:"application/json",_rev:0}}},statistics:{_type:"application/json",_rev:0}}}},m=function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,r=t.actions,t.effects,e.next=3,r.oada.connect({token:"abc",domain:"https://cloudradio40.ecn.purdue.edu"}).then((function(e){return console.log(e),e.error||(n.connection=e.connectionId),e}));case 3:return a=[{path:"/bookmarks/agrinovus",tree:g,watch:{actions:[]}}],e.next=6,r.oada.get({requests:a,connection_id:n.connection});case 6:n.loaded=!0,n.fields.length>0&&(n.selectedField=0,n.mapCenter.lat=n.field[0][0][0],n.mapCenter.lon=n.field[0][0][1]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=p()("oada"),y={state:f,actions:Object(d.a)({oada:O.actions},r),effects:{oada:O.effects},onInitialize:m},w=Object(s.b)(),k=(n(667),n(714)),_=n(735),P=n(54),S=n.n(P),I=(n(668),n(669),n(711)),C=n(712),B=n(736),A=n(713),q=n(340),F=n(341),N=S.a.icon({iconUrl:q.a,shadowUrl:F.a});function E(e){var t=e.center;return Object(I.a)().setView(t,14),null}S.a.Marker.prototype.options.icon=N;var M=function(){var e=w().state,t=[e.mapCenter.lat,e.mapCenter.lon],n=e.field,r=e.progressPolygon,i=function(){var e="yellow",t=Math.floor(5*Math.random()+1);return 1==t&&(e="magenta"),2==t&&(e="yellow"),3==t&&(e="cyan"),4==t&&(e="white"),5==t&&(e="purple"),e}();return Object(a.jsxs)(C.a,{center:t,zoom:14,children:[Object(a.jsx)(E,{center:t}),Object(a.jsx)(B.a,{attribution:"Tiles \xa9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}),Object(a.jsx)(A.a,{pathOptions:{color:i},positions:n}),Object(a.jsx)(A.a,{pathOptions:{color:i,fillOpacity:1},positions:r})]})},T=n(32),z=n(3),D=n(47),H=n(734),R=n(716),G=n(717),W=n(718),K=n(728),U=n(96),L=n(727),J=n(719),V=n(342),Q=n.n(V),X=n(343),Y=n.n(X),Z=n(737),$=n(729),ee=n(730),te=n(150),ne=n.n(te),re=n(347),ae=n(720),ie=n(715),se=n(149),ce=n.n(se),oe=n(731),ue=n(344),le=n.n(ue),de=n(726),he=n(721),pe=n(725),fe=n(723),be=n(724),je=n(722),ve=n.p+"static/media/odap-demo-logo.2c0e9fa8.png",xe=Object(re.a)({palette:{type:"dark"}}),ge=Object(re.a)({palette:{type:"light"}}),me=Object(k.a)((function(e){return Object(_.a)({root:{display:"flex"},appBar:{display:"flex",flexGrow:1,justifyContent:"space-between",zIndex:2,background:"#1082B8"},appTitleBig:{margin:e.spacing(1),fontWeight:600,lineHeight:1},appTitleSmall:{margin:e.spacing(1),fontSize:11,fontWeight:600,lineHeight:1},menuButton:{marginRight:e.spacing(2)},helpButton:{},hide:{display:"none"},drawer:{width:200,flexShrink:0},drawerPaperBig:{width:200,background:"#1082B8",zIndex:2,top:64},drawerPaperSmall:{width:200,background:"#1082B8",zIndex:2,top:56},drawerHeader:{display:"flex",alignItems:"center"},nested:{paddingLeft:e.spacing(4)},logo:{height:"48px",width:"167px"},dialogTitle:{alignItems:"center"}})})),Oe=function(){var e=me(),t=(Object(D.a)(),o.a.useState(!0)),n=Object(T.a)(t,2),r=n[0],i=n[1],s=o.a.useState(!1),c=Object(T.a)(s,2),u=c[0],l=c[1],d=o.a.useState(!1),h=Object(T.a)(d,2),p=h[0],f=h[1],b=o.a.useState(!1),j=Object(T.a)(b,2),v=j[0],x=j[1],g=o.a.useState(!1),m=Object(T.a)(g,2),O=m[0],y=m[1],k=w(),_=k.state,P=k.actions,S=Object(ie.a)("(min-width:600px)"),I=function(){y(!1)};return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(R.a,{}),Object(a.jsx)(G.a,{position:"fixed",className:e.appBar,children:Object(a.jsxs)(W.a,{className:e.appBar,children:[Object(a.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(z.a)(e.menuButton,r&&e.hide),children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!1)},edge:"start",className:Object(z.a)(e.menuButton,!r&&e.hide),children:Object(a.jsx)(Y.a,{})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:ve,alt:"logo",className:e.logo})}),Object(a.jsx)(U.a,{variant:"h5",className:Object(z.a)(e.appTitleBig,!S&&e.hide),children:"Harvest Progress Monitor"}),Object(a.jsx)(U.a,{variant:"h6",className:Object(z.a)(e.appTitleSmall,S&&e.hide),children:Object(a.jsxs)("div",{children:["Harvest ",Object(a.jsx)("br",{})," Progress ",Object(a.jsx)("br",{})," Monitor"]})}),Object(a.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:function(){y(!0)},edge:"end",className:e.helpButton,children:Object(a.jsx)(le.a,{})})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(ae.a,{theme:ge,children:Object(a.jsxs)(he.a,{fullScreen:!S,open:O,onClose:I,"aria-labelledby":"help",color:"inherit",children:[Object(a.jsx)(je.a,{id:"help",children:"The OATS Data Automation Platform - Harvest Progress Monitor Demo"}),Object(a.jsxs)(fe.a,{children:[Object(a.jsx)(be.a,{children:"To view a list of the available field records, please click on the menu icon on the top left corner of the screen. Fields will be sorted by their progress status. To view the progress of a specific field, please select the field on the fields list. Once selected, the current progress will appear on the bottom bar. To view more details of a field progress, please click on the arrow on the bottom bar."}),Object(a.jsx)(be.a,{children:"ODAP is a web-based platform for data automation, covering data collection, transmission, analysis, and visualization. It is a coordinated attempt of developing, utilizing, and improving open-source hardware and software to conquer the data automation problem in digital agriculture."}),Object(a.jsx)(be.a,{children:"ODAP is a creation of Team OATS for the Producer-Led Innovation Challenge hosted by AgriNovus."}),Object(a.jsx)(be.a,{children:"2020 - Ver. 0.1.0 - Harvest Progress Monitor Demo"})]}),Object(a.jsx)(pe.a,{children:Object(a.jsx)(de.a,{autoFocus:!0,onClick:I,children:"OK"})})]})})}),Object(a.jsxs)(H.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:Object(z.a)(S&&e.drawerPaperBig,!S&&e.drawerPaperSmall)},children:[Object(a.jsxs)(ae.a,{theme:xe,children:[Object(a.jsx)(U.a,{variant:"h4",align:"center",color:"textSecondary",children:"Fields"}),Object(a.jsx)(L.a,{}),Object(a.jsxs)(K.a,{children:[Object(a.jsxs)(Z.a,{button:!0,onClick:function(){l(!u)},children:[Object(a.jsx)($.a,{children:Object(a.jsx)(ce.a,{})}),Object(a.jsx)(ee.a,{primary:"In progress"})]}),Object(a.jsx)(oe.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(K.a,{component:"div",disablePadding:!0,children:_.fields.map((function(t,n){return Object(a.jsxs)(Z.a,{button:!0,onClick:function(){return P.selectField(n)},className:e.nested,children:[Object(a.jsx)($.a,{children:Object(a.jsx)(ne.a,{})}),Object(a.jsx)(ee.a,{primary:t,color:"textSecondary"})]},t)}))})}),Object(a.jsxs)(Z.a,{button:!0,onClick:function(){f(!p)},children:[Object(a.jsx)($.a,{children:Object(a.jsx)(ce.a,{})}),Object(a.jsx)(ee.a,{primary:"Not Started"})]}),Object(a.jsx)(oe.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(K.a,{component:"div",disablePadding:!0,children:Object(a.jsxs)(Z.a,{button:!0,className:e.nested,children:[Object(a.jsx)($.a,{children:Object(a.jsx)(ne.a,{})}),Object(a.jsx)(ee.a,{children:"Field A"})]})})}),Object(a.jsxs)(Z.a,{button:!0,onClick:function(){x(!v)},children:[Object(a.jsx)($.a,{children:Object(a.jsx)(ce.a,{})}),Object(a.jsx)(ee.a,{primary:"Done"})]}),Object(a.jsx)(oe.a,{in:v,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(K.a,{component:"div",disablePadding:!0,children:Object(a.jsxs)(Z.a,{button:!0,className:e.nested,children:[Object(a.jsx)($.a,{children:Object(a.jsx)(ne.a,{})}),Object(a.jsx)(ee.a,{children:"Field B"})]})})})]})]}),Object(a.jsx)(L.a,{})]})]})},ye=n(13),we=n(8),ke=n(345),_e=n.n(ke),Pe=n(346),Se=n.n(Pe),Ie=n(732),Ce=n(733),Be=Object(re.a)({palette:{type:"dark"}}),Ae=Object(we.a)((function(e){return Object(_.a)({root:{height:25,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#FFFFFF"}})}))(Ie.a);function qe(e){return Object(a.jsxs)(Ce.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(Ce.a,{width:"100%",mr:1,children:Object(a.jsx)(Ae,Object(d.a)({variant:"determinate"},e))}),Object(a.jsx)(Ce.a,{minWidth:35,children:Object(a.jsx)(U.a,{variant:"body2",color:"textPrimary",children:"".concat(Math.round(e.value),"%")})})]})}var Fe=Object(k.a)((function(e){return Object(_.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","height"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),top:"auto",bottom:0,alignItems:"center",zIndex:3,background:"#1082B8"},appBarShift:{transition:e.transitions.create(["margin","height"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),zIndex:3},appBarProgress:{transition:e.transitions.create(["margin","height"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),zIndex:3,alignItems:"center"},menuButton:{marginRight:e.spacing(2)},bottomBarButton:{alignItems:"center"},hide:{display:"none"},drawer:{height:280,flexShrink:0},drawerPaper:{height:280,background:"#1082B8",alignItems:"center",width:"100%"},drawerEmptyField:{height:120,background:"#1082B8",alignItems:"center"},progressBar:{width:"75%",padding:e.spacing(2,0,4)}})}));var Ne=function(){var e,t,n,r=Fe(),i=(Object(D.a)(),o.a.useState(!1)),s=Object(T.a)(i,2),c=s[0],u=s[1],l=w(),d=l.state,h=(l.actions,o.a.useState(10)),p=Object(T.a)(h,2),f=(p[0],p[1],function(e){return null!==e.selectedField}(d));return Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(R.a,{}),Object(a.jsxs)(ae.a,{theme:Be,children:[Object(a.jsxs)(G.a,{position:"fixed",className:Object(z.a)(r.appBar,(e={},Object(ye.a)(e,r.appBarShift,c),Object(ye.a)(e,r.appBarProgress,f),e)),children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},className:Object(z.a)(r.bottomBarButton,c&&r.hide),children:Object(a.jsx)(_e.a,{})})}),Object(a.jsx)("div",{className:Object(z.a)(!f&&r.hide,r.progressBar),children:Object(a.jsx)(qe,{value:d.progress.percentage})})]}),Object(a.jsxs)(H.a,{className:r.drawer,variant:"persistent",anchor:"bottom",open:c,classes:{paper:Object(z.a)(r.drawerPaper,!f&&r.drawerEmptyField)},children:[Object(a.jsx)("div",{className:r.bottomBarButton,children:Object(a.jsx)(J.a,{onClick:function(){u(!1)},children:Object(a.jsx)(Se.a,{})})}),Object(a.jsx)(L.a,{}),Object(a.jsx)(U.a,{variant:"h6",color:"textSecondary",style:{fontWeight:600},gutterBottom:!0,children:null!==d.selectedField?d.fields[d.selectedField]:"(No field has been selected)"}),Object(a.jsx)("div",{className:Object(z.a)(!f&&r.hide),children:Object(a.jsx)(U.a,{color:"textSecondary",children:"Harvest Progress"})}),Object(a.jsx)("div",{className:Object(z.a)(!f&&r.hide,r.progressBar),children:Object(a.jsx)(qe,{value:d.progress.percentage})}),Object(a.jsxs)("div",{className:Object(z.a)(!f&&r.hide),children:[Object(a.jsxs)(U.a,{color:"textSecondary",children:["Harvested Area: ",(t=d.progress.acre,n=2,Math.trunc(t*Math.pow(10,n))/Math.pow(10,n))," ac"]}),Object(a.jsxs)(U.a,{color:"textSecondary",children:["Number of Fields Being Harvested:"," ",d.statistics.numOfFieldsBeingHarvested]}),Object(a.jsxs)(U.a,{color:"textSecondary",children:["Number of Fields Harvested:"," ",d.statistics.numOfFieldsHarvested]}),Object(a.jsxs)(U.a,{color:"textSecondary",children:["Overall Progress: ",Math.round(100*d.statistics.progress)]})]})]})]})]})},Ee=Object(k.a)((function(e){return Object(_.a)({root:{display:"flex"},content:{flexGrow:1,marginLeft:-200,zIndex:1}})})),Me=function(){var e=w(),t=(e.state,e.actions,Ee());return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(R.a,{}),Object(a.jsx)(Oe,{}),Object(a.jsx)("main",{className:t.content,children:Object(a.jsx)(M,{})}),Object(a.jsx)(Ne,{})]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,739)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))},ze=Object(i.c)(y,{});l.a.render(Object(a.jsx)(s.a,{value:ze,children:Object(a.jsx)(Me,{})}),document.getElementById("root")),Te()}},[[675,1,2]]]);
//# sourceMappingURL=main.b3ea860c.chunk.js.map