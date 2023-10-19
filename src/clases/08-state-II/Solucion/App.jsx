import { useState } from 'react'
import AccountList from './Components/Lista'

const usuarios = [
  { id: '1', nombre: 'pepito', edad: 25, email: 'pepito@egbert.com' },
  { id: '2', nombre: 'nombre2', edad: 47, email: 'name2@lalonde.com' },
  { id: '3', nombre: 'jorge', edad: 21, email: 'jorge@strider.com' },
  { id: '4', nombre: 'jade', edad: 38, email: 'jade@harley.com' },
  
  {
    id: '5',
    nombre: 'teresa',
    edad: 30,
    email: 'teresa@pyrope.com',
  },
  {
    id: '6',
    nombre: 'nombre6',
    edad: 55,
    email: 'name6@serket.com',
  },
  {
    id: '7',
    nombre: 'natalia',
    edad: 18,
    email: 'equius@zahhak.com',
  },
  {
    id: '8',
    nombre: 'gamzee',
    edad: 18,
    email: 'gamzee@makara.com',
  },
  
]

const App = () => {
  const [followingAccounts, setFollowingAccounts] = useState([])


  function handleFollow(account) {
    if (!followingAccounts.some((followingAccount) => followingAccount.id === account.id)) {
      setFollowingAccounts([...followingAccounts, account])
    }
  }


  function handleUnfollow(account) {
    setFollowingAccounts(followingAccounts.filter((followingAccount) => followingAccount.id !== account.id))
  }

  return (
    <>
      <h1>Follow Accounts</h1>
      {followingAccounts.length > 0 ? (
        <AccountList accounts={followingAccounts} onClick={handleUnfollow} />
      ) : undefined}
      <hr />
      <h1>Suggested Accounts</h1>
      <AccountList accounts={usuarios} onClick={handleFollow} />
    </>
  )
}

export default App