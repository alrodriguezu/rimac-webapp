import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './core/store';
import AppRoutes from './screens/app.routes';
import MainLayout from 'layouts/main-layout/main-layout';
import './app.scss';

const App = () => (
  <div className="app">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <MainLayout maxWidthEnabled> */}
          <AppRoutes />
          {/* </MainLayout> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </div>
);

export default App;
