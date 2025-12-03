import UseFetch from "./UseFetch"

const FetchData = () => {
  const { loading, data, error } = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  console.log(data);
  if (loading) return <h1>loading....</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
      <ul className='list_data_main'>
        {data ? data.map((e, index) => (
          <li key={index} className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
        )) : <p>Loading....</p>}
      </ul>
    </>
  );
}

export default FetchData