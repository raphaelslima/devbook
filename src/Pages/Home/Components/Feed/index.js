import React from 'react'

// Import makeStyle
import { makeStyles } from '@material-ui/core/styles'

// Import Component
import PostCard from '../../../../Components/PostCard'

const useStyle = makeStyles(theme => ({
  root: {}
}))

function Feed() {
  const posts = [
    { id: 1, description: 'Teste 1' },
    { id: 2, description: 'Teste 2' }
  ]

  const classes = useStyle()

  return (
    <div className={classes.root}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
