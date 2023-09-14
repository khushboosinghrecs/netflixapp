import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import { Provider } from 'react-redux';
import appStore from './utills/appStore';

function App() {
  return (
    <Provider store={appStore}>
   <Body />
   </Provider>
  );
}

export default App;
