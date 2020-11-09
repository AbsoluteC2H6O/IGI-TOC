class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios({
      method: 'post',
      url: 'wwww.ignisgravisas.com/sdflsdf/train-client',
      data: {
        title: this.state.value,
      }
    })
    .then((response) => {
      alert('Tus cambios fueron guardados')
    	}, (error) => {
      alert('Ups, no pudimos')
    });

      event.preventDefault();
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}