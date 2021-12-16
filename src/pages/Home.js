import React from 'react'
import { useState, useEffect } from 'react'
import { collection , getDoc } from 'firebase/firestore'
import { db } from '../firebase config/Config'

const Home = () => {

    const [users, setUsers] = useState(['']);
    const userRefCollection = collection(db , "users");

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDoc(userRefCollection);
            console.log(data)

        }
        getUsers();
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home
