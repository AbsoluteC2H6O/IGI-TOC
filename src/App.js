import React, { RangeSlider, Component } from 'react';
import { Alert,Radio, Modal, Button, FormGroup, ControlLabel, FormControl, Panel, Tabs, Tab, InputGroup } from 'react-bootstrap';
/**
 *Informe Semanal de Avances - ISA*

*Team TOC_Space*

*Miembros y responsabilidad*
Alfredo
Gerard

*1. ¿Qué logró ejecutar?*

1. Validaciones de entradas de texto en los cuadros de ingresos de informacion. (vaciado de los recuadros de anadir segmento y circunstancia tras clckear el boton “agregar”)
2. Estados de los componentes, informacion agregada para mostrar (al anadir un nuevo segmento de cliente y una nueva circunstancia, mostrando las circunstancias actuales)
3 Reduccion de componentes.
4. Almacenamiento temporal de la informacion ingresada por segementos de clientes y circunstancias, permanencia (hasta ahora sin Base de datos) para la descrcipcion de las circunstaccias y planteamientos y soluciones.
5. Solucion a inconvenientes, errores o problemas con las funciones ya implementadas.
6.Almacenamiento temporal del resto de datos ingresados y validaciones.
7. Solucionados los problemas generados al agregar un nuevo segmento de cliente y circunstancia, asi como el inconveniente de la apertura del modal en el que se perdia la informacion segmento de cliente tras el cierre de la ventana.

*2. ¿Qué no logró ejecutar?*
solucion  para extraccion de algunos componentes,solucion problema al agregar un nuevo segmento de cliente luego de haber agregado una circuntancia y cerrado la vista del modal del formulario.

3. ¿Problemas o Necesidades encontradas?
cortes eléctricos,fallas de Internet.

*4. ¿Qué ejecutará en la próxima semana?*
a. Especificación de la Estación Primer Usuario.
b. Diseno grafico de la vista del formulario de la etapa 1.
c. Pruebas con el ingreso de datos del formulario y las validaciones.
d. Correciones de la implementacion de ser necesarias y de los mensajes de alertas.

*Fin del ISA.*
 */


 
const ChildOne = ({ updateText }) => {
  return <h1>The sum is: {updateText}</h1>;
};
class ChildOne1 extends Component{
  constructor(props){
    super(props);
    this.state={
      value: 10,
      updateText1: this.props.updateText
    };
  };

  render(){
    return(
      <>
      <h1>The sum is: {this.state.updateText1}</h1>
      </>
    );
  }
}

class IgText extends Component {
  constructor(props) {
    super(props);
    this.state = {

      charsLeft: this.props.charsLeft2,
      charsLimit: false,
      postText: this.props.updateText
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
  };
  handleChange(e) {
    const text = e.target.value;
    
    this.setState({
      charsLeft: text.length,
      charsLimit: text.length >= this.props.charsLeft2 ? true : false,
      postText: text, 
     
    });
    console.log(text.length >= this.props.charsLeft2 ? true : false)
   
  
  }
  handleDismiss() {
    this.setState({charsLimit: false});
  }
  handleShow() {
    this.setState({ show: true });
  }


  /*
   handleInputDesc(event){
    const {segmentClient} = this.state;
    const inpuntE = this.inputEl2.value;
    segmentClient.circunstanceDesc.push(inpuntE);
    this.setState({segmentClient});
    this.inputEl2.value= "";
  }
  */
  render() {

  
    return (

      <>
        <div className="container-fluid">
          <FormGroup controlId="formControlsTextarea">
            <div className="row">
            
              <div className="col-xs-4 col-md-4">
                  <ControlLabel> Descripcion: </ControlLabel> 
              </div>
              <div className="col-xs-8 col-md-8 text-center">
              </div>
            </div>
              <div className="row">
                <FormControl
                  componentClass="textarea" placeholder="descripcion: "
                  //text={this.state.postText}
                  pattern="[A-Za-z0-9]{1,15}"
                  maxlength={this.props.charsLeft2}
                  inputRef={el => this.inputText=el}
                  onChange={this.handleChange}
                  value={this.state.postText}
                  //onChange={this.handleInputDesc}

                />
                { this.state.charsLimit ? (
                <Alert bsStyle="info" onDismiss={this.handleDismiss}>
                  <h4>Haz alcanzado el limite de caracteres permitidos!</h4>
                  <p>
                  </p>
                  <p>
                    <Button bsStyle="success">Ok</Button>
                    <span> or </span>
                    <Button onClick={this.handleDismiss}>Ocultar Alerta</Button>
                  </p>
                </Alert> 
                ): ''
                }
              </div>
              <div className="row">
                <div className="col-xs-10 col-md-10 text-center">
                </div>
                <div className="col-xs-2 col-md-2 text-right">
    <p>{this.state.charsLeft}/{this.props.charsLeft2}</p>
                </div>
              </div>
          </FormGroup>
        </div>
      </>
    );
  }
}
const SimpleSlider = () => {

  const [value, setValue] = React.useState(50);

  return (
    <RangeSlider
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );

};
class IgPanel extends Component {

  render() {
    return (
      <>
        <div className="panelIzq">
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h2" 
              className="text-center">{this.props.title}
            </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Tabs defaultActiveKey={0} id="Planteamientos-tab">
              {this.props.tabs.map((i, index) => (<Tab eventKey={index} title={i}>
                <IgText charsLeft2={this.props.charsLeft1}/></Tab>))}
              </Tabs>
              <div className="row text-center">
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Agudo
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    Fuerte
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    Regular
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    Leve
                  </Radio>{' '}
                </FormGroup>
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </>
    );
  }
}

class FormToc extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleIGcircuntance = this.handleIGcircuntanc.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputSeg = this.handleInputSeg.bind(this);
    this.handleInputCic = this.handleInputCic.bind(this); 
    this.handleChangeSeg = this.handleChangeSeg.bind(this);
    this.handleChangeCic = this.handleChangeCic.bind(this);

    this.state = {
      updateText: 'asdsd',
      show: false,
      circunstanceChar: 150,
      PanelChar: 80,
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
      },
      segmentClient:{
        currentSeg: 0,
        optionSeg: [
          'Segmento 1',
          'Segmento 2'
        ],
        currentCic: 0,
        circunstanceSeg: [
          'Circunstancia 1',
          'Circunstancia 2'
        ],
        circunstanceDesc: [
          'Descripcion Circunstancia 1',
          'Descripcion Circunstancia 2'
        ],
        actividad: [
          'Description Actividad 1.',
          'Description Actividad 2.'
        ],
        molestias:[

        ],
        Deseos: [
          'Descripcion Deseos 1.',
          'Descripcion Deseos 2.'
        ],
        culturas:[
          'Descripcion Cultura 1.',
          'Descripcion Cultura 2.'
        ],
        propuestas: [
          'Descripcion Propuestas 1.',
          'Descripcion Propuestas 2.'
        ],
        alivios: [
          'Descripcion Alivios 1.',
          'Descripcion Alivios 2.'
        ],
        satisfacciones: [
          'Descripcion satisfacciones 1.',
          'Descripcion satisfacciones 2.'
        ],
        suCultura:[
          'Descripcion Su Cultura 1.',
          'Descripcion Su Cultura 2.'
        ]
        /*
         circunstancesAll: {
          currentCic2: 0,
          circuntanceDesc:{
            circunstance1: {
              circunstanceDesc: 'Descripcion de la circunstancia 1.',
              actividad: 'Description Actividad 1.',
              molestias: 'Descripcion Molestia 1.',
              deseos:'Descripcion Deseos 1.',
              cultura: 'Descripcion Cultura 1.',
              propuestas: 'Descripcion Propuestas 1.',
              alivios: 'Descripcion Alivios 1.',
              satisfacciones: 'Descripcion satisfacciones 1.',
              suCultura: 'Descripcion su cultura 1.'

            },
            circunstance2: {
              circunstanceDesc: 'Descripcion de la circunstancia 2.',
              actividad: 'Description Actividad 2.',
              molestias: 'Descripcion Molestia 2.',
              deseos:'Descripcion Deseos 2.',
              cultura: 'Descripcion Cultura 2.',
              propuestas: 'Descripcion Propuestas 2.',
              alivios: 'Descripcion Alivios 2.',
              satisfacciones: 'Descripcion satisfacciones 2.',
              suCultura: 'Descripcion su cultura 2.'
            },
    

          }
          
        },
        
        */
       

        

      }
    };
}

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    this.setState({ show: true});
   // this.setState({value: e.target.value});
   // this.setState({currentSeg: this.inputEl.currents});
   // console.log(`seleccion 
    //${this.state.segmentClient.optionSeg[this.state.segmentClient.currentSeg]}`);

  }
  handleSubmit(event) {
    alert("El formulario a sido enviado, ha modificado IDEA.")

    event.preventDefault();
  }
  handleChangeSeg(event){
    const {segmentClient} =this.state;
    segmentClient.currentSeg = event.target.value;
    this.setState({segmentClient});
   // console.log(event.target.value);
  }
  handleChangeCic(event){
    const {segmentClient} =this.state;
    segmentClient.currentCic = event.target.value;
    this.setState({segmentClient});
   // console.log(event.target.value);
  }
  handleChange(event){
    //this.segmentClient.currentSeg.setState(currents);
   // this.setState({currentSeg: event.target.currents});
   // this.setState({value: event.target.value});
    //console.log(`selecciono ${event.target.currents}`);
    //console.log(`${this.state.segmentClient.currentSeg}`);
    //this.setState({currentSeg: currents});

  }
  
    /*
    tabs = [1,2,3,4]																																											  
    const tabs = this.state.tabs;tabs.push(text);	
    this.setState({ tabs: tabs})
    */
     
  
  handleInputSeg(event){
   // let index1 = e.target.selectedIndex;
   // console.log(e.target.options[index1].text); // obtiene el texto de la opción seleccionada
   /*
    por corregir
    console.log(`Anadiste ${event.target.value}`+ 
    'a segmentos de cliente');
    this.setState({value: event.target.value});
    this.setState({currentSeg: event.target.index});
    console.log(`editado ${this.state.segmentClient.currentSeg}`);
      */
     //para modiicar nietos
    const {segmentClient} =this.state;
    const inputE = this.inputEl.value;
    //tabs.push(inputE);
    //agregamos al nuevo segmenClient 
    segmentClient.optionSeg.push(inputE);
    //console.log(`Actualizado: ${segmentClient}`);
    //automaticamente se sabe el valor que va buscar en esa varibale
    
    this.setState({segmentClient});
    this.inputEl.value= "";
 
   
  // this.setState({optionSeg.push(value):value});
  }
  handleInputCic(event){
    const {segmentClient} = this.state;
    const inpuntE = this.inputEl1.value;
    segmentClient.circunstanceSeg.push(inpuntE);
    this.setState({segmentClient});
    this.inputEl1.value= "";
    //const tabs =this.state.segmentClient.circunstanceSeg;
    //const inputE = this.inputEl1.value;
   // tabs.push(inputE);
    //console.log(`Actualizado: ${tabs}`);
    //this.setState({circunstanceSeg:tabs});
  }
  handleInputDesc(event){
    const {segmentClient} = this.state;
    const inpuntE = this.inputEl2.value;
    segmentClient.circunstanceDesc.push(inpuntE);
    this.setState({segmentClient});
    this.inputEl2.value= "";
  }
/*
  handleIGcircuntance(event,index1){
    this.setState({currentCic: index1});
  }
  handleIGsegment(event, index2){
    this.setState({currentSeg: index2})
  }
*/
  render() {

    return (
      
      <>
        <div className="ModalB3 container-fluid ">
          <div className="row">
         {/* <ChildOne1 updateText={this.state.updateText}/> */}
            <div className="col-xs-12 col-md-12 text-center">
              <p>Vista Etapa Observacional</p>
            </div>
            <div className="row">
							<div className='col-xs-3 col-md-3 text center'>
							</div>
              <div className='col-xs-6 col-md-6 text center'>
                  {/*
                  <IgSelector optionSel={this.state.segmentClient.optionSeg} showSelect={this.state.show}/>
                   <IgSelector optionSel={this.state.segmentClient.optionSeg} showSelect={this.state.show}/>
                   */}
              <div className="row">
                <div className="col-xs-12 col-md-12 text center">
                  
                <FormGroup>
                  <InputGroup>
                  <InputGroup.Addon>Nuevo Segmento: </InputGroup.Addon>
                  <FormControl 
                    type="text"
                    bsStyle="primary" 
                    bsSize="large"
                    inputRef={el => this.inputEl=el}
                  />
                  <InputGroup.Button>
                    <Button
                      bsStyle="primary" 
                      bsSize="large"
                      onClick={this.handleInputSeg}
                      //onClick={this.handleChange}
                    >
                      Agregar
                    </Button>
                  </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
                
                </div>
              </div>
              <div className="row">
              
							<div className="col-xs-12 col-md-12 text-center">
              <FormControl 
                  
                  componentClass="select" 
                  placeholder="Segmento de Cliente" 
                  onClick={this.handleShow} 
                  bsStyle="primary" 
                  bsSize="large"
                  defaultValue="seleccionar segmento de cliente"
                  onChange={this.handleChangeSeg}
                 // inputRef={currents => this.inputEl=currents }
                  //onChange={this.handleChange}
              >
                
                <option value="seleccionar segmento de cliente" disabled>Seleccionar Segmento de Cliente</option>
								{this.state.segmentClient.optionSeg.map((i,index)=> (
                
                 
								<option key={index} value={index}>	
                {i} 
								</option>)) }
                
							</FormControl>
							</div>
						</div>
              
              </div>
              <div className='col-xs-3 col-md-3 text center'>
							</div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <Modal
                  {...this.props}
                  bsSize="lg"
                  className="fullscreen-modal"
                  aria-labelledby="contained-modal-title-lg"
                  show={this.state.show}
                  onHide={this.handleClose}
                >
                  <Modal.Header closeButton>
                <Modal.Title className="text-center">
                  {this.state.segmentClient.optionSeg[this.state.segmentClient.currentSeg]}
                </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div className="row">
                  <div className="col-xs-12 col-md-12 text center">
                    
                  <FormGroup>
                    <InputGroup>
                    <InputGroup.Addon>Nueva circunstancia: </InputGroup.Addon>
                    <FormControl 
                      type="text"
                      bsStyle="primary" 
                      bsSize="large"
                      inputRef={el => this.inputEl1=el}
                    />
                    <InputGroup.Button>
                      <Button
                        bsStyle="primary" 
                        bsSize="large"
                        onClick={this.handleInputCic}
                      >
                        Agregar
                      </Button>
                    </InputGroup.Button>
                    </InputGroup>
                  </FormGroup>
                  </div>
                </div>
                    <form>
                      <FormGroup controlId="formControlsSelect">
                        <div className="row">
                          <ControlLabel className="col-xs-12 col-md-12 text-center">
                <h4> {this.state.segmentClient.circunstanceSeg[this.state.segmentClient.currentCic]}</h4>
                          </ControlLabel>
                        </div>
                        <div className="row">
                         
                          <div className="col-xs-12 col-md-12 text-center">
                           
                            <FormControl 
                            componentClass="select" 
                            placeholder="Circunstance"
                            onClick={this.handleShow} 
                            bsStyle="primary" 
                            bsSize="large"
                            defaultValue="circunstancia 1"
                            onChange={this.handleChangeCic}
                            >
                               
                            <option value="seleccionar circunstancia" 
                              disabled>
                                Seleccionar Circunstancia
                            </option>
                            {this.state.segmentClient.circunstanceSeg.map((i,index)=> (
                            <option key={index} value={index}>	
                            {i}
                            </option>))}
                            </FormControl>
                          </div>
                        </div>
                        <IgText 
                          charsLeft2={this.state.circunstanceChar}
                            updateText={this.state.updateText}
                        />
                       
                          
                        <div className="RangeSlider row">
                          <div className="col-xs-6 col-md-6 text-left">
                            <h4>Siempre</h4>
                          </div>
                          <div className="col-xs-6 col-md-6 text-right">
                            <h4>Rara vez</h4>
                          </div>
                        </div>
                        <input id="slider2" type="range" min="0" max="20">
                        </input>
                      </FormGroup>
                    </form>
                    <div className="row-fluid">
                      <div className="col-xs-12 col-md-6 text center">
                      <IgPanel charsLeft1={this.state.PanelChar} title={this.state.panelIzq.title} tabs={this.state.panelIzq.tabs}/>
                      </div>
                      <div className="col-xs-12 col-md-6 text-center">
                      <IgPanel charsLeft1={this.state.PanelChar} title={this.state.panelDer.title} tabs={this.state.panelDer.tabs}/>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleClose}>Cerrar</Button>
                    <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Enviar Formulario</Button>
                    {/*aqui no entendi porque no funciono hacer onSbmit tuve que usar onClick */}
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}







const countries = [
  {
    value: 'ecuador',
    name: 'Ecuador'
  },
  {
    value: 'mexico',
    name: 'México'
  },
  {
    value: 'uruguay',
    name: 'Uruguay'
  },
  {
    value: 'peru',
    name: 'Perú'
  },
  {
    value: 'argentina',
    name: 'Argentina'
  },
];
//prueba para slector
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'uruguay'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(`Seleccionaste ${event.target.value}`);
    this.setState({value: event.target.value});
    setTimeout(() => console.clear(), 1000);
  }

  handleSubmit(event) {
    alert('Tu país es: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Elije un país:
          {' '}
          <select value={this.state.value} onChange={this.handleChange}>
            {countries.map(country => <option key={country.value} value={country.value}>{country.name}</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default FormToc;
