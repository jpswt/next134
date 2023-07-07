import { headers } from 'next/dist/client/components/headers';

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<Tasks[]> => {
	const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-cache' });
	const todos = await res.json();
	return todos;
};

export const addTodo = async (todo: Tasks): Promise<Tasks> => {
	const res = await fetch(`${baseUrl}/tasks`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(todo),
	});
	const newTodo = await res.json();
	return newTodo;
};

export const updateTodo = async (todo: Tasks): Promise<Tasks> => {
	const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(todo),
	});
	const updatedTodo = res.json();
	return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
	const res = await fetch(`${baseUrl}/tasks/${id}`, {
		method: 'DELETE',
	});
};
