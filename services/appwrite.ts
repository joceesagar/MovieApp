//track serches made by user
import { Client, Databases, ID, Query } from 'react-native-appwrite'

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
    console.log('GOT IT UP TO HERE')



    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', query)
        ]);
        //if already exist
        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];

            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        }
        //if not exist
        else {
            console.log("TYPES:", typeof (query), typeof (movie.id), typeof (movie.title))
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: query,
                movie_id: movie.id,
                count: 1,
                title: movie.title,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
        console.log(`RESULT:${result}`)
    } catch (error) {
        console.log('Error: ', error)
        throw (error);
    }
    //check if the record of theat search has already been stored
    //if a document is found increment the searchCount field
    //if no document is found 
    //create a new document in database and initiliaze count to 1
}