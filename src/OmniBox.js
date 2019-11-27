import React, { Component } from 'react';
import { TextInput } from 'react-native';
import TodoModel from './TodoModel';
import Utils from './Utils';

class OmniBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);  //handles Search
    this.onKeyPress = this.onKeyPress.bind(this);  // handles Add new a todo
    this.state={
      newValue: '',
    };
  }

//   componentDidMount() {
//     this.setState({
//       newValue: ''
//     });
//   }

  onChange(event){
    var title = event.nativeEvent.text;
    var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));

    this.setState({
      newValue: title
    });
    // console.log(newValue)
    this.props.updateDataList(dataList);  //  the updateDataList function of parent component'd be called.
  }

  onKeyPress(){
    if (this.state.newValue) {
      var newDataItem = new TodoModel(this.state.newValue);

      var dataList = this.props.data;
      var dataItem = Utils.findTodo(newDataItem, dataList);
      if(dataItem) {
        Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

        this.setState({
          newValue: ''
        });
        this.props.updateDataList(dataList);
        return;
      }

      dataList.unshift(newDataItem);

      this.setState({
        newValue: ''
      });
      this.props.updateDataList(dataList);
    }
  }

  render() {
    return (
      <TextInput style={{height: 44, padding: 10, marginVertical: 18, marginHorizontal: 10, fontSize: 16, borderWidth: 2, borderColor: '#6C9E93', borderRadius: 8, backgroundColor: '#fff', }}
        placeholder='Add a todo or Search'
        placeholderTextColor = {'#6C9E93'}
        // returnKeyType={'default'}
        clearButtonMode='while-editing'
        blurOnSubmit={false}
        value={this.state.newValue}
        // onKeyPress={this.onKeyPress} for multiline TextInput.
        onChange={this.onChange}
        onSubmitEditing={this.onKeyPress}  //For single line TextInput,
        // onKeyPress={ (event) => {
        //   if(event.nativeEvent.key == "Enter"){
        //       alert(event.nativeEvent.key) //called when multiline is true
        //       // this.signIn();
        //   } 
        //   else {
        //       alert('Something else Pressed') 
        //   }
        // }} for multiline TextInput.
        />
    );
  }
}

export default OmniBox;