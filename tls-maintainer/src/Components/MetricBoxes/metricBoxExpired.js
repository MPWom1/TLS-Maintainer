import { Box, ThemeProvider, createTheme } from '@mui/system';
import { useState, useEffect } from 'react';


export default function BoxComponentExpired() {

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
      
  const [totalExpired, setTotalExpired] = useState ( [ "0 - No entries found" ]);

  useEffect(() => {
    fetchExpiredCount();
  }, []);
    
  function fetchExpiredCount() {
    fetch("/api/getAllExpired")
      .then(res => res.json()) 
      .then(json => {
        setTotalExpired(json)
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
        <Box sx={{ color: 'text.secondary' }}>Expired</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          {totalExpired}
        </Box>
      </Box>
    </ThemeProvider>
  );
}