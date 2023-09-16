import { Box, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Quesitons" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blue[500]} variant="h5">
            First Important Question 
          </Typography>
        </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Random text using words and lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis esse suscipit minima maiores libero ratione et nobis aliquid consectetur dicta, veritatis fugit sed inventore nostrum laudantium. Nisi soluta ullam itaque.
        </Typography>
      </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blue[500]} variant="h5">
            Second Important Question 
          </Typography>
        </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Random text using words and lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis esse suscipit minima maiores libero ratione et nobis aliquid consectetur dicta, veritatis fugit sed inventore nostrum laudantium. Nisi soluta ullam itaque.
        </Typography>
      </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blue[500]} variant="h5">
            Third Important Question 
          </Typography>
        </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Random text using words and lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis esse suscipit minima maiores libero ratione et nobis aliquid consectetur dicta, veritatis fugit sed inventore nostrum laudantium. Nisi soluta ullam itaque.
        </Typography>
      </AccordionDetails>
      </Accordion>


    </Box>
  )
}

export default FAQ;