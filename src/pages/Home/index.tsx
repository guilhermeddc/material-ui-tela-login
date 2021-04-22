import React, { useCallback, useState, ChangeEvent } from "react";

import { AppBar, Box, Paper, Tab, Tabs, useTheme } from "@material-ui/core";

import a11yProps from "../../utils/a11yProps";
import TabPanel from "../../components/TabsPanel";

import UseState from "./useState";
import UseEffect from "./useEffect";
import UseCallback from "./useCallback";
import UseMemo from "./useMemo";

const Home: React.FC = () => {
  const [value, setValue] = useState(1);

  const theme = useTheme();

  const handleChange = useCallback((_: ChangeEvent<{}>, value: number) => {
    setValue(value);
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow="1"
    >
      <Paper elevation={3}>
        <Box width="80vw" height="80vh" padding={theme.spacing(1)}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab value={1} label="useState" wrapped {...a11yProps(1)} />
              <Tab value={2} label="useEffect" {...a11yProps(2)} />
              <Tab value={3} label="useCallback" {...a11yProps(3)} />
              <Tab value={4} label="useMemo" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={1}>
            <UseState />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UseEffect />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UseCallback />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <UseMemo />
          </TabPanel>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
