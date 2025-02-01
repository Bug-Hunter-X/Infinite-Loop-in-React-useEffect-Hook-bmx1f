```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Avoids infinite loop by setting state conditionally (e.g., based on props or other state)
    if (someCondition) {  // Replace 'someCondition' with your actual condition
      setCount(prevCount => prevCount + 1);
    }
  }, [someCondition]); // Add dependencies to the useEffect

  return <div>Count: {count}</div>;
}
```