import {Clogs} from './utils'


import cssclass from './blogCardmodule.css'


const blogCard = (properties) => {

    Clogs('hello')
    return (
        <div className={cssclass.divStyle}>

            <h1> {properties.title}</h1>

            <p>{properties.description}</p>

        </div>
    )
}

export default blogCard;