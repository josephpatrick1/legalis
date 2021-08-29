import { Button, TextField, Typography } from "@material-ui/core"
import { Add, Edit, Save } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import clientes from "../../../dados/clientes";
import { estiloInformacoes } from "../estilo";

export default () => {

    const { cpf }: { cpf: string } = useParams();
    const cliente = clientes.find(cliente => cliente.cpf === cpf);
    const classes = estiloInformacoes();

    return <>
        <div className={classes.informacoesDoClienteDiv}>
            <Button>Informações do Cliente</Button>
            <Button className={classes.adicionarInformacaoBotao} variant="contained" color="secondary">
                <Save/>
            </Button>
            <Button className={classes.adicionarInformacaoBotao} variant="contained">
                <Add/>
            </Button>
        </div>
        <br/><br/>
        <TextField label="Nome" variant="outlined" value={cliente?.nome} className={classes.Input}/>
        <TextField label="CPF" variant="outlined" value={cliente?.cpf} className={classes.Input}/>
        <TextField label="Telefone" variant="outlined" value="(69) 98478-6527" className={classes.Input}/>
        <TextField label="E-mail" variant="outlined" value={"marciasilva1@hotmail.com"} className={classes.Input}/>
        <TextField label="Endereço" variant="outlined" value={"Av. Sete de Setembro, 237 - Centro, Porto Velho - RO, 76801-045"} className={classes.Input}/>
    </>
}