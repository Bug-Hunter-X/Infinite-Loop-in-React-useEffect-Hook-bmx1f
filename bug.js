```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Setting state directly inside useEffect without a conditional check
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```