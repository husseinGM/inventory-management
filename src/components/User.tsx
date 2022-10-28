import React, { useContext, useEffect } from 'react'
import { inventoryContext } from '../Context/inventoryContext'

function User() {
    const {username,password, setPassword,setUsername, User} = useContext(inventoryContext);
    
    
            return(
            <>
                {localStorage.getItem('password') === null || localStorage.getItem('password') === null?
            <div className={localStorage.getItem('password') === null? "pop-up active add" : "pop-up add"}>
            <div className="op"></div>
            <div className="form-box">
                <form action="">
                    <label htmlFor="">Username</label>
                    <input onChange={e => setUsername(e.target.value)} type="text"/>
                    <label htmlFor="">password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password"/>
                    <button className="update" onClick={e => {
                        e.preventDefault();
                        User(username, password);
                        setUsername('');
                        setPassword('');
                    }}>Submit</button>
                </form>
            </div>
        </div>:null}
            </>
       
    )
}

export default User
