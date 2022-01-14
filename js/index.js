function getQoute() {
  let author = document.getElementById("author");
  let quote = document.getElementById("quote");

  //   alert(author);
  console.log(author);

  fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      author.innerText=(data.author);
      quote.innerText=(data.quote);
    })
    .catch((e) => {});
}
10;
