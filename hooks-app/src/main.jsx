import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'

// const url = `https://jsonplaceholder.typicode.com/users`
const url = `http://localhost:3000/users`

const UserList = ({ users, onEditUser, onDeleteUser }) => {
    return <div>
        <h2>User List</h2>
        <ul>
            {
                users.map(user => {
                    return <li key={user.id}>
                        <span>{user.name} {user.email}</span>
                        <button onClick={() => {
                            onEditUser(user)
                        }} >Edit</button>
                        <button onClick={() => {
                            onDeleteUser(user.id)
                        }}>Delete</button>

                    </li>
                })
            }
        </ul>
    </div>
}

const UserForm = ({ onAddUser, onUpdateUser, editUser }) => {
    const [formData, setFormData] = useState({ name: '', email: '' })

    useEffect(() => {
        if (editUser) {
            //load form data from the list
            setFormData({ name: editUser.name, email: editUser.email })
        }
    }, [editUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editUser) {
            onUpdateUser(editUser.id, formData)
        } else {
            onAddUser(formData)
        }
        setFormData({ name: '', email: '' })

    }

    return <form onSubmit={handleSubmit}>
        <h2>{editUser ? 'Edit User' : 'Add User'}</h2>
        <div>
            <label>Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                required
            />
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    required
                />
            </div>
            <button type="submit">{editUser ? 'Update' : 'Add'}</button>
        </div>
    </form>
}

const Users = props => {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)

    async function fetchUsers() {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setUsers(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    const addUser = async (user) => {
        try {
            // const url = 'http://localhost:3000/users'
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            const newUser = await response.json()
            setUsers([...users, newUser])
        }
        catch (err) {
            console.log(err)
        }

    }
    //updateUser 
    const updateUser = async (id, updateUser) => {
        try {
            //const url = `http://localhost:3000/users/${id}`
            const response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateUser)
            })
            const updatedData = await response.json()
            console.log('update', updateUser)
            setUsers(users.map(user => (user.id === id ? updatedData : user)))
            setEditUser(null)
        }
        catch (err) {
            console.log(err)
        }
    }
    //delete user;
    const deleteUser = async (id) => {
        try {
            // const url = `http://localhost:3000/users/${id}`
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            })
            setUsers(users.filter(user => (user.id !== id)))
        }
        catch (err) {
            console.log(err)
        }
    }

    return <>
        <UserForm onAddUser={addUser} onUpdateUser={updateUser} editUser={editUser} />
        <UserList users={users} onEditUser={setEditUser} onDeleteUser={deleteUser} />
    </>

}

const App = () => {
    return <>
        <Users />
    </>
}

createRoot(document.getElementById('root')).render(<App />)
