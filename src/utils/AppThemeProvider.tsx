// utils/AppThemeProvider.tsx
'use client';

import { useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

interface AppThemeProviderProps {
  attribute: string;
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  attribute,
  children,
}) => {
  const theme = useSelector((state: RootState) => state.theme.value);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute(attribute, theme);
    }
  }, [theme, attribute]);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === 'dark' ? 'dark' : 'light',
        },
      }),
    [theme],
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
