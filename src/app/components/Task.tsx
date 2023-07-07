'use client';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from './Modal';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../../../services/api';
import { useRouter } from 'next/navigation';

type TaskProps = {
	task: Tasks;
};

export default function Task({ task }: TaskProps) {
	const router = useRouter();
	const [openUpdateModal, setUpdateModal] = useState<boolean>(false);
	const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
	const [updateTask, setUpdateTask] = useState<string>(task.text);

	const handleUpdate = async () => {
		console.log(updateTask);
		await updateTodo({
			id: task.id,
			text: updateTask,
		});
		setUpdateModal(false);
		router.refresh();
	};

	const handleDelete = async (id: string) => {
		await deleteTodo(id);
		setDeleteModal(false);
		router.refresh();
	};

	return (
		<tr key={task.id}>
			<td className="w-full text-xl">{task.text}</td>
			<td className="flex gap-5 ">
				<FiEdit
					cursor="pointer"
					onClick={() => setUpdateModal(true)}
					size={25}
					className=" text-teal-500"
				/>
				<Modal openModal={openUpdateModal} setOpenModal={setUpdateModal}>
					<form method="dialog" onSubmit={handleUpdate}>
						<h3 className="text-lg font-bold">Edit Task</h3>
						<div className=" mt-4 flex gap-4">
							<input
								onChange={(e) => setUpdateTask(e.target.value)}
								value={updateTask}
								type="text"
								placeholder="Type here"
								className="input-bordered input w-full"
							/>
							<button className="btn-accent btn">Update</button>
						</div>
					</form>
				</Modal>
				<FiTrash2
					cursor="pointer"
					onClick={() => setDeleteModal(true)}
					size={25}
					className=" text-red-500"
				/>
				<Modal openModal={openDeleteModal} setOpenModal={setDeleteModal}>
					<form method="dialog">
						<h3 className="text-lg font-bold">
							Are you sure you want to delete this task?
						</h3>
						<div className=" mt-4 flex justify-end gap-4">
							<button
								onClick={() => handleDelete(task.id)}
								className=" btn-error btn text-white"
							>
								Yes, Delete It!
							</button>
						</div>
					</form>
				</Modal>
			</td>
		</tr>
	);
}
