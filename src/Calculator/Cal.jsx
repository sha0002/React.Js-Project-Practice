import React, { useState } from 'react'

const Cal = () => {

    const [result, setResult] = useState('')

    const handleclick = (e) => {
        setResult(result.concat(e.target.value))
    }

    const AllClear = () => {
        setResult('')
    }

    const singleClear = () => {
        setResult(result.slice(0, -1))
        // setResult(result.substring(0, result.length - 1))
    }

    const Equal = () => {
        if (result === "") {
            setResult('')
        } else {

            setResult(eval(result.toString()))
        }

    }


    return (
        <>
            <div className='cal_container'>
                <div className="calculator">
                    {/* input-taxt */}
                    <input type="text" disabled value={result} />

                    <div className=''>
                        <button onClick={AllClear}>AC</button>
                        <button onClick={singleClear}>DEL</button>
                        <button className='operator' onClick={handleclick} value='%'>%</button>
                        <button className='operator' onClick={handleclick} value='/'>/</button>
                    </div>
                    <div>
                        <button onClick={handleclick} value='7'>7</button>
                        <button onClick={handleclick} value='8'>8</button>
                        <button onClick={handleclick} value='9'>9</button>
                        <button onClick={handleclick} value='*' className='operator'>*</button>
                    </div>
                    <div>
                        <button onClick={handleclick} value='4'>4</button>
                        <button onClick={handleclick} value='5'>5</button>
                        <button onClick={handleclick} value='6'>6</button>
                        <button onClick={handleclick} value='-' className='operator'>-</button>
                    </div>
                    <div>
                        <button onClick={handleclick} value='1'>1</button>
                        <button onClick={handleclick} value='2'>2</button>
                        <button onClick={handleclick} value='3'>3</button>
                        <button onClick={handleclick} value='+' className='operator'>+</button>
                    </div>
                    <div>
                        <button onClick={handleclick} value='00 '>00</button>
                        <button onClick={handleclick} value='0'>0</button>
                        <button onClick={handleclick} value='.'>.</button>
                        <button className='equal_btn' onClick={Equal}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cal