import { createClient } from 'contentful';

export default function useCFAngebote(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getAngebote(filter) {
        try {
          const query = {content_type: 'sportangebot',};
          if(filter){
            if(filter[0] === 'alter'){
              query[`fields.${filter[0]}[match]`] = filter[1];
            }else{
              query[`fields.${filter[0]}`] = filter[1];
            }
          }
          const angebot_entries = await client.getEntries(query);
          return angebot_entries;
        }catch(error){
          console.log('Error fetching Sportangebote: ', error);
        }
      }

        return { getAngebote };
}