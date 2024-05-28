(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{7484:function(t){var e,n,i,r,o,a,s,d,l,c,f,u,h,m,p,g,w,b,v,y,$;t.exports=(e="millisecond",n="second",i="minute",r="hour",o="week",a="month",s="quarter",d="year",l="date",c="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t){return t instanceof y},w=function t(e,n,i){var r;if(!e)return m;if("string"==typeof e){var o=e.toLowerCase();p[o]&&(r=o),n&&(p[o]=n,r=o);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var s=e.name;p[s]=e,r=s}return!i&&r&&(m=r),r||!i&&m},b=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},(v={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),o=n-r<0,s=e.clone().add(i+(o?-1:1),a);return+(-(i+(n-r)/(o?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:d,w:o,d:"day",D:l,h:r,m:i,s:n,ms:e,Q:s})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=w,v.i=g,v.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},$=(y=function(){function t(t){this.$L=w(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return v},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return b(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<b(t)},h.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var s=this,c=!!v.u(e)||e,f=v.p(t),u=function(t,e){var n=v.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return c?n:n.endOf("day")},h=function(t,e){return v.w(s.toDate()[t].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},m=this.$W,p=this.$M,g=this.$D,w="set"+(this.$u?"UTC":"");switch(f){case d:return c?u(1,0):u(31,11);case a:return c?u(1,p):u(0,p+1);case o:var b=this.$locale().weekStart||0,y=(m<b?m+7:m)-b;return u(c?g-y:g+(6-y),p);case"day":case l:return h(w+"Hours",0);case r:return h(w+"Minutes",1);case i:return h(w+"Seconds",2);case n:return h(w+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,o){var s,c=v.p(t),f="set"+(this.$u?"UTC":""),u=((s={}).day=f+"Date",s[l]=f+"Date",s[a]=f+"Month",s[d]=f+"FullYear",s[r]=f+"Hours",s[i]=f+"Minutes",s[n]=f+"Seconds",s[e]=f+"Milliseconds",s)[c],h="day"===c?this.$D+(o-this.$W):o;if(c===a||c===d){var m=this.clone().set(l,1);m.$d[u](h),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else u&&this.$d[u](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[v.p(t)]()},h.add=function(t,e){var s,l=this;t=Number(t);var c=v.p(e),f=function(e){var n=b(l);return v.w(n.date(n.date()+Math.round(e*t)),l)};if(c===a)return this.set(a,this.$M+t);if(c===d)return this.set(d,this.$y+t);if("day"===c)return f(1);if(c===o)return f(7);var u=((s={})[i]=6e4,s[r]=36e5,s[n]=1e3,s)[c]||1,h=this.$d.getTime()+t*u;return v.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),o=this.$H,a=this.$m,s=this.$M,d=n.weekdays,l=n.months,f=function(t,n,r,o){return t&&(t[n]||t(e,i))||r[n].slice(0,o)},h=function(t){return v.s(o%12||12,t,"0")},m=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:v.s(s+1,2,"0"),MMM:f(n.monthsShort,s,l,3),MMMM:f(l,s),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,d,2),ddd:f(n.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(o),HH:v.s(o,2,"0"),h:h(1),hh:h(2),a:m(o,a,!0),A:m(o,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return i.replace(u,function(t,e){return e||p[t]||r.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,l){var c,f=v.p(e),u=b(t),h=(u.utcOffset()-this.utcOffset())*6e4,m=this-u,p=v.m(this,u);return p=((c={})[d]=p/12,c[a]=p,c[s]=p/3,c[o]=(m-h)/6048e5,c.day=(m-h)/864e5,c[r]=m/36e5,c[i]=m/6e4,c[n]=m/1e3,c)[f]||m,l?p:v.a(p)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},h.clone=function(){return v.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,b.prototype=$,[["$ms",e],["$s",n],["$m",i],["$H",r],["$W","day"],["$M",a],["$y",d],["$D",l]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),b.extend=function(t,e){return t.$i||(t(e,y,b),t.$i=!0),b},b.locale=w,b.isDayjs=g,b.unix=function(t){return b(1e3*t)},b.en=p[m],b.Ls=p,b.p={},b)},696:function(t,e,n){"use strict";var i=n(5893);let r=t=>{let{className:e=null,href:n,children:r}=t;return(0,i.jsx)("a",{className:e,rel:"noopener noreferrer",target:"_blank",href:n,children:r})};e.Z=r},3001:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var i=n(7297),r=n(5893),o=n(9521),a=n(1664),s=n.n(a);function d(){let t=(0,i.Z)(["\n    font-family: monospace;\n"]);return d=function(){return t},t}function l(){let t=(0,i.Z)(["\n    font-size: 44px;\n    margin-bottom: 0;\n    text-shadow: var(--blog-title-shadow);\n"]);return l=function(){return t},t}function c(){let t=(0,i.Z)(["\n    font-size: 12px;\n    margin: 0;\n    text-shadow: var(--blog-hint-shadow);\n"]);return c=function(){return t},t}let f=o.ZP.div.withConfig({componentId:"sc-f71203c5-0"})(d()),u=o.ZP.h1.withConfig({componentId:"sc-f71203c5-1"})(l()),h=o.ZP.p.withConfig({componentId:"sc-f71203c5-2"})(c()),m=()=>(0,r.jsxs)(f,{children:[(0,r.jsx)(u,{children:"LWDW!"}),(0,r.jsx)(h,{children:"Learn the work from doing the work\uD83C\uDF7A"})]});var p=n(696);function g(){let t=(0,i.Z)(["\n    display: flex;\n    margin-bottom: 20px;\n"]);return g=function(){return t},t}function w(){let t=(0,i.Z)(["\n    margin-bottom: 50px;\n"]);return w=function(){return t},t}function b(){let t=(0,i.Z)(["\n    padding: 5px 0;\n    font-family: monospace;\n    color: ",";\n    font-size: 20px;\n    margin-right: 20px;\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    @media only screen and (max-width: 500px) {\n        font-size: 18px;\n        margin-right: 10px;\n    }\n"]);return b=function(){return t},t}function v(){let t=(0,i.Z)(["\n    ","\n"]);return v=function(){return t},t}function y(){let t=(0,i.Z)(["\n    ","\n"]);return y=function(){return t},t}let $=[["Home","/"],["Posts","/posts"],["Github","https://github.com/B-sirius",!0],["RSS","https://b-sirius.github.io/rss.xml",!0]],x=o.ZP.div.withConfig({componentId:"sc-bbc62a17-0"})(g()),S=o.ZP.div.withConfig({componentId:"sc-bbc62a17-1"})(w()),D=(0,o.iv)(b(),t=>t.$actived?"var(--nav-color)":"var(--font-color)"),k=(0,o.ZP)(s()).withConfig({componentId:"sc-bbc62a17-2"})(v(),D),j=(0,o.ZP)(p.Z).withConfig({componentId:"sc-bbc62a17-3"})(y(),D),M=t=>{let{className:e=null,activeIndex:n=null}=t;return(0,r.jsxs)(S,{className:e,children:[(0,r.jsx)(x,{children:$.map((t,e)=>{let i=t[2]?j:k;return(0,r.jsxs)(i,{href:t[1],$actived:e===n,children:["[",t[0],"]"]},t[0])})}),(0,r.jsx)(m,{})]})};var C=M},3864:function(t,e,n){"use strict";var i=n(7297),r=n(5893),o=n(9521);function a(){let t=(0,i.Z)(["\n    --root-bg-color: ",";\n    --dialog-bg-color: ",";\n    --dialog-border-color: ",";\n    --font-color: ",";\n    --font-highlight-color: ",";\n    --nav-color: ",";\n    --blog-title-shadow: ",";\n    --blog-hint-shadow: ",";\n\n    background-color: var(--root-bg-color);\n    overflow: scroll;\n    font-family: 'GillSans', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n"]);return a=function(){return t},t}let s=o.ZP.div.withConfig({componentId:"sc-9d615c10-0"})(a(),t=>{let{theme:e}=t;return e.rootBgColor},t=>{let{theme:e}=t;return e.dialogBgColor},t=>{let{theme:e}=t;return e.dialogBorderColor},t=>{let{theme:e}=t;return e.fontColor},t=>{let{theme:e}=t;return e.fontHighlightColor},t=>{let{theme:e}=t;return e.navColor},t=>{let{theme:e}=t;return e.blogTitleShadow},t=>{let{theme:e}=t;return e.blogHintShadow}),d=t=>{let{children:e}=t;return(0,r.jsx)(s,{children:e})};e.Z=d},1785:function(t,e,n){"use strict";var i=n(7297),r=n(5893),o=n(9521);function a(){let t=(0,i.Z)(["\n    max-width: 960px;\n    margin: auto;\n    overflow: hidden;\n    padding: 40px 20px;\n    min-height: 100vh;\n    color: var(--font-color);\n"]);return a=function(){return t},t}let s=o.ZP.div.withConfig({componentId:"sc-868660b6-0"})(a()),d=t=>{let{children:e}=t;return(0,r.jsx)(s,{children:e})};e.Z=d},1662:function(t,e){"use strict";e.Z={rootBgColor:"#000",dialogBgColor:"#262427",dialogBorderColor:"#9d701d",fontColor:"#fff",fontHighlightColor:"#e7e496",navColor:"#e76464",blogTitleShadow:"1px 1px 2px #ad0909, 0 0 1em #7b3f0c, 0 0 0.15em #d2ff8f",blogHintShadow:"1px 1px 2px #ad0909, 0 0 2em #7b3f0c, 0 0 0.2em #d2ff8f",mdLinkColor:"#e64f4f",mdTitleShadow:"1px 1px 2px #ad0909, 0 0 1em #7b3f0c, 0 0 0.2em #d2ff8f",mdTitleColor:"#f2f2f2",mdSubTitleColor:"#d3dae1"}},7854:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=JSON.parse('{"js-singleton-pattern":{"id":"js-singleton-pattern","name":"2016-11-28.单例模式.md","title":"js设计模式——单例模式","date":"2016-11-28","draft":false,"description":"单例模式应该是我最早接触的设计模式之一，尽管如此，前两天在写IFE的任务时还是懵比了好一阵，他喵的还是总结一下比较好。......"},"how-to-create-color-picker":{"id":"how-to-create-color-picker","name":"2017-04-09.colorPicker.md","title":"俺的colorPicker制作思路","date":"2017-04-09","draft":false,"description":"说实话，一开始看到这个任务内心是相当懵比的——主要就是有两个点一下子没有头绪，但说实话，只要get到这两点的思路，这个任务也就完成了一半了。接下来俺就具体展开一下：......"},"js-animation-transform":{"id":"js-animation-transform","name":"2017-04-19.动画-transform.md","title":"当我们讨论动画时，我们在讨论什么——transform篇","date":"2017-04-30","draft":false,"description":"对于多数成熟的动画库，你只需要提供动画的末状态 end 与动画时长 duration，它就能帮你绘制一段缓动动画，其原理很是单纯，大体可以拆成以下几步：......"},"participating-in-hackathon-first-time":{"id":"participating-in-hackathon-first-time","name":"2017-04-24.hackFire感想.md","title":"当一只菜鸡参加Hackathon","date":"2017-04-24","draft":false,"description":"这周末参加了学校的hackathon，虽然在时长上不到24h，但没有意料到的是，此次体验后，俺会对产品开发和技术协作有了一些全新认识。......"},"js-animation-color":{"id":"js-animation-color","name":"2017-04-30.动画-color.md","title":"当我们讨论动画时，我们在讨论什么———color篇","date":"2017-04-30","draft":false,"description":"除了上篇的transform动画需要特殊处理，还有一个大头就是属性值为颜色的处理。不同于transform，属性值为颜色的属性可以有很多种，而颜色属性值又有rgb、hsl、rgba甚至十六进制等多种表......"},"make-button-friendly-for-mouse-and-keyboard":{"id":"make-button-friendly-for-mouse-and-keyboard","name":"2017-07-18.keybord-Tab-Click-可访问性-美观.md","title":"键盘Tab与鼠标Click————可访问性与美观的平衡点","date":"2017-07-18","draft":false,"description":"作为重视可访问性与还原度的开发者，如何处理被focus的元素的outline可以说是逼死强迫症：`outline: none`显然太不优雅，对于使用tab键来定位的用户直接就是抓瞎。但是不作处理，在C......"},"how-to-get-started-with-front-end":{"id":"how-to-get-started-with-front-end","name":"2017-07-18.前端系漫游指南.md","title":"前端系漫游指南","date":"2017-07-18","draft":false,"description":"这份指南纯粹是某人的自嗨产物，因为有不少人会来问他前端该如何入门种种，于是他就自己对于前端的认知整合了这玩意儿，仅代表个人意见，供以参考(\xb4c_`)......"},"how-to-loop-in-js":{"id":"how-to-loop-in-js","name":"2017-08-15.js-循环.md","title":"循环，还有这种操作！？","date":"2017-08-15","draft":false,"description":"虽说已经看了n遍相关博文，但在实际操作中各种循环的操作实在是令人摸不着头脑，系统整理一回【拍桌】......"},"how-to-clone-object-in-js":{"id":"how-to-clone-object-in-js","name":"2017-08-26.js对象克隆之谜.md","title":"js对象克隆之谜","date":"2017-08-26","draft":false,"description":"如何在js中获得一个克隆对象，可以说是喜闻乐见的话题了。相信大家都了解引用类型与基本类型，也都知道有种叫做深拷贝的东西，传说深拷贝可以获得一个克隆对象！那么像我这样的萌新自然就去学习了一波，我们能找到......"},"basics-about-xss-attack":{"id":"basics-about-xss-attack","name":"2017-09-26.xss-基础.md","title":"《试图了解XSS注入，却发现了奇妙的基础问题！》","date":"2017-09-26","draft":false,"description":"啧，现在的轻小说起名真是浮夸【瞄】......"},"loop-in-es6":{"id":"loop-in-es6","name":"2017-10-22.js-循环-es6.md","title":"循环，还有这种操作！？——es6补充","date":"2017-10-22","draft":false,"description":"---......"},"one-year-summary-about-front-end":{"id":"one-year-summary-about-front-end","name":"2017-12-12.前端帝国4：基地前奏.md","title":"前端帝国4：基地前奏","date":"2017-12-12","draft":false,"description":"真是在标题党的路上一去不复返，还是最低级的那种【摊】......"},"use-matrix-in-transform":{"id":"use-matrix-in-transform","name":"2017-12-19.greensock-transform-rotate值.md","title":"数学没学好，动画没头脑——transform篇","date":"2017-12-19","draft":false,"description":"关于transform相关值计算的代码在该库的CSSPlugin.js插件中，方法名为`getTransform`，这里截取要讨论的部分（只涉及二维变换部分）：......"},"Evan-You-talks-about-front-end-framework":{"id":"Evan-You-talks-about-front-end-framework","name":"2018-01-29.聊聊前端框架.md","title":"聊聊前端框架——尤雨溪","date":"2018-01-29","draft":false,"description":"- 结合场景需求......"},"uses-of-perlin-noise-in-animation":{"id":"uses-of-perlin-noise-in-animation","name":"2018-03-30.柏林噪声.md","title":"柏林噪声（perlin noise）都是怪物么！","date":"2018-03-30","draft":false,"description":"不知道各位有没有见过这样歪歪扭扭的动画效果，非常有趣不是么：......"},"front-end-interview-notes-about-netease":{"id":"front-end-interview-notes-about-netease","name":"2018-04-18.网易前端实习面筋.md","title":"网易前端实习面筋","date":"2018-04-18","draft":false,"description":"作为人参第一次现场面，体验还是很不错的。10点到达网易大厦，扫个码就能签到了，之后在公众号等待叫号就行，如果没留意公众号前台还会提醒。......"},"my-spring-recruitment-summary":{"id":"my-spring-recruitment-summary","name":"2018-04-24.俺的春招总结.md","title":"俺的春招总结","date":"2018-04-24","draft":false,"description":"这篇水文主要是做一个从春招准备到拿到offer之间的流程梳理，顺便盘点一下“啊要是我早点知道就好了”的小坑；对于已经经历了春招的各位可能意义不大，主要是给下一届的人康康，顺便为接下来的秋招理一理套路。......"},"use-quadtree-in-impact-checking":{"id":"use-quadtree-in-impact-checking","name":"2018-04-26.碰撞检测效率与四分树.md","title":"弹一弹#1 碰撞检测效率与四叉树","date":"2018-04-26","draft":false,"description":"最近微信弹一弹游戏突然火了，俺又正好在学习相关知识，就来蹭波热点开个系列，拆分一下弹一弹游戏可能涉及到的各种算法或数据结构的实现。当然，估计这个系列更完的时候弹一弹也该凉了嗯。......"},"impact-checking-between-square-and-circle":{"id":"impact-checking-between-square-and-circle","name":"2018-05-03.圆&矩形碰撞检测.md","title":"弹一弹#2 方块与圆の碰撞物语","date":"2018-05-03","draft":false,"description":"编译原理好鸡儿难，课设真尼玛烦，俺现在只想摸鱼 \\\\_(┐「ε:)\\\\_......"},"use-separation-for-impact-checking-in-irregular-shape":{"id":"use-separation-for-impact-checking-in-irregular-shape","name":"2018-06-07.分离轴与碰撞检测.md","title":"弹一弹#3 分离轴定理拯救碰撞检测！","date":"2018-06-07","draft":false,"description":"之前在准备高考，没有更新；今天高考开始了，我决定不考了来更新嗯嗯【嗯？？？】......"},"image-processing-water-ripple":{"id":"image-processing-water-ripple","name":"2018-06-12.水波纹.md","title":"图像处理初见！——水波纹","date":"2018-06-12","draft":false,"description":"水波纹效果的实现方法其实相当多，今天俺想讨论的一种是利用算法（就是说依照某种规则将图像的像素乱搞一通，看起来就像波纹一样！）来进行处理的，不借助波纹图片等等，因此有很高的可定制性。......"},"front-end-first-week-in-netease":{"id":"front-end-first-week-in-netease","name":"2018-07-22.摸鱼第一周.md","title":"某厂摸鱼小结——第一周","date":"2018-07-22","draft":false,"description":"实习已经一周，本来觉得好像也没什么节奏变化，直到现在——周日晚上9点，想到明天要上班，又要埋入那一大坨巨大的代码，还是有点小慌的。这种时候，就要回顾下上周五天的摸鱼日常，为明天的摸鱼做好准备。......"},"front-end-first-month-in-netease":{"id":"front-end-first-month-in-netease","name":"2018-08-11.仓鼠的30天实习生活.md","title":"仓鼠的30天实习生活","date":"2018-08-11","draft":false,"description":"虽然入职尚不满一月，但是他喵的马上就要转正答辩了！！！虽然摸鱼的日子很快乐，但也是时候总结一下了淦——......"},"front-end-IDP-planing":{"id":"front-end-IDP-planing","name":"2018-10-06.IDP规划.md","title":"我就是在\uD83D\uDC37厂饿死，也不做什么IDP规划","date":"2018-10-06","draft":false,"description":"给图床放了个十一黄金周，而我——看了7天大宅门！......"},"R-project-summary":{"id":"R-project-summary","name":"2023-01-09.R项目总结.md","title":"R项目小结","date":"2023-01-09","draft":false,"description":"最近结束的一个项目有很多值得学习的地方，挑一些不敏感的在此记录。其中的每一点其实都有深入挖掘的空间，日后想必会再次遇到。......"},"use-nextjs-create-SSG-blog":{"id":"use-nextjs-create-SSG-blog","name":"2023-01-18.博客重启.md","title":"你的静态博客，何必是hexo","date":"2023-01-18","draft":false,"description":"hexo一直是静态博客的首选之一，它开箱即用的特点以及相对丰富的主题选择让使用者可以聚焦于博客内容的编写，同时拥有一个相对美观的界面。但如果你是一个对博客内容有高度自定义需求的开发者，且并没有分享博客......"},"thoughts-about-software-engineer-and-front-end-engineer":{"id":"thoughts-about-software-engineer-and-front-end-engineer","name":"2023-01-27.关于前端工程师进阶的一点猜想，不一定对.md","title":"关于前端工程师进阶的一点猜想，不一定对","date":"2023-01-27","draft":false,"description":"在入行了一段时间之后，俺一直有一个迷思：一个熟练的初中级开发者，该如何进阶？我们的选择似乎如此之多，好像什么都能学一点，但又很难自信的说，今日所学将来会派上用场。......"},"pdf-generation":{"id":"pdf-generation","name":"2023-02-01.PDF生成方案比较.md","title":"PDF生成方案比较","date":"2023-02-01","draft":false,"description":"PDF生成是一个常见的需求，目的一般是将动态数据插入到特定格式的PDF模版中。......"},"use-github-actions-and-cloudflare-pages-improve-blog-online-process":{"id":"use-github-actions-and-cloudflare-pages-improve-blog-online-process","name":"2023-02-14.使用Github Actions优化博客上线流程.md","title":"使用Github Actions与CloudFlare Pages优化博客上线流程","date":"2023-02-14","draft":false,"description":"我个人的首选方案是Github Pages，因为它免费，且域名直观。......"},"apple-login-with-flutter-in-ios":{"id":"apple-login-with-flutter-in-ios","name":"2023-03-03.Apple login with flutter in iOS.md","title":"Sign in with apple by Flutter in iOS","date":"2023-03-02","draft":false,"description":"Sign in with Apple is commonly used by modern apps now, this article will introduce a way to impleme......"},"getx-controllers-bindings":{"id":"getx-controllers-bindings","name":"2023-03-21.getx-controller与bindings.md","title":"Getx practice - controllers and bindings","date":"2023-03-21","draft":false,"description":"First off, I\'m not a fan of Getx. Although it\'s a good and popular library. If I were to rate it, I ......"},"parse-not-validate":{"id":"parse-not-validate","name":"2023-05-02.Parse not validate.md","title":"【译】Parse, not validate / 为什么我们需要强类型语言？","date":"2023-05-02","draft":false,"description":"本文介绍了以解析（Parse）为优先的设计模式。这种设计模式充分利用了静态类型语言的优势，可以解决与外部数据（API、DB等）交互时，未知类型数据边界处理的泥潭。如果你和译者我一样觉得TS不是非常有必要，这篇文章或许能够改变你的看法。"},"the-perils-of-hydration":{"id":"the-perils-of-hydration","name":"2023-06-12.hydration.md","title":"【译】The Perils of Hydration / 你所不了解的Hydration","date":"2023-06-12","draft":false,"description":"本文仍是一篇译文，如果你是Next/Gatsby的开发者，你可能听说过hydration，这一步骤与SSR+React技术息息相关（事实上我看到过大量相关报错），但你可能从未深入考虑过其背后的原理，而这甚至容易导致一些常见的错误......"},"so-why-server-components":{"id":"so-why-server-components","name":"2023-07-04.why-server-component.md","title":"【译】so, why server components / server components有啥好？","date":"2023-07-04","draft":false,"description":"Next13已经在App Router中将Server Component作为默认配置，但你真的了解它么？这可不是什么SSR，完全不同，如果你对其抱有一丝兴趣与疑问，这篇译文或许可以给你一些答案。"},"rxjs-async-master":{"id":"rxjs-async-master","name":"2023-08-15.rxJS.md","title":"图解RxJS - 最适合中国宝宝的入门指导","date":"2023-08-15","draft":false,"description":"RxJS很好，但是它的文档不能说不好，只能说是完全无从下手。本文将把RxJS的概念放在一边，用图例解释RxJS到底在怎么解决问题。在读完本文后，再去看官方文档，会容易很多。"},"about-web-view":{"id":"about-web-view","name":"2023-12-6.webview.md","title":"WebView的世界","date":"2023-12-06","draft":false,"description":"可能长期更新，在做WebView时遇到的一些常见问题。"},"learn-nestjs-with-diagram":{"id":"learn-nestjs-with-diagram","name":"2024-03-04.图解nestjs.md","title":"图解Nestjs - 适合中国宝宝的入门指导","date":"2024-03-04","draft":false,"description":"Nestjs很好用，但刚入门时也挺让人迷糊，本文会尽量简单的展示Nestjs是如何运作的，适合正在入门但仍然迷糊Nestjs的人阅读"},"deploy-fullstack-application-with-docker-on-azure":{"id":"deploy-fullstack-application-with-docker-on-azure","name":"2024-05-24.从Dev到DevOps，部署你的第一个全栈应用-适合中国宝宝的云服务教程（Azure）.md","title":"从Dev到DevOps，借助Docker在Azure上部署你的第一个全栈应用","date":"2024-05-24","draft":false,"description":"本地应用如何部署线上，docker如何帮你解放双手，云服务究竟长作什样，本文带你一探究竟！"}}'),r=n(7484),o=n.n(r);function a(){let t=Object.values(i).sort((t,e)=>{let n=o()(t.date),i=o()(e.date);return n.isBefore(i)?1:-1});return t}}}]);