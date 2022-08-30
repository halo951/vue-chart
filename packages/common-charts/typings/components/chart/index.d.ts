import { PropType } from 'vue-demi';
import { ECharts, EChartsOption } from 'echarts';
export interface IChartData {
    chart: ECharts | null;
    sleep: number;
}
export interface IDefaultOptions {
    /** 首次渲染休眠时间
     *
     * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
     */
    firstRenderSleep: number;
    /** 指定每次更新 options 后, 是否清除老数据
     *
     * @description 用来解决解决动画冲突问题
     */
    clear: boolean;
    /** 渲染方式
     *
     * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
     * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
     */
    renderer: 'canvas' | 'svg';
}
/** 默认参数 */
export declare const DEFAULT_OPTIONS: IDefaultOptions;
export declare const Chart: import("vue-demi").DefineComponent<{
    /** 创建echarts图表参数 */
    options: {
        type: PropType<EChartsOption>;
        default: () => {};
    };
    /** 首次渲染休眠时间
     *
     * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
     */
    firstRenderSleep: {
        type: NumberConstructor;
        default: () => number;
    };
    /** 指定每次更新 options 后, 是否清除老数据
     *
     * @description 用来解决解决动画冲突问题
     */
    clear: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** 渲染方式
     *
     * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
     * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
     */
    renderer: {
        type: PropType<"canvas" | "svg">;
        default: () => "canvas" | "svg";
    };
}, {
    el: import("vue-demi").Ref<HTMLDivElement | undefined>;
}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    /** 创建echarts图表参数 */
    options: {
        type: PropType<EChartsOption>;
        default: () => {};
    };
    /** 首次渲染休眠时间
     *
     * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
     */
    firstRenderSleep: {
        type: NumberConstructor;
        default: () => number;
    };
    /** 指定每次更新 options 后, 是否清除老数据
     *
     * @description 用来解决解决动画冲突问题
     */
    clear: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    /** 渲染方式
     *
     * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
     * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
     */
    renderer: {
        type: PropType<"canvas" | "svg">;
        default: () => "canvas" | "svg";
    };
}>>, {
    options: EChartsOption;
    firstRenderSleep: number;
    clear: boolean;
    renderer: "canvas" | "svg";
}>;
