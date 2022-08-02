import React, { useMemo } from 'react';
import type { ReactNode, ReactElement } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles, Theme, createStyles } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import { useWindowSize, MOBILE_SIZE } from '../hooks/useWindowSize';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export function Navbar() {

    // Anchor for the menu
    const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(null);
    const [anchorElementDesktop, setAnchorElementDesktop] = React.useState<HTMLElement | null>(null);

    // Handle the showing of the hamburger menu icon 
    const { width } = useWindowSize();
    const showMenu = useMemo(() => width < MOBILE_SIZE, [width]);


    // Nulling the anchor element when the user clicks outside of it
    function clearAnchorElement() {
        setAnchorElement(null);
    }


    // Handle the click of the menu button
    function handleTitleClick() {

        // Scroll to the top of the page 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        clearAnchorElement();
    }


    // Handle the click of the about button
    function handleAboutButtonClick() {

        // Prevent the default action of the link
        event.preventDefault();

        // Scroll to the About section
        window.scrollTo({
            top: document.getElementById("About")?.offsetTop || 0,
            behavior: 'smooth'
        });

        clearAnchorElement();

    }

    // Handle the click of the Experience button
    function handleProjectButtonClick(event) {

        // Prevent the default behavior of the button
        event.preventDefault();

        // Scroll to the Experience section
        window.scrollTo({
            top: document.getElementById('Experience')?.offsetTop || 0,
            behavior: 'smooth'
        });

        clearAnchorElement();

    }

    // Handle the click of the contact button
    function handleContactButtonClick(event) {

        // Prevent the default behavior of the button
        event?.preventDefault();

        // scroll to the Contact section
        window.scrollTo({
            top: document.getElementById('Contact')?.offsetTop || 0,
            behavior: 'smooth',
        });

        clearAnchorElement();
    }


    // Handle the clicking of the hamburger menu icon
    function handleMenuIconClick(event) {
        setAnchorElement(event.currentTarget);
    }


    function handleLinkMenuButtonClick(event) {
        setAnchorElementDesktop(event.currentTarget);
    }


    return (
        <AppBar position={"sticky"} color={"primary"} className={"h-24 justify-center"}>
            <Toolbar>
                <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} sx={{
                    width: '100%',
                }} >
                    <Typography variant={"h6"} color={"white"} >
                        Joseph Whiteaker
                    </Typography>
                    {
                        showMenu ?
                            (
                                <>
                                    <IconButton className={" w-20 "} onClick={handleMenuIconClick}>
                                        <MenuIcon className={"text-white"} />
                                    </IconButton>
                                </>
                            ) :
                            (
                                <Grid spacing={2}>
                                    <Button onClick={handleAboutButtonClick} color={"inherit"}>Home</Button>
                                    <Button onClick={handleProjectButtonClick} color={"inherit"}>Experience</Button>
                                    {/* <Button onClick={handleContactButtonClick} color={"inherit"}>Contact</Button> */}
                                    <Button onClick={handleLinkMenuButtonClick} color={"inherit"}>Links</Button>
                                </Grid>
                            )
                    }
                    <Menu anchorEl={anchorElement} open={Boolean(anchorElement)} onClose={() => setAnchorElement(null)}>
                        <MenuItems clearAnchorElement={() => setAnchorElement(null)} />
                    </Menu>
                    <Menu anchorEl={anchorElementDesktop} open={Boolean(anchorElementDesktop)} onClose={() => setAnchorElementDesktop(null)}>
                        <Link href={"https://github.com/josephaw1022"}>
                            <MenuItem>
                                Github
                            </MenuItem>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/joseph-whiteaker-02482a198/"}>
                            <MenuItem>
                                LinkedIn
                            </MenuItem>
                        </Link>
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}





function MenuItems({ clearAnchorElement }) {


    const intialItems = [
        {
            name: "Home",
            onClick: handleAboutButtonClick
        },
        {
            name: "Experience",
            onClick: handleProjectButtonClick
        },
        // {
        //     name: "Contact",
        //     onClick: handleContactButtonClick
        // },
        {
            name: "Links",
            onClick: handleLinksButtonClick
        }
    ]

    const linkItems = [
        {
            name: "Back",
            onClick: handleGoBackToFirstMenu
        },
        {
            name: "Github",
            href: "https://github.com/josephaw1022",

        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/joseph-whiteaker-02482a198/",
        }
    ]


    // Memu items for the mobile view
    const [menuItems, setMenuItems] = React.useState<Array<RegularItem | LinkItem>>(intialItems);



    // Handle the click of the about button
    function handleAboutButtonClick() {

        // Prevent the default action of the link
        event.preventDefault();

        // Scroll to the About section
        window.scrollTo({
            top: document.getElementById("About")?.offsetTop || 0,
            behavior: 'smooth'
        });

        clearAnchorElement();

    }

    // Handle the click of the Experience button
    function handleProjectButtonClick(event) {

        // Prevent the default behavior of the button
        event.preventDefault();

        // Scroll to the Experience section
        window.scrollTo({
            top: document.getElementById('Experience')?.offsetTop || 0,
            behavior: 'smooth'
        });

        clearAnchorElement();

    }

    // Handle the click of the contact button
    function handleContactButtonClick(event) {

        // Prevent the default behavior of the button
        event?.preventDefault();

        // scroll to the Contact section
        window.scrollTo({
            top: document.getElementById('Contact')?.offsetTop || 0,
            behavior: 'smooth',
        });

        clearAnchorElement();
    }


    function handleLinksButtonClick() {
        setMenuItems(linkItems);
    }


    function handleGoBackToFirstMenu() {
        setMenuItems(intialItems);
    }




    return (
        <>
            {
                menuItems.map((item, index) => {

                    if (item.href) {
                        return (
                            <Link href={item.href} key={index}>
                                <MenuItem>{item.name}</MenuItem>
                            </Link>
                        );
                    }

                    return (
                        <MenuItem key={index} onClick={item.onClick}>{item.name}</MenuItem>
                    )

                })
            }
        </>
    )







}



interface RegularItem {
    name: string;
    onClick: () => void;
}

interface LinkItem {
    name: string;
    href: string;
}