import style from './menu.module.css';
import {useContext} from "react";
import {Context} from "../../index";
import {Link} from 'react-router-dom';

const Menu = () => {

    const {State} = useContext(Context)

    return(
        <div className={style.menu}>
            {State.Routers.map(item => (
                <div className={style.links}>
                    <Link to={item.path}>{item.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Menu;