import { useState } from 'react'

const isDark = (window.matchMedia('(prefers-color-scheme: dark)')).matches

function App() {
  const [userPrefersDark, setUserPrefersDark] = useState(isDark)
  function handleToggle() {
    setUserPrefersDark((s) => !s)
  }
  return (
    <>
      <h1>You have opt-in for {userPrefersDark ? "Dark" : "Light"} mode</h1>
      <button role="checkbox" aria-checked={userPrefersDark} onClick={handleToggle}></button>
    </>
  )
}

export default App
