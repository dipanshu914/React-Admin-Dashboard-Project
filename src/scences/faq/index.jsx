import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import {
    Accordion, AccordionSummary, AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";


const FAQ = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px" >
            <Header
                title="FAQ"
                subtitle="Frequently Asked Questions Page" />

            <Box sx={{
                overflowY: 'auto',

                height: "70vh"
            }}>
                <Accordion defaultExpanded >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            color={colors.greenAccent[500]}
                            variant="h5">
                            An Important question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, eius!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            color={colors.greenAccent[500]}
                            variant="h5">
                            An Important question 2
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis accusamus ratione.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            color={colors.greenAccent[500]}
                            variant="h5">
                            An Important question 3
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel earum accusantium rem, illum officiis a.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            color={colors.greenAccent[500]}
                            variant="h5">
                            An Important question 4
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nam ex blanditiis atque fuga?
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            color={colors.greenAccent[500]}
                            variant="h5">
                            An Important question 5
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deleniti recusandae quaerat?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

        </Box>
    )
}

export default FAQ