import { createContext, useContext, useState } from "react";
import { ThemeContext } from './Theme';
const UserContex = createContext();

export default function AuthUser() {
    return (
        <UserContex.Provider
            value={
                {
                    user: 'Ida Bahun',
                    lastAccess: '10/10/2024 11:59:58 CEST',
                    didLogOut: true,
                }
            }>

            <User />
            <LoggedInUser />
            <LoggedOutUser />
        </UserContex.Provider>
    );
}

function User() {
    const contextValue = useContext(UserContex);
    return (
        <div>
            <p>The use is {contextValue.user}</p>
            <p>Last Access: {contextValue.lastAccess}</p>
            <p>
                {contextValue.didLogOut ? 'User is logged out' : 'User is logged in'}
            </p>
        </div>
    );
}





function LoggedInUser() {
    const contextValue = useContext(UserContex);
    return (
        <div>
            <p>The use is {contextValue.user}</p>
            <p>Last Access: {contextValue.lastAccess}</p>
            <p>
                {contextValue.didLogOut ? 'User is logged out' : 'User is logged in'}
            </p>
        </div>
    );
}


function LoggedOutUser() {
    const contextValue = useContext(UserContex);
    return (
        <div>
            <p>The use is {contextValue.user}</p>
            <p>Last Access: {contextValue.lastAccess}</p>
            <p>
                {contextValue.didLogOut ? 'User is logged out' : 'User is logged in'}
            </p>
        </div>
    );
}