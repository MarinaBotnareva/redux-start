import { useState } from 'react';
import { connect } from 'react-redux';

function App (props) {
  console.log(props);

  const [counter, setCounter] = useState({});

  const actionIncrement = () => {
    setCounter(s => s + 1);
  }

  const actionDecrement = () => {
    setCounter(s => s - 1);
  }

  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={actionDecrement}>-</button>
        <button onClick={actionIncrement}>+</button>
      </div>
    </div>
  )
}

/* 
Consumer
  {store => {
    // mapStateToProps
    const props = store.counter;
    return <Component {...props} />;
  }
/Consumer
 */

const mapStateToProps = (store) => {
  return { counter: store.counter };
}

// HOC
const withStore = connect(mapStateToProps);

export default withStore(App);
