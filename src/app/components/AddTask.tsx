'use client';
import { useState, FormEvent } from 'react';
import Modal from './Modal';
import { sendStatusCode } from 'next/dist/server/api-utils';
import { addTodo } from '../../../services/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
	const router = useRouter();
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [newTask, setNewTask] = useState<string>('');

	const handleNewTaskSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(newTask);
		await addTodo({
			id: uuidv4(),
			text: newTask,
		});
		setNewTask('');
		setOpenModal(false);
		router.refresh();
	};
	return (
		<div>
			<button
				onClick={() => setOpenModal(true)}
				className=" btn-primary btn w-full"
			>
				Add Task
			</button>
			<Modal openModal={openModal} setOpenModal={setOpenModal}>
				<form method="dialog" onSubmit={handleNewTaskSubmit}>
					<h3 className="text-lg font-bold">Add New Task</h3>
					<div className=" mt-4 flex gap-4">
						<input
							onChange={(e) => setNewTask(e.target.value)}
							value={newTask}
							type="text"
							placeholder="Type here"
							className="input-bordered input w-full"
						/>
						<button className="btn-accent btn">Add Task</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}
