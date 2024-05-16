import { useContext } from "react"
import { getResponsiveValue } from "../utils"
import { Dimensions, StyleProp, View, ViewProps, ViewStyle } from "react-native"
import { ThemeContext } from "../../context/themeContext"
import { ITheme, theme } from "../../theme"

interface BoxProps extends React.ComponentProps<typeof View> {
    padding?: keyof typeof theme.spacing
    margin?: keyof typeof theme.spacing
    backgroundColor?: keyof typeof theme.colors
}
const Box = ({ style, padding, margin, backgroundColor, ...rest }) => {
    const theme = useContext(ThemeContext) as ITheme
    const dimensions = Dimensions.get('window')

    return (
        <View
            style={{
                margin:
                    theme.spacing[getResponsiveValue({ value: margin, dimensions, theme })],
                padding:
                    theme.spacing[
                    getResponsiveValue({ value: padding, dimensions, theme })
                    ],
                backgroundColor:
                    theme.colors[
                    getResponsiveValue({ value: backgroundColor, dimensions, theme })
                    ],
                ...style 
            }}
            {...rest}
        />
    )
}


export default Box