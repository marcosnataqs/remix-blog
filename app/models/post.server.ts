type Post = {
  slug: string;
  title: string;
  markdown?: string;
};

export async function getPosts(): Promise<Array<Post>> {
  return [
    {
      slug: 'my-first-post',
      title: 'My First Post',
      markdown: 'This is my first post!',
    },
    {
      slug: '90s-mixtape',
      title: 'A Mixtape I Made Just For You',
      markdown: 'This is a mixtape I made just for you!',
    },
  ];
}

export async function createPost(
  post: Pick<Post, 'slug' | 'title' | 'markdown'>,
): Promise<Post> {
  return {
    slug: post.slug,
    title: post.title,
    markdown: post.markdown,
  };
}
