
export const getAllStories = () => {
    const apiKey = '3709c47b921c4a5b92f4cf84b4035408'
    return fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.message}`);
        }
        return response.json();
    })
}

export const getGeneralStories = () => {
    const apiKey = '3709c47b921c4a5b92f4cf84b4035408'
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.message}`);
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });
}

export const getStories = (category) => {
    const apiKey = '3709c47b921c4a5b92f4cf84b4035408'
    return fetch(`https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            console.log('response under top headline, if not received, server error? check with chat', response)
            throw new Error(`${response.status}: ${response.message}`);
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });
}

