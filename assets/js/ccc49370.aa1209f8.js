"use strict";(self.webpackChunkpmri_documentation=self.webpackChunkpmri_documentation||[]).push([[6103],{9058:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(3366),r=n(7294),l=n(6010),i=n(5257),o=n(7524),c=n(9960),s=n(5999),m="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",v="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:f},e.title))})))))}var h=n(3102);function b(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(h.Zo,{component:b,props:e})}function N(e){var t=e.sidebar,n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(E,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var _=["sidebar","toc","children"];function Z(e){var t=e.sidebar,n=e.toc,o=e.children,c=(0,a.Z)(e,_),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},1860:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(7294),r=n(6010),l=n(5999),i=n(9960),o=n(4996),c=n(8824),s=n(8780),m=n(3548),u=n(6114),d=n(1526);function g(e){return e.href?a.createElement(i.Z,e):a.createElement(a.Fragment,null,e.children)}function v(e){var t=e.author,n=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,c=l||o&&"mailto:"+o||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(g,{href:c,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(g,{href:c,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var f="authorCol_sTYa",p="imageOnlyAuthorRow_vA2J",h="imageOnlyAuthorCol_kG3X";function b(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?p:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?h:f),key:t},a.createElement(v,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}var E="blogPostTitle_Ikge",N="blogPostData_SAv4",_="blogPostDetailsFull_u0Nl";function Z(e){var t,n,g=(n=(0,c.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,o.C)().withBaseUrl,f=e.children,p=e.frontMatter,h=e.assets,Z=e.metadata,k=e.truncated,L=e.isBlogPostPage,x=void 0!==L&&L,P=Z.date,C=Z.formattedDate,y=Z.permalink,H=Z.tags,I=Z.readingTime,w=Z.title,T=Z.editUrl,A=Z.authors,M=null!=(t=h.image)?t:p.image,O=!x&&k,R=H.length>0,F=x?"h1":"h2";return a.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(F,{className:E,itemProp:"headline"},x?w:a.createElement(i.Z,{itemProp:"url",to:y},w)),a.createElement("div",{className:(0,r.Z)(N,"margin-vert--md")},a.createElement("time",{dateTime:P,itemProp:"datePublished"},C),void 0!==I&&a.createElement(a.Fragment,null," \xb7 ",g(I))),a.createElement(b,{authors:A,assets:h})),M&&a.createElement("meta",{itemProp:"image",content:v(M,{absolute:!0})}),a.createElement("div",{id:x?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(m.Z,null,f)),(R||k)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",x&&_)},R&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},a.createElement(d.Z,{tags:H})),x&&T&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:T})),O&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},a.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},a.createElement("b",null,a.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8166:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(6010),l=n(1944),i=n(5281),o=n(9058),c=n(1860),s=n(7462),m=n(5999),u=n(2244);function d(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,s.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,s.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=n(9407);function v(e){var t,n=e.content,r=n.assets,i=n.metadata,o=i.title,c=i.description,s=i.date,m=i.tags,u=i.authors,d=i.frontMatter,g=d.keywords,v=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:o,description:c,keywords:g,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&a.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,i=l.nextItem,s=l.prevItem,m=l.frontMatter,u=m.hide_table_of_contents,v=m.toc_min_heading_level,f=m.toc_max_heading_level;return a.createElement(o.Z,{sidebar:n,toc:!u&&t.toc&&t.toc.length>0?a.createElement(g.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:f}):void 0},a.createElement(c.Z,{frontMatter:m,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(i||s)&&a.createElement(d,{nextItem:i,prevItem:s}))}function p(e){return a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(v,e),a.createElement(f,e))}},6114:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(5999),l=n(5281),i=n(7462),o=n(3366),c=n(6010),s="iconEdit_eYIM",m=["className"];function u(e){var t=e.className,n=(0,o.Z)(e,m);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(u,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l=n(9960);function i(e){var t=e.permalink,n=e.title,i=e.subLabel,o=e.isNext;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},9407:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),i=n(6010),o=n(3743),c="tableOfContents_bqdL",s=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294),i=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,i);n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(6668);function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return m(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=u(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function v(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=l.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,v=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),N=(0,s.L)(),_=null!=h?h:N.tableOfContents.minHeadingLevel,Z=null!=b?b:N.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:_,maxHeadingLevel:Z});return g((0,l.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:_,maxHeadingLevel:Z}}),[u,v,_,Z])),l.createElement(f,(0,a.Z)({toc:k,className:i,linkClassName:u},E))}},3008:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(9960),i="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function s(e){var t=e.permalink,n=e.label,s=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,s?c:o)},n,s&&a.createElement("span",null,s))}},1526:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(5999),i=n(3008),o="tags_jXut",c="tag_QGVx";function s(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:c},a.createElement(i.Z,{label:t,permalink:n}))}))))}},8824:function(e,t,n){n.d(t,{c:function(){return s}});var a=n(7294),r=n(2263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);