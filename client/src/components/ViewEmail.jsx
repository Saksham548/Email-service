import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

import { Box, Typography, styled } from '@mui/material';

import { ArrowBack, Delete } from '@mui/icons-material';
import axios from 'axios';

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
    margin: '0 50px 0 auto',
    fontSize: 12,
    color: '#5E5E5E'
})

const ViewEmail = () => {
    const Navigate = useNavigate();
    // const DeleteButton = ( itemId ) => {
    const handleDelete = async (itemId) => {
        try {
            var obj = { id: itemId }
            await axios.post(`http://localhost:8000/del`, obj);
            alert("Mail deleted successfully")
            Navigate("/home")
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
    // }

    const { s, to, date, b, i } = useParams()


    return (
        <>
            <Header />
            <Box style={{ margin: 'auto', width: '70vw', padding: 50, height: '75vh', backgroundColor: '#f5F5F5', marginTop: 20 }}>
                <IconWrapper>
                    <ArrowBack fontSize='small' color="action" onClick={() => window.history.back()} />
                    <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={() => { handleDelete(i) }} />
                </IconWrapper>
                <Subject>{s} <Indicator component="span">Inbox</Indicator></Subject>
                <Box style={{ display: 'flex' }}>
                    <Container>
                        <Typography>
                            <Box component="span">&nbsp;&#60;{to}&#62;</Box>
                        </Typography>
                        <Box>
                            {date}
                        </Box>
                        <Typography style={{ marginTop: 20 }}>{b}</Typography>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default ViewEmail;