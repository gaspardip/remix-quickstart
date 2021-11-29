import { ActionFunction, redirect } from "remix";
import {
  getNewPostFromFormData,
  NewPostForm,
  validateNewPost,
} from "~/features/admin";
import { createPost } from "~/post";

export const action: ActionFunction = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1000));

  const formData = await request.formData();
  const newPost = getNewPostFromFormData(formData);
  const errors = validateNewPost(newPost);

  if (Object.keys(errors).length) {
    return errors;
  }

  await createPost(newPost);

  return redirect("/admin");
};

export default function NewPost() {
  return <NewPostForm submit="Create Post" submitting="Creating Post..." />;
}
