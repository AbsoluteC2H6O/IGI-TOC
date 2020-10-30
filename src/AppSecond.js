class IgSelector extends Component{
	constructor(props){
		super(props);
		this.state = {
		
			segmentClient:{
				optionSeg: [
					'Segmento 1',
					'Segmento 2'
				],
				circunstanceSeg: [
					'Circunstancia 1',
					'Circunstancia 2'
				]
			}
		};
	}


    render(){
        return(
            <>
						<div className="row">
							<div className="col-xs-12 col-md-6 text-center">
							<FormControl 
									componentClass="select" 
									placeholder="Seleccionar Segmento de Cliente"
									onClick={this.handleShow}
									bsStyle="primary"
									bsSize="largue"
									>	
									<IgSelector optionSel={this.state.segmentClient.optionSeg}/>
							</FormControl>
								<option value="Segmento: 0"> Seleccionar segmento de cliente: </option>
								
								{this.props.optionSel.map((i,index)=> (
								<option value="Segmento: {index} ">
								{i}	
								</option>))}''
							
							</div>
						</div>
            </>
        );
    }
}
class Forma extends Component{
	render(){
		return(

			<>
			<div>
			
			</div>
			</>

		);
	}
}

export default Forma;