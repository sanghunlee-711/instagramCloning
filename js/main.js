/*필요한 tag: text area, comment span * 2, postbtn */

/*
필요한 요소들을 변수로 appendchild로 해도되나
createElement도 사용하면 됨

*/

/*
댓글 업로드시 textarea input value == default
keydown(enter)시 함수 구현
*/

const commentbtn = document.getElementById("commentsubmitbtn")

const plusComment = ()=>{    
    let feedCommentInput = document.getElementById("feedCommentInput").value;
    let feedCommentId = document.getElementById("exampleId").value
    const commentDiv = document.getElementById("addComment");
    const addDivComment = document.createElement('div');
    const addSpanComment = document.createElement("span");
    const addSpanId = document.createElement("span");

    commentDiv.appendChild(addDivComment);
    addDivComment.appendChild(addSpanId);
    addDivComment.appendChild(addSpanComment);

    addSpanId.innerHTML = feedCommentId;
    addSpanComment.innerHTML = feedCommentInput;
};

plusComment();

commentbtn.addEventListener('click', plusComment);



const heartimg = document.getElementById("heart");

const likebtn = () =>{
    let heartimg = document.getElementById("heart");
    const img = document.createElement("img");
    img.className = "heartimg"
}

heartimg.addEventListener("click", likebtn);