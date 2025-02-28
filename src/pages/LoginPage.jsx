import { useContext, useEffect, useState } from 'react'
import { InputField } from '../components/InputField/InputField'
import { UserContext } from '../context/userContext'

export function LoginPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loginMessage, setLoginMessage] = useState()

  console.log('Input Values', email, password)

  const { setUserData } = useContext(UserContext)

  function submitData() {
    const body = new URLSearchParams()
    body.append('username', email)
    body.append('password', password)

    const options = {
      method: 'POST',
      body: body,
    }

    fetch('https://api.mediehuset.net/token', options)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setUserData(data)
          setLoginMessage(
            `Du er nu logget ind.. Velkommen tilbage ${data.user.firstname}`
          )
        } else {
          setLoginMessage('Du har tastet forkert password eller email')
        }
      })
      .catch((err) => console.error('Error: ', err))
  }

  useEffect(() => {
    document.title = `Login`
  }, [])

  return (
    <>
      <form>
        <InputField
          type='email'
          placeholder='Indtast din mail..'
          name='Email'
          id='emailField'
          labelText='Email'
          action={setEmail}
        />
        <InputField
          type='password'
          placeholder={'Indtast dit password...'}
          name='Password'
          id='passwordField'
          labelText='Password'
          action={setPassword}
        />
      </form>
      <button onClick={() => submitData()}>Send</button>
      {loginMessage}
      </>
  )
}