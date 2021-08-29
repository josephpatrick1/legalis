import { Card, Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import clientes from "../../dados/clientes";
import estiloIndex from "./estilo"
import Informacoes from "./templates/Informacoes";
import Documentos from "./templates/Documentos";

const PainelAba = ({ abaSelecionada }: { abaSelecionada: number }) => {
    const classes = estiloIndex();
    if (abaSelecionada === 1) {
        return <div className={classes.Aba}><Informacoes /></div>
    }
    if (abaSelecionada === 2) {
        return <div className={classes.Aba}><Documentos /></div>
    }
    return <></>
}

export default () => {
    const classes = estiloIndex();
    const { cpf }: { cpf: string } = useParams();
    const cliente = clientes.find(cliente => cliente.cpf === cpf);
    const [abaSelecionada, setAbaSelecionada] = useState(1);

    return <Container fixed>
        <br />
        <Typography variant="h3">
            {cliente?.nome}
        </Typography>
        <br />
        <Grid container spacing={4}>
            <Grid item xs={3} className={classes.gridTabs}>
                <Tabs color="secondary" value={abaSelecionada} onChange={(_, value: number) => {
                    setAbaSelecionada(Number(value));
                }} className={classes.Abas} orientation="vertical">
                    <Tab value={1} label="Informações do Cliente" classes={{ wrapper: classes.botaoAba }} />
                    <Tab value={2} label="Documentos" classes={{ wrapper: classes.botaoAba }} />
                    <Tab value={3} label="Processos" classes={{ wrapper: classes.botaoAba }} />
                </Tabs>
            </Grid>
            <Grid item xs={9} className={classes.gridContent}>
                <PainelAba abaSelecionada={abaSelecionada} />
            </Grid>
        </Grid>
    </Container >
}