import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const UniversityDetails = () => {
    const [universities, setUniversities] = useState([]);
    const [university, setUniversity] = useState({});
    const { domains } = useParams();

    const [isLoad, setIsLoad] = useState(true);


    //  load all country and set a state
    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country')
            .then(res => res.json())
            .then(data => {
                setUniversities(data)
                setIsLoad(false)
            });

    }, [])

    // find specific university
    useEffect(() => {
        const uni = universities.find(targetUni => targetUni.domains == domains)
        setUniversity(uni);

    }, [universities])

    return (
        <div style={{ marginTop: '100px' }} >
            <Navigation></Navigation>
            {/* <h3 className='mt-5'>University details</h3>
            <div style={{ border: '1px solid red' }}>
                <h4>University Name: </h4>
            </div> */}

            <Card>
                <Card.Header>University Details</Card.Header>
                {isLoad ? <div className='text-center '>
                    <Spinner className='mt-5' animation="grow" />
                </div>
                    :

                    <Card.Body>
                        <Card.Title>{university?.name}</Card.Title>
                        <Card.Text>
                            Country: {university?.country}
                        </Card.Text>
                        <Card.Text>
                            Domains: {university?.domains}
                        </Card.Text>

                        <a href={university?.web_pages} target="_blank">
                            <Button variant="primary">Visit Website</Button>
                        </a>
                    </Card.Body>}
            </Card>
        </div>
    );
};

export default UniversityDetails;