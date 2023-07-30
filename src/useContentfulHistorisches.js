import { createClient } from 'contentful';

export default function useContentfulHistorisches(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getHistorisches() {
        try {
          const angebot_entries = await client.getEntries({content_type: 'historienPost'});
          return angebot_entries;
        }catch(error){
          console.log('Error fetching Historisches: ', error);
        }
      }

        return { getHistorisches };
}