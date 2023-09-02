import { createClient } from 'contentful';

export default function useCFNews(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getNews() {
        try {
          const news_entries = await client.getEntries({content_type: 'news'});
          return news_entries;
        }catch(error){
          console.log('Error fetching News: ', error);
        }
      }

        return { getNews };
}