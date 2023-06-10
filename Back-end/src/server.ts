import "dorenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { memoriesRoute } from "./routes/memories";

const app = fastify();

app.register(cors, {
	origin: true,
});

app.register(jwt, {
	secret:"aydsnfjhsaibfasdubfgdsuaghdsugv",
});

app.register(memoriesRoute);



app.listen({
	port: 3333,
}).then(() => {
	console.log("😜");
});
