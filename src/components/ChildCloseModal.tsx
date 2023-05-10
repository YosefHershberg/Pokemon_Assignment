import { Box, Button, Modal } from '@mui/material';

function ChildCloseModal({ open, setOpen, closeModal }: any) {

    const handleCloseAll = () => {
        closeModal()
        setOpen(false)
    }

    return (
        <Modal
            open={open}
            onClose={(() => setOpen(false))}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">Are you sure</h2>
                <p id="child-modal-description">
                    We're asking because you've edited the name or the nick name
                </p>
                <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em'}}>
                    <Button onClick={() => setOpen(false)} variant="contained">Go back</Button>
                    <Button onClick={handleCloseAll}>Yes, Cancel</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default ChildCloseModal

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'text.primary',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};