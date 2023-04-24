import '../../css/style.css'
import React, {Component} from "react"
import {Link} from "react-router-dom" 
import firebase from '../../Firebase';

class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
          email: "",
          senha: "",
          nome: "",
          sobrenome: "",
          dtnasc: ""
      }

      this.logar = this.logar.bind(this);

  }

  async logar (){
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then( ()=>{
      window.location.href = '/Interna'
    })
    .catch((erro)=>{
      if(erro.code === 'auth/invalid-email'){
        alert("E-mail inválido");
      }
      if(erro.code === 'auth/user-not-found'){
        alert("E-mail não cadastrado");
      }
      if(erro.code === 'auth/wrong-password'){
        alert("Senha incorreta");
      }
    })
  }

  render(){
      return (
          <div>

              <h1>Faça seu Login</h1>
              <input type='email' placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} /><br/><br/>
              <input type='password' placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} /><br/><br/>
              <button onClick={this.logar}>Logar</button> <br/><br/><br/>
              <Link to="/">Voltar</Link>
          </div>
      )
  }

}
export default Login