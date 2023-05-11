import React, { useState, useEffect, createContext, useContext } from 'react';
import { isAuthenticated } from './action';


const UserContext = createContext(null);

const useUserContext = () => {
	const userContext = useContext(UserContext);
	if(!userContext) throw new Error('useUserContext must be used within a AuthProvider');
	return userContext;
}

 const UserContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);
	const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
	useEffect(() => {
		const checkLoggedIn = async () => {
			let currentUser = isAuthenticated();
			if (currentUser === null) {
				localStorage.setItem('currentUser', '');
				currentUser = '';
			}

			setCurrentUser(currentUser);
		};

		checkLoggedIn();
	}, []);
	const value = [currentUser, setCurrentUser,email, setEmail, password, setPassword,confirmPassword, setConfirmPassword]
	
	return (
		<UserContext.Provider value={value}>
            {children}
		</UserContext.Provider>
	);
};


export {useUserContext};
export default UserContextProvider;