import { useEffect, useState } from "react"

export default function Home() {

    const [advisors, setAdvisors] = useState([]);
    const [authenticated, setAuthenticated] = useState(true);

    useEffect(() => {
        fetchAdvisors();
    }, []);

    const fetchAdvisors = async () => {
        const response = await fetch("http://localhost:8000/advisors", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        });
        const data = await response.json();
        console.log(data, response);

        if (response.status != "403")
            setAuthenticated(true);
        else
            setAuthenticated(false);

        if (response.ok)
            setAdvisors(data.data);
        else
            setAdvisors([]);
    };

    return (
        <div className="container p-4 my-4">
            <table className="table is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authenticated ?
                            advisors.length > 0 ?
                                advisors.map((advisor) => (
                                    <tr key={advisor.id}>
                                        <td>{advisor.id}</td>
                                        <td>{advisor.name}</td>
                                        <td>{advisor.info}</td>
                                    </tr>
                                )) :
                                <tr>
                                    <td>
                                        <h1 className="title">NO DATA</h1>
                                    </td>
                                </tr>
                            :
                            <tr>
                                <td>
                                    <h1 className="title">NOT AUTHORIZED</h1>
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>

    )
}
