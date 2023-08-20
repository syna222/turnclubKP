import { createClient } from 'contentful';

export default function useCFAllianz(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getAllianz() {
        try {
          const allianz_entries = await client.getEntries({content_type: 'allianzPost'});
          return allianz_entries;
        }catch(error){
          console.log('Error fetching Allianz: ', error);
        }
      }

        return { getAllianz };
}