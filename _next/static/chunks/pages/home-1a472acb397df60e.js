(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4644:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(2777),s=n(2262),i=n(5959),o=n(3553),a=n(7247),c=n(7294),l=JSON.parse('[{"date":"2022 - Present","position":"Professor, CMU"},{"date":"2018 - 2021","position":"Associate Professor, CMU"},{"date":"2013 - 2017","position":"Assistant Professor, CMU"},{"date":"2014 - Present","position":"Coleman Fellow of Entrepreneurship Education"},{"date":"2013 - 2017","position":"Founder & CEO, iSecureUs, LLC"},{"date":"2012 - 2013","position":"CTO and Partner, Sage Technology Partners, Inc"},{"date":"2010 - 2012","position":"PhD, Phishing Attacks & Machine Learning, New Mexico Tech"},{"date":"2008 - 2010","position":"Research Scientist II, ICASA, New Mexico Tech"},{"date":"2005 - 2007","position":"MS, Computer Science, New Mexico Tech"},{"date":"2001 - 2004","position":"BS, Computer Science, Minor in Math, Colorado Mesa University"}]'),u=n(5893);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var s=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var d=function(e){(0,i.Z)(n,e);var t=h(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state=l,s}return(0,s.Z)(n,[{key:"render",value:function(){return(0,u.jsxs)("table",{className:"table table-striped",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Position"})]})}),(0,u.jsx)("tbody",{children:this.state.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{children:[e.date," "]}),(0,u.jsxs)("td",{children:[" ",e.position]})]})}))})]})}}]),n}(c.Component)},3481:function(e,t,n){"use strict";n.r(t);var r=n(2777),s=n(2262),i=n(5959),o=n(3553),a=n(7247),c=n(7294),l=(n(3935),n(5893));function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var s=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var t=u(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={name:"Dr. Ram Basnet",title:"Professor of Computer Science and Cybersecurity",univer_url:"http://www.coloradomesa.edu",univer_logo:"/assets/cmu-logo.png",hide_logo:!1},s}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth<=760!==this.state.hide_logo&&(this.setState({hide_logo:window.innerWidth<=760}),this.state.hide_logo?document.getElementById("logo").style.display="none":document.getElementById("logo").style.display="block")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{href:this.state.univer_url,target:"_blank",rel:"noreferrer",children:(0,l.jsx)("img",{id:"logo",src:this.state.univer_logo,style:{position:"absolute",top:"5px",left:"10px",height:"75px"},alt:"University Logo"})}),(0,l.jsx)("h1",{children:this.state.name}),(0,l.jsx)("p",{children:this.state.title})]})}}]),n}(c.Component);t.default=h},6825:function(e,t,n){"use strict";n.r(t);var r=n(2777),s=n(2262),i=n(5959),o=n(3553),a=n(7247),c=n(7294),l=(n(3935),n(5893));function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var s=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var t=u(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],current_nav:0},s.year=new Date,s.year=s.year.getFullYear(),s}return(0,s.Z)(n,[{key:"render",value:function(){return(0,l.jsxs)("p",{className:"text-center",children:[(0,l.jsx)("span",{children:"|"}),this.state.nav_text.map((function(e,t){return(0,l.jsxs)("span",{children:["\xa0",(0,l.jsx)("a",{href:e.toLowerCase(),children:e}),"\xa0|"]})})),(0,l.jsxs)("span",{children:[" \xa0\xa0 \xa9 ",this.year]})]})}}]),n}(c.Component);t.default=h},4197:function(e,t,n){"use strict";n.r(t);var r=n(2777),s=n(2262),i=n(748),o=n(5959),a=n(3553),c=n(7247),l=n(9499),u=n(7294),h=n(1664),d=n.n(h),f=n(5893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}u.Component;var x=function(e){(0,o.Z)(n,e);var t=p(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],activeIndex:0,menu:!1},s}return(0,s.Z)(n,[{key:"render",value:function(){var e=this;this.state.menu;return(0,f.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-dark navbar-dark",children:[(0,f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,f.jsx)("span",{className:"navbar-toggler-icon"})}),(0,f.jsx)("div",{className:"collapse navbar-collapse ",id:"collapsibleNavbar",children:(0,f.jsx)("ul",{className:"navbar-nav",children:this.state.nav_text.map((function(t,n){return e.props.currentPage===t.toLocaleLowerCase()?(0,f.jsx)("a",{id:"currentPage",className:"nav-link",href:t.toLocaleLowerCase(),children:t}):(0,f.jsx)("a",{className:"nav-link",href:t.toLocaleLowerCase(),children:t})}))})})]})}}]),n}(u.Component);t.default=x},9122:function(e,t,n){"use strict";n.r(t);var r=n(9499),s=n(2777),i=n(2262),o=n(5959),a=n(3553),c=n(7247),l=n(7294),u=n(4644),h=n(7215),d=n.n(h),f=n(5893);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var j=function(e){(0,o.Z)(n,e);var t=v(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={},r}return(0,i.Z)(n,[{key:"render",value:function(){return(0,f.jsx)(d(),x(x({},this.props),{},{currentPage:"home",children:(0,f.jsxs)("div",{className:"row",style:{margin:"50px"},children:[(0,f.jsxs)("div",{className:"col-sm-4",children:[(0,f.jsx)("h2",{children:"About Me"}),(0,f.jsx)("h5",{children:(0,f.jsx)("a",{href:"https://www.coloradomesa.edu/directory/computer-science-mathematics-statistics/ram-basnet.html",target:"_blank",rel:"noreferrer",children:"CMU Profile"})}),(0,f.jsx)("h5",{children:(0,f.jsx)("a",{href:"https://www.linkedin.com/in/rambasnet/",target:"_blank",rel:"noreferrer",children:" LinkedIn Profile"})}),(0,f.jsx)("div",{id:"profileImg",children:(0,f.jsx)("img",{src:"/assets/profile.png",style:{width:"100%"},alt:"Profile pic"})}),(0,f.jsxs)("p",{children:["I am a faculty of Computer Science at ",(0,f.jsx)("a",{href:"http://www.coloradomesa.edu",target:"_blank",rel:"noreferrer",children:"Colorado Mesa University (CMU)"}),"."]}),(0,f.jsx)("p",{children:"I'm a Certified Ethical Hacker (CEH) and have been practicing ethical hacking since I was a graduate student at New Mexico Tech (NMT)."}),(0,f.jsx)("p",{children:'I discovered and responsibly disclosed several critical security flaws on a web application used by major health insurance providers in Colorado and "hopefully" helped protecting electronic personal health information of tens of thousands of Coloradoans.'}),(0,f.jsx)("hr",{className:"d-sm-none"})]}),(0,f.jsxs)("div",{className:"col-sm-8",children:[(0,f.jsx)("h2",{children:"CURRENT SCHEDULE"}),(0,f.jsx)("h5",{children:(0,f.jsx)("a",{href:"/teaching",children:"This Semester's Schedule"})}),(0,f.jsx)("br",{}),(0,f.jsx)("h2",{children:"BRIEF BACKGROUND"}),(0,f.jsx)(u.default,{}),(0,f.jsx)("br",{}),(0,f.jsx)("h2",{children:"LEISURE"}),(0,f.jsx)("h5",{children:"Grand Mesa, CO, Spring 2017"}),(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"/assets/honda.jpg",width:"100%",alt:"Honda Shadoow"})}),(0,f.jsx)("p",{children:"I enjoy riding my Honda Phantom when I can."}),(0,f.jsx)("p",{children:'I follow the mantra "work hard, play hard!"'}),(0,f.jsx)("br",{}),(0,f.jsx)("h5",{children:"Everest Base Camp, Nepal, Spring 2018"}),(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"/assets/EBC.JPG",width:"100%",alt:"Everest Base Camp"})}),(0,f.jsx)("p",{children:"I love hiking. I've done one 14er of Colorado and would like to do all 50! "}),(0,f.jsx)("p",{children:"I did an epic trek to the Everest Base Camp and Chhola and Renjo Passes of Khumbu region of Nepal along with 3 friends in the Spring 2018."}),(0,f.jsx)("p",{children:"I play soccer in Grand Valley Adult Soccer league."})]})]})}))}}]),n}(l.Component);t.default=j},7215:function(e,t,n){"use strict";var r=n(5877),s=(r(n(7294)),r(n(3481))),i=r(n(4197)),o=r(n(6825)),a=n(5893);e.exports=function(e){return(0,a.jsxs)("html",{children:[(0,a.jsxs)("head",{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{charset:"utf-8"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/favicon_32.ico",type:"image/gif",sizes:"32x32"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"assets/style.css"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n          // This is making use of ES6 template strings, which allow for\n          // multiline strings. We specified "{jsx: {harmony: true}}" when\n          // creating the engine in app.js to get this feature.\n          console.log("hello world");\n        '}})]}),(0,a.jsx)("div",{id:"banner",className:"jumbotron text-center",style:{height:"200px"},children:(0,a.jsx)(s.default,{})}),(0,a.jsx)("div",{id:"navbar",style:{"margin-top":"-30px"},children:(0,a.jsx)(i.default,{currentPage:e.currentPage})}),(0,a.jsx)("body",{children:(0,a.jsx)("div",{children:e.children})}),(0,a.jsx)("div",{id:"footer",children:(0,a.jsx)(o.default,{})}),(0,a.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),(0,a.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"}),(0,a.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"})]})}},5732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(9122)}])},5877:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0}},function(e){e.O(0,[697,774,888,179],(function(){return t=5732,e(e.s=t);var t}));var t=e.O();_N_E=t}]);