import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},e.apply(this,arguments)}class r{constructor(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}invoke(r,o){const s=`${this.baseUrl}${r}`,n=e({},o,{headers:{"Content-Type":"application/json","api-key":this.apikey}});return t(s,n).then(t=>{if(t.ok)return t.json();throw new Error(t.statusText)})}}const o="posts";class s extends r{}var n;n=s,[class extends r{getPostById(t){return this.invoke(`/${o}/${t}`)}getPosts(){return this.invoke(`/${o}`)}createPost(t){return this.invoke(`/${o}`,{method:"POST",body:JSON.stringify(t)})}}].forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(e=>{Object.defineProperty(n.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})});export{s as default};
