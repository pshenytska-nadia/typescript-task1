interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(): Promise<string> {
  try {
    const response = await fetch(url);

    const result: Post[] = (await response.json()) as Post[];
    const res = result.map(
      (post) =>
        `<div>
        <h3 id="title">
        ${post.title}
        </h3>
        <p id="text">${post.body}</p>
            </div>`
    );
    return res[Math.floor(Math.random() * res.length - 1)];
  } catch (err) {
    console.log(err);
    return `Error occurred: ` + err;
  }
}

const button = document.getElementById("new-quote");

button?.addEventListener("click", () => {
  getPosts()
    .then((param) => updateView(param))
    .catch((err) => alert(err));
});

const updateView = (post: string) => {
  const box = document.getElementById("content-box");
  if (box) box.innerHTML = post;
};
