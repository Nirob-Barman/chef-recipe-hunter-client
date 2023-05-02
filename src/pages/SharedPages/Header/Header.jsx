import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Badge, Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import Marquee from 'react-fast-marquee';
import Banner from '../../Banner/Banner';

const Header = () => {
    return (
        <div>

            <Container className='mt-4'>
                <div className="text-center">
                    <img className='w-25' src={logo} alt="" />
                    <p className='text-secondary'><small>Welcome to our website</small></p>
                </div>

                <Banner />

                <div>
                    {/* <Marquee className='text-danger' speed={100}>
                        We've rounded up our highest-rated recipes of all time! They're our most loved, commented and rated recipes from our big Taste of Home community, all in one place. Check out these new recipes that you have to try this month
                    </Marquee> */}
                    <Marquee speed={100}>
                        <span>Looking for new recipes to try? Check out our latest additions:</span>
                        <span><Badge variant="success">Grilled salmon with mango salsa</Badge> | <Badge variant="info">Creamy mushroom risotto</Badge> | <Badge variant="warning">Spicy chicken tacos</Badge></span>
                        <span>Don't forget to bookmark your favorites!</span>
                    </Marquee>
                </div>
            </Container>

            {/* <NavBar /> */}

        </div>
    );
};

export default Header;