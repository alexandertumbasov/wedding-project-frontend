import React, { useState } from 'react';

import Main from '../main/main.component';
import flowersConfig from '../__mocks__/flowers-config';
import Modal from '../modal/modal.component';

const App = () => {
  const [isInviteModalDisplayed, setIsInvitedModalDisplayed] = useState<boolean>(false);
  const [guestStatus, setGuestStatus] = useState<'good' | 'bad'>();

  const openGoodModal = () => {
    setIsInvitedModalDisplayed(true);
    setGuestStatus('good');
  };
  const openBadModal = () => {
    setIsInvitedModalDisplayed(true);
    setGuestStatus('bad');
  };

  const closeModal = () => {
    setGuestStatus(undefined);
    setIsInvitedModalDisplayed(false);
  };

  console.log(isInviteModalDisplayed);
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
      {isInviteModalDisplayed && <Modal isOpen={isInviteModalDisplayed} closeModal={closeModal} />}
    </div>
  );
};
export default App;
