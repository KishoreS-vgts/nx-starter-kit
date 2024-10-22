import { useUser } from '@react-monorepo/store'
import { Card } from '@react-monorepo/ui'

export function App() {
  const { name, id } = useUser()
  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl">
      Welcome to the NX monorepo 🚀
      <Card className="text-base font-normal mt-4 border cursor-pointer">
        <h2 className="mb-2 text-lg underline">Card Component</h2>
        <ul className="flex gap-2 flex-col">
          <li>id: {id}</li>
          <li>Name: {name}</li>
        </ul>
      </Card>
    </div>
  )
}

export default App
