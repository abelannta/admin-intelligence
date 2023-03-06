import { useState } from "react";
import { NumberRounded } from "@/modules/components/number";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditSubMateriProps {
  index: number;
  deleteSlide: (e: any, index: number) => void;
  storingTitle: (index: number, value: string) => void;
  storingContent: (index: number, value: string) => void;
  title: string;
  content: string;
}

const EditSubMateriSection = (props: EditSubMateriProps) => {
  const { index, deleteSlide, storingTitle, storingContent, title, content } =
    props;

  return (
    <div className="bg-white rounded-xl p-5 mb-10">
      <div className="flex items-center">
        <NumberRounded number={index + 1} />
        <div className="flex justify-between w-full items-center">
          <h2 className="text-lg font-bold">{`Slide ${index + 1}`}</h2>
          <div className="flex gap-3">
            <button
              onClick={(e) => deleteSlide(e, index)}
              className="btn bg-danger border-none hover:bg-[#C30404]"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5">
        <div className="invisible">
          <NumberRounded number={1} />
        </div>
        <div className="w-full pb-20">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Judul</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={title}
              onChange={(e) => storingTitle(index, e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full h-56">
            <label className="label">
              <span className="label-text">Konten</span>
            </label>
            <ReactQuill
              theme="snow"
              className="h-full"
              value={content}
              onChange={(e) => storingContent(index, e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSubMateriSection;
