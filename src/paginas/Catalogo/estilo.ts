import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const estiloIndex = makeStyles((theme: Theme) =>
    createStyles({
        topo: {
            textAlign: 'center',
            width: '100%'
        },
        link: {
            textDecoration: "none"
        }
    })
);

export default estiloIndex