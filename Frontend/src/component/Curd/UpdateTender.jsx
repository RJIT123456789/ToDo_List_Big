import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from "react-router-dom"

function UpdateTender() {

  const { id } = useParams();

  const tender = {
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    buffer_time: "",
  };
  const [data, setData] = useState(tender);

  const inputHandler = (e) => {
    //console.log(e.target.value)
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/api/getTenderById/${id}`)
      .then((response) => {
        setData(response.data)

      })
      .catch((error) => {
        console.log(error);
      })
  }, [id])

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(data)
    try {
      const response = await axios.post(`http://localhost:4000/api/updateTender/${id}`,
        data
      );

      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-center",
        });
        setData(tender); // Reset the form fields
        navigate("/");
      } else {
        console.error("Failed to insert data");
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };
  
  return (
    <>
      <form action="" method="post" onSubmit={submitForm}>
        <h3 className="text-center mb-4 text-xl font-semibold uppercase underline">
          Add Tender
        </h3>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-200 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={data.name}
            autoComplete="off"
            onChange={inputHandler}
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-zinc-200 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter Description"
            autoComplete="off"
            value={data.Description}
            onChange={inputHandler}
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
            required

          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="start_time"
            className="block text-sm font-medium text-zinc-200 mb-1"
          >
            Start Time
          </label>
          <input
            type="date"
            name="start_time"
            autoComplete="off"
            value={data.start_time}

            onChange={inputHandler}
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="end_time"
            className="block text-sm font-medium text-zinc-200 mb-1"
          >
            End Time
          </label>
          <input
            type="date"
            name="end_time"
            autoComplete="off"
            value={data.end_time}
            onChange={inputHandler}
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="buffer_time"
            className="block text-sm font-medium text-zinc-200 mb-1"
          >
            Buffer Time
          </label>
          <input
            type="text"
            name="buffer_time"
            autoComplete="off"
            value={data.buffer_time}
            onChange={inputHandler}
            placeholder="Enter Buffer Time"
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#333333] focus:border-[#333333]"
            required
          />
        </div>

        <div className="flex justify-center mb-4 mt-5">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#397082] text-white font-semibold rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#333333] hover:-translate-y-1 transition duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </>
  )
}

export default UpdateTender
