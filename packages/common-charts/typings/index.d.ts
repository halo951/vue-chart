import { Chart } from './components/chart';
import { createPieChart } from './charts/create-pie';
/** 设置首次渲染休眠时间
 *
 * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
 */
declare const setFirstRenderSleep: (sleep: number) => void;
/** 指定每次更新 options 后, 是否清除老数据
 *
 * @description 用来解决解决动画冲突问题
 */
declare const setClear: (clear: boolean) => void;
/** 设置渲染方式
 *
 * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
 * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
 */
declare const setRenderer: (rendererType: 'canvas' | 'svg') => void;
export { Chart, setFirstRenderSleep, setClear, setRenderer, createPieChart };
