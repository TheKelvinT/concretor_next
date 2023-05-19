import React from "react";

type Props = { blogData: any };

export default function BlogDesc({ blogData }: Props) {
  return (
    <section>
      <div className="text-center mx-auto space-y-4 pb-8 text-main max-w-[665px] py-20 w-11/12">
        <h3 className="pb-4">{blogData.header}</h3>
        <p className="text-xs leading-5 text-sub">{blogData.blogDesc}</p>
      </div>
    </section>
  );
}
