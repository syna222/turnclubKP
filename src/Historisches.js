import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function Historisches({historien}){
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
    <div className="historisches container">
        <h2>Historisches vom Turn-Club Köln-Poll 1904 e.V.</h2>
        <hr />
        {historien.map((item, i) => 
        <div key={i} className="historien-artikel">
            <h3>{item.fields.titel}</h3>
            <div className="artikel-text">{documentToReactComponents(item.fields.text, options)}</div>
        </div>)}
        <h3>... wir arbeiten an der Fortsetzung der Geschichte!</h3>
    </div>
    );
}