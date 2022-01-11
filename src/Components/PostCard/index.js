import React from 'react'

// Importação material ui
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

// Importar icons
import Favorite from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import BookmarkIcon from '@material-ui/icons/Bookmark'

//Importação makeStyles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  caption: {
    marginRight: theme.spacing(1)
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding: '0 24px'
  },
  img: {
    height: 300,
    width: '100%'
  },
  favorite: {
    marginLeft: 'auto'
  }
}))

function PostCard({ post }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src="/" alt="Raphael Lima" />}
        title={<Typography variant="h6">Titulo do post</Typography>}
        subheader={
          <div className={classes.subHeader}>
            <Typography variant="caption" className={classes.caption}>
              Avaliado por
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              Raphael Lima
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              02/07/2021
            </Typography>
          </div>
        }
      />
      <CardContent padding={0}>
        <Typography variant="body1" className={classes.message}>
          Hashtag
        </Typography>
        <CardActionArea>
          <img
            src="../.././public/posts/post1.png"
            alt="iamgem do post"
            className={classes.img}
          />
        </CardActionArea>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <Favorite />
          <Typography
            style={{ cursor: 'pointer' }}
            color="textSecondary"
            variant="body2"
          >
            {'10'}
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <MessageIcon />
          <Typography
            className={classes.reactions}
            color="textSecondary"
            variant="body2"
          >
            {'10'}
          </Typography>
        </IconButton>

        <IconButton aria-label="favorite" className={classes.favorite}>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
