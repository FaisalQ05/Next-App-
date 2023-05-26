
const User = ({ user }) => {
    return (
        <>
            <h1 style={{ paddingTop:'1rem' }}>{user.name}</h1>
            <h4 style={{ fontStyle: 'italic',padding:'1rem' }}>{user.email}</h4>
        </>
    )
}

export default User