import Main from './Main.jsx';
import Navigation from './Navigation.jsx';
/**
 * @component
 * @function App
 * @returns {JSX.Element} The main components of the application to the "root".
 * @description Contains all the components, tags, etc. of this project.
 */
export default function App() {
    return(
        <>
            <Main />
            <Navigation />
        </>
    );
};