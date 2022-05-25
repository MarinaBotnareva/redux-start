import React from 'react'
import { connect } from 'react-redux'
import { onChangeEmail, onChangePassword, onChangeUsername, onChangeConfPassword, onSubmit } from '../../store/actions/actionCreators'
import { object, string, ref } from 'yup';

const emailScheme = string().required().email();

const loginSchema = object({ 
  email: emailScheme,
  password: string().required(),
  confPassword: string().required().oneOf([ref('password')]),
});

function RegisterForm(props){
  console.log(props)
  const changeUsername = event => props.dispatch(onChangeUsername(event.target.value));
  const changeEmail = event => props.dispatch(onChangeEmail(event.target.value));
  const changePassword = event => props.dispatch(onChangePassword(event.target.value));
  const changeConfPassword = event => props.dispatch(onChangeConfPassword(event.target.value));
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
          placeholder="Username"
          value={props.username}
          onChange={changeUsername} />
                  
        <input
          type="email"
          placeholder="Email"
          value={props.email}
          onChange={changeEmail} />

        <input
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={changePassword} />

        <input
          type="password"
          placeholder="Confirm Password"
          value={props.confPassword}
          onChange={changeConfPassword} />

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