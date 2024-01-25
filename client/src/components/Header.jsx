
import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import {
    Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined,
    AppsOutlined, AccountCircleOutlined, Search
} from '@mui/icons-material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
    background: #f5F5F5;
    box-shadow: none;
`;

const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`

const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`

const Header = () => {
    const Navigate = useNavigate();
    return (
        <>
            <StyledAppBar position="static">
                <Toolbar>
                    <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt="logo" style={{ width: 110, marginLeft: 15 }} onClick={() => { Navigate('/home') }} />
                    <SearchWrapper>
                        <Search color="action" />
                        <InputBase />
                        <Tune color="action" />
                    </SearchWrapper>

                    <OptionsWrapper>
                        <HelpOutlineOutlined color="action" />
                        <SettingsOutlined color="action" />
                        <AppsOutlined color="action" />
                        <AccountCircleOutlined color="action" />
                    </OptionsWrapper>
                </Toolbar>
            </StyledAppBar>
        </>

    )
}

export default Header;