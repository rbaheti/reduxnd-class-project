function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  // subscribe is on of store's function.
  // When called, it is passed a single function.
  // And it returns a function.
  // Note: subscribe does not modify internal state tree variable! 
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  return {
    getState,
    subscribe
  };
}