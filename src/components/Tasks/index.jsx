import React from 'react'
import { connect } from 'react-redux'
import { addTaskAction } from '../../store/actions/actionCreators'

export const Tasks = props => {
  return (
    <div>
      <button
        onClick={() => {
            // props.dispatch({ type: actionTypes.ADD_TASK, payload: { text: ... })
            props.dispatch(addTaskAction({ text: 'test text', isDone: false }))
        }}
      >Add task</button>
      <ul>
        {props.tasks.map(/* create task list */ () => <></>)}
      </ul>
    </div>
  )
}

const mapStateToProps = store => ({ tasks: store.tasks });

export default connect(mapStateToProps)(Tasks);
