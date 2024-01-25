import { useState } from 'react';
import { Drawer, styled, Box, Button, List, ListItem } from "@mui/material";
import { SIDEBAR_DATA } from './sidebar.config';
import { CreateOutlined } from '@mui/icons-material';
import ComposeMail from './ComposeMail';
const StyledDrawer = styled(Drawer)`
    margin-top: 54px;
`
const Container = styled(Box)`
    padding: 8px;
    color: #001d35;
`

const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`

const SideBar = ({ openSidebar }) => {
    const [openCompose, setCompose] = useState(false)
    return (
        <StyledDrawer
            anchor='left'
            open={openSidebar}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: 250,
                    borderRight: 'none',
                    background: '#f5F5F5',
                    marginTop: '64px',
                    height: 'calc(100vh - 64px)'
                },
            }}
        >
            <Container>
                <ComposeButton onClick={() => { setCompose(true) }}>
                    <CreateOutlined style={{ marginRight: 10 }} />Compose
                </ComposeButton>
                <List >
                    {
                        SIDEBAR_DATA.map(data => (
                            // <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={{ padding: 10, gap: 5 }}><data.icon fontSize="small" />{data.title}</ListItem>

                        ))
                    }
                </List>
                <ComposeMail openCompose={openCompose} setCompose={setCompose} />
            </Container>
        </StyledDrawer>
    )
}

export default SideBar;