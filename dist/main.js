(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(601),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,'/* 基本的样式重置 */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n    background-color: #e9ecef;\n    color: #495057;\n    line-height: 1.6;\n}\n\nheader {\n    background-color: #007bff;\n    color: #fff;\n    text-align: center;\n    padding: 1.2rem 0;\n    font-size: 1.8rem;\n}\n\n/* 侧边栏样式 */\n.sidebar {\n    width: 250px;\n    background: #343a40;\n    padding: 1rem;\n    height: 100vh;\n    position: fixed;\n}\n\n.sidebar button {\n    text-align: left;\n    width: 100%;\n    background: none;\n    border: none;\n    color: #ccc;\n    padding: 0.6rem;\n    cursor: pointer;\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    letter-spacing: 0.05rem;\n    transition: color 0.3s ease-in-out;\n}\n\n.sidebar button:hover,\n.sidebar button:focus {\n    background-color: #495057;\n    color: #fff;\n}\n\n/* 主内容区域 */\n#checklist {\n    margin-left: 250px;\n    padding: 2rem;\n}\n\n#checklist #cchecklist {\n    list-style-type: none;\n}\n\n#checklist #cchecklist li {\n    background: #fff;\n    margin-bottom: 0.8rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#checklist #cchecklist li button {\n    background: #007bff;\n    border: none;\n    padding: 0.4rem 0.8rem;\n    border-radius: 0.25rem;\n    cursor: pointer;\n    color: #fff;\n    transition: background 0.3s ease-in-out;\n}\n\n#checklist #cchecklist li button:hover {\n    background: #0056b3;\n}\n\n/* 对话框 */\ndialog {\n    border: none;\n    border-radius: 0.5rem;\n    padding: 2rem;\n    background: #fff;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n    z-index: 10;\n}\n\ndialog form {\n    display: flex;\n    flex-direction: column;\n}\n\ndialog p {\n    margin-bottom: 1rem;\n}\n\ndialog label {\n    margin-bottom: 0.5rem;\n}\n\ndialog input[type="text"],\ndialog input[type="date"],\ndialog select {\n    padding: 0.8rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n}\n\ndialog button {\n    padding: 0.6rem 1.2rem;\n    border-radius: 0.25rem;\n    border: none;\n    background-color: #28a745;\n    color: white;\n    cursor: pointer;\n    transition: background 0.3s ease-in-out;\n}\n\ndialog button[type="submit"] {\n    margin-top: 1rem;\n}\n\ndialog button:hover {\n    background-color: #218838;\n}\n\n/* 关闭按钮样式 */\n.close-button {\n    background-color: #dc3545;\n    color: white;\n    border: none;\n    padding: 0.4rem 0.8rem;\n    border-radius: 0.25rem;\n    cursor: pointer;\n    transition: background 0.3s ease-in-out;\n}\n\n.close-button:hover {\n    background-color: #c82333;\n}\n\n/* 表单按钮 */\n.form-button-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 1rem;\n}\n\n.formSure, let\'s create a modern and appealing CSS design for your form. We\'ll aim for a minimalist look with a nice color palette, smooth transitions, and a responsive layout. I will provide a snippet that you can incorporate into your `style.css` file.\n\n```css\n/* Base reset for the form elements */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n}\n\nbody {\n    background-color: #f7f7f7;\n    color: #333;\n    line-height: 1.6;\n}\n\nheader {\n    background-color: #0084ff;\n    color: white;\n    padding: 20px 0;\n    text-align: center;\n    font-size: 24px;\n}\n\n/* Sidebar Styles */\n.sidebar {\n    background-color: #333;\n    color: white;\n    padding: 20px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 250px;\n}\n\n.sidebar ul {\n    list-style: none;\n}\n\n.sidebar ul li button {\n    background: none;\n    border: none;\n    color: white;\n    padding: 10px;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n}\n\n.sidebar ul li button:hover {\n    background-color: #555;\n}\n\n/* Main Content Styles */\n#checklist {\n    margin-left: 250px;\n    padding: 20px;\n}\n\ndialog {\n    border: none;\n    border-radius: 10px;\n    padding: 30px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #FFFFFF; /* 白色背景 */\n    box-shadow: 0 5px 15px rgba(0,0,0,0.1);\n    z-index: 1000;\n    width: auto;\n    max-width: 500px;\n}\n\n/* Form elements */\ndialog form {\n    display: flex;\n    flex-direction: column;\n}\n\ndialog label {\n    margin-top: 15px;\n    color: #6c757d; /* 柔和的标签颜色 */\n}\n\ndialog input[type="text"],\ndialog input[type="date"],\ndialog select {\n    width: calc(100% - 20px);\n    padding: 10px;\n    margin-top: 5px;\n    border: 1px solid #ced4da;\n    border-radius: 5px;\n    font-size: 16px;\n}\n\n/* Button styles */\ndialog button {\n    cursor: pointer;\n    padding: 10px 20px;\n    margin-top: 20px;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-size: 16px;\n}\n\n/* Close button styles */\n.close-button, #closeDialog, #closeEdit, #closeProj, #closeEditProj {\n    background-color: #ff4757; /* 现代红色 */\n    color: white;\n    font-weight: bold;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 50%;\n    cursor: pointer;\n    font-size: 14px; /* 减小字体大小 */\n    position: absolute;\n    top: 15px;\n    right: 15px;\n}\n\n.close-button:hover, #closeDialog:hover, #closeEdit:hover, #closeProj:hover, #closeEditProj:hover {\n    background-color: #ff6b81; /* 鼠标悬停时颜色变浅 */\n}\n\n/* Submit button styles */\n#AddTask, #AddProj, #editTask, #submitProj {\n    background-color: #1abc9c; /* 柔和的蓝绿色 */\n    max-width: 100px;\n    border: none;\n    padding: 10px 15px;\n    border-radius: 5px;\n    color: white;\n    font-size: 16px;\n    cursor: pointer;\n\n}\n\n#AddTask:hover, #AddProj:hover, #editTask:hover, #submitProj:hover {\n    background-color: #48c9b0; /* 鼠标悬停时颜色变浅 */\n}\n\n/* Hover effects for buttons */\n#openDialog:hover, #openprojDialog:hover,\n#closeDialog:hover, #closeProj:hover, #closeEdit:hover, #closeEditProj:hover,\n#AddTask:hover, #AddProj:hover, #editTask:hover, #submitProj:hover {\n    opacity: 0.8;\n}\n\n/* Responsive design for smaller screens */\n@media (max-width: 768px) {\n    .sidebar {\n        width: 100%;\n        height: auto;\n        position: relative;\n    }\n\n    #checklist {\n        margin-left: 0;\n    }\n\n    dialog {\n        width: 98%;\n    }\n}',""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(72),r=n.n(o),a=n(825),i=n.n(a),s=n(659),c=n.n(s),d=n(56),u=n.n(d),l=n(540),m=n.n(l),h=n(113),f=n.n(h),g=n(208),p={};p.styleTagTransform=f(),p.setAttributes=u(),p.insert=c().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=m(),r()(g.A,p);const b=g.A&&g.A.locals?g.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=r(h,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{function e(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function t(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function o(n,o){const{years:r=0,months:a=0,weeks:i=0,days:s=0,hours:c=0,minutes:d=0,seconds:u=0}=o,l=e(n),m=a||r?function(n,o){const r=e(n);if(isNaN(o))return t(n,NaN);if(!o)return r;const a=r.getDate(),i=t(n,r.getTime());return i.setMonth(r.getMonth()+o+1,0),a>=i.getDate()?i:(r.setFullYear(i.getFullYear(),i.getMonth(),a),r)}(l,a+12*r):l,h=1e3*(u+60*(d+60*c));return t(n,(s||i?function(n,o){const r=e(n);return isNaN(o)?t(n,NaN):o?(r.setDate(r.getDate()+o),r):r}(m,s+7*i):m).getTime()+h)}const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return(t,n)=>{let o;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;o=e.formattingValues[r]||e.formattingValues[t]}else{const t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;o=e.values[r]||e.values[t]}return o[e.argumentCallback?e.argumentCallback(t):t]}}function d(e){return(t,n={})=>{const o=n.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],a=t.match(r);if(!a)return null;const i=a[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(s):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(s);let d;return d=e.valueCallback?e.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:t.slice(i.length)}}}var u;const l={code:"en-US",formatDistance:(e,t,n)=>{let o;const a=r[e];return o="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o},formatLong:i,formatRelative:(e,t,n,o)=>s[e],localize:{ordinalNumber:(e,t)=>{const n=Number(e),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(u={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(u.matchPattern);if(!n)return null;const o=n[0],r=e.match(u.parsePattern);if(!r)return null;let a=u.valueCallback?u.valueCallback(r[0]):r[0];return a=t.valueCallback?t.valueCallback(a):a,{value:a,rest:e.slice(o.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let m={};function h(){return m}Math.pow(10,8);const f=6048e5,g=864e5;function p(t){const n=e(t);return n.setHours(0,0,0,0),n}function b(t){const n=e(t),o=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return o.setUTCFullYear(n.getFullYear()),+t-+o}function y(n){const o=e(n);return function(e,t){const n=p(e),o=p(t),r=+n-b(n),a=+o-b(o);return Math.round((r-a)/g)}(o,function(n){const o=e(n),r=t(n,0);return r.setFullYear(o.getFullYear(),0,1),r.setHours(0,0,0,0),r}(o))+1}function w(t,n){const o=h(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,a=e(t),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function v(e){return w(e,{weekStartsOn:1})}function k(n){const o=e(n),r=o.getFullYear(),a=t(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=v(a),s=t(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=v(s);return o.getTime()>=i.getTime()?r+1:o.getTime()>=c.getTime()?r:r-1}function x(n){const o=e(n),r=+v(o)-+function(e){const n=k(e),o=t(e,0);return o.setFullYear(n,0,4),o.setHours(0,0,0,0),v(o)}(o);return Math.round(r/f)+1}function M(n,o){const r=e(n),a=r.getFullYear(),i=h(),s=o?.firstWeekContainsDate??o?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,c=t(n,0);c.setFullYear(a+1,0,s),c.setHours(0,0,0,0);const d=w(c,o),u=t(n,0);u.setFullYear(a,0,s),u.setHours(0,0,0,0);const l=w(u,o);return r.getTime()>=d.getTime()?a+1:r.getTime()>=l.getTime()?a:a-1}function E(n,o){const r=e(n),a=+w(r,o)-+function(e,n){const o=h(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,a=M(e,n),i=t(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),w(i,n)}(r,o);return Math.round(a/f)+1}function D(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const S={y(e,t){const n=e.getFullYear(),o=n>0?n:1-n;return D("yy"===t?o%100:o,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):D(n+1,2)},d:(e,t)=>D(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>D(e.getHours()%12||12,t.length),H:(e,t)=>D(e.getHours(),t.length),m:(e,t)=>D(e.getMinutes(),t.length),s:(e,t)=>D(e.getSeconds(),t.length),S(e,t){const n=t.length,o=e.getMilliseconds();return D(Math.trunc(o*Math.pow(10,n-3)),t.length)}},P={G:function(e,t,n){const o=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});default:return n.era(o,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),o=t>0?t:1-t;return n.ordinalNumber(o,{unit:"year"})}return S.y(e,t)},Y:function(e,t,n,o){const r=M(e,o),a=r>0?r:1-r;return"YY"===t?D(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):D(a,t.length)},R:function(e,t){return D(k(e),t.length)},u:function(e,t){return D(e.getFullYear(),t.length)},Q:function(e,t,n){const o=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(o);case"QQ":return D(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,t,n){const o=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(o);case"qq":return D(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,t,n){const o=e.getMonth();switch(t){case"M":case"MM":return S.M(e,t);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(e,t,n){const o=e.getMonth();switch(t){case"L":return String(o+1);case"LL":return D(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(e,t,n,o){const r=E(e,o);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):D(r,t.length)},I:function(e,t,n){const o=x(e);return"Io"===t?n.ordinalNumber(o,{unit:"week"}):D(o,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):S.d(e,t)},D:function(e,t,n){const o=y(e);return"Do"===t?n.ordinalNumber(o,{unit:"dayOfYear"}):D(o,t.length)},E:function(e,t,n){const o=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(e,t,n,o){const r=e.getDay(),a=(r-o.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return D(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,o){const r=e.getDay(),a=(r-o.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return D(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){const o=e.getDay(),r=0===o?7:o;switch(t){case"i":return String(r);case"ii":return D(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const o=e.getHours();let r;switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){const o=e.getHours();let r;switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return S.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):S.H(e,t)},K:function(e,t,n){const o=e.getHours()%12;return"Ko"===t?n.ordinalNumber(o,{unit:"hour"}):D(o,t.length)},k:function(e,t,n){let o=e.getHours();return 0===o&&(o=24),"ko"===t?n.ordinalNumber(o,{unit:"hour"}):D(o,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):S.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):S.s(e,t)},S:function(e,t){return S.S(e,t)},X:function(e,t,n){const o=e.getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return j(o);case"XXXX":case"XX":return I(o);default:return I(o,":")}},x:function(e,t,n){const o=e.getTimezoneOffset();switch(t){case"x":return j(o);case"xxxx":case"xx":return I(o);default:return I(o,":")}},O:function(e,t,n){const o=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+T(o,":");default:return"GMT"+I(o,":")}},z:function(e,t,n){const o=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+T(o,":");default:return"GMT"+I(o,":")}},t:function(e,t,n){return D(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return D(e.getTime(),t.length)}};function T(e,t=""){const n=e>0?"-":"+",o=Math.abs(e),r=Math.trunc(o/60),a=o%60;return 0===a?n+String(r):n+String(r)+t+D(a,2)}function j(e,t){return e%60==0?(e>0?"-":"+")+D(Math.abs(e)/60,2):I(e,t)}function I(e,t=""){const n=e>0?"-":"+",o=Math.abs(e);return n+D(Math.trunc(o/60),2)+t+D(o%60,2)}const C=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},B=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},L={p:B,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],o=n[1],r=n[2];if(!r)return C(e,t);let a;switch(o){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",C(o,t)).replace("{{time}}",B(r,t))}},W=/^D+$/,N=/^Y+$/,O=["D","DD","YY","YYYY"];function H(t){if(!(n=t,n instanceof Date||"object"==typeof n&&"[object Date]"===Object.prototype.toString.call(n)||"number"==typeof t))return!1;var n;const o=e(t);return!isNaN(Number(o))}const A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Y=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,F=/^'([^]*?)'?$/,z=/''/g,q=/[a-zA-Z]/;function Q(e){const t=e.match(F);return t?t[1].replace(z,"'"):e}n(511);let G=[],X=[],J="inbox";document.addEventListener("DOMContentLoaded",(function(){fe(),re(J)}));class ${constructor(e,t,n,o,r,a="todo"){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.projects=r,this.progress=a,this.id=Math.random().toString(36).substr(2,9)}remove(){G=G.filter((e=>e.title!==this.title)),console.log(G),he()}updateprogress(e){this.progress=e,he()}updateall(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.projects=r,he()}}class R{constructor(e){this.title=e}remove(){X=X.filter((e=>e.title!==this.title)),console.log(X),he()}update(e){const t=X.findIndex((e=>e.title===this.title));-1!==t&&(X[t].title=e,this.title=e,he())}}const U=new R("frontend"),V=new R("leetcode"),_=new R("sysdesign");X.push(U),X.push(V),X.push(_);const K=document.getElementById("projBtn");function Z(){fe();const e=document.getElementById("cchecklist");e.innerHTML="",X.forEach((t=>{let n=document.createElement("li");n.innerHTML=t.title,e.appendChild(n);let o=document.createElement("button"),r=document.createElement("button"),a=document.createElement("button");o.textContent="Add Task for this project",r.textContent="Edit Project",a.textContent="Delete Project",n.appendChild(o),n.appendChild(r),n.appendChild(a);const i=document.getElementById("editProj");r.onclick=function(){fe(),document.getElementById("editProjTitle").value=t.title,i.showModal()},document.getElementById("closeEditProj").addEventListener("click",(function(){i.close()})),document.getElementById("submitProj").onclick=function(){let e=document.getElementById("editProjTitle").value,n=X.find((e=>e.title===t.title));n&&(n.update(e),he(),Z())},a.onclick=function(){console.log("delete"),t.remove(),n.remove(),he()},o.onclick=function(){fe();let e=document.getElementById("projSelect");e.innerHTML="",X.forEach((t=>{let n=document.createElement("option");n.innerHTML=t.title,e.appendChild(n)}));let n=document.getElementById("myDialog");e.value=t.title,n.showModal()}}))}K.addEventListener("click",(function(){J="proj",he(),fe(),Z()}));const ee=new $("eat","lunch","2024-02-17","high","daily"),te=new $("web","odin","2024-02-18","high","daily"),ne=new $("workout","fit","2024-02-16","medium","daily","done"),oe=new $("workout","fit","2024-02-16","medium","daily","done");function re(e){switch(J=e,console.log("jfkasdjfljdskfjls",e),e){case"inbox":inbox.click();break;case"today":today.click();break;case"week":week.click();break;case"proj":K.click()}}function ae(e,t){let n=t.title,o=t.progress,r=t.description,a=t.dueDate,i=document.createElement("li");i.id=n,function(e,t,n,o,r,a){n.innerHTML=`<span>${e}</span>: <span>${o}</span> - <span>${r}</span>`;const i=document.createElement("button");i.textContent="Edit";let s=document.getElementById("taskedit");document.getElementById("closeEdit").addEventListener("click",(function(){s.close()}));let c="";i.onclick=function(){fe();let t=document.getElementById("editProjSelect");t.innerHTML="",G.forEach((e=>{let n=document.createElement("option");n.innerHTML=e.title,t.appendChild(n)})),e=document.getElementById("editTitle");let n=document.getElementById("editDescription"),o=document.getElementById("editDueDate"),r=document.getElementById("editPriority");c=a.title,n.value=a.description,o.value=a.dueDate,console.log(a.dueDate),r.value=a.priority,e.value=a.title,t.value=a.projects,s.showModal()},fe(),editTask=document.getElementById("editTask"),editTask.addEventListener("click",(function(){let e=document.getElementById("editTitle").value,t=document.getElementById("editDescription").value,n=document.getElementById("editDueDate").value,o=document.getElementById("editPriority").value,r=document.getElementById("editProjSelect").value;console.log(e),console.log("jfksdjfkdsjkfksfkdsjk",c),G.filter((e=>e.title===c))[0].updateall(e,t,n,o,r),he(),re(J)}));const d=document.createElement("button");d.textContent="Delete",d.onclick=function(){console.log("delete"),a.remove(),n.remove(),he()};const u=document.createElement("input");u.type="checkbox",u.dataset.title=e,u.checked="done"===t,n.style.textDecoration="done"===t?"line-through":"none","done"===t?(n.classList.add("completed"),n.classList.remove("todo")):(n.classList.add("todo"),n.classList.remove("completed")),u.onchange=function(){const t=G.find((t=>t.title===e));if(t){const e=this.checked?"done":"todo";t.updateprogress(e),console.log(G),n.style.textDecoration=this.checked?"line-through":"none",he()}},n.appendChild(u),n.appendChild(i),n.appendChild(d),console.log(n)}(n,o,i,r,a,t),e.appendChild(i)}function ie(t){return function(t,n,o){const r=h(),a=o?.locale??r.locale??l,i=o?.firstWeekContainsDate??o?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=o?.weekStartsOn??o?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=e(t);if(!H(c))throw new RangeError("Invalid time value");let d=n.match(Y).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,L[t])(e,a.formatLong):e})).join("").match(A).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:Q(e)};if(P[t])return{isToken:!0,value:e};if(t.match(q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));a.localize.preprocessor&&(d=a.localize.preprocessor(c,d));const u={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return d.map((e=>{if(!e.isToken)return e.value;const r=e.value;return(!o?.useAdditionalWeekYearTokens&&function(e){return N.test(e)}(r)||!o?.useAdditionalDayOfYearTokens&&function(e){return W.test(e)}(r))&&function(e,t,n){const o=function(e,t,n){const o="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(o),O.includes(e))throw new RangeError(o)}(r,n,String(t)),(0,P[r[0]])(c,r,a.localize,u)})).join("")}(t,"yyyy-MM-dd")}G.push(ee),G.push(te),G.push(ne),G.push(oe),inbox=document.getElementById("inbox"),today=document.getElementById("today"),week=document.getElementById("week"),inbox.addEventListener("click",(function(){J="inbox",he(),fe(),G.forEach((e=>{let t=document.getElementById(e.title);null!=t&&("done"==e.progress?t.style.textDecoration="line-through":t.style.textDecoration="none")}));let e=document.getElementById("cchecklist");e.innerHTML="",G.forEach((t=>{ae(e,t)}))})),today.addEventListener("click",(function(){J="today",he(),console.log(J),fe(),console.log(G);let e=document.getElementById("cchecklist");e.innerHTML="";let t=ie(new Date);G.forEach((n=>{console.log(n.dueDate),n.dueDate==t&&ae(e,n)}))})),week.addEventListener("click",(function(){J="week",he(),fe(),console.log(G);let e=document.getElementById("cchecklist");e.innerHTML="";let t=new Date,n=ie(t),r=ie(o(t,{days:7}));G.forEach((t=>{let o=t.dueDate;o>=n&&o<=r&&ae(e,t)}))}));const se=document.getElementById("openDialog"),ce=document.getElementById("myDialog"),de=document.getElementById("closeDialog");se.addEventListener("click",(function(){console.log("open"),fe(),X.forEach((e=>{let t=document.createElement("option");t.innerHTML=e.title,document.getElementById("projSelect").appendChild(t)})),ce.showModal()})),de.addEventListener("click",(function(){ce.close()})),document.getElementById("Addproj");const ue=document.getElementById("openprojDialog"),le=document.getElementById("projDialog"),me=document.getElementById("closeProj");function he(){localStorage.setItem("todos",JSON.stringify(G)),localStorage.setItem("projects",JSON.stringify(X)),localStorage.setItem("currenttab",J)}function fe(){const e=localStorage.getItem("todos"),t=localStorage.getItem("projects"),n=localStorage.getItem("currenttab");n&&(J=n),e&&(G=JSON.parse(e).map((e=>new $(e.title,e.description,e.dueDate,e.priority,e.projects,e.progress,e.id)))),t&&(X=JSON.parse(t).map((e=>new R(e.title))))}ue.addEventListener("click",(function(){console.log("openproj"),le.showModal()})),me.addEventListener("click",(function(){le.close()})),AddProj.addEventListener("click",(function(){console.log("addproj");let e=document.getElementById("projTitle");console.log(e.value),function(e){const t=new R(e);X.push(t),he(),console.log(X)}(e.value),Z()})),AddTask=document.getElementById("AddTask"),AddTask.addEventListener("click",(function(){console.log("addtask");let e=document.getElementById("title");console.log(e.value);let t=document.getElementById("description"),n=document.getElementById("dueDate"),o=document.getElementById("priority"),r=document.getElementById("projSelect");console.log(t.value+n.value+o.value+r.value),function(e,t,n,o,r){const a=new $(e,t,n,o,r);G.push(a),he(),re(J)}(e.value,t.value,n.value,o.value,r.value)})),console.log(G)})()})();