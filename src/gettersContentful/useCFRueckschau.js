import { createClient } from 'contentful';

export default function useCFRueckschau(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getRueckschau() {
        try {
          const rueckschau_entries = await client.getEntries({content_type: 'rueckschau'});
          return rueckschau_entries;
        }catch(error){
          console.log('Error fetching Rückschau: ', error);
        }
      }

        return { getRueckschau };
}