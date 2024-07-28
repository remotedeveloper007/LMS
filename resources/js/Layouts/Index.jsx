import React from 'react';
import Loader from './Frontend/Loader';
import LoginForm from '../Pages/Admin/Auth/Login';
import InstructorLoginForm from '../Pages/Instructor/Auth/Login'

const Index = ({ children }) => {
    let layout;
    const currentPath = window.location.pathname;
    const isAdminRoute = currentPath.startsWith("/admin");
    const isInstructorRoute = currentPath.startsWith("/instructor");

    if (isAdminRoute) {
        layout = isLoggedIn ? <AdminPanel children={children} /> : <LoginForm />;

        //
        // {isLoggedIn ? (
        //    layout = <AdminPanel children={children} />
        // ) : (
        //    layout = <LoginForm />
        // )}

    } else if (isInstructorRoute) {
        if (!isLoggedIn && route().current('instructor.register')) {
            layout = <RegisterForm />
        } else {
            {isLoggedIn ? (
                layout = <InstructorPanel children={children}/>
            ) : (
                layout = <InstructorLoginForm />
            )}
        }       
    } else {
        {isLoading ? (
            layout =  <Loader/>
        ) : (
            layout = <Frontend children={children} />
        )}
    }

  return <React.Fragment>{layout}</React.Fragment>;
}

export default Index
