import { createRoot } from 'react-dom/client';

import AppContainer from './src';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<AppContainer />);
