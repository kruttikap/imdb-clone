import React from 'react'
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class Anticipate extends React.Component{
render() {
return(
  <div>
    <h4>Most Anticipated Indian Movies and Shows Real-time popularity on IMDb</h4>

    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
        />
      </List.Item>
    )}
  />,

  </div>
);
  }
}

export default Anticipate;