import { Box } from "@mui/material";
import Header from "../../components/header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Kill to Drink Ratio" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;