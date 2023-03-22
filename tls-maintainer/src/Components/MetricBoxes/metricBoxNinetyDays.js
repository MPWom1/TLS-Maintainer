import { Box, ThemeProvider, createTheme } from '@mui/system';
import { useState, useEffect } from 'react';


export default function BoxComponentNinetyDays() {

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
      
  const [expireNinetyDays, setExpireNinetyDays] = useState ( [ "0 - No entries found" ]);

  useEffect(() => {
    fetchExpiredNinetyCount();
  }, []);
    
  function fetchExpiredNinetyCount() {
    fetch("/api/getNinetyDayExpires")
      .then(res => res.json()) 
      .then(json => {
        setExpireNinetyDays(json)
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
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>{'> 90 Days'}</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          {expireNinetyDays}
        </Box>
      </Box>
    </ThemeProvider>
  );
}