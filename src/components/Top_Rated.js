import React, {Component} from 'react'




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
  

export default class TopRated extends Component {


render() {

    return (
        <div>
        <div style={{ background: '#ececec', padding: '10px' }}>
        <Row gutter={8}>
          <Col span={4}>
  
            <h1>Top Rated Indian Movies</h1>
          
          {
      data.map((item, index) => {
        return (<div>
      <img
          alt={item.title}
          src={item.src}
        />
      </div>)
      })
    } 
          
          </Col>
        </Row>
      </div>
      </div>
  );
        }
      }