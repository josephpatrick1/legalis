import { Card, Paper } from "@material-ui/core"
import { Add } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { estiloDocumentos } from "../estilo"

export default () => {

    const classes = estiloDocumentos();

    return <>
        <Link to="/painel/catalogo" className={classes.Link}>
            <Paper className={classes.Paper}>
                <div className={classes.DivInterna}>
                    <Add /> <br />
                    Adicionar Documento
                </div>
            </Paper>
        </Link>
    </>
}