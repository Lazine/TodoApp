import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import CheckBox from './CheckBox';

class ListViewItem extends React.Component {
  constructor(props) {
    super(props);
    this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    this.state = {
      data: props.data
    }
  }

//   componentWillReceiveProps(props) {
//     this.setState({
//       data: props.data
//     })
//   }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== prevState.data) {
      this.setState({data: props.data});
    }else return null; 
  }

  _onCheckBoxPressed() {
    var data = this.state.data;
    data.completed = !data.completed;
    this.setState({
      data: data
    });

    this.props.onCompletedChange(data, this.props.dataIndex);
  }

  render() {
    let data = this.state.data;
    let color = data.completed ? '#6C9E93' : '#000';
    let textDecorationLine = data.completed ? 'line-through' : 'none';
    return (
      <TouchableHighlight underlayColor={'#eee'} style={{padding: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox data={data} color={color} onCheckBoxPressed={this._onCheckBoxPressed}></CheckBox>
          <Text style={{fontSize:18, color: color, textDecorationLine: textDecorationLine}}>{data.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ListViewItem;