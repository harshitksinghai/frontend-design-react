import { Stack, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { commonBoxStyles } from "../styles/commonStyles";

const Navigation = () => {
    return (
        <>
            <Stack direction={"row"} justifyContent={"space-between"} sx={{ ...commonBoxStyles, backgroundColor: "#ffffff", pr: "1rem" }}>

                <Stack direction={"row"} spacing={2} sx={{
                    height: "50px",
                    alignItems: "center",
                }}>
                    <Box
                        sx={{
                            borderTopLeftRadius: "0.5rem",
                            borderBottomLeftRadius: "0.5rem",
                            backgroundColor: "yellow",
                            width: "55px",
                            height: "100%",
                            alignContent: "center",
                            pl: "1rem",
                            pt: "0.5rem"
                        }}>
                        <HomeIcon />
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            fontSize: "12px",
                            fontWeight: "600"
                        }}>
                        RESUME
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            fontSize: "12px",
                            fontWeight: "600"
                        }}>
                        CONTACT
                    </Box>

                </Stack>

                <Stack direction={"row"} spacing={2} sx={{
                    backgroundColor: "orangered",
                    height: "50px",
                    alignItems: "center"
                }}>
                    <Box
                        sx={{
                            backgroundColor: "yellow",
                            width: "55px",
                            height: "100%",
                            alignContent: "center",
                        }}>
                        home{/* <HomeIcon /> */}
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "white",
                        }}>
                        RESUME
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "white",
                        }}>
                        CONTACT
                    </Box>

                </Stack>
            </Stack>
        </>
    )
}

export default Navigation;