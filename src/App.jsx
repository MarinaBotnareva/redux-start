import { connect } from 'react-redux';

function App (props) {

  const actionIncrement = () => {
    props.dispatch({ type: 'increment' });
  }

  const actionDecrement = () => {
    props.dispatch({ type: 'decrement' });
  }

  return (
    <div>
      Counter: {props.counter.score}
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
  console.log(store);
  return { counter: store.counter };
}

// HOC
const withStore = connect(mapStateToProps);

export default withStore(App);
