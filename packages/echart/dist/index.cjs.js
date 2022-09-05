/** @vue-chart/echart
 *
 * @author halo951(https://github.com/halo951)
 * @license MIT
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=require("echarts");const r=new class{pool=[];push(e){this.pool.push(e),this.execute()}lock=!1;execute(){if(!this.lock){for(;this.pool.length>0;)try{const e=this.pool.pop();requestAnimationFrame(e)}catch(e){console.error(e)}this.lock=!1}}},n={firstRenderSleep:0,clear:!1,renderer:(()=>{const e=navigator.userAgent.toLowerCase();return/mobile/.test(e)?"svg":"canvas"})()},o=e.defineComponent({name:"Chart",props:{options:{type:Object,default:()=>({})},firstRenderSleep:{type:Number,default:()=>n.firstRenderSleep},clear:{type:Boolean,default:()=>n.clear},renderer:{type:String,default:()=>n.renderer}},setup(n,{}){const o=e.ref(null),i=e.ref(0),s=e.ref(),l=async()=>{var e;o.value&&(i.value>Date.now()&&await(e=i.value-Date.now(),new Promise((t=>setTimeout((()=>t()),e)))),r.push((()=>o.value?.setOption(n.options??{}))))},a=e=>{e.position||(e.confine=!0,e.position=function(e,t,r){if(r instanceof HTMLElement){if(r.getBoundingClientRect().left<0)return"right";if(r.getBoundingClientRect().right>window.innerWidth-r.clientWidth)return"left"}return"inside"})},u=()=>{o.value?.resize()};return e.watch(e.ref(n.options),(()=>(()=>{if(!o.value)return;n.clear&&o.value.clear();const{tooltip:e}=n.options;if(e)if(e instanceof Array)for(const t of e)a(t);else a(e);l()})())),e.onMounted((()=>{i.value=n.firstRenderSleep+Date.now(),o.value=t.init(s.value,"default",{renderer:n.renderer}),n.options&&l(),window.addEventListener("resize",u)})),e.onBeforeUnmount((()=>{o.value&&!o.value.isDisposed()&&(o.value.dispose(),window.removeEventListener("resize",u))})),{el:s}},render:()=>e.h("div",{ref:"el",class:"chart"})});exports.Chart=o,exports.setClear=e=>{n.clear=e},exports.setFirstRenderSleep=e=>{n.firstRenderSleep=e},exports.setRenderer=e=>{n.renderer=e};