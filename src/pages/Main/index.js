import React from 'react';
import Btn from '../../components/Btn';
import ModeDark from '../../components/ModeDark';
import  { Container, Wrapper, Screen, Total, Equal, Panel } from './style';

class Main extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          data: { 'buttom': [ 
              ['AC' , 'btn light-gray', 'reset' ],
              ['+/-', 'btn', 'minusPlus' ],
              ['%', 'btn', 'percent' ],
              ['/', 'operador', 'inputNum'],
              [ 7 , 'btn', 'inputNum'],
              [ 8 , 'btn', 'inputNum'],
              [ 9 , 'btn', 'inputNum'],
              ['*', 'operador', 'inputNum'],
              [ 4 , 'btn', 'inputNum'],
              [ 5 , 'btn', 'inputNum'],
              [ 6 , 'btn', 'inputNum'],
              ['-', 'operador', 'inputNum'],
              [ 1 , 'btn', 'inputNum'],
              [ 2 , 'btn', 'inputNum'],
              [ 3 , 'btn', 'inputNum'],
              ['+', 'operador', 'inputNum'],
              [ 0 , 'btn zero', 'inputNum'],
              ['.', 'btn', 'inputNum'],
              ['=', 'purple', 'equals'],
        ],
        input1: [],
        total: [],
        }
      }

      
  }

  operator(fun, value){

    var funciones = { 

      reset: ()=>{
        var reset = this.state.data;
        reset.input1=[];
        reset.total=[];
        this.setState({data:reset})
      },

      minusPlus: ()=>{
        var minusPlus = this.state.data;
        minusPlus.total=[((Number(minusPlus.total.join('')))*-1)];
        this.setState({data:minusPlus})
      
      },
      
      percent: ()=>{
        var percent = this.state.data;
        percent.total=[((Number(percent.total.join(''))/100))];
        this.setState({data:percent})      
      },
      
      inputNum: (value)=>{
        var total = this.state.data;
        console.log(total.total.length)
          if(total.total.length===9){
            this.setState({data:total})
          }else{
            if(total.total[0]==="Error"){
              total.total=[];
              total.input1=[];
              this.setState({data:total})
            }
            total.total.push(value)
            this.setState({data:total})
          }
      },
      
      equals: ()=>{
        var equal = this.state.data;
        equal.input1=equal.total;
        try {
          equal.total=[eval(equal.total.join('').toString())];
          this.setState({data:equal})
        }
        catch(err) {
            equal.total=['Error'];
            this.setState({data:equal})
        }

      }
    }
      switch (fun) {
        case 'inputNum':
            funciones.inputNum(value);
          break;
        case 'equals':
          funciones.equals();
          break;
        case 'reset':
          funciones.reset();
          break;
        case 'minusPlus':
          funciones.minusPlus();
          break;
        case 'percent':
          funciones.percent();
          break;

        default:
          break;
      };
      
  }

  render() {
    return (
      <Container>
        <ModeDark></ModeDark>
        <Wrapper>
        
          <Screen>
            <Total>
             {this.state.data.total}
            </Total>
            <Equal>
            {this.state.data.input1}
            </Equal>
          </Screen>
          <Panel>
            <Btn cont={this.state.data.buttom} operator={this.operator.bind(this)} ></Btn>

          </Panel>
        </Wrapper>
      </Container>
    );
  }
}

export default Main;