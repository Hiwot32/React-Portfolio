// Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Bio } from '../../data/constants';
import { Container, Wrapper, Title, Desc, SocialMediaIcon } from './ContactStyle';

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ severity: 'success', message: '' });

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <div>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </SocialMediaIcon>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${Bio.email}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'White' }}
          >
            <MailOutlineIcon />
          </a>

          <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </SocialMediaIcon>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Contact;
