import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  p: 4,
  top: '50%',
  width: 400,
  left: '50%',
  boxShadow: 24,
  border: '2px solid #000',
  bgcolor: 'background.paper',
  position: 'absolute' as 'absolute',
  transform: 'translate(-50%, -50%)',
};

interface IModalProps {
  title: string;
  isOpen: boolean;
  description: any;
  onClose: () => void;
}

export const ModalDialog: React.FC<IModalProps> = ({
  title,
  isOpen,
  onClose,
  description,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Box id="modal-modal-description" sx={{mt: 2}}>
          {description}
        </Box>
      </Box>
    </Modal>
  );
};
