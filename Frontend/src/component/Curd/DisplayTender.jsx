import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { GrFormView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import toast from 'react-hot-toast';

function DisplayTender() {

  const [tender, setTender] = useState([]); // Initialize as an empty array

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/getTender");
    setTender(response.data);
  };

  const deleteTender = async (userId) => {
    await axios
      .delete(`http://localhost:4000/api/deleteTender/${userId}`)
      .then((response) => {
        setTender((prevTenders) => prevTenders.filter((user) => user._id !== userId));
        toast.success(response.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Include an empty dependency array to run only once on mount

  return (
    <>
      <div className="pl-12 pt-12">
        <span className=" text-zinc-300 border border-[#397082] rounded-3xl p-2 shadow-sm shadow-black m-4 bg-[#397082]">
          <Link to="add" className="">
            Add Tender
          </Link>
        </span>
      </div>
      <div className="overflow-x-auto mt-16 rounded-tl-3xl rounded-tr-3xl ">
        <table className="min-w-full bg-zinc-700">
          <thead className="">
            <tr className="text-zinc-300 ">
              <th className="py-2 px-4 border-b border-gray-200">S.No.</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Description
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Start Time</th>
              <th className="py-2 px-4 border-b border-gray-200">End Time</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Buffer Time
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {tender.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">
                    {user.name}
                  </td>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">
                    {user.Description}
                  </td>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">
                    {user.start_time}
                  </td>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">
                    {user.end_time}
                  </td>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">
                    {user.buffer_time}
                  </td>
                  <td className="py-2 px-4  border-b border-zinc-300 text-zinc-300">

                    <button onClick={() => deleteTender(user._id)}>
                      <MdDelete />
                    </button>

                    <Link to={"/edit/" + user._id} className="mt-1">
                      <GrFormView />
                    </Link>

                    <Link to={"/view/" + user._id} className="mt-1">
                      <GrFormEdit />
                    </Link>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default DisplayTender;
