import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

let cachedConnection = null;

async function connectToDatabase() {
    if (cachedConnection) {
        return cachedConnection;
    }

    const opts = {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    };

    cachedConnection = mongoose.connect(MONGODB_URI, opts)
        .then((mongoose) => {
            console.log('Connected to MongoDB');
            return mongoose.connection;
        })
        .catch(error => {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        });

    return cachedConnection;
}

const db = await connectToDatabase();

export default db;