import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function RolleRueckwaerts({ rueckschau }){
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
    <div className="rueckschau container">
        <h2>Rolle Rückwärts - Rückschau</h2>
        <hr />
        {rueckschau.map((item, i) => 
        <div key={i} className="rueckschau-artikel">
            <div className="artikel-text">{documentToReactComponents(item.fields.text, options)}</div>
        </div>)}
    </div>
    );
}