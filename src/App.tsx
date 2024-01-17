import { ThemeProvider } from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import LandingPage from './component/LandingPage';
import Layout from './component/common/Layout';
import { theme } from './utils/muiThemeConfig';
// import { getData, uploadData } from './api/firestore';

function App() {
  useEffect(() => {
    // uploadData();
    // getData();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <LandingPage></LandingPage>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
