"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96295],{69909:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-9f418ab4",path:"/devices/DIYRuZ_RT.html",title:"DIYRuZ DIYRuZ_RT control via MQTT",lang:"en-US",frontmatter:{title:"DIYRuZ DIYRuZ_RT control via MQTT",description:"Integrate your DIYRuZ DIYRuZ_RT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-06-27T13:26:08.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DIYRuZ_RT.md",git:{updatedTime:1640514826e3}}},13736:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var o=i(66252);const a=(0,o._)("h1",{id:"diyruz-diyruz-rt",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#diyruz-diyruz-rt","aria-hidden":"true"},"#"),(0,o.Uk)(" DIYRuZ DIYRuZ_RT")],-1),r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"DIYRuZ_RT")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Vendor"),(0,o._)("td",null,"DIYRuZ")],-1),d=(0,o._)("td",null,"Description",-1),n={href:"https://habr.com/ru/company/iobroker/blog/495926/",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("DiY CC2530 Zigbee 3.0 firmware"),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), temperature, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_RT.jpg",alt:"DIYRuZ DIYRuZ_RT"})])],-1),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),m=(0,o.Uk)("How to use device type specific configuration"),_=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),f={},b=(0,i(83744).Z)(f,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),f=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("table",null,[r,(0,o._)("tbody",null,[u,l,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o._)("a",n,[c,(0,o.Wm)(i)])])]),s,h])]),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(f,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[m])),_:1})])]),_],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);