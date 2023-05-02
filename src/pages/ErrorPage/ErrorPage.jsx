import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className=''>
            <h2 className=''>
                <span className=''>Error</span> {status || 404}
            </h2>
            <p className=''>
                {error?.message}
            </p>
            <Link
                to='/'
                className=''
            >
                Back to homepage
            </Link>
        </div>
    );
};

export default ErrorPage;