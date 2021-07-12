import { Header } from '../../components/Header'

import {Data} from './Data.js';
import './styles.css'
import { Trail } from '../../components/Trail';

export function FundamentalsTrail(){
    return(
        <div className="content-fundamentals-trail">
            <Header/>
            <Trail
                data={Data}
            />
        </div>
    )
}

