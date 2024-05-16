import { useContext } from "react"
import { Text as RNText, StyleProp, TextStyle } from "react-native"
import { ThemeContext } from "../../context/themeContext"
import { ITheme, theme } from "../../theme"


interface TextProps extends React.ComponentProps<typeof RNText> {
    variant?: keyof typeof theme.textVariants
    color?: keyof typeof theme.colors
  }
const Text = ({ style, variant, color, ...rest }) => {
    const theme = useContext(ThemeContext) as ITheme

    return (
        <RNText
            style={{
                color: theme.colors[color],
                ...theme.textVariants[variant],
                ...style,
            }}
            {...rest}
        />
    )
}

export default Text