"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28937],{44845:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-108b4918",path:"/devices/3460-L.html",title:"Iris 3460-L control via MQTT",lang:"en-US",frontmatter:{title:"Iris 3460-L control via MQTT",description:"Integrate your Iris 3460-L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-04-08T17:49:06.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/3460-L.md",git:{updatedTime:1640514826e3}}},75634:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(66252);const r=(0,a.uE)('<h1 id="iris-3460-l" tabindex="-1"><a class="header-anchor" href="#iris-3460-l" aria-hidden="true">#</a> Iris 3460-L</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>3460-L</td></tr><tr><td>Vendor</td><td>Iris</td></tr><tr><td>Description</td><td>Smart button</td></tr><tr><td>Exposes</td><td>battery, temperature, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/3460-L.jpg" alt="Iris 3460-L"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),o=(0,a.Uk)("How to use device type specific configuration"),d=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),n={},c=(0,i(83744).Z)(n,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);