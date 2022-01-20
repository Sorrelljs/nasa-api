import { useEffect, useState } from "react"
// Custom hooks have to start with the word use in the name. Example useFetch or useCustomHook

// url is the fetch url endpoint. passing it into the useFetch hook so we can reuse it
const useFetch = (url) => {

    /// *************** STATES *************************************

    // create a state for blogs and a function state to update
    const [data, setData] = useState(null)
    // create a state for loading and a function state to update
        const [isLoading, setIsLoading] = useState(true)
    // create a state for errors and function state to update 
        const [error, setError] = useState(null)

        
        
        useEffect(() => {
            
        //  ***** Clean Up Function ********
            // Below, we use the abortcontroller instance to cancel any unwanted requests
            //  (if a person skips between pages we want to cancel request)
        const abortCont = new AbortController()


        // useSetTimeOut to create a realistic 1 second time delay
        setTimeout(() =>{
        // fetch data from json fake db

        // assosiating abort controller with the fetch ** 
        fetch(url, { signal: abortCont.signal })
                // .then because it's a promise 
            .then(res =>{
                // check if res status is !NOT OK 
                if(!res.ok) {
                    throw Error( "Could not fetch data from that resource")
                }
            // IF OK. change format of the data to json
                return res.json()
            })
            // new promise with the data
                .then((data) => {
            // change the state of the blogs with the input of the data
                    setIsLoading(false)
                    // pass the data
                    setData(data)
                    // there is not a error, change the state of the error
                    setError(null)
                })
            .catch((err) =>{
                // if abort ERROR caused by us, don't update state
                if(err.name === "AbortError"){
                    console.log("fetch aborted")
                } else {
                    // if error STOP LOADING
                    setIsLoading(false)
                    // show loading message
                    setError(err.message)

                }
            })
                // here we pass in the time wanted before executing the code
        }, 1000)

        // clean up function / abort controller 
        return () => {abortCont.abort()}

    }, [url])

    return {data, isLoading, error}
}

export default useFetch;