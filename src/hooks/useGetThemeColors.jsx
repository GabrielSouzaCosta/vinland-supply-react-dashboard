import { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { colors as lightThemeColors, darkThemeColors } from "../styles/common/theme";

export default function() {
    const { theme } = useStateContext();
    const [ colors, setColors ] = useState(darkThemeColors);

    useEffect(() => {
        if (theme) {
            setColors(theme === 'dark' ? darkThemeColors : lightThemeColors);
        }
    }, [theme])

    return colors;
 }