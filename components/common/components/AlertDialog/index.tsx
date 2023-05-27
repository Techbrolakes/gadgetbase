import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';

interface IProps {
    title: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    desc?: string;
    loading?: boolean;
    handleDelete: () => void;
}

const CustomAlertDialog: React.FC<IProps> = ({ title, isOpen, setIsOpen, handleDelete, loading, desc }) => {
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef<any>();

    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" textStyle="p" fontWeight="bold">
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogBody textStyle="p">
                        {desc && desc}
                        {!desc && 'Are you sure? You can not undo this action afterwards.'}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button textStyle="p" ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            background={'red.600'}
                            isLoading={loading}
                            loadingText="Deleting....."
                            colorScheme="red"
                            onClick={() => {
                                handleDelete();
                            }}
                            ml={3}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default CustomAlertDialog;
