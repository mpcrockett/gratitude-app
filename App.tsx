import Main from './Main'
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
    
  )
}

export default App