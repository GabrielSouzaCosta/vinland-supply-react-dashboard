import React, { useState } from 'react'
import { H3 } from '../../../styles/common/texts'
import styled from 'styled-components'
import { InputContainer } from '../../../styles/common/inputs'
import { Button } from '../../../styles/common/buttons'
import { IoCheckmark } from 'react-icons/io5'
import BinaryButton from '../../../components/ui/inputs/BinaryButton'
import { toast } from 'react-toastify'
import { useForm, useWatch } from 'react-hook-form'

const Notifications = () => {
    const [ formChanged ,setFormChanged ] = useState(false);
    type FormValues = {
        GENERAL: boolean,
        DAILY: boolean,
        ORDERS: boolean,
    }
    const { control, setValue, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            'GENERAL': false,
            'DAILY': false,
            'ORDERS': false,
        }
    });
    const form = useWatch({
        control
    })

    function handleToggle(toggle: 'GENERAL' | 'DAILY' | 'ORDERS') {
        if (!formChanged) {
            setFormChanged(true);
        }
        if (toggle === 'GENERAL') {
            if (form['GENERAL'] === true) {
                setValue('DAILY', false)
                setValue('ORDERS', false)
            } else {
                setValue('DAILY', true)
                setValue('ORDERS', true)
            }
            setValue('GENERAL', !form['GENERAL'])
            
        } else {
            setValue(toggle, !form[toggle])
        }
    }

    function handleUpdateNotificationPreferences(data: FormValues) {
        setFormChanged(false);
        toast.success("Notification preferences updated!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (
        <section>
            <H3>
                Notifications
            </H3>

            <FormNotifications onSubmit={handleSubmit(handleUpdateNotificationPreferences)}>
                <InputContainer label="All notifications">
                    <BinaryButton
                        isToggled={form.DAILY && form.ORDERS}
                        handleToggle={() => handleToggle('GENERAL')}
                    />
                </InputContainer>
                <InputContainer label="Daily notifications">
                    <BinaryButton
                        isToggled={form.DAILY}
                        handleToggle={() => handleToggle('DAILY')}
                    />
                </InputContainer>
                <InputContainer label="Orders notifications">
                    <BinaryButton
                        isToggled={form.ORDERS}
                        handleToggle={() => handleToggle('ORDERS')}
                    />
                </InputContainer>

                {formChanged &&
                    <Button type="submit" variant="success" iconButton>
                        <IoCheckmark size={24} />
                        Save editions
                    </Button>
                }

                
            </FormNotifications>
        </section>
    )
}

const FormNotifications = styled.form`
    width: 260px;
    button[type="submit"] {
        width: 100%;
        margin-top: 20px;
    }
`

export default Notifications