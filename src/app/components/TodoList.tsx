import Task from './Task';

type TaskProps = {
	tasks: Tasks[];
};

export default function TodoList({ tasks }: TaskProps) {
	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>Task</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task) => (
						<Task key={task.id} task={task} />
					))}
				</tbody>
			</table>
		</div>
	);
}
