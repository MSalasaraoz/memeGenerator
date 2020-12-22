import React, {useState, useEffect} from 'react';

function Item(){
    const [hasError, setErrors] = useState(false);
        const [items, setItems] = useState({});
    // const items = () => {
        async function fetchData() {
            const res = await
        fetch("http://localhost:4027/api/items/");

        res.json()
        .then(res => setItems(res))
        .catch(err => setErrors(err));
        }
        useEffect(() => {
            fetchData();
          },[]);
          
      return (
        <div>
          <span>{JSON.stringify(items)}</span>
          <hr />
          <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
      );
    };

export default Item;