import { useState } from 'react';
import Background from './components/Background/Background';

const App = () => {
  let heroData = [
    { text1: 'Dive into', text2: 'what you love' },
    { text1: 'Induldge', text2: 'your passions' },
    { text1: 'Give in to', text2: 'your passion' },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App;
