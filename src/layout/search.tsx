import Searching from '../components/Searching'

export default function Search() {
    return (
        <div className='search'>
            <div className="container">
                <h2>Dashbaord</h2>
                <h3>Inventory Management for <span className="user">{localStorage.getItem('username')}</span></h3>
                <Searching />
            </div>
        </div>
    )
}
