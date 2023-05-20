import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import ItTalent from "./ItTalent";
import MainContactUsForm from "../components/MainContactUsForm";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOptions: {},
    };
  }

  componentDidMount() {
    console.log("HOME JS MOUNTED");
  }

  render() {
    return (
      <Box px={3} backgroundColor="#000">
        <Box display="flex" flexDirection="row" flex={1} alignItems="center">
          <Box justifyContent="flex-start" width="50%" my={5}>
            <Typography variant="h5" color="white" my={5}>
              Offshore Recruitment & Staff Augmentation Services
            </Typography>
            <Typography variant="h4" color="white" my={5}>
              We provide heavyweight developers for the most demanding roles!
            </Typography>
            <Typography variant="h3" color="white" my={5}>
              Hire top-notch developers, testers and analysts for your business.
            </Typography>
          </Box>
          <Box justifyContent="flex-end" width="50%" pt="50px">
            <Typography variant="h5" color="white">
              <MainContactUsForm></MainContactUsForm>
            </Typography>
          </Box>
        </Box>
        <Box>
          <ItTalent></ItTalent>
        </Box>
      </Box>
    );
  }
}
