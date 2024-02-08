import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'mapbox-gl/dist/mapbox-gl.css';
import Layout from './component/common/Layout';
import LandingPage from './component/home/LandingPage';
import { theme } from './utils/muiThemeConfig';

const queryClient = new QueryClient();

function App() {
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
