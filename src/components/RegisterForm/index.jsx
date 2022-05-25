import React from 'react'
import { connect } from 'react-redux'
import { onChange, onSubmit } from '../../store/actions/actionCreators'
import { object, string, ref } from 'yup';

const emailScheme = string().required().email();

const loginSchema = object({ 
  email: emailScheme,
  password: string().required(),
  confPassword: string().required().oneOf([ref('password')]),
});

function RegisterForm(props){
  console.log(props)
  const changeUser = event => props.dispatch(onChange(event.target.name, event.target.value));
  const submit = async event => {
      event.preventDefault();
      try {
        await loginSchema.validate(props.user);
      } catch (error) {
        console.log(error)
        return;
      }
      props.dispatch(onSubmit());
    }
  
    if(props.user.submit === true){
       return(
      <div>
      <div>User: {props.user.userName}</div>
      <div>Email: {props.user.email} </div>
      </div>
      )
    }
    else{
    return (
      <form>
        <input
          type="text"
          name='userName'
          placeholder="Username"
          value={props.username}
          onChange={changeUser} />
                  
        <input
          type="email"
          name='email'
          placeholder="Email"
          value={props.email}
          onChange={changeUser} />

        <input
          type="password"
          name="password" 
          placeholder="Password"
          value={props.password}
          onChange={changeUser} />

        <input
          type="password"
          name="confPassword" 
          placeholder="Confirm Password"
          value={props.confPassword}
          onChange={changeUser} />

        <button
          type="submit"
          disabled={props.inProgress}
          onClick={submit}>
          Sign in
        </button>
            
              </form>
    )
  }
}

const mapStateToProps = store => ({ user: store.user });

export default connect(mapStateToProps)(RegisterForm)