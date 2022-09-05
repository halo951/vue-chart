/** @vue-chart/echart
 *
 * @author halo951(https://github.com/halo951)
 * @license MIT
 */
import{defineComponent as e,ref as t,watch as r,onMounted as n,onBeforeUnmount as o,h as i}from"vue";import{init as s}from"echarts";const l=new class{pool=[];push(e){this.pool.push(e),this.execute()}lock=!1;execute(){if(!this.lock){for(;this.pool.length>0;)try{const e=this.pool.pop();requestAnimationFrame(e)}catch(e){console.error(e)}this.lock=!1}}},a={firstRenderSleep:0,clear:!1,renderer:(()=>{const e=navigator.userAgent.toLowerCase();return/mobile/.test(e)?"svg":"canvas"})()},u=e=>{a.firstRenderSleep=e},p=e=>{a.clear=e},c=e=>{a.renderer=e},d=e({name:"Chart",props:{options:{type:Object,default:()=>({})},firstRenderSleep:{type:Number,default:()=>a.firstRenderSleep},clear:{type:Boolean,default:()=>a.clear},renderer:{type:String,default:()=>a.renderer}},setup(e,{}){const i=t(null),a=t(0),u=t(),p=async()=>{var t;i.value&&(a.value>Date.now()&&await(t=a.value-Date.now(),new Promise((e=>setTimeout((()=>e()),t)))),l.push((()=>i.value?.setOption(e.options??{}))))},c=e=>{e.position||(e.confine=!0,e.position=function(e,t,r){if(r instanceof HTMLElement){if(r.getBoundingClientRect().left<0)return"right";if(r.getBoundingClientRect().right>window.innerWidth-r.clientWidth)return"left"}return"inside"})},d=()=>{i.value?.resize()};return r(t(e.options),(()=>(()=>{if(!i.value)return;e.clear&&i.value.clear();const{tooltip:t}=e.options;if(t)if(t instanceof Array)for(const e of t)c(e);else c(t);p()})())),n((()=>{a.value=e.firstRenderSleep+Date.now(),i.value=s(u.value,"default",{renderer:e.renderer}),e.options&&p(),window.addEventListener("resize",d)})),o((()=>{i.value&&!i.value.isDisposed()&&(i.value.dispose(),window.removeEventListener("resize",d))})),{el:u}},render:()=>i("div",{ref:"el",class:"chart"})});export{d as Chart,p as setClear,u as setFirstRenderSleep,c as setRenderer};
