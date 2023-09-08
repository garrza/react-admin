import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Represent wheter sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false); 
    // Set current page
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: "transparent !important",
                    borderRight: `2px solid ${colors.black[900]}`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: `${colors.purple[500]} !important`,
                    
                },
                "& .pro-inner-item.active": {
                    color: `${colors.purple[500]} !important`,
                },
                // Override elements inside 'react-pro-sidebar'
                // Selecting child component of the box to actually style sidebar
            }}
            >
                <ProSidebar collapsed={isCollapsed}>
                    <Menu iconShape="square">
                        {/* LOGO AND MENU ICON */}
                        <MenuItem
                         // Shows hamburger menu when collapsed, hide sidebar
                         onClick={() => setIsCollapsed(!isCollapsed)}
                         icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                         style={{
                            margin: "10px 0px 20px 0px",
                            color: colors.black[100],
                         }}
                         >
                            {!isCollapsed && (
                                <Box display="flex"
                                     justifyContent="space-between"
                                     alignItems="center"
                                     ml="15px"
                                     >
                                    <Typography variant="h2" color={colors.purple[500]}>
                                        FondFlex
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                         </MenuItem>
                    </Menu>
                </ProSidebar>
        </Box>
    )
}

export default Sidebar;