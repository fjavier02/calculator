import React from 'react';
import Btn from '../../components/Btn'

class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: { 'buttom': [ 
                ['AC' , 'btn light-gray', 'reset' ],
                ['+/-', 'btn light-gray', 'minusPlus' ],
                ['%', 'btn light-gray', 'percent' ],
                ['÷', 'btn operador', 'operatorType'],
                [ 7 , 'btn', 'inputNum'],
                [ 8 , 'btn', 'inputNum'],
                [ 9 , 'btn', 'inputNum'],
                ['x', 'btn operador', 'operatorType'],
                [ 4 , 'btn', 'inputNum'],
                [ 5 , 'btn', 'inputNum'],
                [ 6 , 'btn', 'inputNum'],
                ['-', 'btn operador', 'operatorType'],
                [ 1 , 'btn', 'inputNum'],
                [ 2 , 'btn', 'inputNum'],
                [ 3 , 'btn', 'inputNum'],
                ['+', 'btn operador', 'operatorType'],
                [ 0 , 'btn zero', 'inputNum'],
                ['.', 'btn', 'inputNum'],
                ['', 'transparente', ''],
                ['=', 'btn purple', 'equals'],
          ],
          input1: '',
          input2: '',
          input3: '',
          total: '',
          }
        }

        
    }

    operator(fun, value){
        var result = '200+30.5';
        //eval(result)
            try {
                return (console.log(eval(result)));
              }
            catch(err) {
                return (console.log('error'));
            }
        //console.log(fun,value);
        
    }

    reset(){
        var reset = this.state.data;
        reset.input1=0;
        reset.input2=0;
        reset.input3=0;
        reset.total=0;
        this.setState({data:reset})
    }

    minusPlus(){
        var minusPlus = this.state.data;

    }

    percent(){
        var percent = this.state.data;        
        
        if(this.state.input2 === 0){
            percent = this.state.data;
            percent.input1=0;
            percent.input2=0;
            percent.input3=0;
            percent.total=0;
            this.setState({data:percent})
        }
        
        percent = this.state.data;
        percent.total = (percent.input1/100)*percent.input2;
        this.setState({data:percent})
        
    }

    operatorType(){
        
        console.log('operatorType');
    }

    inputNum(){
        console.log('inputNum');
    }

    equals(){
        console.log('equals');
    }

    


    render() {
        return (
            <div className='container'>
              <div className='wrapper'>
                <div className='screen'>
                  {/* {this.state.data.input !== "" || this.state.data.input === "0" ? (
                    <NumberFormat
                      value={this.state.data.input}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  ) : (
                    <NumberFormat
                      value={this.state.data.preState}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  )} */}
                </div>
                <Btn cont={this.state.data.buttom} operator={this.operator.bind(this)} ></Btn>
              </div>
            </div>
          );
    }
}

export default Main;