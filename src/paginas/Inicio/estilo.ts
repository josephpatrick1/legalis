import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const estiloIndex = makeStyles((theme: Theme) =>
    createStyles({
        divFundo: {
            backgroundImage: 'url(http://loboemonteiroadvogados.com.br/wp-content/uploads/2020/06/banner-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            width: "100%",
            height: "150px"
        },
        cartoes: {
            marginTop: "-80px"
        },
        cartaoTopo: {
            height: '6px',
            width: '100%',
            background: theme.palette.primary.light
        },
        clientes: {
            marginTop: "30px"
        },
        clientesH4: {
            marginBottom: "30px"
        },
        clienteFoto: {
            borderRadius: '100px',
            margin: 'auto',
            width: '100%',
            maxWidth: '80px'
        },
        conteudoCartaoCliente: {
            textAlign: 'center'
        },
        botaoExcluir: {
            marginLeft: "8px",
            backgroundColor: "#c0392b"
        },
        botaoAdicionar: {
            float: 'right'
        },
        link: {
            textDecoration: "none"
        }
    })
);

export default estiloIndex;