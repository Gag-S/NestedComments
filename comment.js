const comment = [
    {
        id: 1,
        text: "This is the firs comment",
        parentID: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentID: 1,
                replies: [
                    {
                        id: 3,
                        text: "this is a nasted comment",
                        parentID: 2,
                        replies: [
                            {
                                id: 6,
                                text: "A deep nasted cmment!",
                                parentID:3,
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
        {
            id: 4,
            text: " This is an independent comment",
            parentID: null,
            replies: [
                {
                    id: 5,
                    text: "One more comment",
                    parentID: 4,
                    replies: []
                }
            ]
        },

    
];

const commentContainer = document.getElementById('comment-container');


function  gencomhtml(comment, nestynglevel){
    const commentDiv = document.createElement('div');
    commentDiv.style.marginLeft=`${nestynglevel*20}px`;
    commentDiv.classList.add('sections')
    commentDiv.textContent = comment.text;

    if(comment.replies && comment.replies.length > 0){
        comment.replies.forEach(reply => {
            const replyhtml = gencomhtml(reply, nestynglevel + 1);
            commentDiv.appendChild(replyhtml);
        });

    }

    return commentDiv;
}

function  displaycomments(Comment_Array, container, nestynglevel){
    Comment_Array.forEach(comment => { 
        const commenthtml=gencomhtml(comment,nestynglevel);
        container.appendChild(commenthtml);
    })
};

displaycomments(comment,commentContainer, 0);

console.log("The code is working");