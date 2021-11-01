import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

function Cart(props) {

  let state = useSelector((state) => state);
  console.log(state);
  console.log(state.reducer);
  
  let dispatch = useDispatch();

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
            state.reducer.map((el, i)=>{
              return (
                <tr key={ i }>
                  <td>{ el.id }</td>
                  <td>{ el.name }</td>
                  <td>{ el.quan }</td>
                  <td>
                    <button onClick={()=>{ dispatch({ type : '수량증가', payload : {name : 'kim'} })}}>+</button>
                    <button onClick={()=>{ dispatch({ type : '수량감소' })}}>-</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
    </Table>

    { 
      props.alert열렸니 === true
      ? (<div className="my-alert2">
      <p>지금 구매하면 신규할인 20%</p>
      <button onClick={()=>{ props.dispatch({ type : '닫힘' })}}>닫기</button>
    </div>)
      : null
    }      


  </div>
  )
}


// function state를props화(state){
//   console.log(state);
//   return {
//     state : state.reducer,
//     alert열렸니 : state.reducer2
//   }
// }

export default Cart;