let posts = [
    {
        id: 1,
        content: "First Post "
    },
    {
        id: 2,
        content: "Second Post"
    },
    {
        id: 3,
        content: "Thirth Post "
    },
    {
        id: 4,
        content: "Fourth Post"
    }
];

const listPosts = () => {
    posts.forEach( post => {
        console.log(`Post ID: ${post.id} Post Content: ${post.content} `)
    })
}

const addPost = (newPost) => {

    const NewPromise = new Promise((resolve, reject) => {
        const addedPost = posts.push(newPost)

        if (addedPost) {
            resolve()
        } else {
            reject("ERROR")
        }
    })

    return NewPromise;
}

async function showPosts() {
    
    try {
        const addingPost = await addPost({id: 5, content: "Fifth Post"})
        listPosts();
    } catch (err) {
        console.log(err);
    }
}

showPosts();