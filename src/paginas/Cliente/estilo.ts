import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const estiloIndex = makeStyles((theme: Theme) =>
    createStyles({
        Abas: {
            // boxShadow: '-3px -6px 10px 0px black'
        },
        Aba: {
            padding: '10px'
        },
        botaoAba: {
            alignItems: "flex-start"
        },
        gridTabs: {
            backgroundColor: "#eee",
            minHeight: "70vh"
        },
        gridContent: {
            backgroundColor: "#f5f5f5",
            minHeight: "70vh"
        },
        InformacoesInput: {
            width: '100%'
        }
    })
);

export const estiloInformacoes = makeStyles((theme: Theme) =>
    createStyles({
        Input: {
            width: '100%',
            marginBottom: '16px'
        },
        informacoesDoClienteDiv: {
            display: 'inline',
            fontSize: '18px'
        },
        adicionarInformacaoBotao: {
            float: 'right',
            marginLeft: '10px'
        }
    })
);

export const estiloDocumentos = makeStyles((theme: Theme) =>
    createStyles({
        Paper: {
            width: "130px",
            height: "200px"
        },
        DivInterna: {
            textAlign: 'center',
            paddingTop: "60px"
        },
        Link: {
            textDecoration: "none"
        }
    })
);

export default estiloIndex;