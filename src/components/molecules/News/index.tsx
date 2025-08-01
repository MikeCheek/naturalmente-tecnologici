import React, { useEffect, useState } from 'react'
import Heading from '../../atoms/Heading';
import * as styles from './index.module.scss';
import { Post, Media } from './index.types'; // Adjust the import path as necessary
import { useTranslation } from 'react-i18next';

const Index = () => {
  const [posts, setPosts] = useState<
    { id: number; title: string; excerpt: string; image: string; link: string }[] | null
  >(null);
  const { t } = useTranslation()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://syskracklab.cc/wp-json/wp/v2/posts');
        if (res.ok && res.status == 200) {
          const data: Post[] = await res.json();

          // Filter posts about "naturalmente tecnologici" or "NT"
          const filtered = data.filter(
            post =>
              post.title.rendered.toLowerCase().includes('naturalmente tecnologici') ||
              post.title.rendered.toLowerCase().includes('nt') ||
              post.excerpt.rendered.toLowerCase().includes('naturalmente tecnologici') ||
              post.excerpt.rendered.toLowerCase().includes('nt')
          ).slice(0, 4);

          // Fetch images for filtered posts
          const mediaIds = filtered.map(post => post.featured_media).filter(Boolean);
          const mediaRes = await fetch(
            `https://syskracklab.cc/wp-json/wp/v2/media?include=${mediaIds.join(',')}`
          );
          const mediaData: Media[] = await mediaRes.json();

          const postsWithImages = filtered.map(post => {
            const media = mediaData.find(m => m.id === post.featured_media);
            return {
              id: post.id,
              title: post.title.rendered.replace(/(<([^>]+)>)/gi, ''),
              excerpt: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '').slice(0, 80) + '...',
              image: media?.source_url || 'https://via.placeholder.com/400x200?text=No+Image',
              link: post.link,
            };
          });

          setPosts(postsWithImages);
        } else {
          setPosts([])
        }
      }
      catch {
        setPosts([])
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Heading
        text={t("News")}
      />
      <div className={styles.cards}>
        {
          posts == null ?
            <p>{t("LoadingNews")}</p>
            : posts.length == 0 ?
              <p>{t("NoNews")}</p> :
              posts.map(post => (
                <div
                  key={post.id}
                  className={styles.card}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: post.title }}>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: post.excerpt }}></span>
                  </div>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    Read more...
                  </a>
                </div>
              ))}
      </div>
    </div >
  );
}

export default Index;