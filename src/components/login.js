import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        inputFocusState: '',
        email: '',
        password: '',
        emailErr: '',
        passErr: ''
    }

    handleFocus = field => {
        if (field === 'email') {
            this.setState({ inputFocusState: 'email' });
        }
        else if (field === 'password') {
            this.setState({ inputFocusState: 'password' });
        }
        else {
            this.setState({ inputFocusState: '' });
        }
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value, emailErr: '', passErr: '' });
        if (name === 'email') {
            if (value.includes('@') === false || (value.indexOf('@') > value.lastIndexOf('.')) || (value.lastIndexOf('.') + 1 === value.length)) {
                this.setState({ emailErr: "Invalid email address!" });
            }
        }
    }

    handleSubmit = () => {
        if (this.state.email === '' || this.state.password === '') {
            if (this.state.email === '') {
                this.setState({ emailErr: "Can't be empty!" });
            }
            if (this.state.password === '') {
                this.setState({ passErr: "Can't be empty!" });
            }
        }
        else {
            axios.post('https://reqres.in/api/login', { email: this.state.email, password: this.state.password })
                .then(res => {
                    if (res.status === 200) {
                        this.props.history.push('/home');
                    }
                })
                .catch(err => {
                    if (err) {
                        console.log('error:',err);
                    }
                })
        }
    }

    render() {
        return (
            <div id='loginContainer'>
                <div id='loginForm'>
                    <div className='formRow'>
                        <div className={`formLabel ${(this.state.inputFocusState === 'email' ? 'formLabelonInputFocused' : '')}`}>Email</div>
                        <div className={`formInput ${(this.state.inputFocusState === 'email' ? 'formInputonInputFocused' : '')}`}><input type='email' name='email' value={this.state.email} onChange={e => this.handleChange(e.target.name, e.target.value)} onFocus={e => this.handleFocus(e.target.name)}></input></div>
                        <div className='error'>{this.state.emailErr}</div>
                    </div>
                    <div className='formRow'>
                        <div className={`formLabel ${(this.state.inputFocusState === 'password' ? 'formLabelonInputFocused' : '')}`}>Password</div>
                        <div className={`formInput ${(this.state.inputFocusState === 'password' ? 'formInputonInputFocused' : '')}`}><input type='password' name='password' value={this.state.password} onChange={e => this.handleChange(e.target.name, e.target.value)} onFocus={e => this.handleFocus(e.target.name)}></input></div>
                        <div className='error'>{this.state.passErr}</div>
                    </div>
                    <div className='formButton' onClick={() => { this.handleSubmit() }}><button>Submit</button></div>
                </div>
            </div>
        )
    }
}

export default Login;