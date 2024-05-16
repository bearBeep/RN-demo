/** 根据屏幕尺寸获取断点 */
const getBreakpointForScreenSize = ({ theme, dimensions }): any => {
    const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
        (valA: any, valB: any) => {
            return valA[1] - valB[1]
        }
    )

    return sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
        if (dimensions.width >= minWidth) return breakpoint
        return acc
    }, null)
}

/** 获取响应式的值 */
const getResponsiveValue = ({ value, dimensions, theme }) => {
    if (typeof value === 'object') {
        return value[getBreakpointForScreenSize({ theme, dimensions })]
    }
    return value
}


export {
    getBreakpointForScreenSize,
    getResponsiveValue
}