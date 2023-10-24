import {useState} from 'react';

const UpdateObject = () => {
  const initialState = [
    {id: 1, country: 'Austria'},
    {id: 2, country: 'Belgium'},
    {id: 3, country: 'Canada'},
  ];

  const [data, setData] = useState(initialState);

  const updateState = () => {

    const newState = data.map(obj => {
      if (obj.id === 2 || obj.country==="Canada") {
        return {...obj, country: 'Denmark'};
      }

      return obj;
    });

    setData(newState);
  };

  return (
    <div>

      {data.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>country: {obj.country}</h2>
            <hr />
          </div>
        );
      })}
      <button className='px-2 py-3 bg-[skyblue]' onClick={updateState}>Update state</button>

    </div>
  );
};

export default UpdateObject;