import { useMediaQuery, useTheme } from "@mui/material";

export default function useScreenSize() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return isSmall;
}