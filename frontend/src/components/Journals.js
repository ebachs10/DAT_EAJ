import React from 'react';
import { List } from 'antd';



const Journals = (props) => {
    return(        
          <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta                
                  title={<a href={item.href}>{item.id}</a>}
                  description= {item.note}
                />
              </List.Item>
            )}
          />      
    )
}

export default Journals;