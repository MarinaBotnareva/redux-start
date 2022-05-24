import { connect } from 'react-redux';
import actionTypes from './store/actions/actionTypes';

function App (props) {
  console.log(props);

  const actionIncrement = () => {
    props.increment();
  }

  const actionDecrement = () => {
    props.decrement();
  }

  const actionReset = () => {
    props.reset();
  }

  return (
    <div>
      Counter: {props.counter.score}
      <div>
        <button onClick={actionDecrement}>-</button>
        <button onClick={actionIncrement}>+</button>
        <button onClick={actionReset}>Reset</button>
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
  console.log(store);
  return { counter: store.counter };
}

const mapDispatchToProps = (dispatch) => {

  return {
    increment: () => dispatch({ type: actionTypes.INCREMENT }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => dispatch({ type: actionTypes.RESET }),
  }
}

// HOC
const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withStore(App);
