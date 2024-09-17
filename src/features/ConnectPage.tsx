import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FormEvent, useRef } from "react";
import emailjs from 'emailjs-com';
import { motion as m } from 'framer-motion';

function ContactsPage() {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_1xyf8n8',     // Replace with your EmailJS service ID
                'template_xpuc3ku',    // Replace with your EmailJS template ID
                form.current!,
                'WUgi4tpeweg9m6lA0'         // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Email sent successfully!');
                    form.current!.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Error sending email.');
                }
            );
    };

    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    padding: '50px'
                }}
            >
                <Typography sx={{ color: 'white' }}>Contact me in:</Typography>

                <Box overflow={'hidden'}>
                    <m.div
                        animate={{ y: 0 }}
                        initial={{ y: '100%' }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <IconButton href="https://www.linkedin.com/in/karol-topchiev-787b85a8/" target="_blank" sx={{ '$:hover': 'opacity 0.8' }}>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2xl"
                                style={{ color: '#6eccfa' }} />
                        </IconButton>
                        <IconButton href="https://github.com/ktopchiev" target="_blank">
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2xl"
                                style={{ color: 'darkgray' }} />
                        </IconButton>

                    </m.div>
                </Box>

                <Box
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Typography sx={{ marginTop: '70px', color: 'white' }}>Or send me email:</Typography>
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
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{
                                color: 'white',
                                borderColor: '#6eccfa',
                                transition: 'background-color 0.2s',
                                '&:hover': {
                                    borderColor: '#7bf772'
                                },
                                justifySelf: 'end'
                            }}>
                            Send Email
                        </Button>
                    </form>
                </Box>
            </Container>
        </m.div>
    )
}

export default ContactsPage