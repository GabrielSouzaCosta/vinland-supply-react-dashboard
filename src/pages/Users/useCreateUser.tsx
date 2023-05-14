import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

export default function({
    setUsers
}) {
    const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            user_type: 'seller'
        }
    });
      
    const user_type = useWatch({
        control,
        name: 'user_type'
    })

    const apiManager = {

        handleCreateNewUser: function(data) {
            const newUser = data.avatar ? data : { ...data, avatar: '/images/vinland-characters/leif.jpeg' };
            setUsers(prevState => [ ...prevState, newUser ]);
            reset();
            toast.success("User created successfully!", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
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