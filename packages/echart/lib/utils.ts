/** 延时函数 */
export const delay = (time: number): Promise<void> => new Promise<void>((resolve) => setTimeout(() => resolve(), time))

/** raf 队列指定工具
 *
 * @description 避免多次注册 raf 函数导致的卡顿问题
 */
class QueueRequestAnimationFrame {
    private pool: Array<any> = []

    push(task: Function): void {
        // 加入队列
        this.pool.push(task)
        this.execute()
    }

    private lock: boolean = false

    private execute(): void {
        if (this.lock) return
        while (this.pool.length > 0) {
            try {
                const t = this.pool.pop()
                requestAnimationFrame(t)
            } catch (error) {
                console.error(error)
            }
        }
        this.lock = false
    }
}

/** request animation frame queue task
 *
 * @description handle
 */
export const qraf = new QueueRequestAnimationFrame()
