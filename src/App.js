import './App.css';
import AppLayout from './layouts/AppLayout';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return( 
    <Provider store={store}>
      <AppLayout/>
    </Provider>
  );
}

export default App;
