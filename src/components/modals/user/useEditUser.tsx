import { User } from "@/@types/user";
import { useEffect } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { ModalEditUserProps } from "./ModalEditUserDetails";

export default function({
    users,
    setUsers,
    user,
    closeModal
}: Omit<ModalEditUserProps, 'isOpen'>) {
    const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm<User>();
      
    const user_type = useWatch({
        control,
        name: 'user_type'
    })

    const apiManager = {
        handleUpdateUser: function<SubmitHandler>(data: User) {
            if (user) {
                let updatedUsers = [ ...users ];
                let userIndex = users.findIndex(item => item.name === user.name);
                updatedUsers[userIndex] = data; 
                setUsers(updatedUsers);
                reset();
                toast.success("User updated successfully!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                closeModal();
            }
        },

        handleChangeUserType: function(type: string) {
            setValue('user_type', type);
        },

        handleUploadPicture: function(e: React.ChangeEvent<HTMLInputElement>) {
            if (e.target.files) {
                const file = e.target.files[0];
                const reader = new FileReader();
            
                reader.onload = () => {
                    if (typeof(reader.result) === 'string') {
                        setValue('avatar', reader.result);
                    }
                };
            
                reader.readAsDataURL(file);
            }
        }
    }

    useEffect(() => {
        if (user) {
            reset(user);
        }
    }, [user])

    return { 
        apiManager, 
        user_type, 
        control,
        register,
        watch,
        handleSubmit,
        errors,
    }
}