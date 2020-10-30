import React, { RangeSlider, Component } from 'react';
import { Radio, Modal, Button, FormGroup, ControlLabel, FormControl, Panel, Tabs, Tab } from 'react-bootstrap';
import { Formik } from 'formik';


class DescriptionShort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charsLeft: 80,
            charsLimit: false,
            postText: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };
    //handle change function 
    handleChange(e) {
        const text = e.target.value;
        this.setState({
            charsLeft: text.length,
            charsLimit: text.length > 80 ? true : false,
            postText: text,
        });
    }
    render() {
        return(
            <>
            <div className = "container-fluid">
                <div className = "row">
                    <FormGroup controlId = "formControlsTextarea">
                        <div className = "row">
                            <div className = "col-xs-2 col-md-2 text-center">
                                <ControlLabel> Descripcion: </ControlLabel> 
                            </div> 
                            <div className = "col-xs-10 col-md-10 text-center" >
                            </div> 
                        </div> 
                        <div className = "row" >
                            <FormControl componentClass = "textarea"
                                placeholder = "Descripcion: "
                                text = { this.state.postText }
                                onChange = { this.handleChange }/> 
                        <div> <div className = "col-xs-10 col-md-10 text-center" >
            </div> <div className = "col-xs-2 col-md-2 text-right" >
            <text > { this.state.charsLeft }/80</text >
            </div>
            </FormGroup > 
            </div>
            </div> 
            </>

        );
    }
}
const SimpleSlider = () => {

    const [value, setValue] = React.useState(50);

    return ( <
        RangeSlider value = { value }
        onChange = { e => setValue(e.target.value) }
        />
    );

};
class FormToc extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            panelIzq: {
                title: 'Planteamientos',
                tabs: [
                    'Actividad',
                    'Molestias',
                    'Deseos',
                    'Cultura'


                ]
            },
            panelDer: {
                title: 'Soluciones',
                tabs: [
                    'Propuestas',
                    'Alivios',
                    'Satisfacciones',
                    'Su cultura'

                ]
            }
        };

    }

    handleClose() {
        this.setState({ show: false });


    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
            return ( 
                <>
                <div className = "ModalB3 container-fluid " >
                <div className = "row" >
                <div className = "col-xs-12 col-md-12 text-center" >
                <p > Vista Etapa Observacional < /p> {
                /*
                                <Button bsStyle="primary" bsSize="largue"
                                onClick={this.handleShow}>
                                Seleccionar segmento de cliente
                              </Button>
                              */
            }

            <
            /div> <
            div className = "row" >
                <
                div className = 'col-xs-3 col-md-3 text center' >

                <
                /div> <
            div className = 'col-xs-6 col-md-6 text center' >
                <
                FormControl componentClass = "select"
            placeholder = "Segmento de Cliente"
            onClick = { this.handleShow }
            bsStyle = "primary"
            bsSize = "largue" >

                <
                option value = "Segmento: 0" > Seleccionar segmento de cliente < /option> <
            option value = "Segmento: 1" > Segmento de cliente: 1 < /option> <
            option value = "Segmento: 2" > Segmento de cliente: 2 < /option>

            <
            /FormControl> < /
            div > <
                div className = 'col-xs-3 col-md-3 text center' >

                <
                /div>

            <
            /div> <
            div className = "container-fluid" >
                <
                div >
                <
                Modal {...this.props }
            bsSize = "lg"
            className = "fullscreen-modal"
            aria-labelledby = "contained-modal-title-lg"
            show = { this.state.show }
            onHide = { this.handleClose } >
                <
                Modal.Header closeButton >
                <
                Modal.Title > [Segmento de cliente seleccionado] < /Modal.Title> < /
            Modal.Header > <
                Modal.Body >
                <
                form >
                <
                FormGroup controlId = "formControlsSelect" >
                <
                ControlLabel >
                Circunstancia <
                /ControlLabel> <
            div className = "row" >
                <
                div className = "col-xs-9 col-md-9 text-center" >
                <
                input type = "text" / > < button > Add < /button> <
            FormControl componentClass = "select"
            placeholder = "Circunstance" >

                <
                option value = "Circunstancia" > Circunstancia: 1 < /option> <
            option value = "Circunstancia" > Circunstancia: 2 < /option> {
                /*
                NO se como hace dinamico el anadir options a circuntancias y vincular
                lo que sse escribe en el textarea para meterlo aca
                */
        } <
        /FormControl>

    <
    /div> <
    div className = "col-xs-3 col-md-3" >
        <
        Button bsStyle = "primary"
    bsSize = "largue" >
        Agregar +
        <
        /Button> < /
    div > <
        /div>

    <
    DescriptionShort / > {
            /* si estoy en lo correcto esto deberia funcionar para la funcion constante
                      SImpleSlider
                      <div className="SliderRange">
                      {SimpleSlider}
                      
                    </div> */
        } <
        div className = "RangeSlider row" >
        <
        div className = "col-xs-6 col-md-6 text-left" >
        <
        h4 > Siempre < /h4> < /
    div > <
        div className = "col-xs-6 col-md-6 text-right" >
        <
        h4 > Rara vez < /h4> < /
    div > <
        /div> <
    input id = "slider2"
    type = "range" > {
            /* si agregos estos atributos deberia posiconar valores maxims, no compila
            <input id="slider2" type="range" min="0" max="5" value="1" step="1"> 
            */
        } <
        /input> < /
    FormGroup > <
        /form>

    <
    div className = "row-fluid" >
        <
        div className = "col-xs-12 col-md-6 text center" >
        <
        IgPanel title = { this.state.panelIzq.title }
    tabs = { this.state.panelIzq.tabs }
    /> < /
    div > <
        div className = "col-xs-12 col-md-6 text-center" >
        <
        IgPanel title = { this.state.panelDer.title }
    tabs = { this.state.panelDer.tabs }
    /> < /
    div >


        <
        /div> < /
    Modal.Body > <
        Modal.Footer >
        <
        Button onClick = { this.handleClose } > Cerrar < /Button> <
    Button bsStyle = "primary"
    type = "submit" > Enviar Formulario < /Button> < /
    Modal.Footer > <
        /Modal> < /
    div > <
        /div> < /
    div > <
        div >
        <
        /div> < /
    div > <
        />

);
}
}

class IgPanel extends Component {

    render() {
        return ( <
            >
            <
            div className = "panelIzq" >
            <
            Panel bsStyle = "primary" >
            <
            Panel.Heading >
            <
            Panel.Title componentClass = "h2"
            className = "text-center" > { this.props.title } < /Panel.Title> < /
            Panel.Heading > <
            Panel.Body > {

                /* tabs = [1,2,3,4]


              const tabs = this.state.tabs;
              tabs.push(text);
                this.setState({ tabs: tabs})
*/
            }

            <
            Tabs defaultActiveKey = { 1 }
            id = "Planteamientos-tab" > {
                this.props.tabs.map((i, index) => ( <
                    Tab eventKey = { index }
                    title = { i } >
                    <
                    DescriptionShort / >
                    <
                    /Tab>
                ))


            }

            <
            /Tabs> <
            div className = "row text-center" >
            <
            FormGroup >
            <
            Radio name = "radioGroup"
            inline >
            Agudo <
            /Radio>{' '} <
            Radio name = "radioGroup"
            inline >
            Fuerte <
            /Radio>{' '} <
            Radio name = "radioGroup"
            inline >
            Regular <
            /Radio>{' '} <
            Radio name = "radioGroup"
            inline >
            Leve <
            /Radio>{' '} < /
            FormGroup > <
            /div> < /
            Panel.Body > <
            /Panel> < /
            div > <
            />
        );
    }
}

//example formik
const Basic = () => ( <
    div >
    <
    h1 > Anywhere in your app! < /h1> <
    Formik initialValues = {
        { email: '', password: '' }
    }
    validate = {
        values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }
    }
    onSubmit = {
        (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    } > {
        ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => ( <
            form onSubmit = { handleSubmit } >
            <
            input type = "email"
            name = "email"
            onChange = { handleChange }
            onBlur = { handleBlur }
            value = { values.email }
            /> { errors.email && touched.email && errors.email } <
            input type = "password"
            name = "password"
            onChange = { handleChange }
            onBlur = { handleBlur }
            value = { values.password }
            /> { errors.password && touched.password && errors.password } <
            button type = "submit"
            disabled = { isSubmitting } >
            Submit <
            /button> < /
            form >
        )
    } <
    /Formik> < /
    div >
);


export default FormToc;