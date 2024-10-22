import { useUser } from '@react-monorepo/store';
export function App() {
  const { name, id } = useUser()
  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl">
      Welcome  to the NX monorepo
      User Data:
      <ul className='flex gap-2'>
        <li>id: {id}</li>
        <li>Name: {name}</li>
      </ul>
    </div>
  );
}

export default App;
