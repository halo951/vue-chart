import { EChartsOption, PolarComponentOption } from 'echarts';
export interface IProcessSerieOptions {
    /** 当前值 */
    val: number;
    /** 最大值, 即进度环终点数值 */
    max: number;
    /** (非必填) 标题 & tooltip 提示描述 */
    title?: string;
    /** (非必填) 极值检查
     *
     * @description 启用状态下, 当 `val` > `max` 时, 进度条不再增加
     * @default {true} 默认启用
     */
    skipMaxCheck?: boolean;
    /** 圆心位置 及 大小 */
    polar?: Pick<PolarComponentOption, 'center'> & {
        /** 圆心坐标 */
        center?: Array<string | number>;
        /** @params {number} radius 由于背景图宽度固定的原因, 这里 半径(r) 只能传入 number */
        radius?: number;
    };
    /** 背景图 */
    background?: HTMLImageElement;
}
/** 创建圆环进度图 (custom serie)
 *
 * @description Tip: 不要禁用动画, 禁用后会导致背景图需要hover触发后才显示
 * @param {IProcessSerieOptions} options
 * @returns EChartsOption
 */
declare const _default: (options: IProcessSerieOptions) => EChartsOption;
export default _default;
