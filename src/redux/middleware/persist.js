const persist = (store) => (next) => async (action) => {
  let result = next(action);
  return result;
};

export default persist;
