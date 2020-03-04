//child component
const React= require('react');

const GreeterForm = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();
  
      var updates ={};
      const name = this.refs.name.value;
      const message = this.refs.message.value;
  
      if (name.length > 0) {
        this.refs.name.value = '';
        updates.name = name;
      }

      if(message.length>0){
          this.refs.message.value='';
          updates.message=message;
      }

      this.props.onChanges(updates);
    },
    render: function () {
      return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Add your name here"/>
          <div>
          <textarea ref="message" placeholder="Add your message here"></textarea>
          </div>
          <button>Submit</button>
        </form>
      );
    }
  });

  module.exports=GreeterForm;