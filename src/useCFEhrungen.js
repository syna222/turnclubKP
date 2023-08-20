import { createClient } from 'contentful';

export default function useCFEhrungen(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getEhrungen() {
        try {
          const ehrungen_entries = await client.getEntries({content_type: 'ehrungen'});
          return ehrungen_entries;
        }catch(error){
          console.log('Error fetching Ehrungen: ', error);
        }
      }

        return { getEhrungen };
}