import React from 'react';
import Layout from './components/layout';
import MainView from './components/mainview';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Layout>
      <NavBar/>
      <MainView/>
      <Footer/>
    </Layout>
  );
}

export default App;
