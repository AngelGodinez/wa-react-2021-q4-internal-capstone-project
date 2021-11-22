import React, { useState, useEffect } from 'react';
import AppWrapper from './appStyles';
import HomePage from './homePage';
import ProductListPage from './productListPage';
import HeaderComponent from './header.component';
import FooterComponent from './footer.component';

function App() {
  const currentPathname = window.location.pathname;
  const [isLoading, setIsLoading] = useState(true);

  function handlerenderedPage () {
    if ( currentPathname === '/products' ) {
      return (<ProductListPage/>);
    }
    return (<HomePage/>);
  }

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  }, [currentPathname]);
  return (
    <AppWrapper>
      <HeaderComponent/>
      { isLoading ?
        <div>Is loading</div> :
        handlerenderedPage()
      }
      <FooterComponent/>
    </AppWrapper>
  );
}

export default App;
