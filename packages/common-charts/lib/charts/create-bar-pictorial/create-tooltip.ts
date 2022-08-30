import { createPictorialFormatter } from '../create-tooltip-formatter'

export const createTooltip = (unit: string, label: string) => {
    const opt = createPictorialFormatter(unit, label)
    return opt
}
