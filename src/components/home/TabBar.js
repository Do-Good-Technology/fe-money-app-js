import { Button } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function TabBar() {
    return (
        <>
            <hr />
            <Link to="/home/transactions" >
                <Button>
                    Transactions
                </Button>
            </Link>
            <Link to="/home/wallet" >
                <Button>
                    Wallet
                </Button>
            </Link>
            <Link to="/home/account" >
                <Button>
                    Account
                </Button>
            </Link>
        </>
    )
}