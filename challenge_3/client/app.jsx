
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkout: [],
      form: 'f1',
    }
    this.changeState = this.changeState.bind(this); 
  }

  changeState(formNum, event) {
    console.log('changeState'); 
    event.preventDefault(); 
      this.setState({
        form: formNum,
      });
  }

  fetchResponse(options) {
    $.ajax({
      url: '/checkout',
      method: 'POST',
      success: (data) => {
        $('#form1').on('submit', function(e) {
          console.log(e);
          if (this.state.form === 'f1') {
            this.setState({
              form: 'f2',
            });
          } else if (this.state.form === 'f2') {
            this.setState({
              form: 'f3',
            });
          }
        });
      },
      error: (data) => console.log('Post was not received', data)
    });
  }

  render() {
    console.log(this.state.form)
    console.log('rendering');

    let form;
    if (this.state.form === 'f1') {
      console.log('f1');
      form = <Form1 changestate={this.changeState} />;
    } else if (this.state.form === 'f2') {
      console.log('f2');
      form = <Form2 changestate={this.changeState} />;
    } else if (this.state.form === 'f3') {
      console.log('f3');
      form = <Form3 changestate={this.changeState} />;
    }

    return (
      <div>
        <div className="forms">
          {form}
        </div>
      </div>
    );
  }
}




const Form1 = (props) => {
  return (
   <div><form id="form1">
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Email:
    <input type="text" name="email" />
  </label>
  <label>
    Password:
    <input type="text" name="password" />
  </label>
  <input type="submit" id="submit" value="Checkout" onClick={(event) => props.changestate('f2', event)} />
  <input type="submit" id="submit" value="Next" onClick={(event) => props.changestate('f2', event)} />
  </form></div>
  );
}

const Form2 = (props) => {
  return (
  <div><form id="form2">
  <label>
    Address:
    <input type="text" name="line1" />
  </label>
  <label>
    Address:
    <input type="text" name="line2" />
  </label>
  <label>
    City:
    <input type="text" name="city" />
  </label>
  <label>
    State:
    <input type="text" name="state" />
  </label>
  <label>
    Zip Code:
    <input type="text" name="zipcode" />
  </label>
  <input type="submit" id="submit" value="Checkout" onClick={(event) => props.changestate('f3', event)} />
  <input type="submit" id="submit" value="Next" onClick={(event) => props.changestate('f3', event)} />
  </form></div>
  );
}

const Form3 = (props) => {
  return (
  <div><form id="form3">
  <label>
    Credit Card Number:
    <input type="text" name="creditcard" />
  </label>
  <label>
    Expiry Date:
    <input type="text" name="expiry-date" />
  </label>
  <label>
    CVV:
    <input type="text" name="cvv" />
  </label>
  <label>
    Billing Zip Code:
    <input type="text" name="billing" />
  </label>
  <input type="submit" id="submit" value="Checkout" onClick={(event) => props.changestate('f4', event)} />
  <input type="submit" id="submit" value="Next" onClick={(event) => props.changestate('f4', event)} />
  </form></div>
  );
}

const Form4 = (props) => {
  return (
  <div><form id="form4">
  <input type="submit" id="submit" value="Purchase" onClick={(event) => props.changestate('f4', event)} />
  </form></div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
