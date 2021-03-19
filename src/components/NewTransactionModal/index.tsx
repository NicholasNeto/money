import Modal from 'react-modal'


interface NNmodalProps {
    isOpen: boolean;
    onRequestClose: () => void;
} 

export function NewTransactionModal({isOpen, onRequestClose }: NNmodalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
        </Modal>
    )
}