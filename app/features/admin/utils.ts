import { NewPost } from "~/post";

type NewPostErrors = Partial<Record<keyof NewPost, true>>;

export const validateNewPost = ({ title, slug, markdown }: NewPost) => {
  const errors = {} as NewPostErrors;

  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  return errors;
};

export const getNewPostFromFormData = (formData: FormData) => {
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  return { title, slug, markdown } as NewPost;
};
