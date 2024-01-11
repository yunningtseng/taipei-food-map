import { useEffect } from 'react';
import Layout from './component/common/Layout';
import LandingPage from './component/LandingPage';
// import { getData, uploadData } from './api/firestore';

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
