import React from 'react';
import './index.css';
import Button from '../button';
import Header from '../header';

function App() {
  return (
    <div className="App">
      <Header />
      <Button testID="sync-button" click={() => {}}>sync</Button>
    </div>
  );
}

export default App;
