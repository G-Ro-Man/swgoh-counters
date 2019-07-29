(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(69)},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),i=(a(42),a(43),a(8)),u=a(9),s=a(11),l=a(10),m=a(12),d=a(34),p=a(13),h=a(71),f=a(72),b=(a(44),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MyNavbar"},r.a.createElement(h.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(f.a,null,"SWGOH Counters")))}}]),t}(r.a.Component)),g=a(21),v=(a(47),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).buildHardCounters=function(){return a.props.counterTeams.filter(function(e){return!0===e.isHardCounter}).map(function(e){return r.a.createElement("div",{key:e.counterId,className:"countersRow counterCard"},r.a.createElement("img",{className:"toonImg",src:e.oppLeaderImage,title:e.counterTeamName,alt:e.counterTeamName}))})},a.buildSoftCounters=function(){return a.props.counterTeams.filter(function(e){return!1===e.isHardCounter}).map(function(e){return r.a.createElement("div",{key:e.counterId,className:"countersRow counterCard"},r.a.createElement("img",{className:"toonImg",src:e.oppLeaderImage,title:e.counterTeamName,alt:e.counterTeamName}))})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;if(this.props.teamWithCharData){var t=this.props.teamWithCharData;e=r.a.createElement("div",{className:"CounterRow"},r.a.createElement("div",{className:"countersRow col-2 justify-content-center border-dark border-bottom"},r.a.createElement("div",{className:"opponentCard"},r.a.createElement("img",{className:"toonImg",src:t.leaderImage,title:t.name,alt:t.name}),r.a.createElement("h6",{className:"teamName"},t.name))),r.a.createElement("div",{className:"countersRow col-5 border-dark border-bottom border-left border-right"},this.buildHardCounters()),r.a.createElement("div",{className:"countersRow col-5 border-dark border-bottom"},this.buildSoftCounters()))}else e=null;return r.a.createElement("div",null,e)}}]),t}(r.a.Component)),N=a(14),T=a.n(N),w={getTeams:function(){return new Promise(function(e,t){T.a.get("https://api.sheety.co/a710e43e-2721-45bb-b722-dafafea5b152").then(function(t){e(t.data)}).catch(function(e){return t(e)})})}},E={getCounters:function(){return new Promise(function(e,t){T.a.get("https://api.sheety.co/e505ae20-ec5b-46e8-a86f-7149b9823b64").then(function(t){e(t.data)}).catch(function(e){return t(e)})})}},C={getAllCharacters:function(){return new Promise(function(e,t){T.a.get("https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/characters/").then(function(t){var a=t.data.map(function(e){var t=e;return delete t.ability_classes,delete t.activate_shard_count,delete t.alignment,delete t.categories,delete t.combat_type,delete t.description,delete t.gear_levels,delete t.pk,delete t.power,delete t.role,delete t.ship,delete t.ship_slot,delete t.url,t});e(a)}).catch(function(e){return t(e)})})},getCharactersBySquad:function(e,t,a,n,r){return new Promise(function(o,c){T.a.get("https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/characters/").then(function(c){var i=c.data,u=[],s=i.filter(function(t){return t.name===e})[0],l=i.filter(function(e){return e.name===t})[0],m=i.filter(function(e){return e.name===a})[0],d=i.filter(function(e){return e.name===n})[0],p=i.filter(function(e){return e.name===r})[0];u.push(s,l,m,d,p);var h=u.map(function(e){var t=e;return t&&(delete t.ability_classes,delete t.activate_shard_count,delete t.alignment,delete t.categories,delete t.combat_type,delete t.description,delete t.gear_levels,delete t.pk,delete t.power,delete t.role,delete t.ship,delete t.ship_slot,delete t.url),t});o(h)}).catch(function(e){return c(e)})})}},I=(a(65),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[],counters:[],teams:[]},a.buildMatchup=function(e){if(!e)return"";var t=a.state.teams,n=Object(g.a)({},e);return t.map(function(e){return e.id!==n.counterTeam?"":(n.oppLeaderName=e.leaderName,n.oppToon2Name=e.toon2Name,n.oppToon3Name=e.toon3Name,n.oppToon4Name=e.toon4Name,n.oppToon5Name=e.toon5Name,n.counterTeamName=e.name,"")}),a.buildTeam(n)},a.buildTeam=function(e){var t=a.state.characters,n=Object(g.a)({},e);return t.map(function(t){var a="https://swgoh.gg".concat(t.image);return t.name===e.oppLeaderName?(n.oppLeaderId=t.base_id,n.oppLeaderImage=a):t.name===e.oppToon2Name?(n.oppToon2Id=t.base_id,n.oppToon2Image=a):t.name===e.oppToon3Name?(n.oppToon3Id=t.base_id,n.oppToon3Image=a):t.name===e.oppToon4Name?(n.oppToon4Id=t.base_id,n.oppToon4Image=a):t.name===e.oppToon5Name?(n.oppToon5Id=t.base_id,n.oppToon5Image=a):t.name===e.leaderName?(n.leaderId=t.base_id,n.leaderImage=a):t.name===e.toon2Name?(n.toon2Id=t.base_id,n.toon2Image=a):t.name===e.toon3Name?(n.toon3Id=t.base_id,n.toon3Image=a):t.name===e.toon4Name?(n.toon4Id=t.base_id,n.toon4Image=a):t.name===e.toon5Name&&(n.toon5Id=t.base_id,n.toon5Image=a),""}),n},a.getCharacters=function(){C.getAllCharacters().then(function(e){return a.setState({characters:e})}).catch(function(e){return console.error(e)})},a.getCounters=function(){E.getCounters().then(function(e){return a.setState({counters:e})}).catch(function(e){return console.error(e)})},a.getTeams=function(){w.getTeams().then(function(e){return a.setState({teams:e})}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getCharacters(),this.getTeams(),this.getCounters()}},{key:"render",value:function(){var e=this,t=this.state,a=t.counters,n=t.teams.map(function(t){var n=a.filter(function(e){return e.opponentTeam===t.id});if(n.length>0){var o=[];n.map(function(t){var a=e.buildMatchup(t);return o.push(a)});var c=e.buildTeam(t);return r.a.createElement(v,{counterTeams:o,key:t.id,teamWithCharData:c})}return""});return r.a.createElement("div",{className:"Counters5v5"},r.a.createElement("div",{className:"columnTitles"},r.a.createElement("h1",{className:"col-2"},"Team"),r.a.createElement("h1",{className:"col-5"},"Hard Counter"),r.a.createElement("h1",{className:"col-5"},"Soft Counter")),r.a.createElement("div",{className:"columnTeams"},n))}}]),t}(r.a.Component)),y=(a(66),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(p.c,null,r.a.createElement(I,{path:"/swgoh-counters"}),r.a.createElement(p.a,{from:"*",to:"/swgoh-counters"}))))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.23491d2c.chunk.js.map