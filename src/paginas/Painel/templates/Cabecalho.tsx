import { AppBar, Button, Drawer, IconButton, InputBase, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, ExitToApp, Menu, Search } from "@material-ui/icons";
import { estiloCabecalho } from "../estilo";

export default () => {
    const classes = estiloCabecalho();
    return <>
        <AppBar position="fixed" className={classes.barraAplicativo}>
            <Toolbar>
                <IconButton color="inherit">
                    <img src="/favicon.ico" style={{ height: "32px" }} />
                    {/* <Menu /> */}
                </IconButton>
                <Typography className={classes.TipografiaTitulo} variant="button">
                    Legalis 1.0
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <Search />
                    </div>
                    <InputBase
                        placeholder="Pesquisar..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Pesquisar' }}
                    />
                </div>
                <Button startIcon={<AccountCircle />} color="inherit">
                    Olá, Guilherme!
                </Button>
                <Button color="inherit">
                    <ExitToApp />
                </Button>
            </Toolbar>
        </AppBar>
    </>
}