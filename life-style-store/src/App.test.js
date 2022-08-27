// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import {render} from '@testing-library/react';
import App from './App';
import {Router} from 'react-router-dom';

import {createMemoryHistory} from 'history';

test('renders react component', async () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />,
    </Router>,
  );

  // 👇️ your tests...
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();
});

