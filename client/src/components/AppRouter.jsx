import React, { useContext } from 'react';
import { Route, Routes,} from "react-router-dom"
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context);

    console.log(user);

    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} Component={Component} />
                })}
                {publicRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} Component={Component} />
                })}
                <Route path={publicRoutes[0].path+"*"} Component={publicRoutes[0].Component}  />

            </Routes>
        </div>
    );
};

export default AppRouter;