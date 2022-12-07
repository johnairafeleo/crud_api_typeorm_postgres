import { Request,Response } from "express";
import { AppDataSource } from "../data-source";
import { Post } from "../entity/Post";

//create
class PostController{
    static postPost = async (req:Request, res:Response)=>{
        const newPost = {
            title: req.body.title,
            content: req.body.content,
        };
        const post = AppDataSource.getRepository(Post).create(newPost);
        const result =await AppDataSource.getRepository(Post).save(post);
        return res.json(result);
    };
    static getPost =async (req:Request, res:Response) => {
        const result = await AppDataSource.getRepository(Post).find();
        return res.json(result);
    };
    static getOnePost = async (req: Request, res: Response) => {
        const post = await AppDataSource.getRepository(Post).findOneBy({id: Number(req.params.id),
        });
        return res.json(post);
      };

      static updatePost = async (req: Request, res: Response) => {
        const post = await AppDataSource.getRepository(Post).findOneBy({
            id: Number(req.params.id),
          });
        if (post) {
          AppDataSource.getRepository(Post).merge(post, req.body);
          const result = await AppDataSource.getRepository(Post).save(post);
          return res.json(result);
        }
        return res.json({ msg: "Post Not Found" });
      }; 
      static deletePost = async (req: Request, res: Response) => {
        const post = await AppDataSource.getRepository(Post).delete({
            id: Number(req.params.id),
          }); 
          return res.send(post);
        }
}
export default PostController