import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      productList: []
    }

    this.addProduct = this.addProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  
  componentDidMount(){
    axios.get('/api/inventory')
    .then((res) => {
      this.setState({
        productList: res.data
      })
    })
  }


  addProduct(body){
    axios.post('/api/product', body)
    .then((res) => {
      this.setState({
        productList: res.data
      })
    })
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
    .then( (res) => {
      this.setState({
          productList: res.data
        })
    })
  }

  editProduct(id, edit){
    axios.put(`/api/product/${id}`, edit)
    .then( (res) => {
      this.setState({
          productList: res.data
        })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-display">
            {/* <Form add={this.addProduct}/>
            <Dashboard 
              products={this.state.productList} 
              deleteFn={this.deleteProduct}/> */}

            {routes}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
