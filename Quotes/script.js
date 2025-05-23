
let fetched_data = '';
let quotesdata = '';

const quotes = document.getElementById('quotes');
const author = document.getElementById('author');

const getrandomdata = () => {
    if (!fetched_data || !fetched_data.quotes || fetched_data.quotes.length === 0) {
        console.error("fetched_data is not ready or quotes array is empty.");
        return;
    }
    const randomnum = Math.floor(Math.random() * fetched_data.quotes.length);
    quotesdata = fetched_data.quotes[randomnum];

    quotes.innerText = `${quotesdata.quote}`;
    author.innerText = `${quotesdata.author}`;

    // console.log(fetched_data.quotes[randomnum].author);
    // console.log(fetched_data.quotes[randomnum].quote);
}
const getquotes = async () =>{
    const api = 'https://dummyjson.com/quotes' ; 
    try{
        let data = await fetch(api);
        fetched_data = await data.json();
        document.getElementById('btn').disabled = false; 
        // console.log(fetched_data.quotes[1].author);

    }
    catch(e){
        console.log(e);
    }
}

document.getElementById('btn').addEventListener('click',getrandomdata);
getquotes();