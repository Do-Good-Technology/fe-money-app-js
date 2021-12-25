import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default function Account() {
    return (
        <>
            <Link to="/register">
                <Button>go to Register</Button>
            </Link>
            you are in account
        </>
    )
}