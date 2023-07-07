import { getAllTodos } from '../../services/api';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

export default async function Home() {
	const tasks = await getAllTodos();
	console.log(tasks);
	return (
		<main className="mx-auto max-w-5xl">
			<div className="my-6 flex flex-col text-center">
				<h1 className=" text-3xl font-bold">ToDo App</h1>
				<AddTask />
			</div>
			<TodoList tasks={tasks} />
		</main>
	);
}
