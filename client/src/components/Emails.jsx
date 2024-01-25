import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled, Typography, Box } from '@mui/material'
const Emails = ({ openSidebar }) => {
    const [emails, setEmails] = useState([]);
    const [mails, hideMails] = useState(true)
    const Navigate = useNavigate();

    const Container = styled(Box)({
        marginLeft: 15,
        width: '100%',
        '& > div': {
            display: 'flex',
            '& > p > span': {
                fontSize: 12,
                color: '#5E5E5E'
            }
        }
    });

    const Date = styled(Typography)({
        margin: 'auto',
        fontSize: 16,
        color: '#5E5E5E'
    })

    const IconWrapper = styled(Box)({
        padding: 15
    });

    const Subject = styled(Typography)({
        fontSize: 22,
        margin: '10px 0 20px 75px',
        display: 'flex'
    })

    const Indicator = styled(Box)`
        font-size: 12px !important;
        background: #ddd;
        color: #222;
        border-radius: 4px;
        margin-left: 6px;
        padding: 2px 4px;
        align-self: center;
    `;

    const Image = styled('img')({
        borderRadius: '50%',
        width: 40,
        height: 40,
        margin: '5px 10px 0 10px',
        backgroundColor: '#cccccc'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const emails = await axios.get('http://localhost:8000/mails');
                setEmails(emails.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        fetchData()
    }, [])

    console.log(emails)
    return (
        <>
            <div style={{
                marginLeft: openSidebar ? '250px' : ''
            }}><h2>All Mails</h2>
                <ul>
                    {emails.map((emails) => (
                        <div onClick={() => { Navigate(`/viewmail/${emails.subject}/${emails.to}/${emails.date}/${emails.body}/${emails._id}`); hideMails(false) }}>
                            <Box>
                                <Subject>{emails.subject} <Indicator component="span">Inbox</Indicator></Subject>
                                <Box style={{ display: 'flex' }}>
                                    <Container>
                                        <Box>
                                            <Typography>

                                                <Box component="span">&nbsp;&#60;{emails.to}&#62;</Box>
                                            </Typography>
                                            <Date>
                                                {(new window.Date(emails.date)).getDate()}&nbsp;
                                                {(new window.Date(emails.date)).toLocaleString('default', { month: 'long' })}&nbsp;
                                                {(new window.Date(emails.date)).getFullYear()}
                                            </Date>
                                        </Box>
                                        <hr />
                                    </Container>
                                </Box>
                            </Box>
                        </div>
                    ))}
                </ul></div>
        </>
    )
}

export default Emails;