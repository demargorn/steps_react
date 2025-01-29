import PropTypes from 'prop-types';
import ResultRow from '../ResultRow/ResultRow';

Result.propTypes = {
   results: PropTypes.array.isRequired,
   onDelete: PropTypes.func.isRequired,
};

function Result({ results,  onDelete }) {
   return results
      .toSorted((a, b) => (b.date > a.date ? 1 : a.date > b.date ? -1 : 0))
      .map((res) => {
         const { id, ...resProps } = res;
         return (
            <ResultRow
               key={id}
               onDelete={() => onDelete(id)}
               {...resProps}
            />
         );
      });
}

export default Result;
