import React, { useState } from 'react'
import { Preview } from './Preview'


const Principal = () => {
    const [text, setText] = useState("")
    return (
        <>
            <div className="container px-5 mt-5 form-floating ">
                <p className="bg-secondary p-2 text-white mb-0 text-start">Editor <a href="https://github.com/Ohtico">Ejemplo</a></p>
                <textarea
                    className="container form-control bg-info border border-0 "
                    style={{ height: "300px" }}
                    name="text"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className="mt-5 d-flex mx-5 px-5">
                    <div className="container">
                    <p className="bg-secondary p-2 text-white mb-0 text-start">Previewer</p>
                        <Preview presentar={text} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Principal

