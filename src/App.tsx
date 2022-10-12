import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from 'components/style';
import { RoutesRenderer } from 'components/route';
import 'App.scss';

function App() {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <GlobalStyles />
        <RoutesRenderer />
      </Router>
    </Suspense>
  );
}

export default App;
