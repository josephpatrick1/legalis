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
            nome: "Contrato de Locação",
            imagem: "/imagens/capas/01.png"
        },
        {
            id: 2,
            categoria: "Geral",
            nome: "Mandado de citação",
            imagem: "https://media.discordapp.net/attachments/872971561563471894/881657016286867476/penhora.jpg?width=266&height=473"
        },
        {
            id: 3,
            categoria: "Geral",
            nome: "Contrato",
            imagem: "https://media.discordapp.net/attachments/872971561563471894/881658720730382356/unknown.png?width=366&height=473"
        },
        {
            id: 4,
            categoria: "Geral",
            nome: "Políticas Internas",
            imagem: "https://media.discordapp.net/attachments/872971561563471894/881659299590471771/politicas20internas.png?width=357&height=473"
        },
        {
            id: 5,
            categoria: "Citação",
            nome: "Ação Previdenciária",
            imagem: "https://media.discordapp.net/attachments/872971561563471894/881660655080452126/ACAO_PREVIDENCIARIA_VISUAL_LAW.png?width=334&height=472"
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
                                        <img src={template.imagem} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
                                        <CardContent>{template.nome}</CardContent>
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