import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function EhrungenJubilaeen({ ehrungen }){
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
    <div className="ehrungen container">
        <h2>Ehrungen und Jubiläen</h2>
        {ehrungen.map((item, i) => 
        <div key={i} className="ehrungen-artikel">
            <h3>{item.fields.titel}</h3>
            <div className="artikel-text">{documentToReactComponents(item.fields.text, options)}</div>
        </div>)}
    </div>
    );
}