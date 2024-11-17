typescript
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private posts = []; // Stockage temporaire des posts

  create(createPostDto: CreatePostDto) {
    const newPost = { id: Date.now(), ...createPostDto };
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) return null;
    this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };
    return this.posts[postIndex];
  }

  remove(id: number) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) return null;
    return this.posts.splice(postIndex, 1);
  }
}
