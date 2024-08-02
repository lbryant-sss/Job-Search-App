import axios from "axios";
import { useEffect, useState } from "react";

const JobsApi: React.FC = () => {
    const [jobs, setJobs] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchJobs = async() => {
            try{
                /*https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs-v2 */
                const response = await axios.get('https://google.com', {
                    params: {
                        keywords: "golang",
                        locationId: "92000000",
                        datePosted: "anyTime",
                        sort: "mostRelevant",
                    },
                    headers: {
                        "x-rapidapi-key": "dd43d41386msh88c0a547bf4d045p140112jsnf7101a9f8521",
                        "x-rapidapi-host": "rapid-linkedin-jobs-api.p.rapidapi.com",
                    },
                    withCredentials: true,
                });
                const jobDetails = response.data.data
                setJobs(jobDetails);
            } catch (err){
                if (axios.isAxiosError(err)){
                    setError(err.message);
                } else if (err instanceof Error){
                    setError(err.message);
                } else {
                    setError("An uknown error occured");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div>Loadiing...</div>
    }
    if (error){
        return <div>Error: {error}</div>
    }

    return(
        <>
            <div>
                <h1>Job Listings</h1>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>{job.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default JobsApi;