import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, title, url }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

// const ArticleList = ({ articles }) => {
//   return (
//     <ul>
//       {articles.map(({ objectID, title, url }) => (
//         <li key={objectID}>
//           <a href={url} target="_blank" rel="noreferrer noopener">
//             {title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default ArticleList;

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
