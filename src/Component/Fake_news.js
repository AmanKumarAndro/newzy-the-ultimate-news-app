import React from 'react'

export const Fake_news = () => {
    return (
        <div style={{height:"100vh"}}>
            <h1 className='text-center pt-3'>Fake news detector</h1>
            <p className='text-center my-0 '>check whether news is real or fake.
             </p>
            <div className='mx-auto' style={{
                width:"600px"
            }}>
                <form action="" >
                    <div className='mt-3'>
                        <label htmlFor="news" className='' style={{fontSize:"20px", fontWeight:"600"}}>Enter URL of the News:</label>
                    </div>
                    <textarea name="news" id="" cols="70" rows="10" style={{margin:"auto",resize:"none"}}></textarea>
                    <div>
                        <button className='btn btn-outline-success' >Check</button>
                    </div>
                </form>
            </div>

            <div>
                result
            </div>
        </div>
    )
}
