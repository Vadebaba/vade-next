import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";

/**
 * Props for `Bio`.
 */
export type BioProps = SliceComponentProps<Content.BioSlice>;

/**
 * Component for "Bio" Slices.
 */
const Bio = ({ slice }: BioProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-5 gap-y-6 md:grid-cols-[2fx, 1fx]">
        <Heading as="h2" size="md" className="col-start-1">
          {slice.primary.heading}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.description} />
        </div>

        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button}
        />

      </div>
    </Bounded>
  );
};

export default Bio;
