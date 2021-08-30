import { useRef } from "react";
import estiloIndex from "./estilo";
import { Editor } from '@tinymce/tinymce-react';
import "./custom.css";
import { Accordion, AccordionSummary, Button, Container, Grid, TextField } from "@material-ui/core";
import { ExpandMore, PictureAsPdf, Print, Publish, Save } from "@material-ui/icons";
import documentos from "../../dados/templatesDocumentos";



export default () => {
    const classes = estiloIndex();
    const editorRef = useRef<Editor>(null);

    const { html, css } = documentos[0];

    return <>
        <br />
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <TextField label="Título do Documento" variant="outlined" value={"Novo Documento"} className={classes.Input} />
                    <br /><br />
                    <Editor
                        ref={editorRef}
                        // onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={html}

                        init={{
                            language: "pt_PT",
                            height: 'calc(100vh - 170px)',
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount noneditable'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help fullscreen',
                            content_style: css,
                            noneditable_editable_class: 'mce'
                        }} />
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Cliente" variant="outlined" value={"Márcia da Silva"} className={classes.Input} />
                    <br /><br />
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>Jurisprudências</AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>Embasamentos Legais</AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>Ações Semelhantes</AccordionSummary>
                    </Accordion>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Button fullWidth endIcon={<Save />} variant="contained" className={classes.botaoAcao1}>Salvar</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth endIcon={<PictureAsPdf />} variant="contained" className={classes.botaoAcao2} onClick={()=>{
                                    
                                }}>PDF </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth endIcon={<Print />} variant="contained" className={classes.botaoAcao3}>Imprimir  </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth endIcon={<Publish />} variant="contained" className={classes.botaoAcao4}>PJE  </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </>
}