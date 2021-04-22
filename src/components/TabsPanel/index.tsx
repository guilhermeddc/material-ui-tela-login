import React from "react";
import { Box } from "@material-ui/core";

interface IProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabsPanel: React.FC<IProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabsPanel;
