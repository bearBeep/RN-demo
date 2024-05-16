const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
};

export const theme: ITheme = {
    colors: {
        background: palette.white,
        foreground: palette.black,
        primary: palette.purple,
        success: palette.green,
        danger: palette.red,
        failure: palette.red,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        header: {
            fontFamily: 'Raleway',
            fontSize: 36,
            fontWeight: 'bold',
        },
        body: {
            fontFamily: 'Merriweather',
            fontSize: 16,
        },
    },
    breakpoints: {
        smallPhone: 0,
        phone: 321,
        tablet: 768,
    },
};

/** 主题色 */
export interface ITheme {
    /** 颜色配置 */
    colors: {
        primary: string;
        success: string;
        danger: string;
        failure: string;
        /** 背景色 */
        background: string,
        foreground: string,
    },
    spacing: {
        s: number,
        m: number,
        l: number,
        xl: number,
    },
    textVariants: {
        header: {
            fontFamily: string,
            fontSize: number,
            fontWeight: string,
        },
        body: {
            fontFamily: string,
            fontSize: number,
        },
    },
    breakpoints: {
        smallPhone: number,
        phone: number,
        tablet: number,
    },
}

export const darkTheme: ITheme = {
    ...theme,
    colors: {
        ...theme.colors,
        background: palette.black,
        foreground: palette.white,
    },
};