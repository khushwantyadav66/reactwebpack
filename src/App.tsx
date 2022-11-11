import SearchResults from './Pages/SearchResults';
import MainHeader from './Shared/Components/Navigation/MainHeader';
import Footer from './Shared/Components/Navigation/Footer';

import ErrorBoundary from './Shared/Components/Generics/ErrorBoundary';
import React from 'react';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <MainHeader />
      </ErrorBoundary>
      <div className='custom-gap'></div>
      <SearchResults />
      <Footer />
    </>
  );
};

export default App;
