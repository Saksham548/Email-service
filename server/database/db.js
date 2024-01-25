import mongoose from "mongoose";

const Connection = () => {
  const DB_URI = `mongodb://Saksham1242:saksham1242@ac-34aphkm-shard-00-00.fsi7z7o.mongodb.net:27017,ac-34aphkm-shard-00-01.fsi7z7o.mongodb.net:27017,ac-34aphkm-shard-00-02.fsi7z7o.mongodb.net:27017/?ssl=true&replicaSet=atlas-qvdgzb-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;
