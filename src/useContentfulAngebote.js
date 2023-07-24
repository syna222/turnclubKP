import { createClient } from 'contentful';

export default function useContentfulAngebote(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getAngebote(filter){
        try {
            if(filter){
                if(filter[0] === "alter"){
                    const angebot_entries = await client.getEntries({content_type: "sportangebot", [`fields.${filter[0]}[match]`]: filter[1]});
                    return angebot_entries;
                }
                else{
                    const angebot_entries = await client.getEntries({content_type: "sportangebot", [`fields.${filter[0]}`]: filter[1]});
                    return angebot_entries;
                }
            }
            else{
                const angebot_entries = await client.getEntries({content_type: "sportangebot"});
                return angebot_entries;
            }
        } catch (error){
            console.log("Error fetching Sportangebote: ", error);
        }
    }

        return { getAngebote };
}