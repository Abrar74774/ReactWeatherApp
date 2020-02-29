(this.webpackJsonpproj_10=this.webpackJsonpproj_10||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),i=a.n(s),c=(a(28),a(2)),l=a(3),o=a(5),u=a(4),h=a(6);function m(){return r.a.createElement("div",{className:"header-style"},r.a.createElement("h1",{className:"header"},"Weather\xa0App"))}var p=a(12),d=a(14),f={textDecoration:"none",display:"block",height:"50px",width:"200px",padding:"7px",textAlign:"center",margin:"70px auto 0",color:"white",borderRadius:"5px",border:"1px solid #fff",backgroundColor:"#ffffff25",transition:"background-color 0.3s"},y=Object(p.a)({},f,{backgroundColor:"#00000000",border:"1px solid #ffffff33",color:"#ffffff33"}),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return""===this.props.inputfield.city||""===this.props.inputfield.x||""===this.props.inputfield.y?(console.log("Ha"),r.a.createElement("div",{style:y},"Find")):(console.log("na"),console.log(this.props.inputfield.city),r.a.createElement(d.b,{to:"/weather",className:"findBtn",style:f,onClick:function(){e.props.dataFromSearch({coords:{x:e.props.search.x,y:e.props.search.y},city:e.props.search.city})}},"Find"))}}]),t}(n.Component);function E(e){return console.log(e.suggestionsData),r.a.createElement("datalist",{id:"search"},e.suggestionsData.map((function(e){return r.a.createElement("option",{value:e.text,key:e.magicKey})})))}var v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={values:{city:"",x:"",y:""},suggs:[]},a.handleChange=function(e){var t=e.target.value;fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=".concat(t,"&f=json&category=City")).then((function(e){return e.json()})).then((function(e){a.setState((function(a){return{values:Object(p.a)({},a.values,{city:t}),suggs:e.suggestions}}))}))},a.handleClick=function(){if(a.state.suggs[0]){var e=a.state.suggs[0].text,t=a.state.suggs[0].magicKey;fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=".concat(e,"&magicKey=").concat(t)).then((function(e){return e.json()})).then((function(e){return a.setState((function(t){return{values:Object(p.a)({},t.values,{x:e.candidates[0].location.x.toFixed(4),y:e.candidates[0].location.y.toFixed(4)})}}))}))}},a.handleChangeX=function(e){var t=e.target.value;a.setState({values:Object(p.a)({},a.state.values,{x:t})})},a.handleChangeY=function(e){var t=e.target.value;a.setState({values:Object(p.a)({},a.state.values,{y:t})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchStyle"},"Enter city name\xa0:",r.a.createElement("br",null),r.a.createElement("input",{className:"city",type:"text",autoComplete:"off",list:"search",id:"input",onChange:this.handleChange}),r.a.createElement(E,{suggestionsData:this.state.suggs}),r.a.createElement("button",{className:"searchButton",onClick:this.handleClick},"Set Coords"),r.a.createElement("div",{style:{width:"280px",margin:"50px auto",display:"flex",flexDirection:"column",padding:"10px",textAlign:"justify"}},r.a.createElement("div",{className:"coord"},"Enter\xa0longitude\xa0:",r.a.createElement("input",{type:"number",step:"any",value:this.state.values.x,onChange:this.handleChangeX})),r.a.createElement("div",{className:"coord"},"Enter\xa0latitude\xa0:",r.a.createElement("input",{type:"number",step:"any",value:this.state.values.y,onChange:this.handleChangeY})),r.a.createElement("br",null)),r.a.createElement(g,{inputfield:this.state.values,search:this.state.values,dataFromSearch:this.props.dataFromSearch}))}}]),t}(r.a.Component),b=a(10),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tempStyle"},r.a.createElement("div",{className:"temp"},this.props.currentTemp,"\xb0c"),r.a.createElement("div",{className:"others"},this.props.maxTemp,"\xb0 / ",this.props.minTemp,"\xb0"),r.a.createElement("div",{className:"others"},this.props.summary))}}]),t}(r.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"details"},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-wind"}),r.a.createElement("br",null),Math.floor(this.props.wind)+" km/h"),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-tint"}),r.a.createElement("br",null),this.props.humidity),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-sun"}),r.a.createElement("br",null),this.props.uvindex))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).epochToDay=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e).getDay()]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"details"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("br",null),r.a.createElement("span",null,Math.floor(this.props.firstNextDay.max),"\xb0/",Math.floor(this.props.firstNextDay.min),"\xb0"),r.a.createElement("br",null),r.a.createElement("span",null,this.epochToDay(this.props.firstNextDay.day))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("br",null),r.a.createElement("span",null,Math.floor(this.props.secondNextDay.max),"\xb0/",Math.floor(this.props.secondNextDay.min),"\xb0"),r.a.createElement("br",null),r.a.createElement("span",null,this.epochToDay(this.props.secondNextDay.day))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("br",null),r.a.createElement("span",null,Math.floor(this.props.thirdNextDay.max),"\xb0/",Math.floor(this.props.thirdNextDay.min),"\xb0"),r.a.createElement("br",null),r.a.createElement("span",null,this.epochToDay(this.props.thirdNextDay.day))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("br",null),r.a.createElement("span",null,Math.floor(this.props.fourthNextDay.max),"\xb0/",Math.floor(this.props.fourthNextDay.min),"\xb0"),r.a.createElement("br",null),r.a.createElement("span",null,this.epochToDay(this.props.fourthNextDay.day))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("br",null),r.a.createElement("span",null,Math.floor(this.props.fifthNextDay.max),"\xb0/",Math.floor(this.props.fifthNextDay.min),"\xb0"),r.a.createElement("br",null),r.a.createElement("span",null,this.epochToDay(this.props.fifthNextDay.day))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,cityName:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.weatherData!==this.props.weatherData&&this.setState({data:this.props.weatherData,city:this.props.cityName})}},{key:"render",value:function(){if(null!==this.state.data){console.log(this.state.city);var e=this.state.data.daily.data;return r.a.createElement("div",null,r.a.createElement("h2",{style:{margin:"20px auto 0",textAlign:"center",textTransform:"capitalize"}},this.props.cityName),r.a.createElement(x,{currentTemp:Math.floor(this.state.data.currently.temperature),maxTemp:Math.floor(this.state.data.daily.data[0].temperatureHigh),minTemp:Math.floor(this.state.data.daily.data[0].temperatureLow),summary:this.state.data.currently.summary}),r.a.createElement(j,{wind:this.state.data.currently.windSpeed,humidity:Math.floor(100*this.state.data.currently.humidity)+"%",uvindex:this.state.data.currently.uvIndex}),r.a.createElement(N,{firstNextDay:{day:this.state.data.daily.data[1].time,max:e[1].temperatureHigh,min:e[1].temperatureLow},secondNextDay:{day:this.state.data.daily.data[2].time,max:e[2].temperatureHigh,min:e[2].temperatureLow},thirdNextDay:{day:this.state.data.daily.data[3].time,max:e[3].temperatureHigh,min:e[3].temperatureLow},fourthNextDay:{day:this.state.data.daily.data[4].time,max:e[4].temperatureHigh,min:e[4].temperatureLow},fifthNextDay:{day:this.state.data.daily.data[5].time,max:e[5].temperatureHigh,min:e[5].temperatureLow}}))}return r.a.createElement("div",null)}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setStateFunc=function(e){fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/daa05a8769cd76b841d05acdc43f09cf/".concat(e.coords.y,",").concat(e.coords.x,"?units=ca")).then((function(e){return e.json()})).then((function(t){return a.setState({fetchedData:t,city:e.city})})),setTimeout((function(){console.log(a.state)}),2e3)},a.state={fetchedData:null,city:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(v,Object.assign({},t,{dataFromSearch:e.setStateFunc}))}}),r.a.createElement(b.a,{path:"/weather",render:function(t){return r.a.createElement(O,Object.assign({},t,{weatherData:e.state.fetchedData,cityName:e.state.city}))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ddb1a47c.chunk.js.map