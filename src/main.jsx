import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#eef7f3', color: '#071F02', fontFamily: 'system-ui, sans-serif' }}>
          <section style={{ maxWidth: 720, background: '#fff', border: '1px solid #dce1db', padding: 32 }}>
            <p style={{ color: '#C89004', fontWeight: 800, letterSpacing: '.08em' }}>CONZAURA</p>
            <h1 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>The application could not render.</h1>
            <p style={{ color: '#596159' }}>Please open the browser console only if this message appears unexpectedly.</p>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', background: '#f5f6f3', padding: 16, fontSize: 12 }}>{String(this.state.error?.stack || this.state.error)}</pre>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById('root');
if (!root) throw new Error('Conzaura root element was not found.');

createRoot(root).render(
  <BrowserRouter basename="/website">
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </BrowserRouter>
);
