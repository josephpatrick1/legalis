import { Button, Card, CardContent, Container, Grid, Paper, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import clientes from "../../dados/clientes";
import { estiloIndex } from "./estilo"

export default () => {

    const classes = estiloIndex();

    const cartoesTopo = [
        {
            titulo: "10",
            subtitulo: "Clientes Cadastrados"
        },
        {
            titulo: "8",
            subtitulo: "Processos em Andamento"
        },
        {
            titulo: "20",
            subtitulo: "Documentos Criados"
        }
    ];


    return <>
        <div className={classes.divFundo}></div>
        <div className={classes.cartoes}>
            <Container fixed>
                <Grid container spacing={4}>
                    {cartoesTopo.map(cartao => {
                        return <Grid item xs={4}>
                            <Card>
                                <div className={classes.cartaoTopo}></div>
                                <CardContent>
                                    <Typography variant="h4">
                                        {cartao.titulo}
                                    </Typography>
                                    <Typography variant="h6">
                                        {cartao.subtitulo}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </div>
        <div className={classes.clientes}>
            <Container fixed>
                <Typography variant="h5" className={classes.clientesH4}>
                    <Button>
                        Últimos Clientes Adicionados
                    </Button>
                    <Button variant="contained" className={classes.botaoAdicionar} color="secondary">
                        <Add/>
                    </Button>
                </Typography>
                <Grid container spacing={4}>
                    {clientes.map(cliente =>
                        <Grid item xs={3}>
                            <Card className={classes.conteudoCartaoCliente}>
                                <div className={classes.cartaoTopo}></div>
                                <CardContent>
                                    <img src={cliente.foto} className={classes.clienteFoto} />
                                    <Typography variant="h6">
                                        {cliente.nome}
                                    </Typography>
                                    <Typography variant="body2">
                                        {cliente.cpf}
                                    </Typography>
                                    <Typography variant="body2">
                                        {cliente.dataHora}
                                    </Typography>
                                    <Link className={classes.link} to={`/painel/cliente/${cliente.cpf}`}>
                                        <Button variant="contained" color="secondary">
                                            Detalhes
                                        </Button>
                                    </Link>
                                    <Button variant="contained" color="secondary" className={classes.botaoExcluir}>
                                        Excluir
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    </>
}