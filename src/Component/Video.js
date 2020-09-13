import React from 'react';
import Shoulder from './Shoulder.mp4';
import Bench from './benchpress.mp4';
import Back from './back_workout.mp4';
import moncss from './Videos.css';

const Videos = () => {
    return(
        <div className="videos">
            <video controls onPlay>
             <source src={Shoulder} />
             </video>
             <br />
             <video controls onPlay>
             <source src={Bench} />
             </video>
             <br />
             <video controls onPlay>
             <source src={Back} />
             </video>
            

        </div>
    )
}
export default Videos;