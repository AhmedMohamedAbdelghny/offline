import { Router } from 'express'
import * as PC from './post.controller.js'

const router = Router()
router.post('/', PC.addPost)
router.put('/', PC.updatePost)
router.delete('/', PC.deletePost)
router.get('/', PC.getPosts)


export default router