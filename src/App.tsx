import React from "react"
import { Button } from "./components/button"


const App: React.FC<{}> = () => {
  return (
    <>
      <main>
        <Button onClick={() => console.log('click')}>Test</Button>
      </main>
    </>
  )
}

export default App
