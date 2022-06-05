//import logo from './logo.svg';
import React ,{Component} from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';





class App extends Component 
{
  state=
  {
    Users: [],
    loading: false,
  }
    async componentDidMount() {
    
    this.setState({loading: true});
    
    const res = await    axios.get('https://api.github.com/users?client_id=6e4e472d6a37f33587c4&client_secret=23da6de9ec2d16ef1beb0d3797ac274af2e740ba');
    //console.log(res.data);
    this.setState({Users: res.data , loading:false});
  }

searchUsers = async text =>{
    this.setState({loading: true});
    
    const res = await    axios.get(`https://api.github.com/search/users?q=${text}&client_id=6e4e472d6a37f33587c4&client_secret=23da6de9ec2d16ef1beb0d3797ac274af2e740ba`);
    //console.log(res.data);
    this.setState({Users: res.data.items , loading:false});  
  };
  
  render()
  {
    return(
      <div className='App'>

        <Navbar></Navbar>
        
        <div className="container">
            <Search searchUsers={this.searchUsers}></Search>
            <Users loading={this.state.loading} Users={this.state.Users}></Users>
        </div>

        
        
      </div>
    )
  }
}
export default App;