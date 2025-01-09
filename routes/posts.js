import express from 'express';
import {getPosts, getPostById, createPost, updatePost, deletePost} from '../controllers/postController.js';
const router = express.Router();

// Get All Posts
router.get('/', getPosts);

// Get Post by ID
router.get('/:id', getPostById);

// Create Post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

export default router;
