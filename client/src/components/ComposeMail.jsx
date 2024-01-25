import React, { useState } from 'react'
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';
import useApi from '../middleware/useApi.jsx';
import { API_URLS } from '../services/api.js';
const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #000000;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`
const ComposeMail = ({ openCompose, setCompose }) => {
    const sentEmail = useApi(API_URLS.saveSentEmail)
    const [data, setData] = useState({});
    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }
    const close = () => {
        setCompose(false);
    }
    const sendMail = async (e) => {
        e.preventDefault();
        if (window.Email) {

            window.Email.send({
                Host: "smtp.elasticemail.com",
                Username: "saksham1242@yopmail.com",
                Password: "92EBB3DA6A10CA4FA9D39D8A21D5CE929E38",
                Port: 2525,
                To: data.to,
                From: "tsaksham548@gmail.com",
                Subject: data.subject,
                Body: data.body
            })
        }
        const payload = {
            to: data.to,
            from: "tsaksham548@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            name: 'ad',
            attachment: '',
            type: 'sent',
            starred: false
        }
        try {
            sentEmail.call(payload).then(alert("email sent"))

        } catch (error) {
            alert(error)
        }
        if (!sentEmail.error) {
            close();
            setData({})
        } else {
            console.log(sentEmail.error)
        }
    }
    return (
        <Dialog
            open={openCompose}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => { close(e) }} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to} />
                <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject} />
            </RecipientWrapper>
            <TextField
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                value={data.body}
            />
            <Footer>
                <SendButton onClick={(e) => { sendMail(e) }}>Send</SendButton>
                <DeleteOutline onClick={close} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail