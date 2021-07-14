import { Header } from '../../components/Header'

import {Data} from './Data.js';
import './styles.css'
import { Trail } from '../../components/Trail';

import FundamentalIcon from "../../assets/rocket.svg";

export function FundamentalsTrail(){
    return(
        <div className="content-fundamentals-trail">
            <Header showDropDown indexOption={0}/>
            <Trail
                data={Data}
                icon={FundamentalIcon}
            />
        </div>
    )
}

