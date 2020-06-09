import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Menu } from 'semantic-ui-react';
import OnHost from './onHost';
import WindowsHost from './windowsHost';
import Docker from './docker';
import K8s from './kubernetes';
import Downloads from './downloads';
import Fargate from './fargate';
import Lambda from './lambda';

export default class Install extends React.Component {
  static propTypes = {
    latest: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'on host',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMenu(activeItem) {
    return (
      <Menu pointing secondary inverted>
        <Menu.Item
          name="on host"
          active={activeItem === 'on host'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="kubernetes"
          active={activeItem === 'kubernetes'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="fargate"
          active={activeItem === 'fargate'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="lambda"
          active={activeItem === 'lambda'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="downloads"
          active={activeItem === 'downloads'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }

  render() {
    return (
      <Grid.Row
        style={{
          display: this.props.activeItem === 'install flex' ? '' : 'none',
        }}
      >
        <Grid.Column>
          {this.renderMenu(this.state.activeItem)}
          <OnHost
            activeItem={this.state.activeItem}
            latest={this.props.latest}
          />
          <Docker
            activeItem={this.state.activeItem}
            latest={this.props.latest}
          />
          <K8s activeItem={this.state.activeItem} latest={this.props.latest} />
          <Fargate
            activeItem={this.state.activeItem}
            latest={this.props.latest}
          />
          <Lambda
            activeItem={this.state.activeItem}
            latest={this.props.latest}
          />
          <WindowsHost
            activeItem={this.state.activeItem}
            latest={this.props.latest}
          />
          <Downloads
            activeItem={this.state.activeItem}
            latest={this.props.latest}
          />
        </Grid.Column>
      </Grid.Row>
    );
  }
}
