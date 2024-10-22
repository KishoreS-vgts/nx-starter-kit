import { useCounter } from '@react-monorepo/store'
export function App() {
  const count = useCounter((state) => state.count)
  const { decrease, increase } = useCounter()
  return (
    <div className="">
      Welcome to the NX monorepo
      <div>Count {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
