import React, { useState } from 'react';

import Main from '../main/main.component';
import flowersConfig from '../__mocks__/flowers-config';

const App = () => {
  const [isInviteModalDisplayed, setIsInvitedModalDisplayed] = useState<'good' | 'bad'>();

  const openGoodModal = () => setIsInvitedModalDisplayed('good');
  const openBadModal = () => setIsInvitedModalDisplayed('bad');

  return (
    <div>
      <Main
        config={flowersConfig}
        content={{
          date: '08  09  22',
          message: 'Приглашение на свадьбу',
          title: 'Alexandra & Alexander',
          address: 'Набережная ул, 21 | Московская область',
        }}
        goodButtonCallback={openGoodModal}
        badButtonCallback={openBadModal}
      />
    </div>
  );
};
export default App;
