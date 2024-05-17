import PropTypes from 'prop-types';

Progress.propTypes = {
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    changed: PropTypes.func.isRequired
}

export default function Progress({max, value, changed, title, removed}) {
    let width = Math.round(value * 100 / max) ;
    // width = 50; 

    let progressStyle = {width: width + "%"};
    const classn = [
        "alert",
        "alert-dismissible",
        "fade",
        "show",
        width <= 25 ? "alert-danger" : width <= 75 ? "alert-warning" : "alert-success"
      ].join(' ');

    let canInc = value < max;

    function increase(){
        if(canInc) {
            changed(value + 1);
        }
    }

    function remove(){
        removed();
    }

    return <div className={classn} role='alert'>
        <button type="button" className="btn-close" onClick={remove} data-bs-dismiss="alert" aria-label="Close"></button>
        <h4 className='alert-heading'>{ title }</h4>
        <hr/>
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={progressStyle} aria-valuenow={width} aria-valuemin="0" aria-valuemax="100">{width}%</div>                
        </div> 
            <p className="mb-0">{value} / {max}</p>
            <hr/>
            {
                (canInc) &&
                <button type="button" onClick={increase} className="btn btn-success">Make Step</button>
            }
            {
                (value==max) &&
                <h5>All Done</h5>
            }

        </div>;
}