import LoadingPage from 'components/common/loading-page/Loading';
import React from 'react';
import './App.css';

const AppRouter = React.lazy(() => import('./routers/AppRouter'));

function App() {

  return (
    <div className="App">
      <React.Suspense fallback={<LoadingPage />}>
        <AppRouter />
      </React.Suspense>
    </div>
  );

}

export default App;
