import db from "../db/connection.js"
import Post from "../models/post.js"

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [
        { name: "Molly", content: "I thought about writing a blog about food for a long time because I make a lot of soup and thought I was pretty good at making soup. Then I realized I was lazy."},
        { name: "Amanda", content: "I wrote a travel blog when I lived in Russia to make it easier to keep in touch with relatives. My students ended up reading it more than my family, probably because it was interesting for them to get an outsider's perspetive."},
        { name: "Beth", content: "Beth is the name of the person who writes the Budget Bytes blog - a blog about economical recipes with which I was first acquainted in 2012. It think she's pretty good at one-pot dishes, but her baking recipes are awful."},
        { name: "Molly", content: "I wonder what people will think about blogs in twenty years. Will they be some quaint technological artifact, like chat rooms? Do chat rooms still exist?"},
        { name: "Chris", content: "My coworker wrote a blog about living more sustainably and nobody read it."},
        { name: "Chris", content: "He would share new posts on Facebook with vegan recipes that he spent a whole week developing and literally no one commented on them."}
    ]

    await Post.insertMany(posts)
    console.log("Created posts!")
}

const run = async () => {
    await main()
    db.close()
}

run()