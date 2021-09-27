import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types'

const DataContent = ({ data }) => {

    return (
      <div>
          <Masonry
            breakpointCols={5}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              {data ? (
                data.data.map((item) => {
                    return (
                      <a href={item.embed_url} key={item.id}>
                          <source
                            type="image/webp"
                            srcSet={item.images.fixed_width.url}/>
                          <img
                            src={item.images.fixed_width.webp}
                            alt={item.title}/>
                      </a>
                    );
                })
              ) : null}
          </Masonry>
      </div>
    );
};

DataContent.propTypes = {
    data: PropTypes.object
}

DataContent.defaultProps = {
    data: {}
}

export default DataContent;
