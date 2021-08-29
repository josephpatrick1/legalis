import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const estiloIndex = makeStyles((theme: Theme) =>
    createStyles({
        Input: {
            width: '100%'
        },
        formControl: {
            width: '100%'
        },
        select: {
            width: '100%'
        },
        botaoAcao1: {
            background: "#2c3e50",
            color: "white"
        },
        botaoAcao2: {
            background: "#c0392b",
            color: "white"
        },
        botaoAcao3: {
            background: "#16a085",
            color: "white"
        },
        botaoAcao4: {
            background: "#8e44ad",
            color: "white"
        }
    })
);

export default estiloIndex;