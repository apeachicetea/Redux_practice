import './App.css';
import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Data from './Data';
import List from './List';
import Home from './Home';
import Detail from './Detail'
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';



function App() {

  const [shoes, setShoes] = useState(Data);
  const [재고, 재고변경] = useState([10, 11, 12]);

  const lists = Data.map((list, i) => {
    return (
      <div className="col-md-4" key={ list.id }>
        <img src={"https://codingapple1.github.io/shop/shoes" +  (i + 1)  + ".jpg"}/>
        <h4>{ list.title }</h4>
        <p>{ list.content } & { list.price }</p>
      </div>
    );
  });

  const Lists = shoes.map((el, i) => {
    return (
      <List shoes={ el } i={ i } key = { i }/>
    );
  });

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand><Link to="/" className="link">Apeachicetea</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/detail" className="link">Detail</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar> 
  
      <Switch>
        <Route exact path="/">
          <Home />
          <div className="container2">
            <div className="row">
              { Lists }
            </div>
            <button className="btn btn-primary" onClick={()=>{

              axios.post('서버URL', { id : 'codingapple', pw : 1234 });

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{ 

                console.log(result.data);
                setShoes([...shoes, ...result.data]);
              })
              .catch(()=>{ 

                console.log('실패');
              })
            }}>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={ shoes } 재고={ 재고 } 재고변경={ 재고변경 } />
        </Route>
      </Switch>


      
      



      
          {/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg"/>
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].content } & { shoes[0].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg"/>
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].content } & { shoes[1].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg"/>
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].content } & { shoes[2].price }</p>
          </div> */}

        {/* <List shoes={ shoes[0] } />
        <List shoes={ shoes[1] } />
        <List shoes={ shoes[2] } /> */}

        {/* {

          shoes.map((el, i) => {
            return (
              <List shoes={ shoes[i] } />
            );
          })

        } */}

        {/* { Lists } */}

     


    </div>
  );
}

export default App;
