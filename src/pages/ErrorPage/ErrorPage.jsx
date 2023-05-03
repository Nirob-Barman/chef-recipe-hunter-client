import React from 'react'
import { Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom'
import NavBar from '../SharedPages/NavBar/NavBar';
import Footer from '../SharedPages/Footer/Footer';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <Container>

            <NavBar />

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

            <Footer />

        </Container>
    );
};

export default ErrorPage;