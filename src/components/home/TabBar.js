import { Button } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function TabBar() {
    return (
        <>
            <hr />
            <Link to="/" >
                <Button>
                    Transactions
                </Button>
            </Link>
            <Link to="/wallet" >
                <Button>
                    Wallet
                </Button>
            </Link>
            <Link to="/account" >
                <Button>
                    Account
                </Button>
            </Link>
        </>
    )
}