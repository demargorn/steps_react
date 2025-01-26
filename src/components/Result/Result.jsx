import PropTypes from 'prop-types';
import ResultRow from '../ResultRow/ResultRow';

Result.propTypes = {
   results: PropTypes.array.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
};

function Result({ results, onEdit, onDelete }) {
   return results
      .sort((a, b) => (b.date > a.date ? 1 : a.date > b.date ? -1 : 0))
      .map((res) => {
         const { id, ...resProps } = res;
         return (
            <ResultRow
               key={id}
               {...resProps}
               onEdit={() => onEdit(id)}
               onDelete={() => onDelete(id)}
            />
         );
      });
}

export default Result;
