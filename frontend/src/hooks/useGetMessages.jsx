import axios from 'axios'
import React, { useEffect } from 'react'

function useGetMessages() {
  useEffect(()=>{
    const fetchMessages = async ()=>{
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8081/api/v1/message/`)
        } catch (error) {
            console.log(error)
        }
    }
    fetchMessages();
  },[])
}

export default useGetMessages
