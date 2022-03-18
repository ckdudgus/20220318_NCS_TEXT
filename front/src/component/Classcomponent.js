import React, { Component } from 'react'
import axios from 'axios';

 class Classcomponent extends Component {
     constructor(props){
        super(props)
        this.state = {
             cyhtext : '아직 DB안옴',
             cyhtextjson : ''
        }
    }
     componentDidMount = async () => {
        const gettext = await axios.get('/getsend')
        this.setState({ cyhtext : gettext.data})
        const getjson = await axios.get('/getsend/getjson')
        this.setState({ cyhtextjson : getjson.data.url})
    }
    render(){
        return(
            <div>
                <h3>나는 클래스형 컴포넌트</h3>
                <p>componentDidMount 함수에 의해 해당 컴포넌트가 새로고침이 되는거임</p>
                <p>data가 그거 텍스트임 : {this.state.cyhtext}</p>
                <p>json 포멧으로 왔기때문에 Key까지 들어가야지만 값을 얻는다 : {this.state.cyhtextjson}</p>
            </div>
        );
    }
}

export default Classcomponent;
