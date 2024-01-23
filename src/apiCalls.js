

// export const getStories = (category) => {
//     const apiKey = '3709c47b921c4a5b92f4cf84b4035408'
//     return fetch(`https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${apiKey}`)
//     .then(response => {
//         if (!response.ok) {
//             //research this:
//             // if (response.status === 500) {
//             //   throw new Error('No stories found');
//             // }
//             console.log('response under top headline, if not received, server error? check with chat', response)
//             throw new Error(`${response.status}: ${response.message}`);
//         }
//         return response.json();
//     })
// }

