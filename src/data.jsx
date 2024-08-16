import { useEffect, useState } from "react";
import axios from "axios";


const Cats = () => {

    const [catsData , setCatsData] = useState([])

    useEffect(() => {
        
        const fetchData = async() => {
            try {
                
                // Make the API call using axios
                const response = await axios.get('https://api.unsplash.com/search/photos/',{
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.REACT_APP_API_KEY}`,
                    }
                })

                setCatsData(response.data)
    
            } catch (error) {
                console.log(error)
            }
        }
    
        // Call the async function
        fetchData()
        console.log(catsData)
    }, []) // Empty dependency array array to ensure this runs once on component mount

    return (
            {catsData}  

        
    )
}


export default Cats
