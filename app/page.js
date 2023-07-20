import React from 'react'

function Home() {

  const reducer = (state, action) => {

}
  
  return (
    <div id="main">
      <section className='logout-section'>
        <h2>Logged in successfully!</h2>
        <p>Welcome username!</p>
        <button className='logout-btn'>Logout</button>
      </section>
      <form className='login-form'>
        {/* <p className='invalid-error'>Invalid username or password!</p> */}
        <section className='username-input'>
          <label>Username: </label>
          <input type="text" placeholder='Username' className='username' />
        </section>
        <section className='password-input'>
          <label>Password: </label>
          <input type="password" placeholder='Password' className='password' />
        </section>
        <button className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Home
