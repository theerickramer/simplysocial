# Simply Social

This is a demo using React/Redux/Next.

Redux store is initialized server-side using next-redux-wrapper with a "logged in" user and a few mock posts from this user and 2 others. Our user can add a new post or "like" posts on the homepage feed. 

Clicking on the user avatar in the navbar takes you to the profile page. Our user's feed is populated only with her own posts or posts that she liked, reflecting client-side state changes across the two pages. Unliking posts on the profile page works the same way. Clicking on the add post button in the navbar takes you back to the homepage and the unliked post will reflect the "liked" state from the profile page.

## To Run Locally
```git clone git@github.com:theerickramer/simplysocial.git```

```cd simplysocial```

```npm install``` or ```yarn install```

```npm run dev``` or ```yarn dev```