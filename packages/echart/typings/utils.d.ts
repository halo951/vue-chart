/** 延时函数 */
export declare const delay: (time: number) => Promise<void>;
/** raf 队列指定工具
 *
 * @description 避免多次注册 raf 函数导致的卡顿问题
 */
declare class QueueRequestAnimationFrame {
    private pool;
    push(task: Function): void;
    private lock;
    private execute;
}
/** request animation frame queue task
 *
 * @description handle
 */
export declare const qraf: QueueRequestAnimationFrame;
export {};
