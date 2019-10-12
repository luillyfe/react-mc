const loadStateFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem("state");
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const saveStateToLocalStorage = state => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};

export { loadStateFromLocalStorage, saveStateToLocalStorage };
