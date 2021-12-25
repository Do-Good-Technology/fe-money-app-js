import { useLocation } from "react-router-dom"

export default function Wallet() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <>
            you in Wallet
        </>
    )
}