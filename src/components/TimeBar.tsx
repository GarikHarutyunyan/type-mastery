import { useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer'
import Modal from './Modal';

export const TimeBar = ({isStopped, textLength}: any) => {
  const {seconds} = useTimer(isStopped);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const secToMin = seconds / 60;
  const WPM = (textLength / 5) / secToMin;

  useEffect(() => {
    if (isStopped === true) {
      handleOpenModal();
    }
  }, [WPM, isStopped]);

  return (
    <div>
      {isStopped && 
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2>{WPM} WPM</h2>
      </Modal>}
      <h1>{seconds}</h1>
    </div>
  )
}
