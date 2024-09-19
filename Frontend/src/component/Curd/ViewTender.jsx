import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ViewTender() {

  const {id} = useParams();
  const [tender, setTender] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getTenderById/${id}`)
      .then((response) => {
      setTender(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  },[id])


  // console.log(tender.name)


  return (
    <>

    <table className="table table-primary mt-3">

      <thead>
        <tr> <Link to={"/view/"}>
                  <button className="btn btn-primary btn-sm">View</button>
                  </Link>
          <th>Name </th>
          <th>Description</th>
          <th>Start Time</th>
          <th>end Time  </th>
          <th>Buffer Time </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{tender.name}</td>
          <td>{tender.Description}</td>
          <td>{tender.start_time}</td>
          <td>{tender.end_time}</td>
          <td>{tender.buffer_time}</td>
        </tr>
      </tbody>
    </table>

      
      
    </>
  )
}

export default ViewTender
