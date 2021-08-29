import { alpha, createStyles, makeStyles, Theme } from "@material-ui/core";


export const estiloIndex = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
    })
);


export const estiloCabecalho = makeStyles((theme: Theme) =>
    createStyles({
        TipografiaTitulo: {},
        barraAplicativo: {
            zIndex: theme.zIndex.drawer + 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            flexGrow: 1
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            }
        },
    })
);

const drawerWidth = 100;

export const estiloBarra = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            overflow: "none"
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText
        },
        drawerContainer: {
            overflow: 'auto',
            overflowX: 'hidden',
        },
        content: {
            flexGrow: 1,
            // padding: theme.spacing(3),
        },
        button: {
            color: theme.palette.grey["200"],
            width: '100%'
        },
        label: {
            // Aligns the content of the button vertically.
            flexDirection: 'column'
        },
    }),
);