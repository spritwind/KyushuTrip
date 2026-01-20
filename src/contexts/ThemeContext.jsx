import { createContext, useContext, useMemo } from 'react';
import { getThemeByDay, getThemeClasses } from '@config/dayThemes';

// 創建主題 Context
const ThemeContext = createContext(null);

// 主題提供者組件
export function ThemeProvider({ children, activeDayId }) {
  const theme = useMemo(() => {
    const dayTheme = getThemeByDay(activeDayId);
    const themeClasses = getThemeClasses(activeDayId);

    return {
      ...dayTheme,
      classes: themeClasses,
      dayId: activeDayId
    };
  }, [activeDayId]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// 自定義 Hook 以便組件使用主題
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
