import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders Navbar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Vérifie qu’un bouton du Navbar est présent (ex: Accueil)
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
  });

  test('renders Home page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Vérifie que le titre du Home est présent
    expect(screen.getByText(/Un Voyage/i)).toBeInTheDocument();
  });

  test('renders Footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Vérifie la présence d’un texte ou élément dans Footer
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});
