import React, { Component } from 'react'
import { Col, Row} from 'antd';


const data = [
    {
      title: "Title 1",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      title: "Title 2",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      title: "Title 3",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      title: "Title 4",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
  ]


class Movies extends Component {
    render() {
        return (
            <div>
                <h1>Movies</h1>
                <div>
                <div style={{ background: '#ececec', padding: '10px' }}>
                <Row gutter={8}>  
        {
      data.map((item, index) => {
        return (<div>
          <Col span={8}>
      <img
          alt={item.title}
          src={item.src}
        />  </Col>
      </div>)
      })
    } 
          
        
        </Row>
      </div>
      </div>
      </div>
  );
}
}
export default Movies;
