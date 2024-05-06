import './Homepage.css';
import {Box, Button, Modal, Typography} from "@mui/material";
import Review from "./components/Review.jsx";
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Homepage() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(false);
    const handleClose = () => setOpen(true);

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-container'>
                    <div className='header-container__block-main'>
                        <img src="/../public/image-in-main-page.png" alt="#"/>
                        <h1>Добро пожаловать <br/> в <span className='highlight'> Cokteil</span></h1>

                        <p>Экономики Ваше время !<br/> Предлагаем лучшие цены ! <br/> Доствляем в кратчайшие сроки !
                        </p>
                    </div>
                    <div>
                        <img src="/../public/image-inmain-page-2.png" alt=""/>
                    </div>
                </div>
                <div className='block-button-in-catalog'>
                    <Button variant='contained'
                            color='secondary'
                            onClick={handleOpen}
                    >
                        <a href="">
                            Каталог
                        </a>
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                            sx={style}
                        >
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div>
                    <Review/>
                </div>
            </div>
        </div>
    )
}