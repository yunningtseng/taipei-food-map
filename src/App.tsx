import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import Layout from './component/common/Layout';
import LandingPage from './component/home/LandingPage';
import { theme } from './utils/muiThemeConfig';
// import { transformMRTData } from './utils/transformMRTData';
// import { uploadAllData } from './api/firestore';
// import { getData, uploadData } from './api/firestore';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // transformMRTData();
    // uploadAllData();
    // uploadData('cakeData');
    // uploadData('douhuaData');
    // uploadData('iceData');
    // getData();
  }, []);

  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <ThemeProvider theme={theme}>
          <Layout>
            <LandingPage />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
