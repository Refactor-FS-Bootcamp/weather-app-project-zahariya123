import '../index.css'


const City = ()=>{
    return(
        <div className="city-content">
            <div className='city-header'>
                <h2>Cities</h2>
                <button className="icon" onClick={()=>console.log('button is clicked')}>&#43;</button>
            </div>
            <hr />
            <div className='info-text'>
                <p>You haven't selected any city</p>
            </div>
        </div>
    )
}

export default City;