import { Button, Drawer, Toolbar } from "@material-ui/core"
import { Build, CalendarToday, Description, Group, Home, Settings } from "@material-ui/icons";
import { estiloBarra } from "../estilo";

export default ({ children }: { children: React.ReactNode }) => {
    const classes = estiloBarra();
    return <>
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <Button classes={{ root: classes.button, label: classes.label }}>
                    <Home /> Início
                </Button>
                <Button classes={{ root: classes.button, label: classes.label }}>
                    <Group /> Clientes
                </Button>
                <Button classes={{ root: classes.button, label: classes.label }}>
                    <Settings /> Processos
                </Button>
                <Button classes={{ root: classes.button, label: classes.label }}>
                    <Build /> Opções
                </Button>
                <Button classes={{ root: classes.button, label: classes.label }}>
                    <Description /> Modelos
                </Button>
                <Button classes={{ root: classes.button, label: classes.label }}>
                    <CalendarToday /> Calendário
                </Button>
            </div>
        </Drawer>
        <main className={classes.content}>
            <Toolbar />
            {children}
        </main>
    </>;
}