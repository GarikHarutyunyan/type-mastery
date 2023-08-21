import { useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer'
import Modal from './Modal';

export const TimeBar = ({hasStopped, textLength}: any) => {
  const {seconds} = useTimer(hasStopped);
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
    if (hasStopped === true) {
      handleOpenModal();
    }
    console.log(hasStopped)
  }, [WPM, hasStopped]);

  return (
    <div>
      {hasStopped && 
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2>{WPM} WPM</h2>
      </Modal>}
      <h1>{seconds}</h1>
    </div>
  )
}
