import useApi from "../hooks/useApi"


const Lists = () => {

    const {data} = useApi();

  return (
    <div >
      {data?.items.map((item) => (
        <div 
        key={item.id}
        className='bg-white'>
          <h1>{item.name}</h1>
          <img>
            {item.images}
          </img>
        </div>
  
  ))
  }

    </div>
  
    
  )
}

export default Lists
