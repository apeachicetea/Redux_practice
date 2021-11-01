import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Nav, Link } from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';
import axios from 'axios';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';



function Detail(props) {

  const [alert, setAlert] = useState(true);
  const [msg, setMsg] = useState('');
  const [tab, setTab] = useState(0);
  const [swit, setSwit] = useState(false);

//useEffect 컴포넌트 등장/업데이트시 실행됨.
  useEffect(() => {
    let 타이머 = setTimeout(()=>{ setAlert(false) } , 2000);
    console.log('hi');
    return () => { clearTimeout(타이머) };
  }, []);



  const history = useHistory();
  const { id } = useParams();
  const 찾은상품 = props.shoes.find(function(상품){
    return 상품.id === Number(id)
  });

  return (
    <div className="container">
      
      <div className="box">
        <div className="red">Detail</div>
      </div>

      
      <input type="text" onChange={(e) => {
        setMsg(e.target.value);
      }} />

      {
        alert === true
        ? (<div className="my-alert">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>)
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id + 1) + ".jpg"} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>

          <Info 재고={ props.재고 }/>

          <button className="btn btn-danger" onClick={()=>{
            let newArray = [...props.재고];
            newArray = [9, 10, 11];
            props.재고변경(newArray);

            props.dispatch({ type : '항목추가', payload : { id : 찾은상품.id, name : 찾은상품.title, quan : 2} });
            history.push('/cart');

          }}>주문하기</button>
          <Button variant="success" onClick={() => { 
            history.goBack();
          }}>뒤로가기</Button>{' '}
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{setTab(0); setSwit(false)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{setTab(1); setSwit(false)}}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{setTab(2); setSwit(false) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <CSSTransition in={ swit } classNames="wow" timeout={500}>
        <TabContent tab = { tab } setSwit = { setSwit }/>
      </CSSTransition>

    </div> 
  );
}
<div>0번째 내용입니다</div>

function TabContent(props) {

  useEffect(()=>{
    props.setSwit(true);
  })

  if(props.tab === 0) {
    return <div>0번째 내용입니다</div>;
  } else if(props.tab === 1) {
    return <div>1번째 내용입니다</div>
  } else if(props.tab === 2) {
    return <div>2번째 내용입니다</div>
  }
}


function Info(props) {
  return (
    <p>재고 : { props.재고[0] }</p>
  );
}


function state를props화(state){
  console.log(state);
  return {
    state : state.reducer
  }
}

export default connect(state를props화)(Detail);