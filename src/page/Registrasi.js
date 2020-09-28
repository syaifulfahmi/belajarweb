import React, {Component} from 'react';

class Registrasi extends Component {
	constructor(props){
		super(props)
		this.state = {
			judul: 'Contoh Judul',
			contohPerubahan: 'Judul yang akan diubah',
			valueFirstName: '',
			valueLastName: '',
			valueAddress: '',
			valueKodePos: ''
		}
		this.ubahState = this.ubahState.bind(this)
	}


	ubahState(namaValue,e){
		e.preventDefault()
		console.log(e.target.value)

		//Perubahan state secara reguler
	// 	this.setState({[namaValue]: e.target.value})
	// }

		//Perubahan state secara asynchronous
		var tampungData = e.target.value
		this.setState(function(state, props){
			return {
				[namaValue]: tampungData
			}
		});
	}		
		//merubah state dengan cara biasa/reguler (tidak boleh ada kata state dan props di dalamnya)
		// this.setState({judul : 'Merubah Judul Secara Reguler'})


		//merubah state dengan cara asynchronous ditulis dengan cara arrow function
		// this.setState((state, props) => ({
		// 	judul: state.contohPerubahan
		// }))


		//merubah state dengan cara asynchronous ditulis dengan function reguler
		// this.setState(function(state, props){
		// 	return {
		// 	judul: 'Merubah Judul Asynchronous secara Reguler Function'
		// 	}
		//  })

		

	render(){
		return(
			<div>
			<h2>{this.state.judul}</h2>
			<h5>First Name</h5>
			<p>{this.state.valueFirstName}</p>
			<input value={this.state.valueFirstName} onChange={(e)=>this.ubahState("valueFirstName",e)}/>
			<h5>=================</h5>

			<h5>Last Name</h5>
			<p>{this.state.valueLastName}</p>
			<input value={this.state.valueLastName} onChange={(e)=>this.ubahState("valueLastName",e)}/>
			<h5>=================</h5>

			<h5>Address</h5>
			<p>{this.state.valueAddress}</p>
			<input value={this.state.valueAddress} onChange={(e)=>this.ubahState("valueAddress",e)}/>
			<h5>=================</h5>

			<h5>Kode Pos</h5>
			<p>{this.state.valueKodePos}</p>
			<input value={this.state.valueKodePos} onChange={(e)=>this.ubahState("valueKodePos",e)}/>
			<h5>=================</h5>

			{
			// <button onClick={(e)=>this.ubahState(e)}>Klik Untuk Merubah</button>
			}
			</div>
		)
	}
}

export default Registrasi;