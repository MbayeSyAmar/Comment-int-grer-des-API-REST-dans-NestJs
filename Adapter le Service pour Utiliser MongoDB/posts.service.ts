import { Injectable } from '@nestjs/common';
   import { InjectModel } from '@nestjs/mongoose';
   import { Model } from 'mongoose';
   import { Post } from './post.schema';
   import { CreatePostDto } from './dto/create-post.dto';

   @Injectable()
   export class PostsService {
     constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

     async create(createPostDto: CreatePostDto): Promise<Post> {
       const createdPost = new this.postModel(createPostDto);
       return createdPost.save();
     }

     async findAll(): Promise<Post[]> {
       return this.postModel.find().exec();
     }

     async findOne(id: string): Promise<Post> {
       return this.postModel.findById(id).exec();
     }

     async update(id: string, updatePostDto: Partial<Post>): Promise<Post> {
       return this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
     }

     async remove(id: string): Promise<Post> {
       return this.postModel.findByIdAndRemove(id).exec();
     }
   }
   