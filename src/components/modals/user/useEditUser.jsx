import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

export default function({
    users,
    setUsers,
    user,
    closeModal
}) {
    const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm();
      
    const user_type = useWatch({
        control,
        name: 'user_type'
    })

    const apiManager = {
        handleUpdateUser: function(data) {
            let updatedUsers = [ ...users ];
            let userIndex = users.findIndex(item => item.name === user.name);
            updatedUsers[userIndex] = data; 
            setUsers(updatedUsers);
            reset();
            toast.success("User updated successfully!", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            closeModal();
        },

        handleChangeUserType: function(type) {
            setValue('user_type', type);
        },

        handleUploadPicture: function(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
        
            reader.onload = () => {
                setValue('avatar', reader.result);
            };
        
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        reset(user);
    }, [user])

    return { 
        apiManager, 
        user_type, 
        register,
        watch,
        handleSubmit,
        errors,
    }
}