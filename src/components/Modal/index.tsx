import Modal from 'react-modal'

interface NNmodalProps {
    isGenericModalOpen: boolean;
    onCloseGenericModal: () => void;
    children: any;
} 

export function NNModal({isGenericModalOpen, onCloseGenericModal, children }: NNmodalProps) {
    return (
        <Modal
            isOpen={isGenericModalOpen}
            onRequestClose={onCloseGenericModal}>
            {children}
        </Modal>
    )
}