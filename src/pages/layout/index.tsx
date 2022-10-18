import {Link} from 'react-router-dom';
import { Button } from "@arco-design/web-react";

const AppMain = () => {
    return (

        <div>
            <Link to="ceshi" >首页</Link>
            <Button>Arco 按钮</Button>
        </div>
    );
};

export default AppMain;