import { ReactNode } from 'react';

type ModalProps = {
	openModal: boolean;
	setOpenModal: (open: boolean) => boolean | void;
	children: ReactNode;
};

export default function Modal({
	openModal,
	setOpenModal,
	children,
}: ModalProps) {
	return (
		<>
			<dialog
				id="my_modal_3"
				className={`modal ${openModal ? 'modal-open' : ''}`}
			>
				<div className="modal-box">
					<button
						onClick={() => setOpenModal(false)}
						className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2"
					>
						✕
					</button>
					{children}
				</div>
			</dialog>
		</>
	);
}
