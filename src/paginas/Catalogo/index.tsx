import { Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, Typography } from "@material-ui/core";
import { Favorite, MoreVert, Share } from "@material-ui/icons";
import { Link } from "react-router-dom";
import estiloIndex from "./estilo"

export default () => {
    const classes = estiloIndex();

    const templates = [
        {
            id: 1,
            categoria: "Geral",
            nome: "Título do Documento",
            imagem: "/imagens/capas/01.png"
        },
        {
            id: 2,
            categoria: "Geral",
            nome: "Título do Documento",
            imagem: "/imagens/capas/01.png"
        },
        {
            id: 3,
            categoria: "Geral",
            nome: "Título do Documento",
            imagem: "/imagens/capas/01.png"
        },
        {
            id: 4,
            categoria: "Geral",
            nome: "Título do Documento",
            imagem: "/imagens/capas/01.png"
        },
        {
            id: 5,
            categoria: "Geral",
            nome: "Título do Documento",
            imagem: "/imagens/capas/01.png"
        }
    ];
    return <>
        <Container fixed>
            <br />
            <div className={classes.topo}>
                <Typography variant="h3">
                    Criar Novo Documento
                </Typography>
                <Typography variant="h5">
                    Selecione o Modelo
                </Typography>
            </div>
            <div>
                <Typography variant="h4">
                    Geral
                </Typography>
                <br />
                <Grid container spacing={3}>
                    {
                        templates.map(template => (
                            <Grid item style={{ width: "20%" }}>
                                <Link to="/painel/editor" className={classes.link}>
                                    <Card>
                                        <img src={template.imagem} style={{ width: "100%" }} />
                                        <CardContent>Loren Ipsun Dollor</CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
                <br />
                <Typography variant="h4">
                    Petições
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Container>
    </>
}