import { User } from "@/@types/user";
import React, { SetStateAction } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

export default function({
    setUsers
} : { setUsers: React.Dispatch<SetStateAction<User[]>> }) {
    const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm<User>({
        defaultValues: {
            avatar: '',
            name: '',
            username: '',
            phone: '',
            email: '',
            address: '',
            user_type: 'seller',
        }
    });
      
    const user_type = useWatch({
        control,
        name: 'user_type'
    })

    const apiManager = {

        handleCreateNewUser: function(data: User) {
            const newUser: User = data.avatar ? data : { ...data, avatar: '/images/vinland-characters/leif.jpeg' };
            setUsers((prevState: User[]) => [ ...prevState, newUser ]);
            reset();
            toast.success("User created successfully!", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
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

    return { 
        apiManager, 
        control,
        user_type, 
        register,
        watch,
        handleSubmit,
        errors,
    }
}