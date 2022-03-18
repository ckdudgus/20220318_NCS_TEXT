import axios from 'axios'
import React, {useEffect , useState} from 'react'

function Functioncomponent(){
    const [cyhtext , cyhtextUpdate] = useState('아직 DB안와서 지키고있음')

    useEffect( async () => {
        await axios.post('/getsend/post')
        .then( res => {
            cyhtextUpdate(res.data.title)
            }
        )
        
    }, [])

  return (
    <div>
        <h3>나는 함수형 컴포넌트</h3>
        <p>post는 post로 응답받아야함</p>
        { cyhtext }
    </div>
  )
}

export default Functioncomponent;