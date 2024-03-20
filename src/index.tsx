import ReactDOM from 'react-dom/client';
import App from './app';
import './index.scss';

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
