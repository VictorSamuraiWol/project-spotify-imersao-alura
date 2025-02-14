import { Link } from 'react-router-dom'
import './PageNotFound.css'

function PageNotFound() {

    return (
        <div className='pageNotFound'>
            <div>
                <span className='text404'>404</span>
                <h1 className='title'>
                    Oops! Page not found!
                </h1>
            </div>

            <p className='paragraph'>
                Is this what you were looking for? Please verify the address in the adress bar or click the link below to return to the previous page.
            </p>

            <Link to='/'>
                <div className='backPage'>Previous Page</div>
            </Link>
        </div>
    )
}

export default PageNotFound
