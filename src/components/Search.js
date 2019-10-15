import React from "react";

import { Input } from 'antd';
const { Search } = Input;

class Searchbar extends React.Component{
  render() {
     return(
      <div>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      </div>
     )
  };
};

export default Searchbar;