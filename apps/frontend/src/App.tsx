function App() {
  return (
    <button onClick={async () => {
     const response = await fetch('/api/test/testEndPoint')
     const data = await response.json();
     console.log(data);
    }}>
      Click me
    </button>
  )
}

export default App;