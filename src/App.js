import React, { RangeSlider, Component } from 'react';
import { Radio, Modal, Button, FormGroup, ControlLabel, FormControl, Panel, Tabs, Tab, InputGroup } from 'react-bootstrap';


class IgText extends Component {
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
                  componentClass="textarea" placeholder="Descripcion: "
                  text={this.state.postText}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <div className="col-xs-10 col-md-10 text-center">
                </div>
                <div className="col-xs-2 col-md-2 text-right">
                  <p>{this.state.charsLeft}/80</p>
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
              <Tabs defaultActiveKey={1} id="Planteamientos-tab">
              {this.props.tabs.map((i, index) => (<Tab eventKey={index} title={i}>
                <IgText/></Tab>))}
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
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      value: 0,
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
      },
      segmentClient:{
        currentSeg: 0,
        value: '',
        optionSeg: [
          'Segmento 1',
          'Segmento 2'
        ],
        currentCic: 0,
        circunstanceSeg: [
          'Circunstancia 1',
          'Circunstancia 2'
        ]
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
     
  
  handleInput(event){
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
    const tabs =this.state.segmentClient.optionSeg;
    const inputE = this.inputEl.value;
    tabs.push(inputE);
    console.log(`Actualizado: ${tabs}`);
    this.setState({optionSeg:tabs});
 
   
  // this.setState({optionSeg.push(value):value});
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
    var currents=0;
    var currentc=0;
   

    return (
      
      <>
        <div className="ModalB3 container-fluid ">
          <div className="row">
            <div className="col-xs-12 col-md-12 text-center">
              <p>Vista Etapa Observacional</p>
              {
                /*
                <Button bsStyle="primary" bsSize="largue"
                onClick={this.handleShow}>
                Seleccionar segmento de cliente
              </Button>
                */
              }
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
                      onClick={this.handleInput}
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
                  inputRef={currents => this.inputEl=currents }
                  //onChange={this.handleChange}
              >
                
                <option value="seleccionar segmento" disabled>Seleccionar Segmento de Cliente</option>
								{this.state.segmentClient.optionSeg.map((i,index)=> (
                
                 
								<option  onChange={this.handleChange.bind(this,index)} key={index} value={i} currents={index}>	
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
                      //inputRef={el => this.inputEl=el}
                    />
                    <InputGroup.Button>
                      <Button
                        bsStyle="primary" 
                        bsSize="large"
                        onClick={this.handleInput}
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
                          <ControlLabel>
                              Circunstancia
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
                            //onChange={this.handleChange(currentC)}
                            >
                               
                            <option value="seleccionar circunstancia" 
                              disabled>
                                Seleccionar Circunstancia
                            </option>
                            {this.state.segmentClient.circunstanceSeg.map((i,index)=> (
                            <option key={index} value={i} currentc={index}>	
                            {i}
                            </option>))}
                            </FormControl>
                          </div>
                        </div>
                        <IgText/>
                       
                        <div className="RangeSlider row">
                          <div className="col-xs-6 col-md-6 text-left">
                            <h4>Siempre</h4>
                          </div>
                          <div className="col-xs-6 col-md-6 text-right">
                            <h4>Rara vez</h4>
                          </div>
                        </div>
                        <input id="slider2" type="range">
                          {
                            /* si agregos estos atributos deberia posiconar valores maxims, no compila
                            <input id="slider2" type="range" min="0" max="5" value="1" step="1"> 
                            */
                          }
                        </input>
                      </FormGroup>
                    </form>
                    <div className="row-fluid">
                      <div className="col-xs-12 col-md-6 text center">
                      <IgPanel title={this.state.panelIzq.title} tabs={this.state.panelIzq.tabs}/>
                      </div>
                      <div className="col-xs-12 col-md-6 text-center">
                      <IgPanel title={this.state.panelDer.title} tabs={this.state.panelDer.tabs}/>
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
