import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      word: "",
      consonants: 0,
      vowels: 0
    }
  }



  analyzeWord = () => {

      let x = this.state.word;
      let string = x.toLowerCase();
      let str = string.split(''); 
        
          for(let char of str) {
            if(char =='a' || char =='e' || char =='i' || char =='o' ||char=='u'){

              this.setState((prevState) => ({
                vowels: prevState.vowels + 1
              }));
            }

            else if(char >= 'a' || char <= 'z')
              this.setState((prevState) => ({
                consonants: prevState.consonants + 1
              }));
        }
    
  }

  clearScreen = () => {
    this.setState({
      word: '',
      count: 0, 
      vowels: 0,
      consonants: 0
    })
  }


  render() {
    return (
      <View style={Styles.container}>

        <View style={Styles.container}>
          <Text style={Styles.welcome}>A Word Analyzer</Text>
        </View>

        <View style={Styles.container}>
          <TextInput onChangeText={(word) => this.setState({word})} 
            style={Styles.instructions} 
            placeholder='Your Word'/>   
        </View>

        <View style={Styles.container}>
          <Button color="#47ba71" onPress={this.analyzeWord} title='Analyze'/>
          <Text>{'\n'}</Text>
          <Button color="red" onPress={this.clearScreen} title='Clear'/>

          <Text style={Styles.instructions}>{"\n"}Word: {this.state.word}</Text>
          <Text style={Styles.instructions}>No. of consonants: {this.state.consonants}</Text>
          <Text style={Styles.instructions}>No. of vowels: {this.state.vowels}</Text>
          <Text style={Styles.instructions}>No of characters: {this.state.consonants + this.state.vowels}</Text>
        </View>
      </View>
    );
  }
}