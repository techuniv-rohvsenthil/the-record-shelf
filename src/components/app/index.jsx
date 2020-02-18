import React from 'react';
import './index.css';
import Button from '../button';

function App() {
  return (
    <div className="App">
      <Button testID="sync-button" click={() => {}}>sync</Button>
    </div>
  );
}

export default App;
