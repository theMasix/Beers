import React,{useState} from 'react';
import ShowModalCard from './../showModalCard';
const MyCardGroup = ({ data }) => {
    return (
        <div className="row row-cols-2 row-cols-md-4">
            {data.map(d =>
                <div className="col mb-4">
                    <ShowModalCard
                        data={d}
                        key={d.id}
                    />
                </div>
            )}
        </div>
    );
}

export default MyCardGroup;