"use server";

import { z } from "zod";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const getAllTasks = async () => {
	return await prisma.task.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
};

export const createTask = async (formData: FormData) => {
	const content = formData.get("content")?.toString();
	await prisma.task.create({
		data: {
			content: content ?? "",
		},
	});
	revalidatePath("/tasks");
};

export const deleteTask = async (prevState: any, formData: FormData) => {
	const id = formData.get("id")?.toString();
	const task = await prisma.task.findUnique({
		where: {
			id: id,
		},
	});

	try {
		await prisma.task.delete({
			where: {
				id: id,
			},
		});

		revalidatePath("/tasks");
		return {
			message: task ? task.content : "No task name.",
		};
	} catch (error) {
		return {
			message: "error",
		};
	}
};

export const GetSingleTask = async (id: string) => {
	const GetTask = await prisma.task.findUnique({
		where: {
			id: id,
		},
	});
	return GetTask;
};

export const editTask = async (formData: FormData) => {
	const id = formData.get("id");
	const content = formData.get("content");
	const completed = formData.get("completed");

	if (id && (content || completed)) {
		await prisma.task.update({
			where: {
				id: id as string,
			},
			data: {
				content: content as string,
				completed: completed === "on" ? true : false,
			},
		});
	}
};

export const createTaskCustom = async (prevState: any, formData: FormData) => {
	const content = formData.get("content")?.toString();
	const Task = z.object({
		content: z.string().min(4),
	});
	try {
		Task.parse({ content });
		await prisma.task.create({
			data: {
				content: content ?? "",
			},
		});
		revalidatePath("/tasks");
		return {
			message: "success",
		};
	} catch (error: any) {
		return {
			message: {
				error: (error.errors[0].message as string) ?? "There was an error.",
			},
		};
	}
};
