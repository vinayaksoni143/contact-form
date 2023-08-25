"use client";

import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useState } from 'react'

const CotactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, message)

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })

        // const res = await fetch("http://localhost:3001/contactTable", {
        //     method: "PUT",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify({ name, email, message })
        // })

        // const res1 = await fetch("http://localhost:3001/contactTable", {
        //     method: "GET",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        // })
        // console.log(res1)
        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setName("");
            setEmail("");
            setMessage("");
        }
    }
    return (
        <div>
            <form className='py-4 mt-4 border-t flex flex-col gap-5' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fullname'>Full Name</label>
                    <input onChange={e => setName(e.target.value)} value={name} type='text' id='fullname' placeholder='Vinayak Soni'></input>
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} type='text' id='email' placeholder='vinayak@gmail.com'></input>
                </div>

                <div>
                    <label htmlFor='message'>Your Message</label>
                    <textarea onChange={e => setMessage(e.target.value)} value={message} id='message' placeholder='Type your message here...' className='h-32' />
                </div>

                <button type='submit' className='bg-green-700 p-3 font-semibold text-white flex flex-row justify-center'>Send <RiSendPlaneFill size='20' className='send-icon' /></button>
            </form>

            <div className='bg-slate-100 flex flex-col'>
                {error && error.map((e)=>(
                    <div
                    key={e.id}
                    className={`${
                      success ? "text-green-800" : "text-red-600"
                    } px-5 py-2`}
                  >
                    {e}
                  </div>
                ))}
            </div>
        </div>
    )
}




export default CotactForm