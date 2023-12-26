/*khdhit l kelmet li y7othom l user bch nhotlou tssawer*/

const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async () => {
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify(
            {
                "prompt": inp.value,
                "n": 3,
                "size": "256x256"
            }
        )
    };

    // Correct the URL here
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);

    // Parse the response as JSON
    const data = await res.json();



console.log(data);
}


// Now you can call the getImage function when the button is clicked
