import { Box, IconButton, colors, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material";
import DarkModeOutlinedIcon from "@mui/icons-material";
import NotificationsOutlinedIcon from "@mui/icons-material";
import SettingsOutlinedIcon from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material";
import SearchIcon from "@mui/icons-material";

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
        backgroundColor={colors.purple[400]}
        borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        </Box>
        <IconButton sx={{ display: "flex" }}></IconButton>

    </Box>)
}

export default Topbar;