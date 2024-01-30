1. The goal is to skip useEffect hook on first render.
2. the custom hook should run effecct only after first(initial) render.
3. The solution utilises ref to achieve the desired effect.

Solution Overview:

1. The custom hook, named useUpdateEffect, utilizes a ref to keep track of whether it's the initial render or a subsequent update.
2. During the initial render, the ref is set to true, indicating that it's the first render.
3. On subsequent renders, the ref is set to false, allowing the effect function to execute when dependencies change.
4. By conditionally executing the effect based on the ref value, the hook ensures that the effect runs only after the initial render, fulfilling the requirement.
