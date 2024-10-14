import Head from './Head.jsx';
import Leaders from './Leaders.jsx';
import Sort from './Sort.jsx';
import Results from './Results.jsx';
import User from './User.jsx';
/**
 * @component
 * @function Rating
 * @returns {JSX.Element} All the elements of the "Rating" game section accordingly.
 * @description Contains all the elements and components of "Rating" section layout.
 */
export default function Rating() {
    return(
        <div className="grid">
            <Head />
            <Leaders />
            <Sort />
            <Results />
            <User />
        </div>
    );
};