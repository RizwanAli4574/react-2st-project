
function Cards(props) {
    return (
       
        <div className="col-md-4">
            <div id="sub-main">
             <div>{props.pic}</div>
                <h2>{props.text}</h2>
                <p>{props.p}</p>
                </div>
            </div>
            
        
    )
}

export default Cards