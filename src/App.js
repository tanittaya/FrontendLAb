import React from 'react';

import Navbar from './Feature/Navbar';
import Container from './Feature/Container';
import Home from './Feature/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;