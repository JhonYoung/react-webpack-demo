
import { Menu, Icon, Switch } from 'antd';
import React from 'react';
import { MenuConfig } from '../lib/config/';
import {CLComponent} from '../../src/lib/component/';
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

class CLMenu extends CLComponent {
  state = {
    theme: 'dark',
    current: '1',
  }

  constructor (props) {
    super(props);
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    let roles = JSON.parse(sessionStorage.getItem("roles")) || []; //权限检查
    // if (!roles || !roles.length) {
    //   return '';
    // }

    
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultOpenKeys={['OM1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          {
            MenuConfig.map( function (item, index) {
              return (
                <Menu.SubMenu key= {item.role + index} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
                {
                  item.children.map( function (subItem, index) {
                    let flag = roles.indexOf(subItem.role); //根据权限显示或隐藏菜单
                    flag = 1;
                    if (flag > -1) {
                      return (<Menu.Item key={subItem.role + index}>
                        <Link to={subItem.path}>{subItem.name}</Link>
                      </Menu.Item>)
                    } else {
                      return '';
                    }
                  })
                }
                </Menu.SubMenu>
              )
            })
          }
        </Menu>
      </div>
    );
  }
}

export default CLMenu;