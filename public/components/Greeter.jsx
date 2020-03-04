//Nested Component
//Container component
const React=require('react');
const GreeterMessage = require('GreeterMessage');
const GreeterForm=require('GreeterForm');

const Greeter = React.createClass({
    getDefaultProps: function(){
       return {
        name: 'React',
        message: 'My first component'
       } ;
    },
    getInitialState: function(){
        return{
            name: this.props.name,
            message: this.props.message
        };
    },
    handleChanges: function(updates){
       this.setState(updates);
    },
    render: function(){
        //const name = this.props.name;
        var name=this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onChanges={this.handleChanges}/>
            </div>
        );
    } // this is required
}); // react commponect camelCase

module.exports=Greeter;