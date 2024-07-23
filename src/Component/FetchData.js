import axios from 'axios';
import React,{useEffect,useState} from 'react';

export default function FetchData() {
    axios - hayper

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => setData(response.data))
    .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}
+