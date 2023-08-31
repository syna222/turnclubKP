import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function News({ news }){
    const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            const { title, description, file } = node.data.target.fields;
            const imageUrl = file.url;
            const imageAlt = title || description || 'Image';
            return <div className="img-container"><img src={imageUrl} alt={imageAlt} /></div>;
          },
        },
    };

    return(
    <div className="news container">
        <h2>News</h2>
        <hr />
        {news.map((item, i) => 
        <div key={i} className="news-artikel">
            <br />
            <h3>{item.fields.stand.split('-')[2].substring(0, 2) + "." + item.fields.stand.split('-')[1] + "." + item.fields.stand.split('-')[0]}</h3>
            <div className="artikel-text">{documentToReactComponents(item.fields.text, options)}</div>
        </div>)}
    </div>
    );


}