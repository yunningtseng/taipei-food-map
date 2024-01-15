import { useEffect } from 'react';
import LandingPage from './component/LandingPage';
import Layout from './component/common/Layout';
// import { getData, uploadData } from './api/firestore';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  useEffect(() => {
    // uploadData();
    // getData();
  }, []);

  return (
    <>
      <Layout>
        <LandingPage></LandingPage>
      </Layout>
    </>
  );
}

export default App;
