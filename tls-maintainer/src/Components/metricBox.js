import { Box, ThemeProvider, createTheme } from '@mui/system';
import { useState, useEffect } from 'react';


export default function BoxComponent() {

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
      
  const [totalEntry, setTotalEntry] = useState ( [ "0 - No entries found" ]);

  useEffect(() => {
    fetchDataCount();
  }, []);
    
  function fetchDataCount() {
    fetch("/api/getAllCount")
      .then(res => res.json()) 
      .then(json => {
        setTotalEntry(json)
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
        <Box sx={{ color: 'text.secondary' }}>Total Certificates</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          {totalEntry}
        </Box>
      </Box>
    </ThemeProvider>
  );
}