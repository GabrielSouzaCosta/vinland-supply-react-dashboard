export type ModalProps =  {
    isOpen: boolean,
    closeModal: () => void,
    title: string,
    contentLabel?: string,
    children: React.ReactNode
}

export type ChildrenModalProps = {
    isOpen: boolean,
    closeModal: () => void,
}