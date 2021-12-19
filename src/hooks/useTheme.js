import { useContext } from 'react'
// import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useThemeManager } from '../stage/user/hooks/index';

const useTheme = () => {
  const [isDark, toggleTheme] = useThemeManager();
//   const theme = useContext(StyledThemeContext)
//   const theme = useContext(StyledThemeContext)
//   return { isDark, theme, toggleTheme }
  return { isDark, toggleTheme }
}

export default useTheme