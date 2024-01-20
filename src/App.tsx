import { ThemeProvider } from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './component/LandingPage';
import Layout from './component/common/Layout';
import { theme } from './utils/muiThemeConfig';
// import { uploadAllData } from './api/firestore';
// import { getData, uploadData } from './api/firestore';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // uploadAllData();
    // uploadData('cakeData');
    // uploadData('douhuaData');
    // uploadData('iceData');
    // getData();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <LandingPage></LandingPage>
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
