DONE - Use useSelector() Redux Hook to select the state slices and render lists of missions in corresponding routes. i.e.:

// get rockets data from the store
const rockets = useSelector(state => state.rockets);

You can style the whole application "by hand" or you could use React Bootstrap, a UI library that could speed up the process. This is a popular library and working with its components would be good practice.
Render a table with the missions' data (as per design).