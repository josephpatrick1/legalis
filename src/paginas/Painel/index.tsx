import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalogo from "../Catalogo";
import Cliente from "../Cliente";
import Editor from "../Editor";
import Inicio from "../Inicio";
import { estiloIndex } from "./estilo"
import Barra from "./templates/Barra"
import Cabecalho from "./templates/Cabecalho"

export default () => {

    const classes = estiloIndex();
    return <>
        <div className={classes.root}>
            <Cabecalho />
            <Barra>
                <BrowserRouter>
                    <Switch>
                        <Route path="/painel" exact>
                            <Inicio />
                        </Route>
                        <Route path="/painel/cliente/:cpf">
                            <Cliente />
                        </Route>
                        <Route path="/painel/catalogo">
                            <Catalogo />
                        </Route>
                        <Route path="/painel/editor">
                            <Editor />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Barra>
        </div>
    </>
}