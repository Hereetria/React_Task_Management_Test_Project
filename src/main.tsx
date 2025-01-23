import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './context/task';

createRoot(document.getElementById('root')!).render(
    <Provider>
      <App />
    </Provider>

)
