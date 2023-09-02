import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function Allianz({ allianzposts}){
    const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            const { title, description, file } = node.data.target.fields;
            const imageUrl = file.url;
            const imageAlt = title || description || 'Image';
            return <img src={imageUrl} alt={imageAlt} />;
          },
        },
    };

    return(
    <div className="allianz container">
        <h2>Allianz Kölner Sport</h2>
        {allianzposts.map((item, i) => 
        <div key={i} className="allianz-artikel">
            <h3>{item.fields.titel}</h3>
            <div className="artikel-text">{documentToReactComponents(item.fields.text, options)}</div>
        </div>)}
    </div>
    );
}