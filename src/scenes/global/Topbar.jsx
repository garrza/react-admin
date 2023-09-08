import { Box, IconButton, colors, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    // Using react context with MUI
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);

    return (<Box display="flex" justifyContent="space-between" padding={2}>
        {/* SEARCH BAR */}
        {/* Box works like a div but allows inline styling */}
        <Box 
        display="flex"
        backgroundColor={colors.black[900]}
        borderRadius="3px"
        >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p : 1}}>
                <SearchIcon />
            </IconButton>
        </Box>

        {/* ICONS SECTION */}
        {/* OTHER HALF OF TOPBAR */} 
        <Box display="flex">
            {/* React context of function that allows us to change dark and light mode */}
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    < DarkModeOutlinedIcon />
                ) : (
                    < LightModeOutlinedIcon />
                )}
            </IconButton>
            <IconButton>
                < NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                < SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                < PersonOutlinedIcon />
            </IconButton>
        </Box>

    </Box>)
}

export default Topbar;