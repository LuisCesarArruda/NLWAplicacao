import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import {z} from "zod";

export async function memoriesRoute(app:FastifyInstance) {
	app.get("/memories", async (request) => {

		await request.jwtVerify();

		const memories = await prisma.memory.findMany({
			
			orderBy:{
				createdAt: "asc",
			}
		});
		return memories.map(memory => {
			return{
				id: memory.id,
				coverUrl: memory.coverUrl,
				excerpt: memory.content.substring(0,115).concat("...")
			};
		});
	});

	app.get("/memories/:id", async (request) => {

		const paramScheme = z.object(
			{
				id: z.string().uuid(),

			}
		);
		const {id} = paramScheme.parse(request.params);
		const memory = await prisma.memory.findUniqueOrThrow({
			where: {
				id,
			}
		});
		return memory;
	});
	
	app.post("/memories", async (request) => {
		const bodyScheme = z.object(
			{
				content: z.string(),
				coverUrl: z.string(),
				isPublic: z.coerce.boolean().default(false),

			}
		);
		const{content, coverUrl, isPublic } = bodyScheme.parse(request.body);
		const memory = await prisma.memory.create({
			data: {
				content,
				coverUrl,
				isPublic,
				userId: "8600857f-aaf8-4573-8f51-4ccb1ed9113b"
			}
		});
	});

	app.put("/memories/:id", async (request) => {
		const paramScheme = z.object(
			{
				id: z.string().uuid(),

			}
		);
		const {id} = paramScheme.parse(request.params);

		const bodyScheme = z.object(
			{
				content: z.string(),
				coverUrl: z.string(),
				isPublic: z.coerce.boolean().default(false),
				
			}
		);
		const{content, coverUrl, isPublic } = bodyScheme.parse(request.body);

		const memory = await prisma.memory.update({
			where: {
				id,
			},
			data: {
				content,
				coverUrl,
				isPublic
			}
		});
		return memory;
	});
    
	app.delete("/memories/:id", async (request) => {
		
		const paramScheme = z.object(
			{
				id: z.string().uuid(),

			}
		);
		const {id} = paramScheme.parse(request.params);
		await prisma.memory.delete({
			where: {
				id,
			}
		});
	});
	
}
