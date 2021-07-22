import style from './content.module.css';
import {Route, Redirect} from 'react-router-dom'
import {useContext} from "react";
import {Context} from "../../index";

const Content = () => {

    const {State} = useContext(Context)

    return(
        <div className={style.content}>
            <Route>
                <Redirect to="/expenses"></Redirect>
            </Route>
            {State.Routers.map(item => (
                <Route key={item.path} path={item.path} component={item.component} exact={true}></Route>
            ))}
        </div>
    )
}

export default Content;