import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ members: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { members, searchfield } = this.state;
    const filteredMembers = members.filter(member =>{
      return member.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !members.length ?
      <h1>Loading</h1> :
      (
       

            <div className='tc'>
            <h1 className='f1'>Members</h1>
    

          <SearchBox searchChange={this.onSearchChange}/>


          <Scroll>
            <CardList members={filteredMembers} />
          </Scroll>

          <footer>
              Gemaakt door <i><a href="http://www.serginomartina.com">Sergino martina</a></i>
          </footer>





        </div>


      );
  }
}

export default App;