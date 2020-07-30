/*필요한 tag: text area, comment span * 2, postbtn */

/*
필요한 요소들을 변수로 appendchild로 해도되나
createElement도 사용하면 됨

*/

/*
keydown(enter)시 함수 구현
*/

const commentbtn = document.getElementById("commentsubmitbtn")
const  commentInput = document.getElementById("feedCommentInput");

const plusComment = ()=>{  
    let  commentInput = document.getElementById("feedCommentInput");
    let feedCommentInput = document.getElementById("feedCommentInput").value;
    let feedCommentId = document.getElementById("exampleId").innerText;
    const commentDiv = document.getElementById("addComment");
    const addDivComment = document.createElement('div');
    const addSpanComment = document.createElement("span");
    const addSpanId = document.createElement("span");

    commentDiv.appendChild(addDivComment);
    addDivComment.appendChild(addSpanId);
    addDivComment.appendChild(addSpanComment);

    addSpanId.innerHTML = feedCommentId;
    addSpanComment.innerHTML = feedCommentInput;

    commentInput.value = ""
};

const plusCommentEnter = (e) => {
    if(e.keyCode === 13){
        console.log("what")
        plusComment();
    };
}


commentInput.addEventListener('keydown', plusCommentEnter);
commentbtn.addEventListener('click', plusComment);



const likebtn = document.getElementById("heart");
const himg = document.getElementById("heartimg");

const pushLikeBtn = () =>{
    const himg = document.getElementById("heartimg");
    if (himg.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"){
        himg.src = "img/redherat.jpeg"
        console.log("what");

        }
    else{
        himg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        console.log("wassup");
    }

}


himg.addEventListener("click", pushLikeBtn);

