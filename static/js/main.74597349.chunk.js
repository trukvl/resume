(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{23:function(e,n,t){e.exports=t(44)},28:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(11),i=t.n(o),l=t(1),c=(t(28),t(18)),u=t(2);function s(){var e=Object(u.a)(["\n  display: ",";\n  flex: ",";\n  flex-flow: ",";\n  flex-direction: ",";\n  align-items: ",";\n  align-self: ",";\n  align-content: ",";\n  justify-content: ",";\n  flex-grow: ",";\n  flex-shrink: ",";\n  flex-basis: ",";\n  flex-wrap: ",";\n  order: ",";\n  width: ",";\n  height: ",";\n  min-width: ",";\n  min-height: ",";\n  max-width: ",";\n  max-height: ",";\n  margin: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  margin-right: ",";\n  opacity: ",";\n  overflow: ",";\n  padding: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  position: ",";\n  visibility: ",";\n  z-index: ",";\n  left: ",";\n  right: ",";\n  bottom: ",";\n  top: ",";\n  background-color: ",";\n\n  ","\n  ","\n"]);return s=function(){return e},e}var d=l.b.div.attrs({className:"grasp-flexbox"})(s(),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.flex}),(function(e){return e.flexFlow}),(function(e){return e.flexDirection}),(function(e){return e.alignItems}),(function(e){return e.alignSelf}),(function(e){return e.alignContent}),(function(e){return e.justifyContent}),(function(e){return e.flexGrow}),(function(e){return e.flexShrink}),(function(e){return e.flexBasis}),(function(e){return e.flexWrap}),(function(e){return e.order}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.minWidth}),(function(e){return e.minHeight}),(function(e){return e.maxWidth}),(function(e){return e.maxHeight}),(function(e){return e.margin}),(function(e){return e.marginTop}),(function(e){return e.marginBottom}),(function(e){return e.marginLeft}),(function(e){return e.marginRight}),(function(e){return e.opacity}),(function(e){return e.overflow}),(function(e){return e.padding}),(function(e){return e.paddingTop}),(function(e){return e.paddingBottom}),(function(e){return e.paddingLeft}),(function(e){return e.paddingRight}),(function(e){return e.position}),(function(e){return e.visibility}),(function(e){return e.zIndex}),(function(e){return e.left}),(function(e){return e.right}),(function(e){return e.bottom}),(function(e){return e.top}),(function(e){return e.backgroundColor}),(function(e){return e.disabled&&"pointer-events: none; opacity: 0.3;"}),(function(e){var n=e.marginBetween;return n&&"\n  & > *:not(:first-child) { margin-top: ".concat(n,"; }")})),m=t(14),p=t.n(m),f=t(15),h=t(16),g=t(19),b=t(17),v=t(22),E=function(e){function n(e){var t;return Object(f.a)(this,n),(t=Object(g.a)(this,Object(b.a)(n).call(this,e))).touchStart=null,t}return Object(v.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{id:this.props.id,style:this.props.style,className:"grasp-core-clickable ".concat(this.props.className),onClick:function(n){window.dataLayer&&window.dataLayer.push({event:"Clickable click",id:e.props.id,disabled:e.props.disabled}),void 0!==n&&(n.stopPropagation(),n.preventDefault()),e.props.disabled||e.props.onClick&&e.props.onClick(n)},title:this.props.disabled?this.props.disabledTitle:this.props.title,onMouseOver:function(n){void 0!==n&&(n.stopPropagation(),n.preventDefault()),e.props.disabled||e.props.onMouseOver&&e.props.onMouseOver(n)},onTouchStart:function(n){void 0!==n&&(n.stopPropagation(),n.preventDefault()),e.touchStart=n.touches[0]},onTouchEnd:function(n){var t,a;window.dataLayer&&window.dataLayer.push({event:"Clickable click",id:e.props.id,disabled:e.props.disabled}),void 0!==n&&(n.stopPropagation(),n.preventDefault()),(t=e.touchStart,a=n.changedTouches[0],Math.pow(a.screenX-t.screenX,2)+Math.pow(a.screenY-t.screenY,2))<4&&(e.props.disabled||(e.props.onTouchEnd?e.props.onTouchEnd(n):e.props.onClick&&e.props.onClick(n)))},onKeyPress:this.props.onKeyPress,onContextMenu:function(e){void 0!==e&&(e.stopPropagation(),e.preventDefault())},onFocus:this.props.onFocus,onBlur:this.props.onBlur},this.props.children)}}]),n}(r.a.Component);E.defaultProps={disabled:!1,disabledTitle:void 0};var w=E;function y(){var e=Object(u.a)(["\n  border: none;\n  font: inherit;\n  font-family: ",";\n  font-size: ",";\n  cursor: pointer;\n  outline: inherit;\n  align-items: center;\n  text-align: center;\n  width: ",";\n  height: ",";\n\n  transition: background-color 0.1s;\n\n  background-color: ",";\n  color: ",";\n  -webkit-text-fill-color: ",";\n  border-radius: ",";\n  padding: 1em 2em;\n\n  ",";\n"]);return y=function(){return e},e}var k=Object(l.b)(w)(y(),(function(e){return e.theme.type.face.normal}),(function(e){return e.theme.type.height.button}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.theme.colors.primary.normal.background}),(function(e){return e.theme.colors.primary.normal.font}),(function(e){return e.theme.colors.primary.normal.font}),(function(e){return e.theme.borders.radius}),(function(e){var n=e.disabled,t=e.theme;return n?"\n    background-color: ".concat(p()(t.colors.primary.normal.background).darken(.5).string(),";\n  "):"\n  &:hover {\n    background-color: ".concat(t.colors.primary.dark.background,";\n    color: ").concat(t.colors.primary.dark.font,";\n    -webkit-text-fill-color: ").concat(t.colors.primary.dark.font,";\n  }\n  &:active {\n    background-color: ").concat(t.colors.primary.light.background,";\n    color: ").concat(t.colors.primary.light.font,";\n    -webkit-text-fill-color: ").concat(t.colors.primary.light.font,";\n  }")})),x=t(7),O=t(3);function D(){var e=Object(u.a)(["\n  font-family: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  font-weight: normal;\n  font-style: normal;\n\n  &&& {\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    font-size: ",";\n  }\n"]);return D=function(){return e},e}var j=Object(l.b)(d).attrs((function(e){return{className:"grasp-text",title:e.size?e.children:null}}))(D(),(function(e){return e.theme.type.normal}),(function(e){return e.indent&&"margin-left: 1ch;"}),(function(e){var n=e.lineHeight;return n&&"line-height: ".concat(n)}),(function(e){return e.onClick&&"cursor: pointer"}),(function(e){return e.paragraph&&"display: inline"}),(function(e){var n=e.disabled,t=e.theme;return n&&"color: ".concat(t.colors.surface.disabled.font,"; opacity: 1;")}),(function(e){return e.noSelect&&"user-select: none; cursor: default;"}),(function(e){return e.centerAlign&&"text-align: center;justify-content:center"}),(function(e){var n=e.mono,t=e.theme;return n&&"font-family: ".concat(t.type.mono,";")}),(function(e){return e.italic&&"font-style: italic;"}),(function(e){return e.bold&&"font-weight: bold;"}),(function(e){var n=e.decoration;return n&&"text-decoration: ".concat(n,";")}),(function(e){return e.underline&&"text-decoration: underline;"}),(function(e){return e.strikeThrough&&"text-decoration: line-through;"}),(function(e){return e.ellipsis&&"\n    text-overflow: ellipsis;\n    overflow: hidden;\n    "}),(function(e){return e.nowrap&&"\n    display: block;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    "}),(function(e){var n=e.nowrap,t=e.expandable;return n&&t&&"\n    &:hover,\n    &:focus {\n      text-overflow: unset;\n      overflow: overlay;\n      z-index: 10000;\n      min-width: max-content;\n      position: absolute;\n    }"}),(function(e){var n=e.size;return n&&"\n    display: block;\n    min-width: ".concat(n,";\n    max-width: ").concat(n,";\n    width: ").concat(n,";\n    ")}),(function(e){return"title"===(n=e.fontSize)?"2rem":"heading"===n?"1.5rem":"label"===n?"1.25rem":"detail"===n?"0.8rem":n;var n}));j.defaultProps={inline:!0};var C=j;function S(){var e=Object(u.a)(["\n  :hover,\n  :active {\n    color: white;\n    transition: color 0.5s;\n  }\n  transition: color 0.2s;\n  @media print {\n    break-inside: avoid;\n    page-break-inside: avoid;\n    color: black;\n    background-color: white;\n  }\n  margin-bottom: 0.7em;\n"]);return S=function(){return e},e}function P(){var e=Object(u.a)(["\n  @media print {\n    display: block;\n    break-after: avoid;\n    page-break-after: avoid;\n  }\n"]);return P=function(){return e},e}function I(){var e=Object(u.a)(["\n  color: ",";\n  width: 100%;\n  margin-bottom: 1em;\n  background-color: ",";\n  align-items: center;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  font-size: 20pt;\n  line-height: 22pt;\n  :hover {\n    color: white;\n    transition: color 0.5s;\n  }\n  transition: color 0.2s;\n  @media print {\n    background-color: white;\n    color: black;\n    font-size: 18pt;\n    line-height: 18pt;\n    margin-bottom: 0;\n  }\n"]);return I=function(){return e},e}function z(){var e=Object(u.a)(["\n  color: ",";\n  width: 100%;\n  background-color: ",";\n  padding-top: ",";\n  white-space: nowrap;\n  @media print {\n    background-color: white;\n    color: black;\n  }\n"]);return z=function(){return e},e}function T(){var e=Object(u.a)(["\n  font-size: 10vw;\n  font-family: 'Dosis', sans-serif;\n"]);return T=function(){return e},e}function M(){var e=Object(u.a)(["\n  && {\n    font-size: 48pt;\n  }\n  font-family: 'Dosis', sans-serif;\n"]);return M=function(){return e},e}function B(){var e=Object(u.a)(["\n  display: contents;\n\n  @media print {\n    display: none;\n  }\n"]);return B=function(){return e},e}function L(){var e=Object(u.a)(["\n  flex-direction: column;\n  ","\n  background-color: ",";\n  color: ",";\n  font-family: 'Cairo', sans-serif;\n  font-size: 14pt;\n  width: 100%;\n\n  @media print {\n    a {\n      color: #000;\n    }\n    color: #000;\n    background-color: #fff;\n    display: block;\n  }\n"]);return L=function(){return e},e}function R(){var e=Object(u.a)(["\n  font-size: 18pt;\n\n  @media print {\n    font-size: 14pt;\n  }\n"]);return R=function(){return e},e}function G(){var e=Object(u.a)(["\n  line-height: 20pt;\n  @media print {\n    line-height: 12pt;\n  }\n"]);return G=function(){return e},e}function N(){var e=Object(u.a)(["\n  font-size: 18pt;\n\n  @media print {\n    font-size: 14pt;\n  }\n"]);return N=function(){return e},e}function A(){var e=Object(u.a)(["\n  font-style: italic;\n"]);return A=function(){return e},e}function F(){var e=Object(u.a)(["\n  font-size: 24pt;\n\n  @media print {\n    font-size: 18pt;\n    line-height: 20pt;\n  }\n"]);return F=function(){return e},e}function W(){var e=Object(u.a)(["\n  color: ",";\n  ",";\n\n  @media print {\n    color: black;\n  ","}\n"]);return W=function(){return e},e}function H(){var e=Object(u.a)(["\n  padding-left: ",";\n  padding-right ",";\n  max-width: 1080px;\n  width: calc(100% - "," - ",");\n\n  @media print {\n    display: block;\n  }\n"]);return H=function(){return e},e}function V(){var e=Object(u.a)(["\n  padding-left: ",";\n  padding-right ",";\n  max-width: 1080px;\n  width: calc(100% - "," - ",");\n\n  @media print {\n    break-inside: avoid;\n    page-break-inside: avoid;\n    color: black;\n    background-color: white;\n  }\n"]);return V=function(){return e},e}function J(){var e=Object(u.a)(["\n  font-family: 'Cairo', sans-serif;\n  font-size: 14pt;\n  @media print {\n    font-size: 10pt;\n    color: black;\n  ","}\n"]);return J=function(){return e},e}function K(){var e=Object(u.a)(["\n  margin: 0;\n"]);return K=function(){return e},e}var U=l.b.ul(K()),Q=Object(l.b)(C)(J(),(function(e){return e.screenOnly&&"\n  display: none;\n  "}));Q.defaultProps={paragraph:!0};var q=Object(l.b)(d)(V(),"34pt","34pt","34pt","34pt");q.defaultProps={flexDirection:"column"};var X=Object(l.b)(d)(H(),"34pt","34pt","34pt","34pt");X.defaultProps={flexDirection:"column"};var Y=l.b.a(W(),(function(e){return e.color}),(function(e){var n=e.monochrome,t=e.color,a=e.theme;return!n&&"\n  &:link {\n  color: ".concat(t,";\n  }\n  &:visited {\n  color: ").concat(a.colors.primary.normal.background,";\n  }\n  &:hover {\n  color: ").concat(a.colors.primary.light.background,";\n  }\n  &:active {\n  color: ").concat(a.colors.primary.dark.background,";\n  }\n  ")}),(function(e){return e.screenOnly&&"\n  display: none;\n  "}));Y.defaultProps={color:"#cecece"};var $=Object(l.b)(Q)(F()),Z=Object(l.b)(Q)(A()),_=Object(l.b)(Q)(N()),ee=Object(l.b)(Q)(G()),ne=Object(l.b)(Q)(R()),te=Object(l.b)(d)(L(),"align-items: center;","#2b2f36","#cecece"),ae=l.b.div(B()),re=Object(l.b)(Q)(M()),oe=Object(l.b)(Q)(T()),ie=Object(l.b)((function(e){var n=e.className,t=e.name,a=e.email,o=e.phone,i=Object(x.useMediaQuery)({minWidth:825}),l=Object(x.useMediaQuery)({print:!0}),c=i||l;return r.a.createElement(d,{className:n},r.a.createElement(d,{flexGrow:1}),r.a.createElement(q,{flexDirection:"row",className:n},r.a.createElement(d,{flexDirection:"column",justifyContent:"center"},r.a.createElement(d,{height:"1em"}),c?r.a.createElement(re,null,t):r.a.createElement(oe,null,t),c?r.a.createElement(ee,{height:"1em"},r.a.createElement(Y,{monochrome:!0,color:"#195190",href:"mailto:".concat(a)},a)):r.a.createElement(d,{flexDirection:"column"},r.a.createElement(ee,{height:"1em",flexDirection:"column"},r.a.createElement(Y,{monochrome:!0,color:"#195190",href:"mailto:".concat(a)},a)),r.a.createElement(d,{height:"5pt"}),r.a.createElement(ee,null,o),r.a.createElement(d,{flexGrow:1,minHeight:"16pt"}),r.a.createElement(d,{flexDirection:"row"},r.a.createElement(ee,null,r.a.createElement(Y,{monochrome:!0,color:"#195190",href:"https://github.com/kevinvanleer"},"GitHub")),r.a.createElement(d,{width:"0.2ch"}),r.a.createElement(ee,null,"|"),r.a.createElement(d,{width:"0.2ch"}),r.a.createElement(ee,null,r.a.createElement(Y,{monochrome:!0,color:"#195190",href:"https://www.linkedin.com/in/kevin-vanleer/"},"LinkedIn")))),r.a.createElement(d,{height:"1em"})),r.a.createElement(d,{flexGrow:1}),c&&r.a.createElement(d,{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-end"},r.a.createElement(d,{height:"10pt"}),r.a.createElement(ee,null,"283 Stonehenge Drive"),r.a.createElement(ee,null,"Washington, MO 63090"),r.a.createElement(d,{height:"5pt"}),r.a.createElement(ee,null,o),r.a.createElement(d,{flexGrow:1,minHeight:"16pt"}),r.a.createElement(ee,null,r.a.createElement(Y,{monochrome:!0,color:"#195190",href:"https://github.com/kevinvanleer"},"https://github.com/kevinvanleer")),r.a.createElement(ee,null,r.a.createElement(Y,{monochrome:!0,color:"#195190",href:"https://www.linkedin.com/in/kevin-vanleer/"},"https://www.linkedin.com/in/kevin-vanleer/")),r.a.createElement(d,{height:"12pt"}))),r.a.createElement(d,{flexGrow:1}))}))(z(),"#195190","#a2a2a1","0px"),le=Object(l.b)((function(e){var n=e.className,t=e.children;return r.a.createElement(d,{className:n},r.a.createElement(d,{flexGrow:1}),r.a.createElement(X,{flexDirection:"row"},t),r.a.createElement(d,{flexGrow:1}))}))(I(),"#a2a2a1","#195190"),ce=(Object(l.b)((function(e){var n=e.className,t=e.name,a=e.timespan;return r.a.createElement("div",{className:n},r.a.createElement(d,{alignItems:"baseline",flexWrap:"wrap"},r.a.createElement($,null,t),r.a.createElement(d,{width:"1em"}),r.a.createElement(Z,null,"".concat(Object(O.get)(a,[0])," - ").concat(Object(O.get)(a,[1],"present")))))}))(P()),Object(l.b)((function(e){var n=e.title,t=e.company,a=e.timespan,o=e.children,i=e.className;return r.a.createElement(d,{flexDirection:"column",className:i},r.a.createElement(d,{alignItems:"baseline",flexDirection:"row",flexWrap:"wrap"},r.a.createElement(_,null,n),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,","),r.a.createElement(d,{width:"1ch"}),r.a.createElement(_,null,t)),r.a.createElement(d,{width:"2ch"}),r.a.createElement(Z,null,"".concat(Object(O.get)(a,[0])," - ").concat(Object(O.get)(a,[1],"present")))),r.a.createElement(ee,null,o))}))(S())),ue=function(e){var n=e.school,t=e.degree,a=e.year;return r.a.createElement(d,{flexDirection:"column"},r.a.createElement(ne,null,n),r.a.createElement(d,{alignItems:"baseline"},r.a.createElement(ee,null,t),r.a.createElement(d,{width:"1ch"}),r.a.createElement(Z,null,a)))},se=t(8),de=(t(43),function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],o=n[1];return r.a.createElement(te,null,r.a.createElement(ie,{name:se.b,email:"kevin.vanleer@gmail.com",phone:"314-323-2294"}),r.a.createElement(le,null,se.a),r.a.createElement(X,null,r.a.createElement(d,{flexDirection:"column"},t?r.a.createElement(ee,null,"Kevin spent the past two years building web apps with React and Redux. He most recently developed a technology demonstrator for a software startup."," ",r.a.createElement(ae,null,r.a.createElement(Y,{href:"https://grasp-data.com/vantage/tech-demo"},"Check it out!"))):r.a.createElement(ee,null,"Kevin spent the past 2 years leading product development at Conduce Inc., developing a cloud deployed data visualization SaaS. He diligently focused on empowering users and delivering value, while managing a highly effective product development team."))),r.a.createElement(d,{height:"1em"}),r.a.createElement(X,null,r.a.createElement($,null,"Professional"),t?r.a.createElement(ce,{title:"Technical co-founder",company:"Grasp Data Inc.",timespan:["2019"]},r.a.createElement(U,null,r.a.createElement("li",null,"Configured CI/CD with GitLab and GKE"),r.a.createElement("li",null,"Developed algorithm to generate warehouse racking layout from location names."),r.a.createElement("li",null,"Developed UI to help user translate custom non-standard timestamp formatting."),r.a.createElement("li",null,"Integrated Google Tag Manager and Google Analytics with company website."),r.a.createElement("li",null,"Integrated 3rd-party tools like MailChimp and Unbounce to maintain focus on discriminating features."),r.a.createElement("li",null,"Developed front-end software using React/Redux"),r.a.createElement("li",null,"Integrated Storybook to assist with development and testing of custom React components"),r.a.createElement("li",null,"Developed an animated warehouse visualization, rendered in the DOM with thousands of elements."),r.a.createElement("li",null,"Developed a warehouse visualization technology demonstrator with spatial and temporal navigation."))):r.a.createElement(ce,{title:"CTO",company:"Grasp Data Inc.",timespan:["2019"]},r.a.createElement("li",null,"Excited new customers by delivering technology demonstrator to public website after only three weeks of development."),r.a.createElement("li",null,"Contributed discriminating capability by inventing technology to build warehouse digital twins without CAD/CAM diagrams."),r.a.createElement("li",null,"Established product plan to empower logistics professionals to understand operational behaviors."))),r.a.createElement(X,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{title:"Director of Product Development",company:"Conduce Inc.",timespan:["Sep 2017","Oct 2019"]},r.a.createElement(U,null,r.a.createElement("li",null,"Doubled development team velocity by streamlining the development process and cutting budget in half."),r.a.createElement("li",null,"Reduced developer time spent fixing bugs from nearly 2 per week to nearly 0.2 per week."),r.a.createElement("li",null,"Improved testing practices and raise quality standards by integrating offshore QA team and development team."),r.a.createElement("li",null,"Fostered more productive sales engagements by working with sales and delivery to help them understand how leverage product features when engaging customers."),r.a.createElement("li",null,"Focused the team on adding value for the customer by reducing product backlog from over 1000 stories to under 100,"),r.a.createElement("li",null,"Lead UX/UI designer."),r.a.createElement("li",null,"Developed component library in React/Redux."))),r.a.createElement(ce,{title:"Senior Software Engineer",company:"Conduce Inc.",timespan:["Jan 2014","Sep 2017"]},r.a.createElement(U,null,r.a.createElement("li",null,"Worked with customer to design solutions for their use cases."),r.a.createElement("li",null,"Guided customer to understand relationships between disparate data sources."),r.a.createElement("li",null,"Designed and developed data ingest pipeline for critical customer."),r.a.createElement("li",null,"Designed and developed spatio-temporal visualizations for critical customer."),r.a.createElement("li",null,"Enhanced and stabilized platform software to ensure stability for near-term customer deliverables."),r.a.createElement("li",null,"Developed tools to enable data analysts, system integrators and business development professionals to build custom visualizations without engineering support."),r.a.createElement("li",null,"Planned transition of platform software to a cloud-based software-as-a-service microservice architecture."),r.a.createElement("li",null,"Encouraged team to focus on continuous integration and automated testing."),r.a.createElement("li",null,"Prototyped visual elements and proposed new ways of exploiting data visualization help users gain insights into their operations."),r.a.createElement("li",null,"Prototyped a simulation to generate realistic shopper traffic in a grocery store."),r.a.createElement("li",null,"Developed microservices in D, Clojure, and Python."),r.a.createElement("li",null,"Developed prototypes in C++, Python, and JavaScript."),r.a.createElement("li",null,"Developed front-end software in JavaScript using jQuery and React.")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{title:"Director of Product Development",company:"Conduce Inc.",timespan:["Sep 2017","Oct 2019"]},r.a.createElement("li",null,"Doubled developer productivity by streamlining software process and catching bugs before they were merged into baseline."),r.a.createElement("li",null,"Accelerated team velocity, even while reducing resources by half."),r.a.createElement("li",null,"Increased transparency into product development by publishing a roadmap and generating data-driven reports for investors.")),r.a.createElement(ce,{title:"Senior Software Engineer",company:"Conduce Inc.",timespan:["Dec 2014","Sep 2017"]},r.a.createElement("li",null,"Delivered solution from critical customer, exploiting and extending the software platform to exceed expectations."),r.a.createElement("li",null,"Effected positive change by highlighting opportunities to improve communication and work more effectively as a team."),r.a.createElement("li",null,"Pivoted product new direction to deliver customer value when technology partner failed to deliver.")))),r.a.createElement(X,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{title:"Virtual Communication Environment Lead",company:"Boeing",timespan:["2012","2013"]},r.a.createElement(U,null,r.a.createElement("li",null,"Served as project lead on a three person distributed team to develop advanced voice capabilities."),r.a.createElement("li",null,"Executed both the Product Owner and Scrum Master roles, developing the roadmap, grooming the backlog and facilitating meetings."),r.a.createElement("li",null,"Implemented finite impulse response filter algorithms for use in sound synthesis applications."),r.a.createElement("li",null,"Designed solution for actuating synthetic voice transmissions on simulated tactical radios."),r.a.createElement("li",null,"Designed solution integrating commercial CobraNet audio adapters with custom software on intel-based servers for scalable multi-user multi-endpoint voice communications."),r.a.createElement("li",null,"Led the design, implementation and deployment of 3 major capabilities, sound simulation, synthetic voice radio transmissions and Virtual Communication Environment Server."))),r.a.createElement(ce,{flexDirection:"column",company:"Boeing",title:"Voice Communication System Lead",timespan:["2009","2014"]},r.a.createElement(U,null,r.a.createElement("li",null,"Developed proposal and pitched management to obtain funding."),r.a.createElement("li",null,"Served as project lead on a three to five person distributed team to develop a tactical radio simulation for modeling and simulation."),r.a.createElement("li",null,"Executed both the Product Owner and Scrum Master roles, developing the roadmap, grooming the backlog, and facilitating meetings."),r.a.createElement("li",null,"Made unit testing, continuous integration, and automation team priorities."),r.a.createElement("li",null,"Developed minimum viable product to satisfy stakeholders and save $600,000 in capital investments."),r.a.createElement("li",null,"Published procedures, guidelines and design information on internal wiki."),r.a.createElement("li",null,"Deployed product to targeted users in staged released before retiring legacy communications system."),r.a.createElement("li",null,"Developed compatibility API for interfacing with external flight simulators."),r.a.createElement("li",null,"Published API documentation on internal web server."),r.a.createElement("li",null,"Designed VCS API a communication protocol that transformed a statically compiled class hierarchy into a distributed reconfigurable collection of software modules."),r.a.createElement("li",null,"Received patent for novel system design."),r.a.createElement("li",null,"Developed a proprietary voice activation algorithm to account for variations in hardware sensitivity and ambient environment noise."),r.a.createElement("li",null,"Made VCS available to Boeing enterprise through sourceforge-like interface."),r.a.createElement("li",null,"Used internal social media site to keep users informed on important updates."),r.a.createElement("li",null,"Adopted by 20 teams enterprise wide."),r.a.createElement("li",null,"Virtually eliminated need for dedicated support staff, increasing overall reliability, freeing resources to focus on other priorities."))),r.a.createElement(ce,{title:"Audio Configuration Server Lead",company:"Boeing",timespan:["2005","2010"]},r.a.createElement(U,null,r.a.createElement("li",null,"Developed embedded server to control commercial off the shelf tactical radio simulation equipment though documented, undocumented and backdoor interfaces."),r.a.createElement("li",null,"Realized 10x reduction in support required to configure and maintain COTS system."),r.a.createElement("li",null,"Prototyped in Bash and implemented in C++."),r.a.createElement("li",null,"Developed solution for use in flight simulators and adapted solution for use in large scale wargaming environments."))),r.a.createElement(ce,{title:"ASTi Telestra System Integrator",company:"Boeing",timespan:["2004","2010"]},r.a.createElement(U,null,r.a.createElement("li",null,"Designed and integrated tactical radio simulation solutions for flight simulators at enterprise and government sites."),r.a.createElement("li",null,"Designed and fabricated cables for analog audio systems."),r.a.createElement("li",null,"Tested commercial products and interfaced with vendor to resolve issues."))),r.a.createElement(ce,{title:"Tactical voice communications support",company:"Boeing",timespan:["2004","2014"]},r.a.createElement(U,null,r.a.createElement("li",null,"Worked with users to design comm plans for broadcast radio networks in operator-in-the-loop simulations."),r.a.createElement("li",null,"Tested communications system configuration with users prior to putting solutions into production."),r.a.createElement("li",null,"Provided live technical support for hardware and software installations at several sites nationwide."),r.a.createElement("li",null,"Maintained a limited support role as responsibilities grew to maintain close relationship with users.")))):r.a.createElement(ce,{title:"Software Engineer",company:"Boeing",timespan:["2004","2014"]},r.a.createElement("li",null,"Reduced support costs by developing a reliable self-service software solution for tactical radio simulation that eliminated need for dedicated engineering staff."),r.a.createElement("li",null,"Reduced complexity and recurring cost by replacing custom hardware solution with plug-and-play peripherals and software that runs on existing computing infrastructure."),r.a.createElement("li",null,"Exemplified the standard for how to facilitate and manage a distributed software development teams by following Agile software development principles and treating team members with care and respect."))),r.a.createElement(ae,null,r.a.createElement(d,{height:"1em"}),r.a.createElement(X,null,r.a.createElement(k,{id:"kvl-resume-tech-toggle",onClick:function(){o(!t),window.scrollTo(0,0)}},t?"Looks great! Do you have any leadership experience?":"Sure, all this leadership stuff is great, but what about your technical chops?")),r.a.createElement(d,{height:"1em"})),r.a.createElement(X,null,r.a.createElement($,null,"Volunteer"),r.a.createElement(ce,{title:"Soccer coach",timespan:["2018"]},"Work with a great group of 2nd and 3rd grade girls. Teaching them leadership and the value of teamwork and fair play."),r.a.createElement(ce,{title:"FIRST LEGO League coach",timespan:["2015","2016"]},"Facilitated a team of 10 hardworking 5th (and then 6th) graders in their pursuit to master the FIRST LEGO League challenge.")),r.a.createElement(X,null,r.a.createElement($,null,"Education"),r.a.createElement(ue,{school:"Missouri University of Science and Technology",degree:"Bachelor of Science: Computer Engineering",year:"2004"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me={colors:{surface:{normal:{background:"#282c34",font:"#dad0d0"},disabled:{background:"#282c34",font:"#777"}},borders:"#dad0d0",primary:{normal:{background:"#195190",font:"#fff"},light:{background:"#547dc1",font:"#000"},dark:{background:"#002962",font:"#fff"},disabled:{background:"#050",font:"#777"}},secondary:{normal:{background:"#a2a2a1",font:"000"},light:{background:"#d3d3d2",font:"#000"},dark:{background:"#737373",font:"#fff"},disabled:{background:"#055",font:"#777"}}},type:{normal:"'Barlow', sans-serif",mono:"'Roboto Mono', monospace",face:{normal:"'Barlow', sans-serif",mono:"'Roboto Mono', monospace"},height:{title:"2rem",heading:"1.5rem",label:"1.25rem",button:"1rem",detail:"0.8rem"}},borders:{radius:"3px"}};i.a.render(r.a.createElement(l.a,{theme:me},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e){e.exports=JSON.parse('{"b":"Kevin Van Leer","a":"Boeing-trained, startup-hardened, product expert"}')}},[[23,1,2]]]);
//# sourceMappingURL=main.74597349.chunk.js.map