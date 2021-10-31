import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            props.state.map((el, i)=>{
              return (
                <tr key={ i }>
                  <td>{ el.id }</td>
                  <td>{ el.name }</td>
                  <td>{ el.quan }</td>
                  <td>변경</td>
                </tr>
              )
            })
          }
        </tbody>
    </Table>
  </div>
  )
}


function state를props화(state){
  return {
    state : state
  //state라는 이름의 props로 바꿔준다는 의미
  }
}

export default connect(state를props화)(Cart);