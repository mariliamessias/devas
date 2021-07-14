import { Header } from '../../components/Header'

import {Data} from './Data.js';
import './styles.css'
import { Trail } from '../../components/Trail';
import BackendIcon from "../../assets/database.svg";

export function BackendTrail(){
    return(
        <div className="content-fundamentals-trail">
            <Header showDropDown indexOption={2}/>
            <Trail
                icon={BackendIcon}
                data={Data}
            />
        </div>
    )
}

