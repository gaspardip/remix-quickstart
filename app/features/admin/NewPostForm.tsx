import { Form, useActionData, useTransition } from "remix";
import { NewPost } from "~/post";

interface NewPostFormProps {
  submit: string;
  submitting: string;
  defaultValues?: NewPost;
}

const defaultDefaultValues = {
  title: "",
  slug: "",
  markdown: "",
} as NewPost;

export const NewPostForm = ({
  submit,
  submitting,
  defaultValues = defaultDefaultValues,
}: NewPostFormProps) => {
  const errors = useActionData();
  const { submission } = useTransition();

  const { title, slug, markdown } = defaultValues;

  return (
    <Form method="post">
      <p>
        <label>
          Post Title: {errors?.title && <em>Title is required</em>}
          <input key={title} type="text" name="title" defaultValue={title} />
        </label>
      </p>
      <p>
        <label>
          Post Slug: {errors?.slug && <em>Slug is required</em>}
          <input key={slug} type="text" name="slug" defaultValue={slug} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>{" "}
        {errors?.markdown && <em>Markdown is required</em>}
        <br />
        <textarea
          key={markdown}
          rows={20}
          cols={80}
          name="markdown"
          defaultValue={markdown}
        />
      </p>
      <p>
        <button type="submit" disabled={Boolean(submission)}>
          {submission ? submitting : submit}
        </button>
      </p>
    </Form>
  );
};
