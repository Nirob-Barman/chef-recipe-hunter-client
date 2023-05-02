import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {

    const { id } = useParams();

    return (
        <div>
            Details coming soon {id}
        </div>
    );
};

export default ChefDetails;