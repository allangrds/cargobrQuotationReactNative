const makeRequest = (endpoint, config = {}) =>
  fetch(endpoint, config)
    .then(res => res.json())

const useMethod = method => (endpoint, originalConfig) => {
  const newConfig = Object.assign({ method }, originalConfig);

  return makeRequest(endpoint, newConfig);
}

export default useMethod;
