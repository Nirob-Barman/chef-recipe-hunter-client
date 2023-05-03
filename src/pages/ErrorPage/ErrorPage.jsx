import React, { useState } from 'react'
import { Container, Toast } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom'
import NavBar from '../SharedPages/NavBar/NavBar';
import Footer from '../SharedPages/Footer/Footer';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <Container>

            <NavBar />

            <Toast className='text-center' show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{status}</Toast.Body>
                {error?.message}
            </Toast>

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