import { Alert, AlertTitle, Box, Collapse, Container, IconButton, TextField, Typography } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FormEvent, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { motion as m } from 'framer-motion';
import useAnimationState from "../hooks/useAnimationState";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

type Message = {
    title: string;
    text: string;
}

function ContactsPage() {

    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [status, setStatus] = useState<'error' | 'success' | null>(null);
    const [message, setMessage] = useState<Message | null>(null);
    const isLoaded = useAnimationState();
    const form = useRef<HTMLFormElement | null>(null);

    const notify = (msg: Message, status: 'error' | 'success' | null) => {
        setStatus(status);
        setMessage(msg);
        setOpen(true);
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                'service_1xyf8n8',     // Replace with your EmailJS service ID
                'template_xpuc3ku',    // Replace with your EmailJS template ID
                form.current!,
                'WUgi4tpeweg9m6lA0'         // Replace with your EmailJS user ID
            )
            .then(
                (_result) => {
                    setLoading(false);
                    notify({ title: 'Success', text: "Email sent successfully" }, 'success');
                    form.current!.reset();
                },
                (error) => {
                    setLoading(false);
                    notify({ title: 'Error', text: error.text }, 'error');
                }
            );
    };

    return (
        <m.div
            initial={{ y: "100%" }}
            animate={isLoaded ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: { sm: '200px', md: 2 },
                    px: { xs: 3, sm: 5 },
                    height: '100vh'
                }}
            >
                {/* Link Icon Buttons */}
                <Typography sx={{ color: 'white' }}>Contact me in:</Typography>

                <Box>
                    <m.div
                        animate={{ y: 0 }}
                        initial={{ y: '100%' }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <IconButton
                            href="https://www.linkedin.com/in/karol-topchiev-787b85a8/"
                            target="_blank"
                            sx={{ color: '#6eccfa', '&: hover': { color: 'white' } }}
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2xl"
                            />
                        </IconButton>
                        <IconButton
                            href="https://github.com/ktopchiev"
                            target="_blank"
                            sx={{ color: 'darkgray', '&: hover': { color: 'white' } }}
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2xl"
                            />
                        </IconButton>
                    </m.div>
                </Box>

                {/* Email Form */}
                <Box>
                    <Typography sx={{ mt: 3, color: 'white' }}>Or send me email:</Typography>
                    <form ref={form} id="email-form" onSubmit={sendEmail}>
                        <TextField
                            label="Name"
                            name="user_name"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontWeight: "bold",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: 'white',
                                        color: 'white'
                                    }
                                },
                                "& .MuiInputLabel-outlined": {
                                    color: "white",
                                    fontWeight: "bold",
                                }
                            }}
                        />
                        <TextField
                            label="Email"
                            name="user_email"
                            type="email"
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontWeight: "bold",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: 'white',
                                        color: 'white'
                                    }
                                },
                                "& .MuiInputLabel-outlined": {
                                    color: "white",
                                    fontWeight: "bold",
                                }
                            }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            margin="normal"
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontWeight: "bold",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: 'white',
                                        color: 'white'
                                    }
                                },
                                "& .MuiInputLabel-outlined": {
                                    color: "white",
                                    fontWeight: "bold",
                                }
                            }}
                        />
                        <LoadingButton
                            variant='outlined'
                            type='submit'
                            loading={loading}
                            endIcon={<SendIcon />}
                            loadingPosition="end"
                            sx={{
                                color: 'white',
                                borderColor: '#6eccfa',
                                transition: 'background-color 0.2s',
                                justifySelf: 'end',
                                '&:hover': {
                                    borderColor: '#7bf772',
                                },
                                // Prevent color change in loading state
                                '&.MuiLoadingButton-loading': {
                                    color: 'white',
                                    borderColor: '#6eccfa',
                                },
                                '&.MuiLoadingButton-loading:hover': {
                                    borderColor: '#7bf772',
                                },
                            }}
                        >
                            <span>Send</span>
                        </LoadingButton>
                    </form>
                </Box>

                <Box width={'100%'} height={'80px'}>
                    <Collapse in={open}>
                        <Alert
                            severity={status === "error" ? 'error' : 'success'}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mt: 1, mb: 0 }}

                        >
                            <AlertTitle>{message?.title}</AlertTitle>
                            {message?.text}
                        </Alert>
                    </Collapse>
                </Box>
            </Container>
        </m.div >
    )
}

export default ContactsPage