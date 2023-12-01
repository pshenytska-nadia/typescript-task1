"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://jsonplaceholder.typicode.com/posts";
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const result = (yield response.json());
            const res = result.map((post) => `<div>
        <h3 id="title">
        ${post.title}
        </h3>
        <p id="text">${post.body}</p>
            </div>`);
            return res[Math.floor(Math.random() * res.length - 1)];
        }
        catch (err) {
            console.log(err);
            return `Error occurred: ` + err;
        }
    });
}
const button = document.getElementById("new-quote");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    getPosts()
        .then((param) => updateView(param))
        .catch((err) => alert(err));
});
const updateView = (post) => {
    const box = document.getElementById("content-box");
    if (box)
        box.innerHTML = post;
};
