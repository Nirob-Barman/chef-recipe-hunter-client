import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section>
            <div className='text-center'>
                <img className='w-25' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png" alt="" />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span>Error</span> {status || 404}
                    </h2>
                    <p>
                        {error?.message}
                    </p>
                    <Link to='/'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;