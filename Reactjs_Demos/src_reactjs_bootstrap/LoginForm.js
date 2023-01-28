

import React from 'react'

export default function LoginForm() {
  return (
    <div>

        <form className='container col-lg-4'>

        UserName : <input type="text" name="uname" className='form-control' />
        Password : <input type="password" name="pwd" className='form-control' />

        <button type="submit" className='btn btn-warning '>Login</button>



        </form>

      
    </div>
  )
}
