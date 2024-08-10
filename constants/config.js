// const corsOptions = {
//   origin: [
//     "http://localhost:5173",
//     "http://localhost:4173",
//     process.env.CLIENT_URL,
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// };

// const CHATTU_TOKEN = "chattu-token";

// export { corsOptions, CHATTU_TOKEN };



const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

// Define the server variable based on environment variables or fallback to localhost
const server = process.env.REACT_APP_API_URL || "http://localhost:3000";

export { corsOptions, CHATTU_TOKEN, server };
