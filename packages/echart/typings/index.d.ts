import { PropType } from 'vue';
import { ECharts, EChartsOption } from 'echarts';
/** 继承 EChartsOptions
 *
 * @description 修复组合式api Ref<Unwrap<T>> 解包 EChartsOptions `graphic` 类型冲突导致的类型推断不一致问题
 */
export interface EChartsOptionProp extends EChartsOption {
    graphic?: any;
    options?: EChartsOptionProp[];
    baseOption?: EChartsOptionProp;
}
export interface IChartData {
    chart: ECharts | null;
    sleep: number;
}
/** 设置首次渲染休眠时间
 *
 * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
 */
export declare const setFirstRenderSleep: (sleep: number) => void;
/** 指定每次更新 options 后, 是否清除老数据
 *
 * @description 用来解决解决动画冲突问题
 */
export declare const setClear: (clear: boolean) => void;
/** 设置渲染方式
 *
 * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
 * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
 */
export declare const setRenderer: (rendererType: 'canvas' | 'svg') => void;
export declare const Chart: import("vue").DefineComponent<{
    /** 创建echarts图表参数 */
    options: {
        type: PropType<EChartsOptionProp>;
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
    el: import("vue").Ref<HTMLDivElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 创建echarts图表参数 */
    options: {
        type: PropType<EChartsOptionProp>;
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
    options: EChartsOptionProp;
    firstRenderSleep: number;
    clear: boolean;
    renderer: "canvas" | "svg";
}>;
