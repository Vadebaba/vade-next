import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";


/**
 * Props for `ContentInd`.
 */
export type ContentIndProps = SliceComponentProps<Content.ContentIndSlice>;

/**
 * Component for "ContentInd" Slices.
 */
const ContentInd = async ({ slice }: ContentIndProps): Promise<JSX.Element> => {

  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");
  const projects = await client.getAllByType("project");

  const ContentType = slice.primary.content_type || "Blog";

  const items = ContentType === "Blog" ? blogPosts : projects;




  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="md" className="mb-6">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-4">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}


      <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
    </Bounded>
  );
};

export default ContentInd;
