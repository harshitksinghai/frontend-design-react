import { Box, Grid, Stack } from "@mui/material";
import Info from "../components/Info";
import Navigation from "../components/Navigation";
import HomeContent from "../components/HomeContent";
import { commonBoxStyles } from "../styles/commonStyles";

const PortfolioHomePage = () => {
    return (
        <>
            <Grid container spacing={2}
                sx={{
                    backgroundColor: "#ededed",
                    maxWidth: "1300px",
                    padding: "0 2rem",
                    margin: "2rem auto",
                }}
            >
                <Grid size={3.5}>
                    <Box
                        sx={{
                            ...commonBoxStyles,
                            backgroundColor: "yellow",
                            height: "500px"
                        }}
                    >
                        1
                    </Box>
                </Grid>

                <Grid size={"grow"}>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <Navigation />
                        </Grid>

                        <Grid size={12}>
                            <Box
                                sx={{
                                    backgroundColor: "red"
                                }}
                            >
                                <HomeContent />
                            </Box>
                        </Grid>

                        <Grid size={12}>
                            <Box
                                sx={{
                                    backgroundColor: "violet",
                                    height: "50px"
                                }}
                            >
                                4
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}

export default PortfolioHomePage;