import { Header } from '../../components/Header'

import {Data} from './Data.js';
import './styles.css'
import { Trail } from '../../components/Trail';
import FrontendIcon from "../../assets/front.svg";

export function FrontendTrail(){
    return(
        <div className="content-fundamentals-trail">
            <Header showDropDown indexOption={1}/>
            <Trail
                icon={FrontendIcon}
                data={Data}
            />
        </div>
    )
}

