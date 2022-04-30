const reducer = (state, action) => {

    if (action.type === "ADD_COUNT") {
        return {...state, counter:store.counter + action.payload};
    }

    if (action.type === "TOOGLE_THEME")  {
        return {...store, theme: store.theme === "light" ? "dark" : "light"};
    }
}