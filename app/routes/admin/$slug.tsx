import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { NewPostForm } from "~/features/admin";
import { getPost } from "~/post";
import { action } from "./new";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.slug, "expected params.slug");

  return getPost(params.slug);
};

export default function EditPost() {
  const post = useLoaderData();

  return (
    <NewPostForm
      submit="Edit Post"
      submitting="Editing Post..."
      defaultValues={post}
    />
  );
}

export { action };
