import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signIn } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SignInScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search? props.location.search.split('=')[1]: '/';
    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const dispatch = useDispatch();


    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signIn(email, password));

    }

    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form action="" className="form" onSubmit={submitHandler}>
                <div className="">
                    <h1>Sign in</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" placeholder="Enter passwword" required onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                        New customer? {' '}
                        <Link to={`/register?redirect=${redirect}`}>Create new account</Link >
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignInScreen