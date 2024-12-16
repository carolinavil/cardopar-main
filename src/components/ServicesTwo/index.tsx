import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { IconArrowRight } from '@tabler/icons-react';
const Blog = () => {
  return (
    <section
      id="servicos"
      className="py-16 md:py-20 lg:py-10"
    >

{/* <div className="flex justify-around"  > */}
    <div className="max-w-[90vw] mx-auto"  >
      <SingleBlog blogs={blogData} />
      </div>
      {/* <a href="" target="_blank" rel="noopener noreferrer" className="text-base max-w-[170px] flex items-center justify-center font-medium leading-relaxed bg-primary text-white py-3 px-4 sm:px-8 rounded-xl sm:text-lg sm:leading-relaxed hover:bg-blue-900 hover:justify-between">
                  <span className="mr-2">Faer orçamento</span>
                  <IconArrowRight />
                </a> */}
    </section>
  );
};

export default Blog;
