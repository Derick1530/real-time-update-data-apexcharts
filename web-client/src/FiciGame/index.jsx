import { useEffect, useState } from "react"
import ApexChart from "../Chart";
import { sendRandomData } from "./UpdateFici";
const FiciGame = () => {

    const [bidData, setBidData] = useState();
    // Fetch data from the fake API
    const fetchFici = async () => {
        const response = await fetch('http://localhost:7000/data')
        response.json().then(data => {
            setBidData(data)
        })
    }

    // Call the fetchFici function every 2 second
    useEffect(() => {
        const timer = setInterval(() => {
            fetchFici()
        }, 2000);
        return () => { clearInterval(timer) }
    }, [])

    useEffect(() => {
        const timer2 = setInterval(() => { sendRandomData() }, 10000);
        return () => { clearInterval(timer2) }
    }, [])

    return (
        <ApexChart data={bidData} />
    )
}

export default FiciGame