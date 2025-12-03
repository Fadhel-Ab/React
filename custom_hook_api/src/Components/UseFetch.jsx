import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const FetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.status}`)
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                if (error.name === "AbortError")
                    console.log('Fetch aborted');
                else {
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };
        FetchData();

        // Cleanup function to cancel fetch on unmount
        return () => controller.abort();
    }, [url]);

    return { loading, data, error };

}

export default UseFetch

/* this one works but the above one is better
const UseFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError]=useState(null);

    useEffect(() => {
        fetch(url)
            .then(response  => response .json())
            .then(data => {
                setData(data);
                setLoading(false);
            }
            ).catch(error => {
                setError(error);
                setLoading(false);
            });

    },[url]);

    return { loading, data, error };
}
*/

