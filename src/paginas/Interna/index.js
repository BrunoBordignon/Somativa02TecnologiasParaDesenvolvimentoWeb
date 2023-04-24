import '../../css/style.css'
import React, {Component} from "react"
import {Link} from "react-router-dom" 
import firebase from '../../Firebase';

class Interna extends Component {
  constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        dtnasc: ""
      }
  }

  async componentDidMount(){

    firebase.auth().onAuthStateChanged(async (usuario) => {

          if (usuario) {
              var uid = usuario.uid;

              await firebase.firestore().collection("usuario").doc(uid).get()
                  .then((retorno) => {
                      this.setState({
                          nome: retorno.data().nome,
                          sobrenome: retorno.data().sobrenome,
                          dtnasc: retorno.data().dtnasc,
                      });
                  });
          }
      })

  }

  render(){
      return (
          <div>
            <h1>Bem vindo, você está logado</h1>

            Nome: {this.state.nome} <br/>
            Sobrenome: {this.state.sobrenome}<br/>
            Data de Nascimento: {this.state.dtnasc}<br/>

            <br/>
            <Link to="/"> Deslogar </Link>
            <br/>

            <br/><br/>
            <h2>Trabalho realizado para a Disciplina: Tecnologia Para Desenvolvimento Web</h2>
            <h2>Aluno: Bruno Otavio B. Bordignon</h2>
            <h2>Somativa 02 - PUCPR 2023</h2>

          </div>
      )
  }

}
export default Interna 

