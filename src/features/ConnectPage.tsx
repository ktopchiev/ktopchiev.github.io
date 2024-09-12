import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FormEvent, useRef } from "react";
import emailjs from 'emailjs-com';

function ContactsPage() {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_1xyf8n8',     // Replace with your EmailJS service ID
                'template_xpuc3ku',    // Replace with your EmailJS template ID
                form.current,
                'WUgi4tpeweg9m6lA0'         // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Email sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Error sending email.');
                }
            );
    };

    return (
        <Container sx={{
            display: 'flex',
            marginTop: '70px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography sx={{ marginTop: '70px' }}>Contact me in:</Typography>
            <Box>
                <IconButton href="https://www.linkedin.com/in/karol-topchiev-787b85a8/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: '#60e356' }} />
                </IconButton>
                <IconButton href="https://github.com/ktopchiev" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: '#60e356' }} />
                </IconButton>
            </Box>
            <Typography sx={{ marginTop: '70px' }}>Or send me email:</Typography>
            <form ref={form} id="email-form" onSubmit={sendEmail}>
                <TextField
                    label="Name"
                    name="user_name"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="user_email"
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    margin="normal"
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        backgroundColor: '#60e356',
                        transition: 'background-color 0.2s',
                        '&:hover': {
                            backgroundColor: '#7bf772'
                        }
                    }}>
                    Send Email
                </Button>
            </form>
        </Container>
    )
}

export default ContactsPage