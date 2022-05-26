import React from 'react';

import Main from '../main/main.component';
import flowersConfig from '../__mocks__/flowers-config';

const App = () => {
  return (
    <div>
      <Main
        config={flowersConfig}
        content={{
          date: '08 . 09 . 22',
          message: 'Приглашение на свадьбу',
          title: 'Alexandra & Alexander',
          address: 'Набережная ул, 21, | Московская область',
        }}
      />
    </div>
  );
};
export default App;
