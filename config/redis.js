import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://sterling-goose-71941.upstash.io",
  token: "gQAAAAAAARkFAAIgcDE3NmFlNWExODQ2Y2Y0YzdhOGUyMDc0NDIxY2I4Yzk3Zg",
});

// Optional test connection
const connectRedis = async () => {
  try {
    await redis.set("test", "connected");
    console.log("✅ Redis Connected");
  } catch (err) {
    console.error("❌ Redis Connection Failed:", err.message);
    process.exit(1);
  }
};

connectRedis();

export default redis;