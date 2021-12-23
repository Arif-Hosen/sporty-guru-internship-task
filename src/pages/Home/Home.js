import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [universitiesList, setUniversitiesList] = useState([]);
    const [isLoad, setIsLoad] = useState(true);


    //  load all country and set a state
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])



    const countryHandler = e => {
        const data = e.target.value;
        setCountryName(data);
    }

    //  load country wise university from api and set a state
    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${countryName}`)
            .then(res => res.json())
            .then(data => {
                setUniversitiesList(data)
                setIsLoad(false);
            });
    }, [countryName])

    return (
        <div>
            <Navigation></Navigation>
            <h3 id='select' className='my-5 pt-5'>Welcome to country wise list of universities website</h3>


            <Form.Select className='w-50 mx-auto' aria-label="Default select example" onChange={countryHandler}>
                <option>Select Country</option>
                {countries.map(country => <option value={country.name}>{country.name}</option>
                )}
            </Form.Select>




            <Table responsive className='mt-5 text-start w-75 mx-auto'>
                <thead>
                    <tr style={{ backgroundColor: 'orange' }}>
                        <th className='ps-5'>University Name ({countryName})</th>
                        <th className='ps-5'>Details</th>
                    </tr>
                </thead>
                {isLoad ? <div className='text-center '>
                    <Spinner className='mt-5' animation="grow" />
                </div>
                    :
                    <tbody style={{ backgroundColor: 'lightgray' }}>
                        {
                            universitiesList.map(university => <tr>
                                <td >{university.name}</td>
                                <td >
                                    <Link to={`/details/${university.domains}`}>
                                        <Button variant="primary">See Details</Button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>

                }
            </Table>


        </div >
    );
};

export default Home;