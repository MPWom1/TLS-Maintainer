import { Box, ThemeProvider, createTheme } from '@mui/system';
import { useState, useEffect } from 'react';


export default function BoxComponentOneEightyDays() {

  const theme = createTheme({
        palette: {
          background: {
            paper: '#fff',
          },
          text: {
            primary: '#173A5E',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          },
          success: {
            dark: '#009688',
          },
        },
  });
      
  const [expireOneEightyDays, setExpireOneEightyDays] = useState ( [ "0 - No entries found" ]);

  useEffect(() => {
    fetchExpiredOneEightyCount();
  }, []);
    
  function fetchExpiredOneEightyCount() {
    fetch("/api/getOneEightyDayExpires")
      .then(res => res.json()) 
      .then(json => {
        setExpireOneEightyDays(json)
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 16,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>{'> 180 Days'}</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          {expireOneEightyDays}
        </Box>
      </Box>
    </ThemeProvider>
  );
}