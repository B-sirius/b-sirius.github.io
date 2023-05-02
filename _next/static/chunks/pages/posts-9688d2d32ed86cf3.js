(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{7484:function(t){var n,e,i,r,o,a,s,d,l,c,u,f,h,m,p,g,w,v,x,b,$;t.exports=(n="millisecond",e="second",i="minute",r="hour",o="week",a="month",s="quarter",d="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t){return t instanceof b},w=function t(n,e,i){var r;if(!n)return m;if("string"==typeof n){var o=n.toLowerCase();p[o]&&(r=o),e&&(p[o]=e,r=o);var a=n.split("-");if(!r&&a.length>1)return t(a[0])}else{var s=n.name;p[s]=n,r=s}return!i&&r&&(m=r),r||!i&&m},v=function(t,n){if(g(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new b(e)},(x={s:h,z:function(t){var n=-t.utcOffset(),e=Math.abs(n);return(n<=0?"+":"-")+h(Math.floor(e/60),2,"0")+":"+h(e%60,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var i=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(i,a),o=e-r<0,s=n.clone().add(i+(o?-1:1),a);return+(-(i+(e-r)/(o?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:d,w:o,d:"day",D:l,h:r,m:i,s:e,ms:n,Q:s})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=w,x.i=g,x.w=function(t,n){return v(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})},$=(b=function(){function t(t){this.$L=w(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(x.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(u);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return x},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(t,n){var e=v(t);return this.startOf(n)<=e&&e<=this.endOf(n)},h.isAfter=function(t,n){return v(t)<this.startOf(n)},h.isBefore=function(t,n){return this.endOf(n)<v(t)},h.$g=function(t,n,e){return x.u(t)?this[n]:this.set(e,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,n){var s=this,c=!!x.u(n)||n,u=x.p(t),f=function(t,n){var e=x.w(s.$u?Date.UTC(s.$y,n,t):new Date(s.$y,n,t),s);return c?e:e.endOf("day")},h=function(t,n){return x.w(s.toDate()[t].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),s)},m=this.$W,p=this.$M,g=this.$D,w="set"+(this.$u?"UTC":"");switch(u){case d:return c?f(1,0):f(31,11);case a:return c?f(1,p):f(0,p+1);case o:var v=this.$locale().weekStart||0,b=(m<v?m+7:m)-v;return f(c?g-b:g+(6-b),p);case"day":case l:return h(w+"Hours",0);case r:return h(w+"Minutes",1);case i:return h(w+"Seconds",2);case e:return h(w+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,o){var s,c=x.p(t),u="set"+(this.$u?"UTC":""),f=((s={}).day=u+"Date",s[l]=u+"Date",s[a]=u+"Month",s[d]=u+"FullYear",s[r]=u+"Hours",s[i]=u+"Minutes",s[e]=u+"Seconds",s[n]=u+"Milliseconds",s)[c],h="day"===c?this.$D+(o-this.$W):o;if(c===a||c===d){var m=this.clone().set(l,1);m.$d[f](h),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,n){return this.clone().$set(t,n)},h.get=function(t){return this[x.p(t)]()},h.add=function(t,n){var s,l=this;t=Number(t);var c=x.p(n),u=function(n){var e=v(l);return x.w(e.date(e.date()+Math.round(n*t)),l)};if(c===a)return this.set(a,this.$M+t);if(c===d)return this.set(d,this.$y+t);if("day"===c)return u(1);if(c===o)return u(7);var f=((s={})[i]=6e4,s[r]=36e5,s[e]=1e3,s)[c]||1,h=this.$d.getTime()+t*f;return x.w(h,this)},h.subtract=function(t,n){return this.add(-1*t,n)},h.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||c;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),o=this.$H,a=this.$m,s=this.$M,d=e.weekdays,l=e.months,u=function(t,e,r,o){return t&&(t[e]||t(n,i))||r[e].slice(0,o)},h=function(t){return x.s(o%12||12,t,"0")},m=e.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(e.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(e.weekdaysMin,this.$W,d,2),ddd:u(e.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(o),HH:x.s(o,2,"0"),h:h(1),hh:h(2),a:m(o,a,!0),A:m(o,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:r};return i.replace(f,function(t,n){return n||p[t]||r.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,n,l){var c,u=x.p(n),f=v(t),h=(f.utcOffset()-this.utcOffset())*6e4,m=this-f,p=x.m(this,f);return p=((c={})[d]=p/12,c[a]=p,c[s]=p/3,c[o]=(m-h)/6048e5,c.day=(m-h)/864e5,c[r]=m/36e5,c[i]=m/6e4,c[e]=m/1e3,c)[u]||m,l?p:x.a(p)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=w(t,n,!0);return i&&(e.$L=i),e},h.clone=function(){return x.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,v.prototype=$,[["$ms",n],["$s",e],["$m",i],["$H",r],["$W","day"],["$M",a],["$y",d],["$D",l]].forEach(function(t){$[t[1]]=function(n){return this.$g(n,t[0],t[1])}}),v.extend=function(t,n){return t.$i||(t(n,b,v),t.$i=!0),v},v.locale=w,v.isDayjs=g,v.unix=function(t){return v(1e3*t)},v.en=p[m],v.Ls=p,v.p={},v)},5794:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return e(2689)}])},7344:function(t,n,e){"use strict";var i=e(7297),r=e(5893),o=e(9521);function a(){let t=(0,i.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    border: 1px solid var(--dialog-border-color);\n    background-color: var(--dialog-bg-color);\n    padding: 1px;\n    \n    & > div {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        border: 1px solid ",";\n        color: ",";\n        padding: 10px;\n    }\n"]);return a=function(){return t},t}let s=t=>{let{className:n,children:e}=t;return(0,r.jsx)("div",{className:n,children:(0,r.jsx)("div",{children:e})})},d=(0,o.ZP)(s).withConfig({componentId:"sc-920e94b6-0"})(a(),t=>{let{theme:n}=t;return n.dialogBorderColor},t=>{let{theme:n}=t;return n.fontColor});n.Z=d},5953:function(t,n,e){"use strict";var i=e(7297),r=e(9521),o=e(7344);function a(){let t=(0,i.Z)(["\n    font-size: 22px;\n    width: fit-content;\n\n    & > div {\n        width: fit-content;\n    }\n"]);return a=function(){return t},t}let s=(0,r.ZP)(o.Z).withConfig({componentId:"sc-659069c1-0"})(a());n.Z=s},696:function(t,n,e){"use strict";var i=e(5893);let r=t=>{let{className:n=null,href:e,children:r}=t;return(0,i.jsx)("a",{className:n,rel:"noopener noreferrer",target:"_blank",href:e,children:r})};n.Z=r},3001:function(t,n,e){"use strict";e.d(n,{Z:function(){return k}});var i=e(7297),r=e(5893),o=e(9521),a=e(1664),s=e.n(a);function d(){let t=(0,i.Z)(["\n    font-family: monospace;\n"]);return d=function(){return t},t}function l(){let t=(0,i.Z)(["\n    font-size: 44px;\n    margin-bottom: 0;\n    text-shadow: var(--blog-title-shadow);\n"]);return l=function(){return t},t}function c(){let t=(0,i.Z)(["\n    font-size: 12px;\n    margin: 0;\n    text-shadow: var(--blog-hint-shadow);\n"]);return c=function(){return t},t}let u=o.ZP.div.withConfig({componentId:"sc-f5ce872-0"})(d()),f=o.ZP.h1.withConfig({componentId:"sc-f5ce872-1"})(l()),h=o.ZP.p.withConfig({componentId:"sc-f5ce872-2"})(c()),m=()=>(0,r.jsxs)(u,{children:[(0,r.jsx)(f,{children:"LWDW!"}),(0,r.jsx)(h,{children:"Learn the work from doing the work\uD83C\uDF7A"})]});var p=e(696);function g(){let t=(0,i.Z)(["\n    display: flex;\n    margin-bottom: 20px;\n"]);return g=function(){return t},t}function w(){let t=(0,i.Z)(["\n    margin-bottom: 50px;\n"]);return w=function(){return t},t}function v(){let t=(0,i.Z)(["\n    padding: 5px 0;\n    font-family: monospace;\n    color: ",";\n    font-size: 20px;\n    margin-right: 20px;\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    @media only screen\n        and (max-width: 500px) {\n        font-size: 18px;\n        margin-right: 10px;\n    }\n"]);return v=function(){return t},t}function x(){let t=(0,i.Z)(["",""]);return x=function(){return t},t}function b(){let t=(0,i.Z)(["",""]);return b=function(){return t},t}let $=[["Home","/"],["Posts","/posts"],["Github","https://github.com/B-sirius",!0],["RSS","https://b-sirius.github.io/rss.xml",!0]],y=o.ZP.div.withConfig({componentId:"sc-357ac6e1-0"})(g()),S=o.ZP.div.withConfig({componentId:"sc-357ac6e1-1"})(w()),j=(0,o.iv)(v(),t=>t.$actived?"var(--nav-color)":"var(--font-color)"),D=(0,o.ZP)(s()).withConfig({componentId:"sc-357ac6e1-2"})(x(),j),C=(0,o.ZP)(p.Z).withConfig({componentId:"sc-357ac6e1-3"})(b(),j),Z=t=>{let{className:n=null,activeIndex:e=null}=t;return(0,r.jsxs)(S,{className:n,children:[(0,r.jsx)(y,{children:$.map((t,n)=>{let i=t[2]?C:D;return(0,r.jsxs)(i,{href:t[1],$actived:n===e,children:["[",t[0],"]"]},t[0])})}),(0,r.jsx)(m,{})]})};var k=Z},3864:function(t,n,e){"use strict";var i=e(7297),r=e(5893),o=e(9521);function a(){let t=(0,i.Z)(["\n    --root-bg-color: ",";\n    --dialog-bg-color: ",";\n    --dialog-border-color: ",";\n    --font-color: ",";\n    --font-highlight-color: ",";\n    --nav-color: ",";\n    --blog-title-shadow: ",";\n    --blog-hint-shadow: ",';\n\n    background-color: var(--root-bg-color);\n    overflow: scroll;\n    font-family: "GillSans", "Helvetica Neue", Arial, Helvetica, sans-serif;\n']);return a=function(){return t},t}let s=o.ZP.div.withConfig({componentId:"sc-590e23a2-0"})(a(),t=>{let{theme:n}=t;return n.rootBgColor},t=>{let{theme:n}=t;return n.dialogBgColor},t=>{let{theme:n}=t;return n.dialogBorderColor},t=>{let{theme:n}=t;return n.fontColor},t=>{let{theme:n}=t;return n.fontHighlightColor},t=>{let{theme:n}=t;return n.navColor},t=>{let{theme:n}=t;return n.blogTitleShadow},t=>{let{theme:n}=t;return n.blogHintShadow}),d=t=>{let{children:n}=t;return(0,r.jsx)(s,{children:n})};n.Z=d},1785:function(t,n,e){"use strict";var i=e(7297),r=e(5893),o=e(9521);function a(){let t=(0,i.Z)(["\n    max-width: 960px;\n    margin: auto;\n    overflow: hidden;\n    padding: 40px 20px;\n    min-height: 100vh;\n    color: var(--font-color)\n"]);return a=function(){return t},t}let s=o.ZP.div.withConfig({componentId:"sc-7fa12c98-0"})(a()),d=t=>{let{children:n}=t;return(0,r.jsx)(s,{children:n})};n.Z=d},2689:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return k}});var i=e(7297),r=e(5893),o=e(9008),a=e.n(o),s=e(9521),d=e(3864),l=e(1785),c=e(7344),u=e(5953),f=e(1664),h=e.n(f);function m(){let t=(0,i.Z)(["\n    & > div {\n        color: ",";\n    }\n"]);return m=function(){return t},t}function p(){let t=(0,i.Z)(["\n    font-size: 16.5px;\n    flex-direction: column;\n"]);return p=function(){return t},t}let g=(0,s.ZP)(u.Z).withConfig({componentId:"sc-14ca205-0"})(m(),t=>{let{theme:n}=t;return n.fontHighlightColor}),w=t=>{let{className:n,title:e,href:i,children:o}=t;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)(g,{children:i?(0,r.jsx)(h(),{href:i,children:e}):e}),(0,r.jsx)(c.Z,{children:o})]})},v=(0,s.ZP)(w).withConfig({componentId:"sc-14ca205-1"})(p());var x=e(3001),b=JSON.parse('{"js-singleton-pattern":{"id":"js-singleton-pattern","name":"2016-11-28.单例模式.md","title":"js设计模式——单例模式","date":"2016-11-28","draft":false,"description":"单例模式应该是我最早接触的设计模式之一，尽管如此，前两天在写IFE的任务时还是懵比了好一阵，他喵的还是总结一下比较好。......"},"how-to-create-color-picker":{"id":"how-to-create-color-picker","name":"2017-04-09.colorPicker.md","title":"俺的colorPicker制作思路","date":"2017-04-09","draft":false,"description":"说实话，一开始看到这个任务内心是相当懵比的——主要就是有两个点一下子没有头绪，但说实话，只要get到这两点的思路，这个任务也就完成了一半了。接下来俺就具体展开一下：......"},"js-animation-transform":{"id":"js-animation-transform","name":"2017-04-19.动画-transform.md","title":"当我们讨论动画时，我们在讨论什么——transform篇","date":"2017-04-30","draft":false,"description":"对于多数成熟的动画库，你只需要提供动画的末状态 end 与动画时长 duration，它就能帮你绘制一段缓动动画，其原理很是单纯，大体可以拆成以下几步：......"},"participating-in-hackathon-first-time":{"id":"participating-in-hackathon-first-time","name":"2017-04-24.hackFire感想.md","title":"当一只菜鸡参加Hackathon","date":"2017-04-24","draft":false,"description":"这周末参加了学校的hackathon，虽然在时长上不到24h，但没有意料到的是，此次体验后，俺会对产品开发和技术协作有了一些全新认识。......"},"js-animation-color":{"id":"js-animation-color","name":"2017-04-30.动画-color.md","title":"当我们讨论动画时，我们在讨论什么———color篇","date":"2017-04-30","draft":false,"description":"除了上篇的transform动画需要特殊处理，还有一个大头就是属性值为颜色的处理。不同于transform，属性值为颜色的属性可以有很多种，而颜色属性值又有rgb、hsl、rgba甚至十六进制等多种表......"},"make-button-friendly-for-mouse-and-keyboard":{"id":"make-button-friendly-for-mouse-and-keyboard","name":"2017-07-18.keybord-Tab-Click-可访问性-美观.md","title":"键盘Tab与鼠标Click————可访问性与美观的平衡点","date":"2017-07-18","draft":false,"description":"作为重视可访问性与还原度的开发者，如何处理被focus的元素的outline可以说是逼死强迫症：`outline: none`显然太不优雅，对于使用tab键来定位的用户直接就是抓瞎。但是不作处理，在C......"},"how-to-get-started-with-front-end":{"id":"how-to-get-started-with-front-end","name":"2017-07-18.前端系漫游指南.md","title":"前端系漫游指南","date":"2017-07-18","draft":false,"description":"这份指南纯粹是某人的自嗨产物，因为有不少人会来问他前端该如何入门种种，于是他就自己对于前端的认知整合了这玩意儿，仅代表个人意见，供以参考(\xb4c_`)......"},"how-to-loop-in-js":{"id":"how-to-loop-in-js","name":"2017-08-15.js-循环.md","title":"循环，还有这种操作！？","date":"2017-08-15","draft":false,"description":"虽说已经看了n遍相关博文，但在实际操作中各种循环的操作实在是令人摸不着头脑，系统整理一回【拍桌】......"},"how-to-clone-object-in-js":{"id":"how-to-clone-object-in-js","name":"2017-08-26.js对象克隆之谜.md","title":"js对象克隆之谜","date":"2017-08-26","draft":false,"description":"如何在js中获得一个克隆对象，可以说是喜闻乐见的话题了。相信大家都了解引用类型与基本类型，也都知道有种叫做深拷贝的东西，传说深拷贝可以获得一个克隆对象！那么像我这样的萌新自然就去学习了一波，我们能找到......"},"basics-about-xss-attack":{"id":"basics-about-xss-attack","name":"2017-09-26.xss-基础.md","title":"《试图了解XSS注入，却发现了奇妙的基础问题！》","date":"2017-09-26","draft":false,"description":"啧，现在的轻小说起名真是浮夸【瞄】......"},"loop-in-es6":{"id":"loop-in-es6","name":"2017-10-22.js-循环-es6.md","title":"循环，还有这种操作！？——es6补充","date":"2017-10-22","draft":false,"description":"---......"},"one-year-summary-about-front-end":{"id":"one-year-summary-about-front-end","name":"2017-12-12.前端帝国4：基地前奏.md","title":"前端帝国4：基地前奏","date":"2017-12-12","draft":false,"description":"真是在标题党的路上一去不复返，还是最低级的那种【摊】......"},"use-matrix-in-transform":{"id":"use-matrix-in-transform","name":"2017-12-19.greensock-transform-rotate值.md","title":"数学没学好，动画没头脑——transform篇","date":"2017-12-19","draft":false,"description":"关于transform相关值计算的代码在该库的CSSPlugin.js插件中，方法名为`getTransform`，这里截取要讨论的部分（只涉及二维变换部分）：......"},"Evan-You-talks-about-front-end-framework":{"id":"Evan-You-talks-about-front-end-framework","name":"2018-01-29.聊聊前端框架.md","title":"聊聊前端框架——尤雨溪","date":"2018-01-29","draft":false,"description":"- 结合场景需求......"},"uses-of-perlin-noise-in-animation":{"id":"uses-of-perlin-noise-in-animation","name":"2018-03-30.柏林噪声.md","title":"柏林噪声（perlin noise）都是怪物么！","date":"2018-03-30","draft":false,"description":"不知道各位有没有见过这样歪歪扭扭的动画效果，非常有趣不是么：......"},"front-end-interview-notes-about-netease":{"id":"front-end-interview-notes-about-netease","name":"2018-04-18.网易前端实习面筋.md","title":"网易前端实习面筋","date":"2018-04-18","draft":false,"description":"作为人参第一次现场面，体验还是很不错的。10点到达网易大厦，扫个码就能签到了，之后在公众号等待叫号就行，如果没留意公众号前台还会提醒。......"},"my-spring-recruitment-summary":{"id":"my-spring-recruitment-summary","name":"2018-04-24.俺的春招总结.md","title":"俺的春招总结","date":"2018-04-24","draft":false,"description":"这篇水文主要是做一个从春招准备到拿到offer之间的流程梳理，顺便盘点一下“啊要是我早点知道就好了”的小坑；对于已经经历了春招的各位可能意义不大，主要是给下一届的人康康，顺便为接下来的秋招理一理套路。......"},"use-quadtree-in-impact-checking":{"id":"use-quadtree-in-impact-checking","name":"2018-04-26.碰撞检测效率与四分树.md","title":"弹一弹#1 碰撞检测效率与四叉树","date":"2018-04-26","draft":false,"description":"最近微信弹一弹游戏突然火了，俺又正好在学习相关知识，就来蹭波热点开个系列，拆分一下弹一弹游戏可能涉及到的各种算法或数据结构的实现。当然，估计这个系列更完的时候弹一弹也该凉了嗯。......"},"impact-checking-between-square-and-circle":{"id":"impact-checking-between-square-and-circle","name":"2018-05-03.圆&矩形碰撞检测.md","title":"弹一弹#2 方块与圆の碰撞物语","date":"2018-05-03","draft":false,"description":"编译原理好鸡儿难，课设真尼玛烦，俺现在只想摸鱼 \\\\_(┐「ε:)\\\\_......"},"use-separation-for-impact-checking-in-irregular-shape":{"id":"use-separation-for-impact-checking-in-irregular-shape","name":"2018-06-07.分离轴与碰撞检测.md","title":"弹一弹#3 分离轴定理拯救碰撞检测！","date":"2018-06-07","draft":false,"description":"之前在准备高考，没有更新；今天高考开始了，我决定不考了来更新嗯嗯【嗯？？？】......"},"image-processing-water-ripple":{"id":"image-processing-water-ripple","name":"2018-06-12.水波纹.md","title":"图像处理初见！——水波纹","date":"2018-06-12","draft":false,"description":"水波纹效果的实现方法其实相当多，今天俺想讨论的一种是利用算法（就是说依照某种规则将图像的像素乱搞一通，看起来就像波纹一样！）来进行处理的，不借助波纹图片等等，因此有很高的可定制性。......"},"front-end-first-week-in-netease":{"id":"front-end-first-week-in-netease","name":"2018-07-22.摸鱼第一周.md","title":"某厂摸鱼小结——第一周","date":"2018-07-22","draft":false,"description":"实习已经一周，本来觉得好像也没什么节奏变化，直到现在——周日晚上9点，想到明天要上班，又要埋入那一大坨巨大的代码，还是有点小慌的。这种时候，就要回顾下上周五天的摸鱼日常，为明天的摸鱼做好准备。......"},"front-end-first-month-in-netease":{"id":"front-end-first-month-in-netease","name":"2018-08-11.仓鼠的30天实习生活.md","title":"仓鼠的30天实习生活","date":"2018-08-11","draft":false,"description":"虽然入职尚不满一月，但是他喵的马上就要转正答辩了！！！虽然摸鱼的日子很快乐，但也是时候总结一下了淦——......"},"front-end-IDP-planing":{"id":"front-end-IDP-planing","name":"2018-10-06.IDP规划.md","title":"我就是在\uD83D\uDC37厂饿死，也不做什么IDP规划","date":"2018-10-06","draft":false,"description":"给图床放了个十一黄金周，而我——看了7天大宅门！......"},"R-project-summary":{"id":"R-project-summary","name":"2023-01-09.R项目总结.md","title":"R项目小结","date":"2023-01-09","draft":false,"description":"最近结束的一个项目有很多值得学习的地方，挑一些不敏感的在此记录。其中的每一点其实都有深入挖掘的空间，日后想必会再次遇到。......"},"use-nextjs-create-SSG-blog":{"id":"use-nextjs-create-SSG-blog","name":"2023-01-18.博客重启.md","title":"你的静态博客，何必是hexo","date":"2023-01-18","draft":false,"description":"hexo一直是静态博客的首选之一，它开箱即用的特点以及相对丰富的主题选择让使用者可以聚焦于博客内容的编写，同时拥有一个相对美观的界面。但如果你是一个对博客内容有高度自定义需求的开发者，且并没有分享博客......"},"thoughts-about-software-engineer-and-front-end-engineer":{"id":"thoughts-about-software-engineer-and-front-end-engineer","name":"2023-01-27.关于前端工程师进阶的一点猜想，不一定对.md","title":"关于前端工程师进阶的一点猜想，不一定对","date":"2023-01-27","draft":false,"description":"在入行了一段时间之后，俺一直有一个迷思：一个熟练的初中级开发者，该如何进阶？我们的选择似乎如此之多，好像什么都能学一点，但又很难自信的说，今日所学将来会派上用场。......"},"pdf-generation":{"id":"pdf-generation","name":"2023-02-01.PDF生成方案比较.md","title":"PDF生成方案比较","date":"2023-02-01","draft":false,"description":"PDF生成是一个常见的需求，目的一般是将动态数据插入到特定格式的PDF模版中。......"},"use-github-actions-and-cloudflare-pages-improve-blog-online-process":{"id":"use-github-actions-and-cloudflare-pages-improve-blog-online-process","name":"2023-02-14.使用Github Actions优化博客上线流程.md","title":"使用Github Actions与CloudFlare Pages优化博客上线流程","date":"2023-02-14","draft":false,"description":"我个人的首选方案是Github Pages，因为它免费，且域名直观。......"},"apple-login-with-flutter-in-ios":{"id":"apple-login-with-flutter-in-ios","name":"2023-03-03.Apple login with flutter in iOS.md","title":"Sign in with apple by Flutter in iOS","date":"2023-03-02","draft":false,"description":"Sign in with Apple is commonly used by modern apps now, this article will introduce a way to impleme......"},"getx-controllers-bindings":{"id":"getx-controllers-bindings","name":"2023-03-21.getx-controller与bindings.md","title":"Getx practice - controllers and bindings","date":"2023-03-21","draft":false,"description":"First off, I\'m not a fan of Getx. Although it\'s a good and popular library. If I were to rate it, I ......"},"parse-not-validate":{"id":"parse-not-validate","name":"2023-05-02.Parse not validate.md","title":"【译】Parse, not validate / 为什么我们需要强类型语言？","date":"2023-05-02","draft":false,"description":"译者：作为一个从JS开始入门编程的程序员，我在很长一段时间以来不知道“强类型语言”到底有什么好处。就好像TS，虽然它让IDE的类型提示等等更加健全了，但觉着更多的还是加大了我的工作量，我也很不想在一些......"}}'),$=e(7484),y=e.n($),S=e(9306);function j(){let t=(0,i.Z)(["\n    margin-bottom: 40px;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]);return j=function(){return t},t}let D=function(){let t=Object.values(b).sort((t,n)=>{let e=y()(t.date),i=y()(n.date);return e.isBefore(i)?1:-1});return t}(),C=(0,s.ZP)(v).withConfig({componentId:"sc-45bf897c-0"})(j()),Z=()=>(0,r.jsxs)(s.f6,{theme:S.Z,children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"description",content:"LWDW的博客列表"}),(0,r.jsx)("meta",{property:"og:title",content:"LWDW的博客列表"}),(0,r.jsx)("meta",{property:"og:description",content:"LWDW的博客列表"})]}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(x.Z,{activeIndex:1}),D.map(t=>{let{date:n,title:e,id:i,description:o}=t;return(0,r.jsxs)(C,{title:e,href:"/posts/".concat(i),children:[(0,r.jsxs)("p",{children:["[",n,"]"]}),(0,r.jsx)("p",{children:o})]},i)})]})})]});var k=Z},9306:function(t,n){"use strict";n.Z={rootBgColor:"#000",dialogBgColor:"#262427",dialogBorderColor:"#9d701d",fontColor:"#fff",fontHighlightColor:"#e7e496",navColor:"#e76464",blogTitleShadow:"1px 1px 2px #ad0909, 0 0 1em #7b3f0c, 0 0 0.15em #d2ff8f",blogHintShadow:"1px 1px 2px #ad0909, 0 0 2em #7b3f0c, 0 0 0.2em #d2ff8f",mdLinkColor:"#e64f4f",mdTitleShadow:"1px 1px 2px #ad0909, 0 0 1em #7b3f0c, 0 0 0.2em #d2ff8f",mdTitleColor:"#f2f2f2",mdSubTitleColor:"#d3dae1"}}},function(t){t.O(0,[664,332,774,888,179],function(){return t(t.s=5794)}),_N_E=t.O()}]);