"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";
import styles from "./blog-posts.module.css";

export function BlogPosts({ filters = false }: { filters?: boolean }) {
  const [category, setCategory] = useState("All Articles");
  return (
    <section className={styles.section} id="legal-insights">
      <div className={styles.inner}>
        {!filters && (
          <header className={styles.header}>
            <div>
              <p>Resources & insights</p>
              <h2>Clear, practical answers for Texas families.</h2>
            </div>
            <Link href="/blog">
              All articles <ArrowIcon />
            </Link>
          </header>
        )}
        {filters && (
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter articles"
          >
            {["All Articles", "Family Law", "Personal Injury"].map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
        <div className={styles.grid}>
          {blogPosts
            .filter(
              (post) =>
                category === "All Articles" || post.category === category,
            )
            .map((post) => (
              <article className={styles.card} key={post.href} data-reveal>
                <Link
                  href={post.href}
                  className={styles.image}
                  data-scroll-image="16"
                >
                  <img src={post.image} alt="Hirani Law Firm" loading="lazy" />
                </Link>
                <div className={styles.meta}>
                  <span>{post.category}</span>
                  <time dateTime="2026-09-25">{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <h3>
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className={styles.description}>{post.description}</p>
                <Link className={styles.read} href={post.href}>
                  Read article{" "}
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
