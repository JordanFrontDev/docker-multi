import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState();
    const [values, setValues] = useState();
    const [index, setIndex] = useState();

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    }, [])

    const fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        setValues(values.data);
    }

    const fetchIndexes = async () => {
        const indexes = await axios.get('/api/values/all');
        setSeenIndexes(indexes.data);
    }

    const renderSeenIndexes = () => {
        return seenIndexes.map(({ number }) => number.join(', '));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/values', {
            index
        });
        setIndex('');

    }

    const renderValues = () => {
        const entries = [];
        for (let key in values) {
            entries.push(
                <div key={key}>
                    For Index {key} I calculated {values[key]}
                </div>
            )
        }
        return entries;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={index} onChange={event => setIndex(event.target.value)} />
                <button>Submit</button>
            </form>
            {seenIndexes && (
                <h3>
                    Indexes I have seen:
                    {renderSeenIndexes()}
                </h3>

            )}


            <h3>
                Calculated values:
                {renderValues()}
            </h3>

        </div>
    )

}

export default Fib;