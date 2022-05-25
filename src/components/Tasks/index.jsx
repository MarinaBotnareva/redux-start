import React from 'react'
import { connect } from 'react-redux'
import { addTaskAction } from '../../store/actions/actionCreators'

export const Tasks = props => {
  console.log(props)
  return (
    <div>
      <button
        onClick={() => {
            // props.dispatch({ type: actionTypes.ADD_TASK, payload: { text: 'test text', isDone: false }})
            props.dispatch(addTaskAction({ id: Math.random()*1000, text: 'test text', isDone: false }))
        }}
      >Add task</button>
      <ul>
        {props.tasks.list.map(((task) => {
        return <li key={task.id}>{task.text}</li>
 } ))}
      </ul>
    </div>
  )
}

const mapStateToProps = store => ({ tasks: store.tasks });

export default connect(mapStateToProps)(Tasks);
