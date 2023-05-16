import React, { useState } from 'react'
import { Table } from '../../components/tables'
import styled from 'styled-components'
import { IoCreateOutline, IoPencilOutline, IoPersonOutline, IoTrashOutline } from 'react-icons/io5'
import { TableRoundedImage, TableWrapper } from '../../components/tables/styles/tableStyles'
import { P, P2, P3 } from '../../styles/common/texts'
import { colors } from '../../styles/common/theme'
import { ModalConfirmDecision, ModalEditUserDetails } from '../../components/modals'
import { toast } from 'react-toastify'
import { CardTitle, CenteredRoundedImage, Label, Value } from '@/components/tables/components/MobileView/styles'
import { Button } from '@/styles/common/buttons'
import { Div } from '@/styles/common/layout'

const TableUsers = ({
    users,
    setUsers
}) => {
    const [ currModalOpen, setCurrModalOpen ] = useState(false);
    const [ currUser, setCurrUser ] = useState('');
    
    function handleDeleteUser() {
        setUsers(prevState => [ ...prevState.filter(user => user.name !== currUser.name) ]);
        toast.success(`User ${currUser.name} deleted successfully!`);
        handleCloseModal();
    }

    function handleOpenModalEditUser(user) {
        setCurrUser(user);
        setCurrModalOpen('EDIT');
    }

    function handleOpenModalDeleteUser(user) {
        setCurrUser(user);
        setCurrModalOpen('DELETE');
    }

    function handleCloseModal() {
        setCurrModalOpen('');
    }

    const productsTableColumns = [
        {
            Header: <IoPersonOutline />,
            accessor: 'avatar',
            Cell: ({value}) => <TableRoundedImage src={value} alt="" />,
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Username',
            accessor: 'username',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Address',
            accessor: 'address',
        },
        {
            Header: 'User Type',
            accessor: 'user_type',
            Cell: ({ value }) => <P style={{ textTransform: 'uppercase' }}> { value } </P>
        },
        {
            Header: 'Edit',
            Cell: ({ row }) => (
                <button
                    onClick={() => handleOpenModalEditUser(row.values)}
                    type="button"
                >
                    <IoCreateOutline
                        size={25}
                        color={colors.blue} 
                    />
                </button>
            )
        },
        {
            Header: 'Delete',
            Cell: ({ row }) => (
                <button
                    onClick={() => handleOpenModalDeleteUser(row.values)}
                    type="button"
                >
                    <IoTrashOutline
                        size={25}
                        color={colors.danger} 
                    />
                </button>
            )
        },
    ]

    const MobileCardInner = ({ data, labels }) => {
        const filter_data = Object.entries(data).filter(([ label ]) => !['avatar', 'name', 'id'].includes(label));
        const secondary_data = filter_data.map(([label, value]) => value);
        const filtered_labels = labels.filter((label) => !['avatar', 'name', 'id'].includes(label.accessor));

        return (
            <>
                <CenteredRoundedImage
                    src={data.avatar}
                    alt=""
                    loading="lazy"
                />
                <CardTitle>
                    { data.name }
                </CardTitle>
                {secondary_data.map((value, index) => (
                        <div style={{ marginBottom: '5px' }}>
                            <Label>
                                { filtered_labels[index].Header }: 
                                {" "}
                                <Value>
                                    { value }
                                </Value>
                            </Label>
                        </div>
                    ))
                }
                <Div my="10px">
                    <Button 
                    iconButton
                    fullWidth
                    variant="black"
                    onClick={() => handleOpenModalEditUser(data)}
                    >
                        <IoCreateOutline
                            size={25}
                            color={colors.blue} 
                        />
                        Update User
                    </Button>
                </Div>
                <Button 
                   iconButton
                   fullWidth
                   variant="danger"
                   onClick={() => handleOpenModalDeleteUser(data)}
                >
                    <IoTrashOutline
                        size={25}
                        color={colors.white} 
                    />
                    Delete User
                </Button>
            </>
        )
    }

    return (
        <>
            <Table
                tableData={users}
                tableColumns={productsTableColumns}
                CustomWrapper={CustomWrapper}
                MobileCardInner={MobileCardInner}
            />
            <ModalEditUserDetails 
                user={currUser}
                isOpen={currModalOpen === 'EDIT'}
                closeModal={handleCloseModal}
                users={users}
                setUsers={setUsers}
            />
            <ModalConfirmDecision 
                isOpen={currModalOpen === 'DELETE'}
                closeModal={handleCloseModal}
                title={'Delete User '+currUser.name}
                confirmButtonVariant="danger"
                confirmText={"Delete user"}
                handleConfirm={handleDeleteUser}
                message={
                    <P3>
                        Are you sure you want to delete the user {currUser.name}?
                    </P3>
                }
            />
        </>
    )
}

const CustomWrapper = styled(TableWrapper)`
    td:first-child {
        width: 40px;
    }
    td:nth-child(8), td:nth-child(9) {
        width: 100px;
    }
`

export default TableUsers